param( 
  [Parameter(Mandatory = $true)] [string]$mainUrl
)

$metasFilePath = "./src/assets/metas.json"

# 2. PowerShell Script to Replace URL in Build Directory - With Command Line URL Input and Confirmation

# Define the directory to search
$directory = "./build/*"

# Define the templates
$mainTemplate = "##main-web-site-url##"
$titleTemplate = "<!-- ##title## -->"
$descriptionTemplate = "<!-- ##description## -->"
$canonicalTemplate = "<!-- ##canonical## -->"

# Get all files in the directory
$files = Get-ChildItem -Path $directory -Filter "*.html" -File -Recurse

if (!(Test-Path $metasFilePath)) {
  Write-Host "ERREUR : Le fichier metas.json est introuvable."
  exit 1
}

$datas = Get-Content $metasFilePath -Raw | ConvertFrom-Json

# Iterate through each file
foreach ($file in $files) {
  try{  
    $fileName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)

    # Chercher la meta correspondant à la clé
    $meta = $datas.metas | Where-Object { $_.key -eq $fileName }
    #Write-Host "Injection metas dans $($file.FullName) avec title: $($meta.title) et description: $($meta.description)"

    if ($meta -eq $null) {
      Write-Error "No meta found for $($fileName)"      
      exit 1
    }    
    
    # Read the file content
    $content = Get-Content -Path $file.FullName -Raw

    # Replace URLs
    $content = $content -replace [regex]::Escape($mainTemplate), $mainUrl    

    $mandatories = @(
        @{ name="title"; template=$titleTemplate; htmlTag="<title>{value}</title>" },
        @{ name="description"; template=$descriptionTemplate; htmlTag="<meta name='description' content='{value}'>" }
    )

    foreach ($property in $mandatories) {
        $value = $meta.($property.name)

        if ($null -eq $value -or "$value".Trim() -eq "") {
            Write-Error "$($property.name) property is empty for $fileName"
            exit 1
        }

        $rendered = $property.htmlTag.Replace("{value}", $value)
        $content = $content -replace [regex]::Escape($property.template), $rendered
    }

    if ($null -ne $meta.canonical) {
      $htmlTag = "<link rel='canonical' href='{value}' />"
      $render = $htmlTag.Replace("{value}", "https://$($mainUrl.TrimEnd('/'))/$($meta.canonical.TrimStart('/'))")
      $content = $content -replace [regex]::Escape($canonicalTemplate), $render
    }
    
    # Write the modified content back to the file
    Set-Content -Path $file.FullName -Value $content
  }
  catch {
    Write-Host "Error processing file $($file.FullName): $($_.Exception.Message)"
  }
}

Write-Host "URLs replacement complete."
