pipeline {
    agent any

    stages {
        stage('Instalar Node e Yarn') {
            steps {
                nodejs('Node24') {
                    sh 'npm install -g yarn'
                }
            }
        }

        stage('Instalar Dependencias') {
            steps {
                nodejs('Node24') {
                    sh 'yarn install'
                }
            }
        }

        stage('Executar Testes E2E (No Container Playwright)') {
            steps {
                // Executa os testes isolados num container oficial do Playwright que já tem os navegadores e dependências visuais configurados
                sh '''
                    docker run --rm \
                    -v /var/run/docker.sock:/var/run/docker.sock \
                    -v ${WORKSPACE}:/work \
                    -w /work \
                    ://microsoft.com \
                    /bin/bash -c "yarn install && npx playwright test"
                '''
            }
        }
    }
}
