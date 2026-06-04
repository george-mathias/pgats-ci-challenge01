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
                    // Instala apenas os binários dos navegadores sem tentar modificar o sistema operacional
                    sh 'yarn playwright install'
                }
            }
        }

        stage('Executar Testes E2E') {
            steps {
                nodejs('Node24') {
                    // Executa a sua suite de testes
                    sh 'yarn run e2e'
                }
            }
        }
    }
}
