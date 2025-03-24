# Build app
FROM node:20-alpine AS base
WORKDIR /app

# Copy everything except .env
COPY package*.json ./
RUN npm install
COPY . .


RUN npm run build

# Runtime
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=base /app/.output .output
COPY --from=base /app/node_modules node_modules
COPY --from=base /app/package.json .


EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
