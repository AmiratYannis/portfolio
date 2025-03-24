#Build app
FROM node:20-alpine AS base
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

#Production runtime
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=base /app/.output .output
COPY --from=base /app/node_modules node_modules
COPY --from=base /app/package.json .

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]