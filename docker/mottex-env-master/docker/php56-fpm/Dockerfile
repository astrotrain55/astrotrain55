FROM "phpdockerio/php56-fpm"
WORKDIR /home
#EXPOSE 80
RUN apt update
RUN apt install -y php5-mysql
RUN apt install -y vim
#RUN apk add bash
#RUN apk add mc
CMD ["/bin/sh","-c", "/usr/sbin/php5-fpm -F -O 2>&1 | sed -u 's,.*: \\\"\\(.*\\)$,\\1,'| sed -u 's,\"$,,' 1>&1" ]
