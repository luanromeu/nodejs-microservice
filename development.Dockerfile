  
FROM node:alpine

WORKDIR /app
VOLUME /src

RUN npm install -g nodemon --quiet
RUN apk add --no-cache --upgrade bash
RUN apk add mysql-client

ADD package.json package-lock.json ./
ADD config.js ./
ADD start.sh  ./
ADD wait.sh ./

RUN npm install --quiet

CMD ["sh", "start.sh"]