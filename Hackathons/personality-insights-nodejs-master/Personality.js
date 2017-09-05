

/*
personality_insights.profile({
  text: 'Enter more than 100 unique words here...',
  consumption_preferences: true
  },
  function (err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});

*/



const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const fs = require('fs');

const personality_insights = new PersonalityInsightsV3({
  username: '265f623f-ec7d-4340-a135-abae9d1ceeaa',
  password: 'OcXWzO8Xr42t',
  version_date: '2016-10-19'
});

/*
 * English example:
 *   'text' parameter contains the input text.
 */
personality_insights.profile(
  {
    text: "You are analytical, active and explosive.You are adventurous: you are eager to experience new things. You are energetic: you enjoy a fast-paced, busy schedule with many activities. And you are uncompromising: you think it is wrong to take advantage of others to get ahead. More than most people, your choices are driven by a desire for prestige. You are relatively unconcerned with both taking pleasure in life and tradition. You prefer activities with a purpose greater than just personal enjoyment. And you care more about making your own path than following what others have done. This is deb. ",   
     consumption_preferences: true   
     },                                                                    
  function(err, response) {
    if (err) {
      console.log('error:', err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  }
);

/*
 * Spanish example:
 *   'language' parameter is needed in 'es' since our
 *   text content is in Spanish.
 */
