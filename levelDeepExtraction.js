/*
  Autor: Diego Patricio Aguilef Sánchez
  Date: 06-07-2018
  Description: Function made to scan a level into a json object with a tree structure 
*/

function levelDeepExtraction(object, level){
  var key, level_data = {}, data = {},
    final;
  for(key in object) {
    if(typeof(object[key]) != 'object'){
      if(level == 0){
        data[key] = object[key]
      }else{
        continue;
      }
    }
    if(typeof(object[key]) == 'object'){
      final = jsonDataLevel(object[key], (level - 1))
      if(( level - 1 ) == 0  && !$.isEmptyObject(final)){
        data[key] = {}
        for(final_key in final){
          data[key][final_key] = final[final_key]
        }
      }else{
        for(data_key in final){
          data[data_key] = final[data_key] 
        }
      }
    }
  }
  return data;
}