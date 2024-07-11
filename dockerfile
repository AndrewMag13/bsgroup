FROM node:lts as dependencies
WORKDIR /bs_dev
COPY package.json yarn.lock ./
RUN corepack enable
RUN yarn install

FROM node:lts as builder
WORKDIR /bs_dev
COPY . .
# COPY --from=dependencies /bs_dev/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner 
WORKDIR /bs_dev
ENV NODE_ENV production

COPY --from=builder /bs_dev/public ./public
COPY --from=builder /bs_dev/messages ./messages
COPY --from=builder /bs_dev/package.json ./package.json
COPY --from=builder /bs_dev/.storybook ./.storybook
COPY --from=builder /bs_dev/.next ./.next
COPY --from=builder /bs_dev/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]