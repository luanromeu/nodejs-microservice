#!/bin/sh

# Wait until MySQL is ready
while ! mysqladmin ping -h"mysql" -P"3306" --silent; do
    echo "waiting intialize  mysql ..."
    sleep 1
done