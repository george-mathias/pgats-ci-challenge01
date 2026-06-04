pipeline {
    // O Jenkins vai baixar a imagem oficial da Microsoft com tudo pronto
    agent {
        docker { 
            image '://microsoft.com' 
        }
    }

    stages {
        stage('Executar Testes E2E') {
            steps {
                checkout scm
                
                // Comandos limpos, sem precisar baixar o Chrome ou dependências
                sh 'npm install -g yarn'
                sh 'yarn install'
                sh 'yarn run e2e --project=chromium'
            }
        }
    }
}
