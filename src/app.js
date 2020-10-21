const request = require('request');

function sendIncomingWebhook(action,settings){
    return new Promise((resolve,reject)=>{
        
        if(typeof action.params.message == 'string'){
            action.params.message = {text: action.params.message}
        }

        const requestOptions = {
            url: action.params.webhookUrl,
            method: "post",
            json : true,
            body: action.params.message
        }
        
        request(requestOptions, function (error, response, body) {
            if (error) return reject(error);
            if(response.statusCode !== 200) return reject(response);
            
            return resolve(body)
        });
    })
}

module.exports = {
    sendIncomingWebhook: sendIncomingWebhook
}