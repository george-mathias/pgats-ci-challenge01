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
                
                // Simplificado: Descarrega APENAS o Chromium/Chrome para poupar tempo
                sh 'yarn playwright install chromium'
            }
        }

        stage('Executar Testes (Apenas Chrome)') {
            steps {
                // 1. xvfb-run: Resolve o erro da biblioteca "libglib" criando um ecrã virtual 
                // 2. --project=chromium: Força a execução APENAS no Chrome, ignorando outros navegadores do config
                sh 'xvfb-run yarn run e2e --project=chromium'
            }
        }
    }
}
