//Using JS only, take an array of numbers (i.e. an array that lists numbers between 1 and 10).  Create 
//two arrays from this original one, where one array list all of the even numbers, and the second lists 
//all of the odd.
//Example:
//Input:
//originalArray = [1,2,3,4];
//Output:
//evenArray = [2,4];
//oddArray = [1,3];

//test 1 
var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    b = [];
 
    for (let a = 0; a <= 10; a += 2) {
       
       console.log(a)
    }

    for (let b = 1; b <= 10; b += 2) {
       
        console.log(b)

    }
// test 2
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i]%2 == 0) {
        }
            for (var i = 1; i < arr.length; i++) {
        if (arr[i]%2 == 1) {
      
        arr.push(arr.splice(i, 1)[0]);
      }
    }

    }
    console.log(arr);


//Test 3

    let oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((number) => number%2!==0);
    console.log(oddNumbers);
    
   

    let evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((number) => number%2!==1);
    console.log(evenNumbers); 