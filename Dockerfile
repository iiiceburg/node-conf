FROM node:16.4.2-alpine as build
WORKDIR /app
COPY . .
RUN npm install
CMD npm run prod
EXPOSE 8080