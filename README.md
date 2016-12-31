# README #

This is a repository for iErgo version 1.0

### How do I get set up? ###

To setup iErgo you must first download the project files as well as node.js (this project utilizes version 4.2)

Once these have been downloaded you must edit the 9th line of launch.sh so that the path to your node file is correct for your machine.
launch.sh is currently configured for a Linux machine with node files locates under /scratch/. If you are configuring this for an alternate machine, navaigate to the directory containing your node files and execute 'pwd' in the command line. Copy and paste that path over the 9th line of launch.sh up to the /node-4.2... portion.

For example:

Before: /scratch/node-v4.2.2-linux-x64/bin/node
##
After: /myPath/GoesThrough/TheseDirectories/node-v4.2.2-linux-x64/bin/node

### To launch iErgo ###
Open a terminal and navigate to your iErgo directory. Once there, execute: source launch.sh

### To take iErgo down ###
Open a terminal and execute: killall node
#
Warning: The above command will end ALL currently running node processes.