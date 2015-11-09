Why use a build system?

The build system will do repetitive tasks for us and build our system for production so that we can focus on writing code, not copying and pasting files together. 

In this course we will use a build system for the following tasks:
* Checking our Javascript to avoid errors and bugs (Using JSHint and JSCS) 
* Concatenating and modularizing our javascript to make pages load faster and avoid collissions (Using Minify(?) and Browserify)
* Uglifying our Javascript to make pages load faster (minify/compress)
* Compiling SCSS to CSS (Using SASS). Using SASS to write better CSS faster.
* Setting up a local web server used to preview.
* Live reload of our preview

The most popular build systems are Grunt and Gulp but there are many more. In this course Gulp will be the default option but you are free to use another build system of your choice. Keep in mind though, all instructions will be written for Gulp and Gulp is the choice in the prebuilt boilerplates for the course.

Video: http://youtu.be/XJ5F-Auhato

There is some criticism against using build systems like Grunt and Gulp. In many cases the Node package manager, npm, can be used instead of Gulp/Grunt specific plugins. However, being able to use build systems are common skills and something you should have tried before using a package manager like npm to do the job. Some things are much easier to do using a build system.

[Article on the subject why not to use Grunt/Gulp](http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/)
[A guide to use npm instead of gulp/grunt](Guide to NPM: )http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)

## Gulp
Learning a specific buildsystem like gulp is not an objective for the course. We will use gulp to help us focus on the course objectives and let gulp do the boring, repetitive tasks. 
