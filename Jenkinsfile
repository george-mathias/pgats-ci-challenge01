pipeline {
    agent any

    stages {
        stage('Instalar Node e Yarn') {
            steps {
                nodejs('Node24') {
                    sh 'npm install -g yarn'
                }
            }
        }

        stage('Instalar Dependencias') {
            steps {
                nodejs('Node24') {
                    sh 'yarn install'
                }
            }
        }

        stage('Instalar Navegadores') {
            steps {
                nodejs('Node24') {
                    // Instala apenas o binário básico do Chromium para rodar em containers
                    sh 'npx playwright install chromium'
                }
            }
        }

        stage('Executar Testes E2E') {
            steps {
                nodejs('Node24') {
                    // Executa o Playwright apontando explicitamente para o arquivo de configuração do Jenkins do seu projeto
                    sh 'npx playwright test --config=playwright.jenkins.cjs'
                }
            }
        }
    }
}
