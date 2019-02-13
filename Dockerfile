FROM nginx:latest

COPY nginx/nginx.conf.tmp /etc/nginx/nginx.conf.tmp
COPY nginx/config.bsh /etc/nginx/config.bsh

ENTRYPOINT ["/etc/nginx/config.bsh"]