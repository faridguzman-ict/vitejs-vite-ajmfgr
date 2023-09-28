FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"


COPY package.json .
RUN corepack enable

RUN pnpm install
RUN pnpm update

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSE 5173

CMD ["pnpm", "run", "dev"]