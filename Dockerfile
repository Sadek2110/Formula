# ---------- Build ----------
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG SITE_URL=https://formula.dksaa.com
ARG PUBLIC_FORM_ENDPOINT=
ENV SITE_URL=${SITE_URL} \
    PUBLIC_FORM_ENDPOINT=${PUBLIC_FORM_ENDPOINT}

RUN npm run build

# ---------- Runtime ----------
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
