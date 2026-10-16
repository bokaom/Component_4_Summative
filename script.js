//  Starter Array - Do Not Edit this, only manipulate by adding more visitors

// "export" makes the variables and functions modules. Do not remove it.
// Export does not change how variables and functions work. 

export let customers = [];

// =======================================
// QUESTION 1
// =======================================

//Fetch The DOM Elements
export const customerInput = document.getElementById("customerInput");
export const addBtn = document.getElementById("addBtn");
export const customerList = document.getElementById("customerList");
export const counter = document.getElementById("counter");

// Complete this function

export function addCustomer()
{

    // Retrieve the customer's name
let customername = customerInput.value


    // Add customer to array
customer.push(customername)


    // Clear the textbox
customerinput.value = 


    // Call displayCustomers()
displaycustomer()


}

// =======================================
// QUESTION 2
// Complete this function
// =======================================

export function displayCustomers()
{

    // Clear the list
customerlist.innerHTML = ""


    // Loop through the array
let i = 0 < customer.length;


        // Create a list item
let listitem = document.createatrribute


        // Display customer
displaycustomer()


        // Add list item to UL
listitem.textcontent = customer(i)


    // Update customer counter
customer.textcontent = customer.lemgth


}


// ================================
//  DO NOT EDIT LINE 78 AND LINE 81
// =================================

// Do not remove this line 
displayCustomers();

// Event Listener
addBtn.addEventListener("click", addCustomer);