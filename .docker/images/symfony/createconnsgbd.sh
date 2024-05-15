#!/bin/bash

if [ -z ${PHP_FOLDER_PROJECT} ]
then
    PHP_FOLDER_PROJECT=/usr/local/apache2/www
fi

if [ -z ${PHP_SGBD_DATABASE} ]
then
    PHP_SGBD_DATABASE=project
fi

if [ -z ${PHP_SGBD_PASSWORD} ]
then
    PHP_SGBD_PASSWORD=secret
fi

if [ -z ${PHP_SGBD_USER} ]
then
    PHP_SGBD_USER=root
fi

if [ -z ${PHP_SGBD_DBNAME} ]
then
    PHP_SGBD_DBNAME=localhost
fi

if [ ! -f "${PHP_FOLDER_PROJECT}/.env.local.example" ]; then
    if [ -f "${PHP_FOLDER_PROJECT}/.env" ]; then
        cp ${PHP_FOLDER_PROJECT}/.env ${PHP_FOLDER_PROJECT}/.env.local.example
        echo '' >> ${PHP_FOLDER_PROJECT}/.env.local.example
        echo '###> doctrine/doctrine-bundle ###' >> ${PHP_FOLDER_PROJECT}/.env.local.example
        echo '#DATABASE_URL="mysql://SGBD_USER:SGBD_PASSWORD@SGBD_DBNAME:3306/SGBD_DATABASE?charset=utf8mb4"' >> ${PHP_FOLDER_PROJECT}/.env.local.example
        echo '###< doctrine/doctrine-bundle ###' >> ${PHP_FOLDER_PROJECT}/.env.local.example
        echo '' >> ${PHP_FOLDER_PROJECT}/.env.local.example
        echo '###> symfony/mailer ###' >> ${PHP_FOLDER_PROJECT}/.env.local.example
        echo 'MAILER_DSN=smtp://mailhog:1025' >> ${PHP_FOLDER_PROJECT}/.env.local.example
        echo 'MAILER_URL="smtp://mailhog:1025?encryption=ssl&auth_mode=login&username=null&password=null"' >> ${PHP_FOLDER_PROJECT}/.env.local.example
        echo '###< symfony/mailer ###' >> ${PHP_FOLDER_PROJECT}/.env.local.example
        echo '' >> ${PHP_FOLDER_PROJECT}/.env.local.example
    fi
fi

if [ -f "${PHP_FOLDER_PROJECT}/.env.local.example" ]; then
    cp ${PHP_FOLDER_PROJECT}/.env.local.example ${PHP_FOLDER_PROJECT}/.env.local
    CONNECT_SGBD_DEF='DATABASE_URL=\"mysql:\/\/SGBD_USER:SGBD_PASSWORD@SGBD_DBNAME:3306\/SGBD_DATABASE?charset=utf8mb4\"'
    CONNECT_SGBD='DATABASE_URL=\"mysql:\/\/'${PHP_SGBD_USER}':'${PHP_SGBD_PASSWORD}'@'${PHP_SGBD_DBNAME}':3306\/'${PHP_SGBD_DATABASE}'?charset=utf8mb4\"'
    sed -i "s/DATABASE_URL=\"postgresql:/# DATABASE_URL=\"postgresql:/" "${PHP_FOLDER_PROJECT}/.env.local"
    sed -i "s/#${CONNECT_SGBD_DEF}/${CONNECT_SGBD}/" "${PHP_FOLDER_PROJECT}/.env.local"
fi