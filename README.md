


Screen Shot 2017-07-30 at 10.32.27 PM




# bamazon

  In order to create the Bamazon application, I first installed the npm packages 'inquirer', and 'mysql'. Inquirer is necessary to install, so I can create a dynamic app allowing the user to input their desired item and quantity. Mysql package allows me to connect to my database where I have created my bamazon database using sql. In my Sql workbench I created a bamazon databse where I created a table holding the inventory for the bamazon store. Then, I connected my .js file with my database using the port and connected to Bamazon.db. 

  Then I created the first function using inquirer to ask the user if he or she wishes to purchase an item from Bamazon. Using an 'if', 'then' function the user is then directed to the next function where they will be able to choose from the inventory. If the user chooses 'No', I used 'console.log' to give the user a 'goodbye' message. When the user chooses "Yes", the user will be directed to the inventory section. In order to demonstrate the inventory, I used a for loop and a connection query to connect to my bamazon database 'products' table. The for loop allows for every item on my table to be demonstrated to the user. The user can then see the id number for the item and input the number using inquirer. 

  Once the user submits the item id, the user can then submit the quantity they wish to purchase. If the user's desired quantity is greater than the existing amount, the user will receive a message saying " sorry ". So, I used an 'if'/'then' statement to set a variable for total using the user's answer on inquirer and by multiplying the quantity amount with the product price. Also, I had to set a variable for the desired quantity being the inventory quantity subtracted by the existing quantity. If there is the amount available the user can purchase and receives a total. 
