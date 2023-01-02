FROM node:16-alpine
WORKDIR /app

COPY . /app

RUN npm install
RUN npm install -g serve
RUN npm run build

EXPOSE 8001

CMD ["npm", "run", "serve"]