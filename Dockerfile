#stage 1 adding node and copying all files
FROM node:latest AS build-image
RUN mkdir /builddir
WORKDIR /builddir

COPY package*.json /builddir/
RUN npm install
COPY . /builddir/
RUN npm run build --prod

#stage 2 adding to nginx
FROM nginx:stable
COPY --from=build-image /builddir/dist/angular-advanced-search /usr/share/nginx/html