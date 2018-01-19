*this guide is outdated. Please use https://codeanywhere.com/login instead.*



# Alternative to Docker
An alteranative to uisng Docker for the Jekyll assignment is to instead use a cloud based integraded development environmet. This guide is a step-by-step guide to get the first assignment up and running in [Cloud9](https://c9.io).

## 1 - Sign up
Start of by visiting [Cloud9](https://c9.io) and sign up using your Github-account.

- Click the "Github icon on the start page"
- Sign in using your Github credentials

## 2 - Create a new workspace
Create a new Workspace for your assignmet

- Click "+ Create a new workspace"
- Name your Workspace to something suitable
- Add the address to your Github repo under "Clone from Git or Mercurial URL"(https://github.com/1dv022/xx222yy-examination-1.git)
- Choose the template "Ruby"
- Click "Create Workspace"

## 3 - Workspace is created
Your workspace is now created in the online editor. You will get access to a bash-terminal. The folder "workspace" referes to your root folder of your git repository. 

- Acquaint yourself with the environment

## 4 - Create your Jekyll
You should now install and create the Jekyll site in the "src"-folder. 

- Do: `gem install jekyll bundler`
- Do: `jekyll new src`

Make sure your site was created in the folder "src"

## 5 - Start working
We now need to start jekyll

- Do: `cd src`
- Do: `jekyll serve --host $IP --port $PORT --baseurl ''`

Your site is now published on a Cloud9-url. You should see a tooltip with a clickable link to your site. Click that link.

## 6 - Done
You can now start working in the src-folder with your files. Please Note: The files are all in the cloud based IDE Cloud 9 and can not be found on your computer. To push to Gihub, you do as you are used to using `git add`, `git commit` and `git push`
