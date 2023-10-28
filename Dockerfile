FROM node:18-alpine

WORKDIR /app

RUN mkdir all
RUN mkdir build

COPY ./package*.json /app/all

RUN cd ./all npm i

COPY . /app/all

RUN cd ./all npm run build:prod

RUN cp -r ./all/build/web ./build/
RUN rm -r ./all