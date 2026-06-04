pipeline {
    agent {
        // Define que o teste rodará em um agent Linux/Ubuntu disponível
        label 'ubuntu-latest' 
    }

    tools {
        // Configura a versão do Node.js (ajuste o nome conforme configurado no seu Jenkins)
        nodejs 'NodeJS 24.x'
    }

    // Permite que o pipeline seja disparado manualmente (equivalente ao workflow_dispatch)
    triggers {
        // No Jenkins, a execução manual já é o padrão. 
        // Esta linha garante que não haverá gatilhos automáticos de SCM.
        snapshot()
    }

    stages {
        stage('Checkout Project') {
            steps {
                // Baixa o código do repositório Git atual automaticamente
                checkout scm
            }
        }

        stage('Install Yarn') {
            steps {
                // Instala o Yarn globalmente
                sh 'npm install -g yarn'
            }
        }

        stage('Installing Dependencies') {
            steps {
                // Instala as dependências do projeto
                sh 'yarn'
            }
        }

        stage('Installing Playwright Browsers') {
            steps {
                // Instala os navegadores do Playwright
                sh 'yarn playwright install'
            }
        }

        stage('Running E2E Tests') {
            steps {
                // Executa os testes end-to-end
                sh 'yarn run e2e'
            }
        }
    }
    
    post {
        always {
            // Opcional: Limpa o workspace após a execução para poupar espaço em disco
            cleanWs()
        }
    }
}
