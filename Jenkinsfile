pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                 script {
                    if (isUnix()) {
                       sh 'npm install'
                    } else {
                       bat 'npm install'
                    }
                }
              
            }
        }
        stage('test') {
            steps {
                 script {
                    if (isUnix()) {
                        sh 'ng test --code-coverage --watch=false' 
                    } else {
                      bat 'ng test --code-coverage --watch=false' 
                    }
                }
            }
        }
    }
}