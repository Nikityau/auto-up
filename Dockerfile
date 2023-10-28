FROM node:18-alpine

WORKDIR /app

COPY ./package*.json .

RUN npm i

COPY . /app

RUN npm run build:prod

WORKDIR /build

# COPY /app/build/ /build/

# RUN rm -r "/app"

