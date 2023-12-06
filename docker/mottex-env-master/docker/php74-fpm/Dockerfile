FROM "phpdockerio/php74-fpm"
WORKDIR /data/www/
#EXPOSE 80
RUN apt update
RUN apt install -y php7.4-mysql
#RUN apt install -y php7.4-imagick
RUN apt install -y vim
RUN php -r "copy('https://getcomposer.org/installer', '/root/composer-setup.php');"
RUN php /root/composer-setup.php
RUN php -r "unlink('/root/composer-setup.php');"
RUN mv /data/www/composer.phar /usr/local/bin/composer
RUN cd /data/www
#RUN composer update
#RUN apk add bash
#RUN apk add mc
#CMD ["/bin/sh","-c", "/usr/sbin/php5-fpm -F -O 2>&1 | sed -u 's,.*: \\\"\\(.*\\)$,\\1,'| sed -u 's,\"$,,' 1>&1" ]
CMD ["/usr/sbin/php-fpm7.4", "-O" ]
