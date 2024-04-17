FROM php:8.1-fpm-alpine

RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

RUN apk update
RUN apk add git

RUN docker-php-ext-install pdo pdo_mysql