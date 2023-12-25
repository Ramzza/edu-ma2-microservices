FROM node:14-buster

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ./server/package*.json ./

# Disable SSL certificate verification
ENV NODE_TLS_REJECT_UNAUTHORIZED=0 

RUN npm ci

# Bundle app source
COPY ./server .

EXPOSE 3001
CMD [ "node", "app.js" ]