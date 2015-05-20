

### Preperation
Read the book...
* Labby message
* Hello Ajax
* Web storage


#### Vagrant
* Install Virtual Box
* Install Vagrant
* mkdir, clone repro
* vagrant up
* vagrant ssh, cd /vagrant

#### Scaffolding
* gulp
* gulp serve


### The assignment

This examination will focus on asyncronous communication agains external RESTful web services through AJAX. It will also require knowlege of Web storage and security issues in the browser.

The backend (server-side code) of this assignment will be given and the students job is to write the client-side code. 

## Goal
After performing this assignment the students will fullfill the three goals descibed in the course syllabus:

* Describe a web browsers diffrent internal components and their interactions including browser security mechanisms
* Create web applications were JavaScript, HTML and CSS have clear roles and are clearly separated
* Store and with asyncronous communication, transfer data with for the task appropriate data format

This examination is worth 3 credit (3hp).

<<<<<<< Local Changes
## Notice 
Before starting out this assigment check out our assignment policy document at: *LÄNK HÄR*
=======

###Strict mode
All javascript-files used in this assigment should use ES5 strict-mode. 

###Notice - replace with link to policy document
To pass this exam all your code should follow the standard provided by the course leaders. When you check in and release yor code a validation will be performed to check your code. It will validate agains this file:
LÄNK TILL js-hint

Any attemt to plagiarism or other way of cheating will be reported to the university discipline board
>>>>>>> External Changes


## About the assignment
The student should create an application in which the user can answer, by the server given, quiz-questions. Do the user give the correct answer will the application take the user to the next question. Does the user give the wrong answer should the application give the user an oppertunity to answer again.

The application should behave as an Single Page Application (SPA).

### The questions and answers
The questions will be public to the client application through a RESTful Web API. The first question (startpoint of the application) is at the URL:
*LÄNK HÄR* 
You can find the source code of the server at the GitHub repo:
https://github.com/thajo/AjaxAssignment, that is if you are intressted in running the server by you self [optional, but good training].

The questions can be of diffrent types. There are three types of questions:
* Text
* Multi choice - with one correct answer
* Multi choice - with one or more correct answers
The response of the API will tell you what kind of question you should show to the user. See application workflow below:
*LÄGG TILL BILD*


### The Web Storage
You should use a suiteble web storage solution that store references where the client is in the quiz round. The client should be able to close the browser for a while (could be a system crash) and still continue to play from where she/he was.
 
## Getting started
The first thing to do is to get a grip of the API. You can test the API in the browser by writing down the first URL and study the result you getting back. In the result you should be able to get the information you need to get on in the application flow.
By studing the result you should be able to get a clue about which HTTP-methods to use, how to send back the answers the user is providing ect.
Don't forget to check your code against our code standard and don't forget to commit your code often. See the policy document.


### Finishing up
Push to GH
Publish on digital ocean or other web host at your service


## Tips
Before you start writing code think about:
* How to present the question the user should answer?
* How to get the answer from the user and how to send it back to the server?
* In which data format should the answer be send?

Also consider the following:
Write your application so generall as possible so it can handle diffrent quizes whit diffrent start-URLs. Your code should be able to handle quiz-round with diffrent numbers of questions. Also consider your error handling. And never trust data from a external server...

Good luck!



## The examination
During the examination you should be able to:
* Explain your code and structure of the application
* Explain what AJAX is and how it's used in web applications
* Explain what the DOM is nad how you can manipulate
* Explain security issues that occur in the assignment