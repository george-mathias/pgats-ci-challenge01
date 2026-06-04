pipeline {
    agent any

    stages {
        stage('Instalar Node e Yarn') {
            steps {
                // Ajustado com 'N' maiúsculo para bater com a sua imagem
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
                    // O --with-deps instala os pacotes do Linux necessários dentro do Docker
                    sh 'yarn playwright install --with-deps'
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
