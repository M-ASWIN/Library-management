FROM node:alpine3.18
WORKDIR /librarydocker
COPY . .
RUN npm i -g pnpm
RUN pnpm i
RUN pnpm run build 
EXPOSE 3000:3000
CMD ["pnpm","start"]
