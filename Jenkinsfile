pipeline {
    agent {
        docker {
            image 'node:24-alpine' 
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Instalando dependências com o Yarn (Node 24)...'
                sh 'yarn install' 
            }
        }
        
        stage('Test') {
            steps {
                echo 'Executando os testes com o Yarn (Node 24)...'
                sh 'yarn test'
            }
        }
    }
}
