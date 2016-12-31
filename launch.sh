##This program launches the iErgo website

##This section of code sets system variables that are utilized by the Stormpath library
export STORMPATH_CLIENT_APIKEY_ID=154VNI5MZ8ID5EFIPK3WYE58O
export STORMPATH_CLIENT_APIKEY_SECRET=cp86t7s8JOZDq9kYnBTAL1pOhnuIAFc3HCeOIfU+o+s
export STORMPATH_APPLICATION_HREF=https://api.stormpath.com/v1/applications/2TuLKIeDyND6EpS33iwb5F

##The following line of code launches the iErgo website as a background process
/scratch/node-v4.2.2-linux-x64/bin/node ./server.js &
