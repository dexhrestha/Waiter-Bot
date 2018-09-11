//dialogflow credentials
const 
	credentials = require('./getCredentials')
	API_AI_TOKEN = credentials.apiai,
	apiAiClient = require('apiai')(API_AI_TOKEN),
	
module.exports=(chat,event)=>{
	const senderId = event.sender.id;
	const message = event.message.text;
	const apiaiSession = apiAiClient.textRequest(message,{sessionId:'DexRestaurant'});
	let result;
	apiaiSession.on('response',(response)=>{
		chat.say(response.result.fulfillment.speech)	
	})

	apiaiSession.on('error',error=>console.log(error));
	apiaiSession.end();
}