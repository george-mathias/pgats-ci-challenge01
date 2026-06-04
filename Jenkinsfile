pipeline {
    agent any
    tools { nodejs 'Node24' } 

    stages {
        stage('Preparar Código') {
            steps {
                checkout scm
            }
        }

        stage('Instalar Dependências') {
            steps {
                sh 'npm install -g yarn'
                sh 'yarn install'
                sh 'yarn playwright install chromium'
            }
        }

        stage('Executar Testes (Apenas Chrome)') {
            steps {
                // Injetamos as variáveis de ambiente diretamente antes do comando.
                // Isso desativa o uso de sandbox do Chrome e acelera a execução
                // sem precisar alterar o seu arquivo playwright.config.js.
                sh 'PLAYWRIGHT_CHROMIUM_LAUNCH_OPTIONS="--no-sandbox,--disable-setuid-sandbox,--disable-gl-drawing-for-tests" yarn run e2e --project=chromium'
            }
        }
    }
}
