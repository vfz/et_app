#!/bin/bash
 HOST=YOUR_HOST
 PORT=YOUR_PORT
 USER=YOUR_USER
 PASSWORD=YOUR_PASSWORD
 SOURCE_FILE=dist #Директория собранного проекта
 DTDEPLOY=$(date "+%d-%m-%Y-%H-%M-%S")
 TARGET_DIR="YOUR_PATH_TO_DIRECTORIES_FOR_DEPLOY/dist-$DTDEPLOY"


expect -c "
set timeout -1
spawn scp -P $PORT -r $SOURCE_FILE $USER@$HOST:/$TARGET_DIR
expect *password:*
send $PASSWORD\r
expect $USER@$HOSTNAME:

sleep 1
exit
"

ssh $USER@$HOST -p$PORT<< EOF
uname -a
sleep 1
docker stop NAME_YOUR_DOCKER_CONTAINER_HERE
sleep 2
rm /YOUR_PATH_DIRECTORY_FOR_SERVER_START/dist 
ln -sf /YOUR_PATH_TO_DIRECTORIES_FOR_DEPLOY/dist-$DTDEPLOY/ /YOUR_PATH_DIRECTORY_FOR_SERVER_START/dist
docker start NAME_YOUR_DOCKER_CONTAINER_HERE
exit
EOF

exit

