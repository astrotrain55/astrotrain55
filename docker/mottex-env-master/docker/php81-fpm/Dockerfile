FROM php:8.1-rc-fpm-alpine
ENV XDEBUG_VERSION=3.1.3
ENV TZ=Asia/Yekaterinburg
RUN echo 'root:superpass' | chpasswd
RUN apk update
RUN apk upgrade
RUN apk add --no-cache mysql-client msmtp perl wget procps shadow libzip libpng libjpeg-turbo libwebp freetype icu
RUN apk add --no-cache --virtual build-essentials \
    icu-dev icu-libs zlib-dev g++ make automake autoconf libzip-dev \
    libpng-dev libwebp-dev libjpeg-turbo-dev freetype-dev && \
    docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg --with-webp && \
    docker-php-ext-install gd && \
    docker-php-ext-install mysqli && \
    docker-php-ext-install pdo_mysql && \
    docker-php-ext-install intl && \
    docker-php-ext-install opcache && \
    docker-php-ext-install exif && \
    docker-php-ext-install zip && \
    apk del build-essentials && rm -rf /usr/src/php*
RUN wget https://getcomposer.org/composer-stable.phar -O /usr/local/bin/composer && chmod +x /usr/local/bin/composer
RUN apk --no-cache add --virtual .build-deps \
        g++ \
        autoconf \
        make && \
    pecl install xdebug-${XDEBUG_VERSION} && \
    docker-php-ext-enable xdebug && \
    apk del .build-deps && \
    rm -r /tmp/pear/*
RUN rm /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
#COPY ./php.ini /usr/local/etc/php/conf.d/my.ini
#COPY ./xdebug.ini /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini
RUN apk add --update nodejs npm
RUN apk add --update tzdata
RUN usermod -u 1000 www-data && groupmod -g 1000 www-data
USER www-data