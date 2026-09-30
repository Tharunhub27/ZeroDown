FROM node:22-alpine

WORKDIR /app

ARG APP_VERSION=v1
ENV APP_VERSION=$APP_VERSION

COPY package.json .
COPY server.js .
COPY public ./public

EXPOSE 3000

USER node

CMD ["npm", "start"]