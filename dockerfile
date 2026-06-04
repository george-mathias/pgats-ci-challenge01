ARG PART1=mcr
ARG PART2=microsoft
FROM ${PART1}.${PART2}.com/playwright:v1.49.0-noble

WORKDIR /app

COPY package.json yarn.lock* ./
RUN npm install -g yarn && yarn install
COPY . .

CMD ["yarn", "run", "e2e"]
