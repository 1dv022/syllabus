As a developer you will be sourounded by a lot of tools and you will probebly be working with many different "stacks". To install all of those tools, servers, data-management systems etc. on your own system is not recommended. You will most probebly end up with a rather unstable system with a need of different version of tools for different tasks and projects. In the long run, this will give you a lot of problem. 

Instead of installing all of those tools on our local computer we will use virtulization to our adventage. We can create a virtual computer on our computer and let the virtual computer have all tools we need for a certain task or project. If we create a virtual host (vhost) for each project, we do not need to worry about versions and clogging our own system with a lot of tools that might only be used once or twice wile we test out a new sytem. 

###Virtulization in groups
When we work together in development teams, setting up a a common development environment is often a hassle. One of the group member might be using Windows, some linux and other osx. In some cases the tools required are only available on two of the three platforms or are released with different bugs etc. In this case virtulization is the real savyer. By installing the same preprepared operating system in a virtual machine we can be sure all of our team is up and running in no time. If the system we set up is a clone of the system we use when we deploy the application we are even more satisfied. 

###Using Vagrant
For this course we will be using a system called Vagrant. vagrant is a technique for virtulization on your local computer. That means that we can configure more complex virtual machines that you easily can run and use in your assignments. To get a quick introduction to vagrant [watch this video](https://www.youtube.com/watch?v=aUew6WauUsI). 


## Installation
Installing Vagrant is quite straight forward. Because vagrant need a [Hypervisor](https://en.wikipedia.org/wiki/Hypervisor) to function we also need to install one, in this case we will go with VirtualBox. If you already have another service like VMWare installed, please consult the Vagrant documentation to find out how to setup Vagrant without using VirtualBox.

1) Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) for your operating system
2) Install [Vagrant](https://www.vagrantup.com/downloads.html)

The installation of these two applications should be pretty forward.

## Basics
To start up a vagrant machine one must have a Vagrant-file that points out what and how the virtual machine should be configured, which operating system, what libraries and application it will have and on which ports it will be listning to. This file will be prepered for you in most cases and you just have to start it up and the whole thing will be installed.

You controll your vagrant machine throw writing commands in your terminal. Below are the more common commands you need to know.

| Command |          |
| ------- | ---------
| `vagrant up` | Starts your virtual host using the settings in the file Vagrantfile |
| `vagrant ssh` | SSHs into your virtual host and logging you in. |
| `vagrant destroy` | Will destroy the virtual host and all it´s settings, not removing data in your vagrant-folder. |
| `vagrant halt` | Stops your virtual host from running in the background |





