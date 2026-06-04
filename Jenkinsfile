pipeline {
    agent any
    tools { nodejs 'Node24' } // Nome correto validado por você!

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
                // HEADLESS=true força o Playwright a rodar em modo texto sem abrir janela gráfica
                // --project=chromium limita a execução apenas no Chrome
                sh 'HEADLESS=true yarn run e2e --project=chromium'
            }
        }
    }
}
