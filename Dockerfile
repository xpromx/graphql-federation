FROM node:14-stretch

# Create app directory
WORKDIR /var/www/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json yarn.lock ./

RUN yarn install
# If you are building your code for production
# RUN yarn install --production

# Bundle app source
COPY . .
RUN yarn run build

EXPOSE 4001

ENTRYPOINT ["yarn", "run"]
CMD ["start"]