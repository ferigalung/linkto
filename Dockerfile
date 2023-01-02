FROM node:16-alpine
WORKDIR /app

COPY . /

RUN npm install
RUN npm install -g serve
RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "serve"]