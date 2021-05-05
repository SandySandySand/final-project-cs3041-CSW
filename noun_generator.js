function generationNouns()
{
    $.get("C:\Users\stuff\Documents\D Term 2021\CS 3041\Final Project - CS3041\final-project-cs3041-CSW\nouns.txt", function(txt) {
            var lines = txt.responseText.split("\n");
            var randLineNum = Math.floor(Math.random() * lines.length);
            return lines[randLineNum]; // random line from the text file
        });
}

function changeEveryword()
{
    document.getElementById("word1").innerHTML = generationNouns()
    // document.getElementById("word2").innerHTML = generationNouns()
    // document.getElementById("word3").innerHTML = generationNouns()
    // document.getElementById("word4").innerHTML = generationNouns()
    // document.getElementById("word5").innerHTML = generationNouns()
    // document.getElementById("word6").innerHTML = generationNouns()
    // document.getElementById("word7").innerHTML = generationNouns()
    // document.getElementById("word8").innerHTML = generationNouns()
}