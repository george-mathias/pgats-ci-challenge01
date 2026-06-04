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

        stage('Instalar Playwright') {
            steps {
                nodejs('Node24') {
                    // Força o instalador do Playwright a ignorar a troca interativa de usuário 'su'
                    sh 'npx playwright install --with-deps'
                }
            }
        }

        stage('Executar Testes E2E') {
            steps {
                nodejs('Node24') {
                    sh 'yarn run e2e'
                }
            }
        }
    }
}
