FROM node:12.2.0-alpine

COPY . .
RUN npm install 
RUN npm install react-scripts@3.0.1 -g

CMD ["npm", "start"]