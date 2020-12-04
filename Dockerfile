FROM node:12.13.0-stretch AS nodebuilder

WORKDIR /usr/src/app
COPY ./ $PWD

# ARG ENV_VAR_EXAMPLE
# ENV ENV_VAR_EXAMPLE

RUN yarn \
 && yarn check-types \
 && yarn test \
 && yarn build \
 && mkdir -p /opt \
 && mv /usr/src/app/dist /opt/rel


#####################################################################
FROM nginx:1.15-alpine AS server

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=nodebuilder /opt/rel /usr/share/nginx/html

EXPOSE 80
