FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY app.js server.js ./

FROM gcr.io/distroless/nodejs22-debian13:nonroot

WORKDIR /app

COPY --from=build --chown=nonroot:nonroot /app /app

ENV NODE_ENV=production

EXPOSE 3000

CMD ["server.js"]