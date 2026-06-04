pipeline {
    agent any

    triggers {
        githubPush() 
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Instalando dependências do projeto...'
                sh 'npm install' 
            }
        }
        
        stage('Test') {
            steps {
                echo 'Executando os testes...'
                sh 'npm test'
            }
        }
    }
}
