FROM    node:14.7.0@sha256:94a00394bc5a8ef503fb59db0a7d0ae9e1119866e8aee8ba40cd864cea69ea1a AS builder
WORKDIR /var/www/site/
#for cache
ARG     api_base_url=/web-api/models/liza1
ENV     API_BASE_URL=$api_base_url
COPY    ./ ./
RUN     npm ci
RUN     npm run build

FROM   node:14.7.0@sha256:94a00394bc5a8ef503fb59db0a7d0ae9e1119866e8aee8ba40cd864cea69ea1a
WORKDIR /app
ENV    HTTP_PORT=80
ENV    HTTPS_PORT=443
COPY   --from=builder /var/www/site/dist/ ./dist
COPY   ./server ./
RUN    npm ci
EXPOSE $HTTPS_PORT
EXPOSE $HTTP_PORT

CMD ["npm", "start"]
