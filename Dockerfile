FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner

ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder --chown=node:node /app/dist ./dist
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node server.mjs ./server.mjs
COPY --chown=node:node tracing.mjs ./tracing.mjs
USER node
EXPOSE 3000
CMD ["node", "--import", "./tracing.mjs", "server.mjs"]
