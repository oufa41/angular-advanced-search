pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                 script {
                    if (isUnix()) {
                       sh 'npm install'
                       sh 'npm run-script build --prod'
                    } else {
                       bat 'npm install'
                       bat 'npm run-script build --prod'
                    }
                }
            }
        }
        stage('test') {
            steps {
                 script {
                    if (isUnix()) {
                       sh 'npm run-script test:prod' 
                       
                    } else {
                      bat 'npm run-script test:prod'
                    }
                }
            }
        }
    }
}