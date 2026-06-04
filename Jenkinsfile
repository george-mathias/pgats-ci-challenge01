pipeline {
    // Configura o agente para rodar todos os passos com permissão de Root (Administrador)
    agent {
        any {
            args '-u root'
        }
    }
    
    tools { nodejs 'Node24' } 

    stages {
        stage('Preparar e Instalar') {
            steps {
                checkout scm
                sh 'npm install -g yarn'
                sh 'yarn install'
                
                // Agora com root, o Playwright conseguirá instalar as dependências visuais com sucesso
                sh 'yarn playwright install chromium --with-deps'
            }
        }

        stage('Executar Testes (Apenas Chrome)') {
            steps {
                sh 'yarn run e2e --project=chromium'
            }
        }
    }
}
