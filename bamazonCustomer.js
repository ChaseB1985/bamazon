var inquirer = require('inquirer');
var mysql = require('mysql'); 

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazonDB"
  });

// this connects to the database and will display all products in a table
  connection.connect(function(err) {
    if (err) throw err;
    displayProducts(); 
  });
  
  var displayProducts = function(){
      var query = "SELECT * FROM products"
      connection.query(query, function(err, res){
          //console.log(res);
          for ( var i = 0; i < res.length; i++){
              console.log(" Item ID: " + res[i].item_id + "|| Product Name: "+ res[i].product_name + ", Department: " + res[i].department_name +
               ", Price of item: " + res[i].price + ", Units in Stock: " + res[i].stock_quantity )
          }
      })
      
      itemChoice(); 
  };
//This function will promp the user, with inquirer, asking them to make a selection and how many.
  var itemChoice = function(){
      inquirer.prompt([
          {
              name: "item_id",
              type: "input",
              message: "Type in the id of the item you have to have?",
              validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
          },
          {
              name:"Quantity",
              type: "input",
              message: "Type the number of items you need and if I have it, I will probably send it to you.",
              validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
          }
      ]).then(function(answer){
          var query = 'SELECT * FROM products WHERE item_id=' + answer.Quantity;
          connection.query(query, {item_id: answer.item_id}, function(err, res){
              if (answer.Quantity <= res){
                  for(var i = 0; i < res.length; i++){
                      console.log ("We currently have " + res[i].stock_quantity + " of that in stock. " + "Item Id: "+ res[0].item_id + " is on the way.")
                      console.log ("Thank you for buying: " + res[i].product_name + ", I will finally be able to send my children to college.")
                  }
              } else {
                  console.log("We are out of that. Beat it.")
              }            
          })
      })
  };


 