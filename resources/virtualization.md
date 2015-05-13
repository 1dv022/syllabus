As a developer you will be sourounded by a lot of tools and you will probebly be working with many different "stacks". To install all of those tools, servers, data-management systems etc. on your own system is not recommended. You will most probebly end up with a rather unstable system with a need of different version of tools for different tasks and projects. In the long run, this will give you a lot of problem. 

Instead of installing all of those tools on our local computer we will use virtulization to our adventage. We can create a virtual computer on our computer and let the virtual computer have all tools we need for a certain task or project. If we create a virtual host (vhost) for each project, we do not need to worry about versions and clogging our own system with a lot of tools that might only be used once or twice wile we test out a new sytem. 

###Virtulization in groups
When we work together in development teams, setting up a a common development environment is often a hassle. One of the group member might be using Windows, some linux and other osx. In some cases the tools required are only available on two of the three platforms or are released with different bugs etc. In this case virtulization is the real savyer. By installing the same preprepared operating system in a virtual machine we can be sure all of our team is up and running in no time. If the system we set up is a clone of the system we use when we deploy the application we are even more satisfied. 

###Using Vagrant
For this course we will be using a system called Vagrant. Vagrant



## Installation
Installing Vagrant is quite straight forward. Because vagrant need a virtulizationWORD to function we also need to install one, in this case we will go with VirtualBox. If you already have another service like VMWare installed, please consult the Vagrant documentation to find out how to setup Vagrant without using VirtualBox.

1) Install VirtualBox
2) Install Vagrant

## Basics

| Command |          |
| ------- | ---------
| `vagrant up` | Starts your virtual host using the settings in the file Vagrantfile |
| `vagrant ssh` | SSHs into your virtual host and logging you in. |
| `vagrant destroy` | Will destroy the virtual host and all it´s settings, not removing data in your vagrant-folder. |
| `vagrant halt` | Stops your virtual host from running in the background |





