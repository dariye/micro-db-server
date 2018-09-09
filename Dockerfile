FROM node:10-alpine
LABEL name "micro-db-server"
WORKDIR /usr/src
COPY . /usr/src
RUN apk update && apk upgrade && apk add --no-cache git yarn
RUN yarn install --frozon-lockfile --no-cache --production
EXPOSE 3000
CMD ["yarn", "start"]
