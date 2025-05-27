# arquivo de instalação entre aspas do meu projeto
# alpine é versão reduzida, light

FROM node:22.16.0-alpine
WORKDIR /web/
RUN npm install -g @angular/cli