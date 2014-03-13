#!/usr/bin/env node

// Fibonacci
// http://en.wikipedia.org/wiki/Fibonacci_number
var fibonacci = function(n) {
if(n < 1) { return 0;}
else if(n == 1 || n == 2) { return 1;}
else if(n > 2) { return fibonacci(n - 1) + fibonacci(n - 2);}
};

// Fibonacci: closed form expression
// http://en.wikipedia.org/wiki/Golden_ratio#Relationship_to_Fibonacci_sequence
var fibonacci2 = function(n) {
    var phi = (1 + Math.sqrt(5))/2;
    return Math.round((Math.pow(phi, n) - Math.pow(1-phi, n))/Math.sqrt(5));
};

// Find first K Fibonacci numbers via basic for loopvar firstkfib = function(k) {
var firstkfib = function(k) {
    var i = 1;
    var arr = [];
    for(i = 1; i < k+1; i++) {
        arr.push(fibonacci2(i));
    }
    return arr;
};

// Print to console & output file
var fmt = function(arr) {
     return arr.join(", ");
};

var k = 10;
var fs = require('fs');
var outfile = "hw1_pt2.txt";
var out = fmt(firstkfib(k));
fs.writeFileSync(outfile, out + "\n");
console.log("Script: " + __filename + "\nWrote first " + k + " Fibonacci numbers: " + "(" + out  + ") " + "To: " + outfile);


