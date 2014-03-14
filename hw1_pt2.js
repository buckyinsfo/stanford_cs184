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

var isprime = function(n) {
    var i = 2;
    while( n % i != 0 ) {
        i++;
    }
    return n == i;
};

// Find first K Fibonacci numbers via basic for loop.
var firstkfib = function(k) {
    var i = 1;
    var arr = [];
    for(i = 1; i < k+1; i++) {
        arr.push(fibonacci2(i));
    }
    return arr;
};

// Find first k Prime numbers via basic for loop.
var firstkprime = function(k) {
    var i = 2;
    var arr = [];
    do {
        if ( isprime(i)) {
            arr.push(i);
        }
        i++;
    } while ( arr.length < k );
    return arr;
};

// Print to console & output file
var fmt = function(arr) {
    
    
    return arr.join(",");
};

var k = 100;
var fs = require('fs');
var outfile = "hw1_pt2.txt";

// Choose to exercise either the Fibonacci function or Prime numeber function.
//var out = fmt(firstkfib(k));
var out = fmt(firstkprime(k));

fs.writeFileSync(outfile, out + "\n");

//console.log("Script: " + __filename + "\nWrote first " + k + " Fibonacci numbers: " + "(" + out  + ") " + "To: " + outfile);
console.log("Script: " + __filename + "\nWrote first " + k + " Prime numbers: " + "(" + out  + ") " + "To: " + outfile);
