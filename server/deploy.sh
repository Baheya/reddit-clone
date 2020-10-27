#!/bin/bash

echo Please enter the version number you want to associate with this deployment.
read VERSION

docker build -t beyakhalifa/reddit-clone:$VERSION --no-cache .
docker push beyakhalifa/reddit-clone:$VERSION
ssh root@178.128.48.81 "docker pull beyakhalifa/reddit-clone:$VERSION && docker tag beyakhalifa/reddit-clone:$VERSION dokku/api:$VERSION && dokku tags:deploy api $VERSION"