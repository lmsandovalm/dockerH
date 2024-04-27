FROM node:latest AS build

WORKDIR /app

RUN apt-get update && apt-get install -y git

RUN git clone -b Docker --single-branch https://github.com/lmsandovalm/final_front/ .

RUN git pull

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]