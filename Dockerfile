FROM node:lts-alpine
WORKDIR /app
RUN npm i -g vite@5.2.8
COPY package*.json ./
RUN npm install
COPY / ./
