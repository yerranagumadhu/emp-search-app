#!/bin/sh
echo "window._env_ = {" > /usr/share/nginx/html/env.js
echo "  BACKEND_URL: \"${BACKEND_URL}\"" >> /usr/share/nginx/html/env.js
echo "};" >> /usr/share/nginx/html/env.js
