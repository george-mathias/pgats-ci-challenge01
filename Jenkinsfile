pipeline {
    agent any // Remove a restrição e roda em qualquer máquina configurada no Jenkins

    stages {
        stage('Checkout Project') {
            steps {
                checkout scm
            }
        }

        stage('Install NodeJS & Yarn') {
            steps {
                nodejs('node24') {
                    sh 'npm install -g yarn'
                }
            }
        }

        stage('Installing Dependencies') {
            steps {
                nodejs('node24') {
                    sh 'yarn'
                }
            }
        }

        stage('Installing Playwright Browsers') {
            steps {
                nodejs('node24') {
                    sh 'yarn playwright install'
                }
            }
        }

        stage('Running E2E Tests') {
            steps {
                nodejs('node24') {
                    sh 'yarn run e2e'
                }
            }
        }
    }
}
