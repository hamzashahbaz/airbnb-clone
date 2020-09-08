FROM node:10

WORKDIR /usr/src/app

COPY ./package.json .

RUN yarn

COPY . .

RUN ls

EXPOSE 4000