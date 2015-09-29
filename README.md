angular-material-es6-ui
=======================

### Prerequisites

You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test the Web App. You must have node.js and
its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).

Also gulp: `npm install -g gulp` (with `sudo` if you are using Mac).

### Clone the project

Clone the repository using:

```
git clone https://github.com/shoe-stack-devs/angular-material-es6-ui.git
cd angular-material-es6-ui
```

### Install dependencies
* Install tools to manage and test the application: `npm install.`
* No need of `bower install`, `npm install` will take care of it.

### Use Gulp tasks

* `gulp clean & gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
* `gulp deploy` to push the dist to `gh-pages`

Note: in case you see something like:
> Error: Command failed: fatal: unable to read c6a8d370f3e95d9110eca4a03b704bd8940ca40b

Run:
`rm -Rf $(node -e "console.log(require('path').join(require('os').tmpdir(), 'tmpRepo'))")`

### ES6 features

https://github.com/lukehoban/es6features

### Style Guide

https://github.com/johnpapa/angular-styleguide

### Git Commit Guidelines

https://github.com/ajoslin/conventional-changelog/blob/master/CONVENTIONS.md
