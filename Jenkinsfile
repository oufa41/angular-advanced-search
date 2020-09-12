
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                        sh 'npm run build --prod'
                    } else {
                        bat 'npm install'
                        bat 'npm run build --prod'
                    }
                }
            }
        }
        stage('test') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm run  test:prod'
                    } else {
                        bat 'npm run  test:prod'
                    }
                }
            }
        }
        stage('Build docker image') {
            steps {
                echo 'Starting to build docker image'
                script {
                    def customImage = docker.build("my-image:${env.BUILD_ID}")
                    customImage.push()
                }
            }
        }
    }
}

