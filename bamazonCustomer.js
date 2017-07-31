
var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("cli-table");


var connection = mysql.createConnection({

  host: "localhost",
  user: "root",
  port: 3306,
  password:"",
  database: "Bamazon_db"

});

connection.connect(function(err) {
  if (err) throw err;
  start();
  // run the start function after the connection is made to prompt the user
});

var start = function(){
  inquirer
     .prompt([
     {
      name:"products",
      type:"list",
      message:"Welcome to Bamazon! would you like to see our products?",
      choices:["YES", "NO"]
     }
     ]).then(function(answer){
      if(answer.products.toUpperCase() == "YES"){
             chooseId();
      }else{
        console.log("come back soon!");
      }

     })
   }




 var chooseId = function(){

    connection.query("SELECT * FROM products", function(err, res) {

    for (var i = 0; i < res.length; i++) {
 console.log("|" + res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + "|" + res[i].stock_quantity);
    }
console.log("-----------------------------");

  });

 inquirer
     .prompt([
     {

      name:"id",
      type:"input",
      message:"please enter your item by ID",
    },
    {
      name:"quantity",
      type:"input",
      message:"enter the quantity you wish to purchase"
    }

     ]).then(function(answer){
    // Query the database for info about the item including the quantity currently in stock. 
    connection.query('SELECT product_name, department_name, price, stock_quantity FROM products WHERE ?', {id: answer.id}, function(err,res) {
      
    console.log('\n  You are buying ' + answer.quantity + ' ' + res[0].product_name + ' ' + res[0].department_name + ' at $' + res[0].price + ' each'
      );
      if (res[0].stock_quantity >= answer.quantity) {
        //If enough inventory to complete order, process order by updating database inventory and notifying customer that order is complete. 
        var idQuantity = res[0].stock_quantity - answer.quantity;
        connection.query("UPDATE products SET ? WHERE ?", [
        {
          stock_quantity: idQuantity
        }, {
          id: answer.id
        }], function(err,res) {
          }); 
        var total = res[0].price * answer.quantity;
        console.log('\n Your total is $' + total.toFixed(2) + '\n thank you!');
        // Order completed
        
          
      } else {
        //If not enought inventory notify customer and prompt customer for desire to shop more
        console.log('\n  Sorry, Insufficient quantity to fulfill your order! Try again!\n');
        // Order not completed
        start();
    };
  })
})

}








 
  
 










