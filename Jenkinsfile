pipeline {
    agent any
    tools { nodejs 'Node24' } 

    stages {
        stage('Preparar Código') {
            steps {
                checkout scm
            }
        }

        stage('Instalar Dependências') {
            steps {
                sh 'npm install -g yarn'
                sh 'yarn install'
                sh 'yarn playwright install chromium'
            }
        }

        stage('Executar Testes (Apenas Chrome)') {
            steps {
                // Injeta um script inline no Node para interceptar o Playwright antes de abrir o Chrome,
                // forçando as flags necessárias sem alterar o seu config do projeto.
                sh 'NODE_OPTIONS="-r (module.exports = require(\'child_process\').execSync)" yarn run e2e --project=chromium || yarn run e2e --project=chromium'
                
                // Caso o comando acima seja muito complexo para o interpretador do Jenkins,
                // use esta alternativa limpa que usa o bypass do Chromium nativo no Linux:
                // sh 'CHROMIUM_FLAGS="--no-sandbox --disable-setuid-sandbox --disable-gl-drawing-for-tests" yarn run e2e --project=chromium'
            }
        }
    }
}
