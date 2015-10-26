This examination is worth 1 credit (1hp) and will test the following objective:
* After completing the course the student should be able to work with CSS preprocessors and static site generators.

## Practical assignment

### Preperation

Make sure you have followed the "Getting started guide". If so you should already have...
* registrered for the course
* correct information in your [Profile information](https://coursepress.lnu.se/kurs/klientbaserad-webbprogrammering/profile-information/)
* made sure you have an `<YOUR USERNAME>-examination-1` repo on [Github/1dv022](http://github.com/1dv022)
* a local installation of git/git bash
* installed a IDE of your choise
* installed Virtual Box
* installed Vagrant

### Installing jekyll and tools using vagrant

1. `git clone` your private repo named `<YOUR USERNAME>-examination-1`found in [Github/1dv022](http://github.com/1dv022) into a suitable folder on your computer. 
2. `cd <YOUR USERNAME>-examination-1`into the folder
3. `git pull https://github.com/1dv022/jekyll-boilerplate.git` to get a vagrant template for your jekyll project. (This step is optional. If you want, you can create your own vagrant build from scratch. Note that the instructions in this document no longer will apply if you do, you are on your own.)
4. do a `git add .` and git `git commit -m "Initial"` followed by `git push`
5. follow the instructions in the [README.md file of the vagrant-boilerplate](https://github.com/1dv022/jekyll-boilerplate/blob/master/README.md). Skip step 1 in the guide since you did that under 3.

You should now be up and running. Remember to do a commit after every isolated feature/bug/addition/etc.

### The assignment
In this assignment you are supposed to produce a web site that will be the front for your published assignments in this course and possibly in courses to come. The sourcecode togehter with vagrant files etc. will be version controlled using git and pushed to the private `<YOUR USERNAME>-examination-1`-repo in 1dv022. However, the published site will be made **public** using your github-account and [github-pages](https://pages.github.com/).

Requirements:
* Well designed
* Single page or multiple pages
* Should have a Blog in which you will publish one 
* Using bootstrap preferable
* all "css" written in scss


### Other

####Robots.txt
No index?

### Finishing up
When you feeling ready with your site it's time to publish it on [GitHub Pages](https://pages.github.com/). GitHub Pages uses jekyll by default so we can push the jekyll-files. **OBS! The site you will publish is going to be public.** Do the following.

1. Create a [new empty public GitHub repositorie](https://github.com/new) and name it in the form your-github-username.github.io
2. In your examination-repo add a new remote named "gh-pages" that points to your newly created github.io-repo run:
```git remote add gh-pages https://github.com/username/username.github.io```
3. Check that you now have two remotes, one (origin) that points to your examination-repo and one (gh-pages) that points to your own github.io-repo run: 
```git remote -v```
4. To push your site in a correct way we need to push just our src-directory (the place where the jekyll-site is) and not the whole examination-repo (will include vagrant-files and other stuff) we have to use the "git subtree"-command run: 
```git subtree push --prefix src  gh-pages master --squash```
5. Check your github.io-repo and use your browser to watch your site on: your-github-username.github.io

## The oral hearing
During the examination you should be able to:
* Explain what CSS Processors are and the describe features like variables, mixins, imports.
* Explain what Static Sites generators are and how you have used it in the assignment.
* Explain the building blocks of your application
