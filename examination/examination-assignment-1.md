This examination is worth 1 credit (1hp) and will test the following objective:
* After completing the course the student should be able to work with CSS preprocessors and static site generators.

## Practical assignment

### Deadline and submission
* Deadline: 20/11 08.00
* Submit: Submit your assignment by doing a release on GitHub named "v1.0". In case of changes after a released version please use incremental version numbers, i.e. "v1.1", "v1.22 etc. Also make sure your site is live on Github-pages.

### Preparation

Make sure you have followed the "Getting started guide". If so you should already have...
* registered for the course
* correct information in your [Profile information](https://coursepress.lnu.se/profile/)
* made sure you have an `<YOUR USERNAME>-examination-1>` repo on [Github/1dv022](http://github.com/1dv022)
* a local installation of git/git bash
* installed a IDE of your choice
* installed Node.js (together with npm)
* installed Docker(https://www.docker.com/) (Latest Stable)


### Installing and running Jekyll

* ~~[Recorded demo [Swedish]](https://youtu.be/KT8y18TMmFE)~~ Will be replaced

1. `git clone` your private repo named `<YOUR USERNAME>-examination-1` found in [Github/1dv022](http://github.com/1dv022) into a suitable folder on your computer.
2. `cd <YOUR USERNAME>-examination-1`into the folder
3. `git pull https://github.com/1dv022/jekyll-boilerplate.git` to get a docker-compose template for your jekyll project. (This step is optional. If you want, you can run Jekyll in other ways if you like.)
4. do a `git push` to push your repo to Github
5. do a `npm install` to create a new Jekyll site.
6. do a `npm start` to start the web server with your site.
7. visit [http://localhost:4000](http://localhost:4000) to see your site

Please refer to [Boilerplate README.md](https://github.com/1dv022/jekyll-boilerplate/blob/master/README.md) for more indepth information.

You should now be up and running. Remember to do a commit after every isolated feature/bug/addition/etc.

### The assignment
In this assignment you are supposed to produce a web site that will be the front for your published assignments in this course and possibly in courses to come. The source code together with vagrant files etc. will be version controlled using git and pushed to the private `<YOUR USERNAME>-examination-1`-repo in 1dv022. However, the published site will be made **public** using your github-account and [github-pages](https://pages.github.com/).

#### Requirements

* Well designed - Well, what is well designed? We should at least see that you
put some effort in your design and not just using the standard stuff

* All CSS should be generated from a CSS preprocessor

* Your site should have multiple pages, at least one where you present
your self, your interest and so on and one blog page where you can present
blog posts (more than one)

* Visitors should be able to comment on your posts (for instance you could use
Disqus)

* Your site should have a [robots.txt](http://www.robotstxt.org/) with your preferred configuration.

* Your site should have a [humans.txt](http://humanstxt.org/) with your preferred configuration.

* You should use [open graph](http://ogp.me/) for easy sharing on social media.
You should at least use "title", "url", "type" and "image". You can check if it is
working by sharing your site on for instance Facebook or Twitter.

#### Blog post

Your blog page should have multiple posts (Swedish or English) and atleast one post where you reflects over the following:

* What do you think of pre-compiling your CSS?
  * Compare to regular CSS
  * Which techniques did you use?
  * Pros and cons?

* What do you think of static site generators?
  * What type of projects are they suitable for?

* What is robots.txt and how have you configure it for your site?

* What is humans.txt and how have you configure it for your site?

* How did you implements comments to blog posts

* What is Open Graph and how do you make use of it?

### Finishing up

* [Recorded demo [Swedish]](https://youtu.be/rV9VrCMOzzI)

When you feeling ready with your site it's time to publish it on [GitHub Pages](https://pages.github.com/). GitHub Pages uses Jekyll by default so we can push the jekyll-files. **OBS! The site you will publish is going to be public.** Do the following.

1. Create a [new empty public GitHub repositories](https://github.com/new) and name it in the form `<YOUR GITHUB USERNAME>.github.io`
2. In your examination-repo add a new remote named "gh-pages" that points to your newly created github.io-repo run:
```git remote add gh-pages https://github.com/username/username.github.io```
3. Check that you now have two remotes, one (origin) that points to your examination-repo and one (gh-pages) that points to your own github.io-repo run:
```git remote -v```
4. To push your site in a correct way we need to push just our src-directory (the place where the jekyll-site is) and not the whole examination-repo (will include vagrant-files and other stuff) we have to use the "git subtree"-command run:
```git subtree push --prefix src  gh-pages master --squash```
5. Check your github.io-repo and use your browser to watch your site on: `https://<YOUR GITHUB USERNAME>.github.io`

