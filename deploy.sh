#!/bin/bash
DIRECTORY=~/docker
REGISTRY=docker.academy.yandex.net
cd $DIRECTORY;

SERVICES=$(docker service ls --filter name=shri_app --quiet | wc -l)

docker system prune -f;

if [[ "$SERVICES" -gt 0 ]]; then
    # Update
    docker service update \
        --detach=false \
        --constraint-add node.role==manager \
        --with-registry-auth \
        --image $IMAGE \
        shri_app
else
    # Create
    docker service create \
        --name=shri_app \
        --constraint node.role==manager \
        --with-registry-auth \
        $IMAGE
fi

env $(cat $ENV_FILE | grep ^[A-Z] | xargs) docker stack deploy --with-registry-auth --compose-file $DC_FILE shri;
