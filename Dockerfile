#stage 1 adding node and copying all files
FROM node:latest 
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
RUN npm run build --prod

#stage 2 adding to nginx
FROM nginx:stable
COPY --from=node /usr/src/app/dist/angular-advance-search /usr/share/nginx/html