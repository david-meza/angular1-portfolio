[![Stories in Ready](https://badge.waffle.io/david-meza/angular1-portfolio.png?label=ready&title=Ready)](https://waffle.io/david-meza/angular1-portfolio)
# Angular 1 Portfolio

My portfolio using Angular 1 and Angular Material

## Demo

* david-meza.com - [Open](http://david-meza.com)

## Build & development

To install dependencies run `npm install` and `bower install`.

The running of tasks for this application was automated using Grunt. 

To produce a distributable/minified version of the app run `grunt build`.

To preview the application in development in a local live server run `grunt serve`.

## Using the project

#### Changing the domain you push to

By default the project is set to push to my site (david-meza.com) with every `grunt build`. To change this behavior, simply go to `Gruntfile.js` and edit the `surge` task. For more information visit [the official package documentation](https://www.npmjs.com/package/grunt-surge).
