## Before you start

<iframe width="560" height="315" src="https://www.youtube.com/embed/2l8EpHhPDOk" frameborder="0" allowfullscreen></iframe>


## Getting started
Exercises are not mandantory and will not be corrected by the corse management. However, you will have a better chance of doing the examination assignments in the course if you first do the exercises. We higly recommend you to complete as many exercises as possible.

You have a git repo on Github named "xx222yy-exercise" (*Please Note*: "exercise" not "exercises") where xx222yy is your lnu-username. You can use this repo for the exercises in the course. Start of by cloning the repo to your computer:
* `git clone https://github.com/1dv022/xx222yy-exercise.git`

Now you can pull our boilerplate repo into your repo:
* `git pull https://github.com/1dv022/exercise-boilerplate.git`

You are now ready to start with the exercises.

## The exercises

The exercises are divided into seperate levels; A, B and C where C is the most difficult level. You should always strive to complete at least level A and B.

1. Add the exercise/exercises you want to work on by doing a 
 * `git subtree add --prefix={reponame} --squash {link to repo} master`. For example, to start with "tiny-tunes do": 
 * `git subtree add --prefix=tiny-tunes --squash https://github.com/CS-LNU-Learning-Objects/exercise-tiny-tunes.git master`
2. Navigate to the folder created. `cd tiny-tunes`
3. Do a `npm install` to install the exercise dependencies. 
2. Do `npm start`. The following will happen:
  * A process will start watching files in the folder `src/` for changes. When a change is detected the file will be "compiled" in to a virtual file called "build.js". A web server is started which will serve your browser with the resources needed.
3. Browse to [http://localhost:4000](http://localhost:4000) to locate the application.

You should have multiple terminals open at the same time. One running the `npm start` and watching files and one terminal to do tasks like committing and pushing to GitHub. 

## Local IDE
1. Start up your IDE (Visual Studio Code) and open a new project pointing to the exercise or your exercise-folder. 
2. Start editing your site in the `src`-folder. When you save a change look at the terminal watching your files. You should see that the files are rebuilt. 
3. The webpage at [http://localhost:4000](http://localhost:4000) should be automaticly reloaded. If not, refresh the browser.
4. When you debug your application you should do this in the browser, not in the IDE. A simple method is to write `debugger` in your js-source code where you want to stop the debugger and refresh the browser. Sourcemapping will make sure that linenumbers in the compiled-code matches your local version.

***

## Tiny Tunes
Get started by watchning this recording:

* [Hello World](https://youtu.be/6hulSdvn3Mg)

|  |  |
| ------------- | ------------- |
|  Repo | [exercise-tiny-tunes](https://github.com/CS-LNU-Learning-Objects/exercise-tiny-tunes) |
| Level  | A  |
| Study week  | 2-3 |
| Lectures| <= L03/L04 |
| Keywords| Getting started, DOM, Events, Templates, Document Fragment|
| Solutions | [Code](#)<br>[Recording](https://youtu.be/62MHJjvvur4)|

## Temple of DOM
|  |  |
| ------------- | ------------- |
|  Repo | [exercise-temple-of-dom](https://github.com/CS-LNU-Learning-Objects/exercise-temple-of-dom) |
| Level  | B  |
| Study week  | 2-3 |
| Lectures| <= L03 |
| Keywords| DOM, recursive, templates|
| Readme | [Instructions](https://github.com/CS-LNU-Learning-Objects/exercise-temple-of-dom/blob/master/README.md)|

## LNU it
|  |  |
| ------------- | ------------- |
|  Repo | [exercise-lnu-it](https://github.com/CS-LNU-Learning-Objects/exercise-lnu-it) |
| Level  | A  |
| Study week  | 2-3 |
| Lectures| <= L04 |
| Keywords| Getting started, DOM, Style manipulation|
| Readme | [Instructions](https://github.com/CS-LNU-Learning-Objects/exercise-lnu-it/blob/master/README.md)|

## BartBoard
|  |  |
| ------------- | ------------- |
|  Repo | [exercise-bartboard](https://github.com/CS-LNU-Learning-Objects/exercise-bartboard) |
| Level  | A  |
| Study week  | 2-3 |
| Lectures| <= L04 |
| Keywords| DOM, event, timers|
| Readme | [Instructions](https://github.com/1dv022/exercise/blob/bartboard/exercise/bartboard/README.md)|
| Solutions | Code<br>[Extended recording](https://youtu.be/I7HJwo98EQE)|



## Click Game
|  |  |
| ------------- | ------------- |
|  Repo | [exercise-click-game](https://github.com/CS-LNU-Learning-Objects/exercise-click-game) |
| Level  | B  |
| Study week  | 2-3 |
| Lectures| <= L03 |
| Keywords| DOM, style manipulation, event, timers|
| Readme | [Instructions](https://github.com/CS-LNU-Learning-Objects/exercise-click-game/blob/master/README.md)|

## Memory Game
|  |  |
| ------------- | ------------- |
|  Repo | [exercise-memory-game](https://github.com/CS-LNU-Learning-Objects/exercise-memory-game) |
| Level  | B  |
| Study week  | 2-3 |
| Lectures| <= L03 |
| Keywords| DOM, style manipulation, event, timers|
| Readme | [Instructions](https://github.com/1dv022/exercise/blob/memory/exercise/memory/README.md)|
| Solutions | Code<br>[Extended recording](https://youtu.be/8Mt0Buk3rK0)|

