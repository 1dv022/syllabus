## Alternative to Docker
An alteranative to uisng Docker for the Jekyll assignment is to instead use a cloud based integraded development environmet. This guide is a step-by-step guide to get the first assignment up and running in [Codeanywhere](https://codeanywhere.com/login).

### 1 - Sign up
Start of by visiting [Codeanywhere](https://codeanywhere.com/login) and sign in using your Github-account.

- Click the "Github icon on the start page"
- Sign in using your Github credentials
- Make sure access is granted to the Organization "1dv022"
- A verification mail is sent to your mail. Make sure to verify your Codeanywhere account before you continue
  
### 2 - Create a new workspace
Create a new Project 

- Create a "New Project..."
- Name your Project to something suitable
- Choose "Github" as the base for the project and choose your examination repo from the list (https://github.com/1dv022/xx222yy-examination-1.git)
- Click "Next"
- Search for "Ruby" when asked to choose container. Choose Ruby on Ubuntu from the list
- Click "Create"

### 3 - Workspace is created
Your container is now created in the online editor (could take a couple of minutes). You will get access to a bash-terminal. The folder "workspace" referes to your root folder of your git repository. 

- Acquaint yourself with the environment

- You have a welcome page with the url on which your site is publiced during the development process

### 4 - Create your Jekyll
You should now install and create the Jekyll site in the "src"-folder. 

- Do: `gem install jekyll bundler`
- Do: `jekyll new src`

Make sure your site was created in the folder "src"

### 5 - Start working
We now need to start jekyll

- Do: `cd src`
- Do: `jekyll serve --host 0.0.0.0 --port 3000`

Your site is now published on a Codeanywhere-url. That is the link that you find in the tab named as your project. Something like (https://yourprojectname-yourusername399062.codeanyapp.com/)

### 6 - Done
You can now start working in the src-folder with your files. Please Note: The files are all in the cloud based IDE and can not be found on your computer. To push to Gihub, you do as you are used to using `git add`, `git commit` and `git push`
