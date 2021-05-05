/*
    Chayanne Sandoval-Williams
    Scripts to change pictures and links on the page in order to save layout html pages

    TODO: add in script details
*/

function onClickPastels()
{
    setTimeout(function(){window.location='color_board.html'}, 1000)
}

function onClickNeons()
{
    setTimeout(function(){window.location='color_board.html'}, 1000)
}

function onClickNeutrals()
{
    document.getElementById("colorHeader").innerHTML = "Neutral Color Board"
    document.getElementById("img1").src = "images\n_brown.png"
    //document.getElementById("img1").href = #
    document.getElementById("img2").src = "images\n_green.png"
    //document.getElementById("img2").href = #
    document.getElementById("img3").src = "images\n_grey.png"
    //document.getElementById("img3").href = #
    document.getElementById("img4").src = "images\n_ivory.png"
    //document.getElementById("img4").href = #
    document.getElementById("img5").src = "images\n_navy.png"
    //document.getElementById("img5").href = #
    document.getElementById("img6").src = "images\n_tan.png"
    //document.getElementById("img6").href = #
    setTimeout(function(){window.location='color_board.html'}, 1000)
}

function onClickBasics()
{
    setTimeout(function(){window.location='color_board.html'}, 1000)
}