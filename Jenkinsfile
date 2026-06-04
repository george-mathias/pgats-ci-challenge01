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
                // Passamos os argumentos do Chromium simulando um ambiente CI texto puro.
                // Esta flag força o Playwright a embutir o launchOptions em tempo de execução.
                sh 'yarn run e2e --project=chromium --launch-options=\'{"args":["--no-sandbox","--disable-setuid-sandbox","--disable-gl-drawing-for-tests"]}\''
            }
        }
    }
}
