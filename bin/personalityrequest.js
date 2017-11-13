module.exports = function(inputvariable,username,password) {


  var uri = 'https://gateway-fra.watsonplatform.net/personality-insights/api/v3/profile?version=2016-10-20&consumption_preferences=true&raw_scores=true'


  var options = {
    'method': 'POST',
    'uri': uri,
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
    },
    'body': inputvariable
  };

  console.log(options);
  return options;

}
