var baseurl = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";

function SampleDS (apiKey) {
    this.apiKey = "20092269-c22f-46c2-a8c0-3bf0c4a9f097";
}

SampleDS.prototype.search = function(q) {
    
  var resultJson = http().get(baseurl + encodeURIComponent(q) + "?key=" + this.apikey );
  var res = JSON.parse(resultJson.body);

  var result = {};
    
  if (res["0"].meta.id !== undefined)
  result['word'] = res["0"].meta.id;
    
  result['rain'] = "No rain";
  result['TEST'] = "tEST";
 
  return result;

}

