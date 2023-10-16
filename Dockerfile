FROM node:18-alpine

WORKDIR /app

COPY ./package*.json .

RUN npm i
RUN npm run build:web

COPY . .

