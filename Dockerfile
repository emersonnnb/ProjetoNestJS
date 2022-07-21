FROM node:16.0.0-slim

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

CMD npm run start:dev