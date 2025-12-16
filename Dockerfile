# build stage
FROM node:24-alpine AS mybuild

WORKDIR /app

COPY *.json .

RUN npm install

COPY . .

#run stage

FROM node:24-alpine 

WORKDIR /app

COPY *.json .

RUN npm ci --omit=dev
COPY --from=mybuild /app/server.js ./server.js


EXPOSE 3000

CMD ["node","server.js"]