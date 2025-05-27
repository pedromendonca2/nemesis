# arquivo de instalação entre aspas do meu projeto
# alpine é versão reduzida, light
# "https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657"

# revert, docs, fix, feat, refactor, style

FROM node:22.16.0-alpine
WORKDIR /web/
RUN npm install -g @angular/cli