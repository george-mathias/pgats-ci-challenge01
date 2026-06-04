pipeline {
    agent any
    tools { nodejs 'Node24' } 

    stages {
        stage('Preparar e Instalar') {
            steps {
                checkout scm
                sh 'npm install -g yarn'
                sh 'yarn install'
                
                // Baixa o Chrome e instala todas as dependências do Linux automaticamente
                sh 'yarn playwright install chromium --with-deps'
            }
        }

        stage('Executar Testes (Apenas Chrome)') {
            steps {
                // Roda puramente direto e sem flags complicadas
                sh 'yarn run e2e --project=chromium'
            }
        }
    }
}
