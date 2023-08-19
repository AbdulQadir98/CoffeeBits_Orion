FROM node:lts-alpine
ENV NODE_ENV=production
RUN mkdir /app
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]