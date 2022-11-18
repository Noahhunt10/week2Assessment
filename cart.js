///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, cur) =>{
let {price} = cur
return price + acc
},0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) =>{
    return cartTotal = (cartTotal + (cartTotal * tax)) - couponValue
}
finalPrice = calcFinalPrice(10,2,.07)
console.log(finalPrice)


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
//Name: They need to know who they are making the food for. This will Be a string because a string is best for names.
//Phone number: They need to be able to call or text customers updates, problems , etc. This will also be a string because the number wont be used for math purposes
//address: They need to know where to bill you or deliver if they do deliver. this will be an object with more strings because there are multiple parts of an address
//email: They might want to send you coupons or other ads. This will also be a string because there are no numbers
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: 'Noah Hunt',
    phone: '999-999-9999',
    address: {'street':'1234 Street','city': 'Salt Lake City' ,'state': 'Utah','zip':'84444'},
    email: 'noahhuntemail@gmail.com'
}