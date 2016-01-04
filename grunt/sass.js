module.exports = {
	dev: {
		options: {
			style: 'expanded'
		},
		files: [
	        {
	            expand: true,
	            cwd: 'assets/scss',
	            src: ['guide.scss','goinvo-app.scss'],
	            dest: 'assets/css',
	            ext: '.css'
	        }
        ]
	}
}