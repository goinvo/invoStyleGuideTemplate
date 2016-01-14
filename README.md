Invo's Reusable Style Guide
==========

###First steps:

1. Download a zip of this repo to start your style guide project and extract it to your project repo.
2. If you don't have it already, install node.js, and make sure it's added to your system path. https://nodejs.org/en/
3. Open this directory in a shell
4. Type npm install, and the tools listed in the package.json will be installed your project. This package includes:
* "express": "^4.13.3",
* "grunt": "^0.4.5",
* "grunt-concurrent": "^2.0.3",
* "grunt-contrib-watch": "^0.6.1",
* "grunt-sass": "^1.0.0",
* "jit-grunt": "^0.9.1",
* "load-grunt-config": "^0.17.2",
* "ssi": "^0.3.0",
* "time-grunt": "^1.2.1"
5.   
6. Now you're ready to start your project. Open two shells, and type 'node server' in one, and 'grunt' in the other. 'Node server' will allow you to view your site at 'http://localhost:1337/'. 'Grunt' will watch your scss directory for changes.