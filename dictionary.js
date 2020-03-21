/* 
Library for a custom data source for Memento DataBase. It obtains information for X
from the api at 
@git
git push https://github.com/personaldata143/Memento.git
@param {string} apiKey, baseurl
@example
var ds = new SampleDS();
var r = ds.search(query);
result( r , function(id) { return ds.extra(id);});
  if (res[0].meta.id !== undefined)
  result['word'] = res[0].meta.id;
    
@apicall
https://www.dictionaryapi.com/api/v3/references/collegiate/json/tall?key=20092269-c22f-46c2-a8c0-3bf0c4a9f097
*/

var baseurl = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";

function SampleDS (apiKey) {
    this.apiKey = "20092269-c22f-46c2-a8c0-3bf0c4a9f097";
}

SampleDS.prototype.search = function(q) {
    
  var resultJson = http().get(baseurl + encodeURIComponent(q) + "?key=" + this.apikey );
  var res = JSON.parse(resultJson.body);

  var result = {};
    

  return result;

}

