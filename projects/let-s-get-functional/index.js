// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('./../underpants-lite/underpants-lite');


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(arr) {
    function isMale (obj){
        if(obj["gender"] === "male"){
            return true;
        }
        else{
           return false;
        }
    }
    var maleArr =_.filter(arr,isMale)
    return maleArr.length
};

var femaleCount = function(arr) {
    function isFemale (obj){
        if(obj["gender"] === "female"){
            return true;
        }
        else{
           return false;
        }
    }
    var femaleArr =_.filter(arr,isFemale);
    return femaleArr.length;
};

var oldestCustomer = function(arr){
    var highest = 0;
    var oldest = "";
    function getAge(obj){
        if(obj['age']>highest){
            highest = obj['age'];
            oldest = obj['name'];
        }
    }
    _.each(arr, getAge);
    return oldest;
};

var youngestCustomer = function(arr){
    var lowest = 1000;
    var youngest = "";
    function getAge(obj){
        if(obj['age']<lowest){
            lowest = obj['age'];
            youngest = obj['name'];
        }
    }
    _.each(arr, getAge);
    return youngest;
};

var averageBalance = function(arr){
    var total = 0;
    var balanceArr = _.pluck(arr,'balance');
    function trueBalance(array){
        var newArr = [];
        var split;
        for(var i=0;i<array.length;i++){
            var balance='';
            split=array[i].substr(1,array[i].length-1).split(',');
            for(var c=0;c<split.length;c++){
                balance = balance+split[c];
          }
          newArr.push(balance*1);
        }
        return newArr;
    }
    var trueBalances =trueBalance(balanceArr);
    for(var z=0;z<trueBalances.length;z++){
        total = total+trueBalances[z];
    }
    return total/trueBalances.length;
};

var firstLetterCount = function(arr,letr){
    var count = 0;
    function compareFLetr(obj){
        var name = obj['name'];
        if(name[0].toUpperCase() === letr.toUpperCase()){
            count++;
        }
    }
   _.each(arr, compareFLetr);
   return count;
};

var friendFirstLetterCount = function(arr, cust, letr){
     var count = 0;
    function compareFFLetr(obj){
        var custName = obj['name'];
        var friends = obj['friends'];
        if( custName === cust){
            for(var i = 0; i < friends.length; i++ ){
                if(friends[i].name[0].toUpperCase() === letr.toUpperCase()){
                    count++;
                }
            }
        }
    }
    _.each(arr, compareFFLetr);
    return count;
};
var friendsCount = function(arr, name){
    var newArr = [];
    function findFriends(obj){
        var custName = obj['name'];
        var friends = obj['friends'];
        for(var i = 0; i < friends.length; i++){
            if(friends[i].name === name){
                newArr.push(custName);
            }
        }
    }
    _.each(arr, findFriends);
    return newArr;
};

var topThreeTags = function(arr){
    var tagsArr = [];
    var tagAmnt = {};
    var bigest = 0;
    var first;
    var second;
    var third;
    function addToObj(obj){
        var tags = obj["tags"];
        for(var i = 0; i < tags.length; i++){
            var tag = tags[i];
            if(!_.contains(tagsArr, tag)){
                tagsArr.push(tag);
                tagAmnt[tag] = 1;
            }
            else if(_.contains(tagsArr, tag)){
                tagAmnt[tag] += 1;
            }
        }
    }
    _.each(arr, addToObj);
    for(var key in tagAmnt){
        if(tagAmnt[key] > bigest){
            bigest = tagAmnt[key];
        }
    }
    for(key in tagAmnt){
        if(tagAmnt[key] === bigest && !first){
            first = key;
        }
        else if(tagAmnt[key] === bigest && !second){
            second = key;
        }
        else if(tagAmnt[key] === bigest && !third){
            third = key;
        }
    }
    return [first, second, third];
};

var genderCount = function(arr){
    var genObj = {male: 0, female: 0, "non-binary": 0,};
     function idGender (obj){
        if(obj["gender"] === "male"){
            genObj.male += 1;
        }
        else if(obj["gender"] === "female"){
           genObj.female += 1;
        }
        else{
          genObj["non-binary"] += 1;
        }
    }
    _.each(arr, idGender);
    return genObj;
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;