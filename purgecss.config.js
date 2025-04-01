//https://github.com/FullHuman/purgecss/issues/1326
module.exports = {
	content: ['build/assets/*.js'],
	css: ['build/assets/*.css'],
	output: 'build/assets/',
	safelist: [/^p-toast/, 'p-ripple-disabled'],
};
