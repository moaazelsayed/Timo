
var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var port = process.env.PORT || 4000;

var watson = require('watson-developer-cloud');

var tone_analyzer = watson.tone_analyzer({
	url: "https://gateway.watsonplatform.net/tone-analyzer/api",
	//url: "https://158.85.132.88:443/tone-analyzer/api",
  	password: 'QqSQoagOrgG1',
  	username: 'f2a49e15-1556-4d87-b315-70f9933dcf72',
  	version: 'v3',
  	version_date: '2016-05-19'
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(port, function() {
    console.log('listening on *: ' + port);
});

// tone_analyzer.tone({ text: 'A word is dead when it is said, some say. Emily Dickinson' },
//   function(err, tone) {
//     if (err)
//       console.log(err);
//     else {
//     	//var analysis = JSON.stringify(tone, null, 2);
//     	var analysis = tone.document_tone.tone_categories[0];
    
// 		console.log(analysis.tones[0].tone_name, analysis.tones[0].score);
// 		console.log(analysis.tones[1].tone_name, analysis.tones[1].score);
// 		console.log(analysis.tones[2].tone_name, analysis.tones[2].score);
// 		console.log(analysis.tones[3].tone_name, analysis.tones[3].score);
// 		console.log(analysis.tones[4].tone_name, analysis.tones[4].score);
//   	}
// });