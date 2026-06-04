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
                // Roda o container isolado. O resultado do teste volta direto para o Jenkins.
                sh 'docker run --rm meu-projeto-tests'
            }
        }
    }
}
