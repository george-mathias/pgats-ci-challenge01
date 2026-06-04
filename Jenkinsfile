pipeline {
    agent {
        label 'ubuntu-latest' // Define o nó ou label do slave Jenkins aplicável
    }
    
    triggers {
        // O workflow_dispatch equivale à execução manual no Jenkins (Build Now)
        // Deixar este bloco vazio remove gatilhos automáticos de agendamento ou SCM
    }

    stages {
        stage('Checkout Project') {
            steps {
                // Realiza o checkout do repositório configurado no job
                checkout scm
            }
        }

        stage('Install NodeJS & Yarn') {
            steps {
                // Certifique-se de ter o NodeJS pré-configurado nas ferramentas globais do Jenkins com o nome 'node24'
                nodejs('node24') {
                    // Instala o Yarn globalmente utilizando o npm do node instalado
                    sh 'npm install -g yarn'
                }
            }
        }

        stage('Installing Dependencies') {
            steps {
                nodejs('node24') {
                    // Executa a instalação das dependências do projeto via Yarn
                    sh 'yarn'
                }
            }
        }

        stage('Installing Playwright Browsers') {
            steps {
                nodejs('node24') {
                    // Instala os navegadores necessários para o Playwright
                    sh 'yarn playwright install'
                }
            }
        }

        stage('Running E2E Tests') {
            steps {
                nodejs('node24') {
                    // Executa os testes de ponta a ponta
                    sh 'yarn run e2e'
                }
            }
        }
    }
}
