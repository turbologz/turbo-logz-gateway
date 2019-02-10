FROM node:8-alpine AS build

COPY . ./app

WORKDIR ./app

RUN yarn --production

RUN rm yarn.lock && rm .yarnclean

FROM alpine AS prod

RUN apk add nodejs-lts

COPY --from=build /app .

CMD ["node", "."]
