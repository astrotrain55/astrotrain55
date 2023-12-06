FROM nginx:latest
WORKDIR /data/www
EXPOSE 80
RUN apt update
RUN apt install -y vim
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
CMD /usr/sbin/nginx -c /etc/nginx/nginx.conf