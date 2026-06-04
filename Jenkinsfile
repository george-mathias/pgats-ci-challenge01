pipeline {
    agent any

    stages {
        stage('Instalar Node e Yarn') {
            steps {
                // O Jenkins baixa e ativa o Node automaticamente aqui
                nodejs('node24') {
                    sh 'npm install -g yarn'
                }
            }
        }

        stage('Instalar Dependencias') {
            steps {
                nodejs('node24') {
                    sh 'yarn install'
                }
            }
        }

        stage('Instalar Playwright') {
            steps {
                nodejs('node24') {
                    // O comando abaixo instala os navegadores E as dependências do Ubuntu de uma vez só
                    sh 'yarn playwright install --with-deps'
                }
            }
        }

        stage('Executar Testes E2E') {
            steps {
                nodejs('node24') {
                    sh 'yarn run e2e'
                }
            }
        }
    }
}
