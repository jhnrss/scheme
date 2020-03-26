# LTS version of node
FROM node:10

# app location
WORKDIR /usr/src/scheme

# dependencies, both package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install
# production, uncomment below
# RUN npm ci --only=production

# bundle app source
COPY . .

# expose port of app
EXPOSE 8080

CMD [ "npm", "start"]