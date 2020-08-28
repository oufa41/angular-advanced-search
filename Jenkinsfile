pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                 script {
                    if (isUnix()) {
                       sh 'npm install'
                       sh 'npm ng -- build --prod'
                    } else {
                       bat 'npm install'
                       bat 'npm ng -- build --prod'
                    }
                }
              
            }
        }
        stage('test') {
            steps {
                 script {
                    if (isUnix()) {
                       sh 'npm run ng -- test --code-coverage --no-watch --no-progress --browsers=ChromeHeadless' 
                    } else {
                      bat 'npm run ng -- test --code-coverage --no-watch --no-progress --browsers=ChromeHeadless' 
                    }
                }
            }
        }
    }
}