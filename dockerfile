# Usa a imagem oficial da Microsoft que já vem com Node 24 e todas as libs do Linux
FROM ://microsoft.com

WORKDIR /app

# Copia os arquivos de dependências
COPY package.json yarn.lock* ./

# Instala o yarn e as dependências do projeto
RUN npm install -g yarn && yarn install

# Copia o restante do código do projeto
COPY . .

# Comando padrão caso o container seja rodado sem parâmetros
CMD ["yarn", "run", "e2e"]
