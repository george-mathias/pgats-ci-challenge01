pipeline {
    agent {
        docker {
            // Imagem oficial do Playwright com Node.js 24 integrado
            image '://microsoft.com'
            // Mantém o container rodando como usuário root para evitar problemas de permissão de escrita
            args '-u root'
        }
    }

    stages {
        stage('Checkout Project') {
            steps {
                // O Jenkins já faz o checkout automático ao iniciar o pipeline declarativo
                echo 'Projeto extraído com sucesso.'
            }
        }

        stage('Install Yarn') {
            steps {
                // Instala o yarn globalmente dentro do container Linux
                sh 'npm install -g yarn'
            }
        }

        stage('Installing Dependencies') {
            steps {
                // Instala as dependências do seu projeto
                sh 'yarn install'
            }
        }

        stage('Installing Playwright Browsers') {
            steps {
                // Baixa os binários dos navegadores compatíveis com a imagem
                sh 'yarn playwright install'
            }
        }

        stage('Running E2E Tests') {
            steps {
                // Executa a sua suite de testes ponta a ponta
                sh 'yarn run e2e'
            }
        }
    }
}
