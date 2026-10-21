
FROM node:22-alpine

LABEL org.opencontainers.image.source="https://github.com/117ABHISHEK/ci-cd-practice"

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY app.js server.js ./

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

USER node

CMD ["node", "server.js"]
