FROM node:16.14-alpine
WORKDIR /app-backend
COPY package* ./
RUN npm install
COPY . .
ARG EnvironmentVariable
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
