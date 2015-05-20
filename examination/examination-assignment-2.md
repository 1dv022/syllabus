## About the assignment

This examining assignment will focus on asyncronous communication agains external RESTful web services through AJAX. It will also require knowlege of Web storage and security issues in the browser to solve the problem discribed.

The backend (the API) of this assignment will be given and the your job is to write the client-side code. 

## Goal
After performing this assignment the students will fullfill the three goals descibed in the course syllabus:

* Describe a web browsers diffrent internal components and their interactions including browser security mechanisms
* Create web applications were JavaScript, HTML and CSS have clear roles and are clearly separated
* Store and with asyncronous communication, transfer data with for the task appropriate data format

This examination is worth 3 credit (3hp).

## Notice 
Before starting out this assigment check out our assignment policy document at: LÄNK HÄR


## About the assignment
You should create an client application written in vanilla JavaScript in which the user can answer, by the server given, quiz-questions. Do the user give the correct answer will the application take the user to the next question until there are no more questions. Does the user give the wrong answer should the application give the user an opportunity to answer again.

The application should behave as an Single Page Application (SPA).

The questions will be public to the client application through a RESTful Web API.

The first question (startpoint of the application) is at the URL: 
You can find the source code of the server at the GitHub repo:
https://github.com/thajo/AjaxAssignment
that is if you are intressted in running the server by you self.


## Getting started
The first thing to do is to get a grip of the API. You can test the API in the browser by writing down the first URL and study the result you getting back.
In the result you should be able to get the information you need to get on in the application flow.
By studing the result you should be able to get a clue about which HTTP-methods to use, how to send back the answers the user is providing ect.


## Tips
Before you start writing code think about:
* How to present the question the user should answer?
* How to get the answer from the user and how to send it back to the server?
* In which data format should the answer be send?

Also consider the following:
Write your application so generall as possible so it can handle changes in the API like new questions, changed questions and so on. The first questin will always have the number 1.

Good luck!


### Finishing up
Push to GH
Publish on digital ocean or other web host at your service

## The examination
During the examination you should be able to:
* Explain your code and structure of the application
* Explain what AJAX is and how it's used in web applications
* Explain what the DOM is nad how you can manipulate
* Explain security issues that occur in the assignment