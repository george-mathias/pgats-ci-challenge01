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
                    sh 'yarn playwright install chromium'
                }
            }
        }

        stage('Executar Testes E2E') {
            steps {
                nodejs('Node24') {
                    // Executa exatamente o mesmo comando do seu GitHub Actions original
                    sh 'yarn run e2e'
                }
            }
        }
    }
}
