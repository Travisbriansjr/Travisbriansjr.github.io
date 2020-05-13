// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function (x){
  if(x===true||x===false){
    return "boolean";
  }
  else if(x===x+""){
    return "string";
  }
  else if (Array.isArray(x)){
    return "array";
  }
  else if(x instanceof Date){
    return "Date";
  }
  else if (x===null){
    return "null";
  }
  else if (x===undefined){
    return "undefined";
  }
  else if (typeof x === "function"){
    return "function";
  }
  else if (typeof x === "number"){
    return "number";
  }
  else{
    return "object";
  }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function (arr,num){
  var newArr = [];
  if (!Array.isArray(arr)|| num === -num){
    return [];
  }
  else if (typeof num !== "number"){
    return arr[0];
  }
  else if(num > arr.length){
    return arr;
  }
  else{
    for(var i=0;i<num;i++){
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function (arr,num){
  var newArr = [];
  if (!Array.isArray(arr)|| num === -num){
    return [];
  }
  else if (typeof num !== "number"){
    return arr[arr.length-1];
  }
  else if(num > arr.length){
    return arr;
  }
  else{
    for(var i=arr.length-num;i<arr.length;i++){
      newArr.push(arr[i]);
    }
    return newArr;
  }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function (arr,val){
  for(var i=0;i<arr.length;i++){
    if(arr[i]===val){
      return i;
    }
  }
  return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*   _.contains([1,"two", 3.14], "three") -> false
*/
_.contains = function (arr,val){
  var result = false;
  for(var i=0;i<arr.length;i++){
    if(arr[i]===val){
      result= true;
      return result;
    }
  }
  return result;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e); });
*      -> should log "a" "b" "c" to the console
*/
_.each = function(coll, fun){
  if(_.typeOf(coll) === "array"){
    for(var i=0;i<coll.length;i++){
      fun(coll[i],i,coll);
    }
  }
  else if(_.typeOf(coll)==="object"){
    for(var key in coll){
      fun(coll[key],key,coll);
    }
  }
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) save the element in a new Array if calling <function> returned true
*   3) return the new Array
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){ return x%2 === 0; }) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(arr,funct){
  var newArr=[];var results=[];
    for(var i=0;i<arr.length;i++){
    results.push(funct(arr[i], i, arr));
  }
  for(var c = 0;c<results.length;c++){
    if (results[c]===true){
      newArr.push(arr[c]);
    }
  }
  return newArr;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
*   3) save the return value of each <function> call in a new array
*   4) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){ return e * 2; }) -> [2,4,6,8]
*/
_.map=function(coll,fun){
  var newArr=[];
  if(_.typeOf(coll) === "array"){
    for(var i=0;i<coll.length;i++){
      newArr.push(fun(coll[i],i,coll));
    }
    return newArr;
  }
  else if(_.typeOf(coll)==="object"){
    for(var key in coll){
      newArr.push(fun(coll[key],key,coll));
    }
    return newArr;
  }
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) save the element in a new Array if calling <function> returned false
*   3) return the new Array
*
* HINT: This is the logical inverse of _.filter() - how can you use it in your implementation?
*
* Examples:
*   _.reject([1,2,3,4,5], function(e){ return e%2 === 0}; ) -> [1,3,5]
*/
_.reject = function(arr,funct){
  var newArr=[];
  var results=[];
  for(var i=0;i<arr.length;i++){
    funct(arr[i], i, arr);
    results.push(funct(arr[i], i, arr));
    console.log(results);
  }
  for(var c = 0;c<results.length;c++){
    if (results[c]===false){
      newArr.push(arr[c]);
    }
  }
  return newArr;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(arr,funct){
  var zero=[]; var one=[]; var newArr=[]; var results=[];
  for(var i=0;i<arr.length;i++){
    funct(arr[i], i, arr);
    results.push(funct(arr[i], i, arr));
    console.log(results);
  }
  for(var c = 0;c<results.length;c++){
    if (results[c]===false){
      one.push(arr[c]);
    }
    else if(results[c]===true){
      zero.push(arr[c]);
    }
  }
  newArr.push(zero,one);
  return newArr;
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
*   3) If the return value of calling <function> for every element is true, return true
*   4) If even one of them returns false, return false
*   5) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){ return e % 2 === 0}; ) -> true
*   _.every([1,2,3], function(e){ return e % 2 === 0}; ) -> false
*/
_.every = function (coll,fun){
  var results=[];
  if(_.typeOf(fun) !== "function"){
    for(var s=0;s<coll.length;s++){
      if(!coll[s]){
        return false;
      }
    }
    return true;
  }
  else if(_.typeOf(coll) === "array"){
    for(var i=0;i<coll.length;i++){
    results.push(fun(coll[i], i, coll));
    }
  }
  else if(_.typeOf(coll)==="object"){
    for(var key in coll){
      results.push(fun(coll[key],key,coll));
    }
  }
  console.log(results);
  for(var c=0;c<results.length;c++){
    if(results[c]=== false){
      return false;
    }
  }
  return true;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
*   3) If the return value of calling <function> is true for at least one element, return true
*   4) If it is false for all elements, return false
*   5) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){ return e % 2 === 0}; ) -> false
*   _.some([1,2,3], function(e){ return e % 2 === 0}; ) -> true
*/
_.some = function (coll,fun){
  var results=[];
  if(_.typeOf(fun) !== "function"){
    for(var s=0;s<coll.length;s++){
      if(coll[s]){
        return true;
      }
    }
    return false;
  }
  else if(_.typeOf(coll) === "array"){
    for(var i=0;i<coll.length;i++){
    results.push(fun(coll[i], i, coll));
    }
  }
  else if(_.typeOf(coll)==="object"){
    for(var key in coll){
      results.push(fun(coll[key],key,coll));
    }
  }
  console.log(results);
  for(var c=0;c<results.length;c++){
    if(results[c]=== true){
      return true;
    }
  }
  return false;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(arrObj, prop){
  function getValue(obj){
    return obj[prop];
  }
    return _.map(arrObj,getValue);
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
