"use strict";

//Event listener
document.getElementById('create').addEventListener('click', generateMadlib);

//Event Function
function generateMadlib() {
    //Input
    let adjective = document.getElementById('adj').value;  
    let adjective2 = document.getElementById('adj2').value;
    let noun = document.getElementById('noun').value;
    let noun2 = document.getElementById('noun2').value;
    let pluralNoun = document.getElementById('plural-noun').value;
    let adverb = document.getElementById('adverb').value;
    let verb = document.getElementById('verb').value;
    let adjective3 = document.getElementById('adj3').value; 
    let pluralNoun2 = document.getElementById('plural-noun2').value;
    let adjective4 = document.getElementById('adj4').value; 
    let adjective5 = document.getElementById('adj5').value; 
    let adjective6 = document.getElementById('adj6').value; 
    let pluralNoun3 = document.getElementById('plural-noun3').value;


    //Build Message
    let MadLib = ;

    //Output the Message
    document.getElementById('output').innerHTML = MadLib;
  }
