"use strict";

//1. alert- welcome to my website

//alert("Welcome to my website!");

//2. User prompt for favorite color
var userColor = prompt(message:"What is your f'avorite color?");
var alert message = "Great" + userColor + " is my favorite color too!";
alert(alertMessage);

//3.1

var dailyRentalRate = Number(prompt( message: "How much is the daily rate" ));

var mermaidDaysrented = Number(prompt(message: "How long are you renting the little mermaid?"));
var brotherBearDaysRented = Number(prompt(message: " How long are renting brother bear?"));
var totalCost = (mermaidDaysrented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRate)




3.2


//3.3 A student can enroll in a class only if the class is not full and the class schedule does not conflcit with her schdule.

//if class is not full (true) we can enroll
var classIsNotFull = confirm("Class is not full") //boolean

// if class schedule does not confilct we can enroll - space in our schedule
var classScheduleDoesNotConflict = confirm("Schdeules do not conflcit"); //boolean

var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict

//true && true Student can enroll;
//true && false Student cannot enroll bc schedule conflict
// false && true Student cannot enroll bc class is full
// false && false Student cannot enroll bc class is full & there is a schedule confict
var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict

var alertMessage = "Student enrolled: " + studentEnrolled;
// alert(alertmessage);

//3.4 A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

//1. Offer has to be valid no matter what
//2. a If they are a premium member, number of items does not matter
//2. b If they are NOT a premium member, they must buy more than 2 items have to use OR (||)

var numnerOfItems = Number(prompt(message: "Hoe many items for a checkout?")) //number
var offerIsValid = confirm("Is the offer valid?"); //boolean
var isPremiumNumber = confirm("Are you a premium member?"); //boolean

// true && (true || false)
// true && (false || true)
// false && (true || true)

var discountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2)
