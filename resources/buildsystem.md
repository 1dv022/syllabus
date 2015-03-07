Why use a build system?

The build system will do repetative tasks for us and build our system for production so that we can focus on writing code, not copying and pasting files together. 

In this course we will use a build system for the following tasks:
* Checking our javascript to avoid errors and bugs (Using JSHint) 
* Concatinating and modularizing our javascript to make page load faster and avoid  (Using Browserify)
* Uglyfing our javascript to make page load faster (minify/compress)
* Compiling scss to css (Using SASS). Using SASS to write better css faster.
* Setting up a local web server used to preview.
* Live reload of our preview

The most popular build systems are Grunt and Gulp but there are many more. In this course gulp will be the default option but you are free to use another build system of your choise. Have in mind though, all instructions will be written for gulp and gulp is the choise in the prebuilt boilerplates for the course.

Video: http://youtu.be/XJ5F-Auhato

There are some critizism against using build systems like grunt and gulp. In many cases the node package manager, npm, can be used instead of gulp/grunt specifik plugins. However, being able to use buildsystems are common knowlege and someting you should have tried before using a package manager as npm to do the job. Some things are mutch easier to do using a build system.

[Article on the subject why not to use Grunt/Gulp](http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/)
[A guide to use npm instead of gulp/grunt](Guide to NPM: )http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)

## Gulp
Learning a specific buildsystem like gulp is not an objective for the course. We will use gulp to help us focus on the course objectives and let gulp do the boring, repetative tasks. 