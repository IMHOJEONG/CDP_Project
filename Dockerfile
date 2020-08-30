# Specify a base image
FROM node:alpine

WORKDIR /app

# Install some depenendencies
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
# Default command
CMD ["npm", "run", "start"]