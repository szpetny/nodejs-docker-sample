FROM node:argon

# Create app directory
RUN mkdir -p /calib-maps
WORKDIR /calib-maps

# Install app dependencies
COPY package.json /calib-maps
RUN npm install

# Bundle app source
COPY . /calib-maps

EXPOSE 3000

CMD [ "node", "index.js" ]
