FROM node:16.0.0-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

CMD npm run start:debug