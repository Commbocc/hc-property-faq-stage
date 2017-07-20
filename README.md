# Property FAQ

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deployment

Push the distribution directory in source control to GitHub Pages.

``` bash
# push to GitHub Pages
npm run push-gh

# or staging
npm run push-gh-stage
```

> This is shorthand for `git subtree push --prefix dist github gh-pages` where `dist` is the directory to push, `github` is the remote name, and `gh-pages` is the branch. This can be modified in the `package.json` file.

Place the following in your HTML file:

``` html
<div id="app"></div>
<!-- standalone questions -->
<!-- <div id="app" data-selected-question="hauler"></div> -->

<!-- assumes Bootstrap 3 style included -->
<link rel="stylesheet" href="https://js.arcgis.com/4.3/esri/css/main.css">
<script src="https://js.arcgis.com/4.3/" data-esri-loader="loaded"></script>
<link rel="stylesheet" href="./dist/static/css/app.css">
<script type="text/javascript" src="./dist/static/js/manifest.js"></script>
<script type="text/javascript" src="./dist/static/js/vendor.js"></script>
<script type="text/javascript" src="./dist/static/js/app.js"></script>
```
