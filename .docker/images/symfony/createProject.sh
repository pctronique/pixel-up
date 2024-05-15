#!/bin/bash

if [ -z ${PHP_FOLDER_INIT} ]
then
    PHP_FOLDER_INIT="/var/docker/php/"
fi

if [ -z ${PHP_FOLDER_PROJECT} ]
then
    PHP_FOLDER_PROJECT=/usr/local/apache2/www
fi

if [ -z ${PHP_FOLDER_LOG} ]
then
    PHP_FOLDER_LOG=/var/log/docker/php/
fi

PATH_FOLDER=( /root/.symfony* )
NAME_FOLDER="${PATH_FOLDER/"/root/"/""}"

mv /root/$NAME_FOLDER/bin/symfony /usr/local/bin/symfony

cd ${PHP_FOLDER_PROJECT}

if [ -z "$(ls -A ${PHP_FOLDER_PROJECT})" ]; then
    symfony new name_project --no-git --dir=.
    if [ -e ${PHP_FOLDER_INIT}/packages_install.list ]
    then
    while read line  
    do   
        if [ ! -z "$line" ]
        then
            composer require $line >> ${PHP_FOLDER_LOG}create.log 2>> ${PHP_FOLDER_LOG}create.log
        fi
    done < ${PHP_FOLDER_INIT}/packages_install.list
    fi
fi

composer install >> ${PHP_FOLDER_LOG}create.log 2>> ${PHP_FOLDER_LOG}create.log

#php bin/console doctrine:database:create

#php bin/console doctrine:migrations:migrate --dry-run

touch ${PHP_FOLDER_LOG}/error.log
touch ${PHP_FOLDER_LOG}/symfony_out.log
touch ${PHP_FOLDER_LOG}/symfony_error.log

service startserver start && tail -F ${PHP_FOLDER_LOG}/error.log &
