#!/bin/bash
set -e

SERVER="postgresql";

echo "echo stop & remove docker [$SERVER]"
(docker kill $SERVER || :) && \
  (docker rm $SERVER || :)
