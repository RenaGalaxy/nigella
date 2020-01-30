FROM hogehoge

WORKDIR /usr/local/app
ADD package*.json ./
ADD openapi.json ./
RUN npm install

EXPOSE 53000

