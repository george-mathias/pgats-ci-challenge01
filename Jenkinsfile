pipeline {
    agent any

    tools {
        nodejs 'Node24'
    }

    stages {
        stage('Checkout Project') {
            steps {
                echo 'Baixando o código do repositório...'
                checkout scm 
            }
        }

        stage('Install Yarn') {
            steps {
                echo 'Instalando o Yarn globalmente no ambiente do Node...'
                sh 'npm install -g yarn'
            }
        }

        stage('Installing Dependencies') {
            steps {
                echo 'Instalando dependências do projeto...'
                sh 'yarn install' 
            }
        }

        stage('Installing Playwright Browsers') {
            steps {
                echo 'Instalando os navegadores do Playwright...'
                sh 'yarn playwright install'
            }
        }

        stage('Running E2E Tests') {
            steps {
                echo 'Executando os testes de ponta a ponta...'
                sh 'yarn run e2e' 
            }
        }
    }

    post {
        always {
            echo 'Finalizando a execução da esteira...'
        }
    }
}
