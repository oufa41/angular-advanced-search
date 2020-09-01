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
                       sh 'npm run  test:prod  --max_old_space_size=5048 ' 
                       
                    } else {
        
                      bat ' npm run  test:prod'
                    // bat ' node --max_old_space_size=5048 ./node_modules/@angular/cli/bin/ng test --code-coverage'
                    }
                }
            }
        }
    }
}

