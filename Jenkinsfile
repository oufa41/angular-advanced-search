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
                       sh 'npm run-script  test:prod  --max_old_space_size=5048 ' 
                       
                    } else {
        
                      bat ' ng test  --source-map=false --code-coverage  --watch=false --browsers=ChromeHeadlessNoSandbox'
                    // bat ' node --max_old_space_size=5048 ./node_modules/@angular/cli/bin/ng test --code-coverage'
                    }
                }
            }
        }
    }
}