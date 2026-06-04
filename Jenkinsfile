pipeline {
    // Equivalente ao 'runs-on: ubuntu-latest'
    agent any

    stages {
        stage('Checkout Project') {
            steps {
                echo 'Baixando o código do repositório...'
                // Equivalente ao 'actions/checkout@v4'
                checkout scm 
            }
        }

        stage('Install NodeJS & Yarn') {
            steps {
                echo 'Garantindo que o Node.js e Yarn estão presentes...'
                // Como não há 'actions/setup-node', instalamos o yarn globalmente
                // Se o seu Jenkins não tiver o comando npx/npm, precisaremos do plugin do NodeJS
                sh 'npm install -g yarn'
            }
        }

        stage('Installing Dependencies') {
            steps {
                echo 'Instalando dependências do projeto...'
                // Equivalente ao 'run: yarn'
                sh 'yarn' 
            }
        }

        stage('Installing Playwright Browsers') {
            steps {
                echo 'Instalando os navegadores do Playwright...'
                // Equivalente ao 'run: yarn playwright install'
                sh 'yarn playwright install'
                
                // NOTA IMPORTANTE: Se os testes falharem por falta de bibliotecas do sistema (libs de tela),
                // descomente a linha abaixo para instalar as dependências de sistema do Playwright:
                // sh 'yarn playwright install-deps'
            }
        }

        stage('Running E2E Tests') {
            steps {
                echo 'Executando os testes de ponta a ponta...'
                // Equivalente ao 'run: yarn run e2e'
                sh 'yarn run e2e' 
            }
        }
    }

    post {
        always {
            echo 'Finalizando a execução da esteira...'
        }
    }
}
