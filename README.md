# Time Tracker

A Vue.js time-tracker based on a  [tutorial](https://scotch.io/tutorials/build-a-single-page-time-tracking-app-with-vue-js-part-ii) on scotch.io.

This is using VueJS 2.0.1 whereas the Tutorial was using an earlier version, so
various issues and deprecations are fixed:

* Correct 2.0.x use of Vue Router.
* Updated v-link to 2.0.x router-link syntax.
* Deprecated this.$dispatch replaced with Vuex state manager solution.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
