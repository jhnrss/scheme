# LTS version of node
FROM node:12

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

# expose ports of app
EXPOSE 8088
EXPOSE 27017

#start app with node 
CMD npm start