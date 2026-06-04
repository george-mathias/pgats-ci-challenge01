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
                // Atualizado para ler o arquivo .cjs
                sh 'yarn run e2e --project=chromium --config=playwright.jenkins.cjs'
            }
        }
    }
}
