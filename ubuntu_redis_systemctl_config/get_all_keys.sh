#!/bin/sh
redis-cli -c --cluster call 127.0.0.1:36379 keys \*