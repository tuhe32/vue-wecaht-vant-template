const path = require('path')
const fs = require('fs')

const {
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')

module.exports={
    prompts:{
        name: {
            type: 'string',
            required: true,
            message: '你得输入一个项目名',
        },
        author: {
            type: 'string',
            message: '你的名字是谁',
        },
        description: {
            type: 'string',
            required: false,
            message: 'Project description',
            default: '一个微信端的项目',
        },
        autoInstall: {
          type: 'list',
          message:
            '项目创建后，你必须得安一下包依赖，不懂就去百度',
          choices: [
            {
              name: '好的, 用 NPM 安吧',
              value: 'npm',
              short: 'npm',
            },
            {
              name: 'OK,用 Yarn 安吧',
              value: 'yarn',
              short: 'yarn',
            },
            {
              name: '我舅不愿安，怎么着！',
              value: false,
              short: 'no',
            },
          ],
        },
    },
    
    filters: {
        "tslint.json": "lint",
        "tsconfig.json": "lint"
    },
    
    complete: function (data,{chalk}) {
        const green = chalk.green

        const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

        if (data.autoInstall) {
          installDependencies(cwd, data.autoInstall, green)
            // .then(() => {
            //   return runLintFix(cwd, data, green)
            // })
            .then(() => {
              printMessage(data, green)
            })
            .catch(e => {
              console.log(chalk.red('Error:'), e)
            })
        } else {
          printMessage(data, chalk)
        }
    }
}