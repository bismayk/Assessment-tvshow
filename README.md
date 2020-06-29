# Tv Show Application
This is open TV shows application that allows users to view list of all TV shows and their all details. This application usage data from "TV Maza" through API "http://www.tvmaze.com/".The user can 
use the search option to search for any particular show. On clicking the desired show, the user can view 
the details pertending to the particular show.

Note: If you face CORS issue, please switch to open network.

## Installations
## Vue CLI
```
Vue Js is a progressive framework with a small size of around ~21kb , easy to understand and scale large 
application. For more informatyion refer the following pages.

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Installation of vue/cli
Note: You need administrator privileges to execute these unless npm was installed on your system through a 
Node.js version manager.

```
npm install -g @vue/cli

```
Note: You can check you have the right version with this command:
vue --version

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Project Guidelines
* This application is using camelCase naming conventions for Method Naming, variable, object declaration,
Example : getResults() , tvShowName etc..

* This application is using small caase for Folder Naming Convention, Example : views, components.
and for files Pascal case for files exaple: DashBoard.vue, Details.vue

* Vuex Standards: 
    * mutations: All Caps example: ALL_TV_SHOWS
    * actions: CamelCase example: getTvShowDetailsById 
    * state: CamelCase ex: tvShow

### Project dependencies and devDependencies ------------
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios

2. Vuex:
   Vuex is a state management pattern + library for Vue.js.
   Please refer below url for more details:
   https://vuex.vuejs.org/   


3. vuetify:
   Vuetify is a Vue UI Library with beautifully handcrafted Material Components. we can build responsive, 
   mobile-first, and ARIA accessible projects on the web using Vue.js and the world's most popular 
   front-end CSS library — Material Design Component Framework. Release cadence : Weekly
   Please refer below url for more details:
   https://vuetifyjs.com/en/getting-started/quick-start

4. @vue/cli-plugin-unit-jest:
   Run unit tests with Jest. Jest as a JS unit testing framework and runner.
   Please refer below url for more details:
   https://jestjs.io/


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
