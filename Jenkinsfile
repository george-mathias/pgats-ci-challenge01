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
                    // Instala apenas o Chromium leve, ignorando dependências do sistema operacional
                    sh 'npx playwright install chromium'
                }
            }
        }

        stage('Executar Testes E2E') {
            steps {
                nodejs('Node24') {
                    // Força o Playwright a usar o motor headless leve que não pede bibliotecas gráficas
                    env.PLAYWRIGHT_CHROMIUM_FOR_E2E = "true"
                    sh 'npx playwright test'
                }
            }
        }
    }
}
