pipeline {
  agent node
  stages {
    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }

    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }

  }
}