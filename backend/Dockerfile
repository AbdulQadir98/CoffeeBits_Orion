FROM node:lts-alpine
ENV NODE_ENV=production
RUN mkdir /app
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]