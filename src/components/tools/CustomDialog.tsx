import { Dialog } from 'primereact/dialog';
import croixAndine from '../../assets/croix-andine-turquoise-50x50.png';
import '../../scss/tools/CustomDialog.scss';

type CustomDialogProps = {
	title?: string;
	visible: boolean;
	className?: string;
	onHide?: () => void;
	children: React.ReactNode;
	style?: React.CSSProperties;
	maximizable?: boolean;
	modal?: boolean;
};

export const CustomDialog = ({
	title,
	visible,
	className,
	onHide,
	children,
	style,
	maximizable,
	modal = true,
}: CustomDialogProps) => {
	const dialogHeader = (
		<div className='inline-flex align-items-center justify-content-center gap-2'>
			<span className='logo-menu'>
				<img alt='logo' src={croixAndine} className='logo' />
			</span>
			<span className='font-bold white-space-nowrap'>
				{title || 'Partager'}
			</span>
		</div>
	);

	const closeDialog = () => {
		if (onHide) {
			onHide();
		}
	};

	return (
		<div className='customDialog'>
			<Dialog
				header={dialogHeader}
				visible={visible}
				onHide={closeDialog}
				maximizable={maximizable}
				modal={modal}
				className={className}
				style={{ width: '350px', ...(style ?? {}) }}
			>
				{children}
			</Dialog>
		</div>
	);
};

export default CustomDialog;
