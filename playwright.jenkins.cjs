// playwright.jenkins.cjs
const baseConfig = require('./playwright.config.js');

// Edite o arquivo playwright.jenkins.cjs no seu repositório Git
module.exports = {
  // ... mantenha as suas outras configurações de projetos (projects) e diretórios intactas
  use: {
    headless: true,              // Obrigatório para rodar em servidores CI
    channel: 'chrome',           // 👈 ALTERE OU ADICIONE ESTA LINHA EXATAMENTE AQUI
    launchOptions: {
      args: ['--no-sandbox', '--disable-setuid-sandbox'] // Garante a execução segura dentro de containers Docker
    }
  },
};
