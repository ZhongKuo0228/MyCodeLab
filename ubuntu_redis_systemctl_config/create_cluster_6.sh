#!/bin/sh
redis-cli --cluster create 0.0.0.0:36379 0.0.0.0:36380 0.0.0.0:36381 0.0.0.0:36382 0.0.0.0:36383 0.0.0.0:36384 --cluster-replicas 1
