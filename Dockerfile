

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y nginx

RUN cd /var/www/html/
RUN git clone https://github.com/mjastad/uptick.git

