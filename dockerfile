FROM cypress/included:144.0.0

WORKDIR /usr/app
COPY ./package.json yarn.lock /usr/app/

ARG PRODUCTION_BUILD=true
RUN yarn install --production=${PRODUCTION_BUILD}

COPY ./ /usr/app