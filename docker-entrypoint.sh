#!/bin/sh

echo "Injecting environment variables..."
envsubst '$backend_url' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec "$@"
