pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                 script {
                    if (isUnix()) {
                       sh 'npm install'
                       sh 'npm run ng -- build --prod'
                    } else {
                       bat 'npm install'
                       bat 'npm run ng -- build --prod'
                    }
                }
            }
        }
        stage('test') {
            steps {
                 script {
                    if (isUnix()) {
                       sh 'npm run ng -- test --watch=false --code-coverage --browsers=ChromeHeadlessNoSandbox' 
                    } else {
                      bat 'npm run ng -- test --watch=false --code-coverage --browsers=ChromeHeadlessNoSandbox'
                    }
                }
            }
        }
    }
}