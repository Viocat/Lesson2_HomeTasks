"use strict";

// // ----------- Task1 ---------
// const user={};
// user.name='John';
// user.surname='Smith';
// user.name='Pete';
// console.log(user);  
// delete(user.name);

//------- Task 2 ---------
//  Да так делать можно, в даном случае конст коснётся лишь имени обьекта

// ----------- Task 3 -------------

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

  let sum =sumCalc(salaries.John, salaries.Ann, salaries.Pete);

  console.log(sum);

  function sumCalc(a,b,c,){
    return(a+b+c);
  }