pipeline {
    agent any

    stages {
        stage('Construir Imagem de Testes') {
            steps {
                // Constrói a imagem localmente no Docker Desktop usando o Dockerfile do projeto
                sh 'docker build -t meu-projeto-tests .'
            }
        }

        stage('Executar Testes E2E') {
            steps {
                // Adicionadas as flags --ipc=host e --init para dar estabilidade ao Chromium no Jenkins
                sh 'docker run --rm --ipc=host --init meu-projeto-tests'
            }
        }
    }
}
