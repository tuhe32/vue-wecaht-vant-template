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
        }
    },
    
    filters: {
        "tslint.json": "lint",
        "tsconfig.json": "lint"
    },
    
    complete: function (data,{chalk}) {
        
    }
}