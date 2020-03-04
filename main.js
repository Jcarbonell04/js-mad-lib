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
    let MadLib = "Most of the time " + adjective + ' ' + "teachers always give out " + adjective2 + " assignments. But as everyone knows, if you want to pass all your classes so you can go to a/an " + noun + " and become president of a big international " + noun2 + " and have millions of " + pluralNoun + " in the bank, you must do your homework and study " + adverb + ". If you just sit around and " + verb + ", you won't get ahead in life. You must learn to pay attention to every " + adjective3 + " thing your teacher says. Do not interrupt or whisper to other " + pluralNoun2 + " during class. Be sure to have a nice, " + adjective4 + " notebook in which you can write down anything the teacher says that seems " + adjective5 + '. go home and memorize all of those ' + adjective6 + " notes. When your teacher gives a surprise quiz, you will know all of the " + pluralNoun3 + "!";

    //Output the Message
    document.getElementById('output').innerHTML = MadLib;
  }
