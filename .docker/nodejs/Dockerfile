FROM node:latest

VOLUME "/usr/local/apache2/www"

WORKDIR "/usr/local/apache2/www"

RUN npm install -y --no-install-recommends pm2 -g
RUN npm install -y --no-install-recommends pm2-logrotate
