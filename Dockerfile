# Dockerfile for App1 (Search App)
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# In App1 directory
# docker build -t app1-react .
# docker run -d -p 3000:80 app1-react