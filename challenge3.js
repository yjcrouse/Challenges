/*Using only JS, take an object with various properties.  Then create a new object that switches the keys and values.
Example:
Input:
originalObject = {
 age: 19,
 name: 'Luke Skywalker',
 eyeColor: 'blue',
 isJedi: true
};
Output:
newObject = {
 19: 'age',
 'Luke Skywalker': 'name',
 blue: 'eyeColor',
 true: 'isJedi'
};
*/

var data =  {
    age: 19,
    name: 'Luke Skywalker',
    eyeColor: 'blue',
    isJedi: true,
  };
 
   var newData = Object.keys(data).reduce(function(obj,key){
      obj[ data[key] ] = key;
      return obj;
   },{});
   console.log(newData);