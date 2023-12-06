FROM gitlab/gitlab-runner:latest

RUN apt-get update -y -qq && \
    apt-get upgrade -y -qq && \
    apt-get install -y ca-certificates wget apt-transport-https vim nano 

RUN apt-get install -y php php-mysql php-curl php-simplexml php-dom php-mbstring

#CMD ["run", "--user=gitlab-runner", "--working-directory=/home/gitlab-runner"]