//////////////////////////////////////////////////////////////////////
// Function 1 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var upName = string[0].toUpperCase() + string.slice(1,string.length);
    return upName
    
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var x = string.split(" ");
    for(var i=0;i<x.length;i++){
        var stringX = x[i];
        var upName = stringX[0].toUpperCase() + stringX.slice(1,stringX.length);
        x[i] = upName;
    }
  x = x.join(" ")
  return x;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    for(var key in object){
        var string = object[key]
        var upName = string[0].toUpperCase() + string.slice(1,string.length);
        var messege = "Welcome "+upName+"!";
        return messege;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
     var x = [];
    for(var key in object){
      x.push(object[key]);
      
    }
    for(var i=0;i<x.length;i++){
        var string = x[i];
        var upName = string[0].toUpperCase() + string.slice(1,string.length);
        x[i]=upName;
    }
    return x[0]+" is a "+x[1];
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
     var x = string.split(" ");
    var result = false
    for(var i=0;i<x.length;i++){
      if(x[i]===word){
        result = true
        return result
      }
    }
   return result
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
     var x = object.friends
    x.push(name)
    object.friends = x
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
     var x = object.friends
    var result = false
    if(x===undefined){
      return result
    }
    for(var i=0;i<x.length;i++){
      if(name === x[i]){
        result = true
        return result
      }
    }
  return result
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key]=value
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  for(var key in object){
    for(var i=0;i<array.length;i++){
      if(array[i]===key)
        delete object[array[i]]
    }
  }
  return object
  }

//////////////////////////////////////////////////////////////////////
// Function 10 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var newArray = [];
    
    //loop through array, filling up new array only if an element has not already been added
    // check out array.includes. It will make this much easier :)
    
    for(var i=0;i<array.length;i++){
      if(newArray.includes(array[i])){
          console.log(true)
        }
       else{
         newArray.push(array[i])
       }
        
    }
    return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}