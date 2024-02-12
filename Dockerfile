FROM node:21-alpine3.18 AS base

# Install dependencies
FROM base AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY /client/package.json /client/package-lock.json ./
RUN npm ci


# Build application
FROM base AS build
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY /client .
RUN npm run build && npm cache clean --force


# Install production dependencies
FROM dependencies AS production-dependencies
WORKDIR /app
RUN npm install --production


# Create the runtime image
FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 remix
RUN adduser --system --uid 1001 remix
USER remix
COPY --from=production-dependencies --chown=remix:remix /app/package*.json ./
COPY --from=production-dependencies --chown=remix:remix /app/node_modules ./node_modules
COPY --from=build --chown=remix:remix /app/build ./build
COPY --from=build --chown=remix:remix /app/public ./public
EXPOSE 3000
ENV PORT 3000
ENTRYPOINT [ "node", "node_modules/.bin/remix-serve", "build/index.js"]