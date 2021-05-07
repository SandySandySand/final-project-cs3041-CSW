var nouns = ["afterlife", "aftermath", "afternoon", "aftershave", "aftershock", "afterthought","agency","agenda","agent","aggradation",
    "aggression","aglet", "bush", "home", "neighborhood", "musical", "pencil", "brush", "fire","jogging", "joke", "journal", "journalist", 
    "journey", "joy", "judge", "jug", "juice", "juggernaut", "jump", "dance", "prom", "gun", "bubblegum", "fries", "apple", "desk", "high heels",
    "love", "beauty", "justice", "fear", "calm", "peace", "war", "hate", "freedom", "luck", "sleep", "dream", "nightmare", "lie", "wealth",
    "luxury", "poverty", "baby", "honey", "bee", "ant", "butterfly", "grass", "flower", "rose", "bed", "hair", "jelly", "peanut butter", "church",
    "chocolate", "fashion", "axe", "runway", "plane", "taxi", "sheep", "cow", "bull", "chicken", "hen", "peacock", "balloon", "soda", "tea",
    "fireworks", "lamp", "leg", "snake", "wig", "necklace", "lotion", "luggage", "lounge", "combat", "compass", "boots", "drink", "tiger", "lion", 
    "zebra", "ticket", "show", "letter", "thumb", "thunder", "lightning", "tiara", "tofu", "soup", "bread", "coffee", "tomorrow", "tonight", "hat",
    "tornado", "quilt", "quota", "rabbit", "race", "queen", "king", "prince", "princess", "quicksand", "adventure", "hike", "mountain", "corset", "cougar",
    "hill", "raffle", "lottery", "casino", "club", "radio", "music", "cop", "cottage", "duck", "plant", "plate", "salad", "sandwich", "couch", "council",
    "corn", "field", "sunflower", "raven", "corral", "gold", "silver", "brass", "copper", "diamond", "ruby", "garnet", "water", "sand", "towel", "boat",
    "monk", "mime", "cotton", "plastic", "platform", "platinum", "playground", "slide", "swing", "caller", "basketball", "placebo", "care", "sorrow", "anger",
    "rage", "company", "lonliness", "friendship", "luck", "horror", "bravery", "pleasure", "wisdom", "idea", "thrill", "rollercoaster", "carnival", "circus",
    "arguement", "pie", "kindness", "loss", "money", "envy", "clarity", "ocean", "beach", "lake", "pond", "brutality", "gifts", "talent", "compassion", "confidence"];

var prompts = ["Write a villain origin story.", "Write a myth explaining why it snows.", "Write a letter that never made it to its recipient.", 
    "Write about something that is scary.", "Write about the rain.", "Imagine you are trapped in the desert. Write about how your character tries to survive.",
    "It's Black Friday! Write about where and why your charcter is in line at 5AM.", "Write about a daily commute to work.", "Write about your character's first memory.",
    "Write about the good that happens in a bad situation.", "Write about a bad first date.", "Write about a great first date.", "Your character has just arrived to Earth. Write about their first interaction with humans", 
    "Write about a utopic future society.", "Write about waking up after a nightmare.", "Write about a storm that sends your character to the past.", "Your character was tasked with solving a murder. Write about the inital suspect interview.",
    "Write about what a hug feels like.", "Write about your character's thoughts as they give a big presentation.", "Write about a picnic, but give it a plot twist.", 
    "Your character is the last one left to save the world. Write about their adventure", "Write about a star's life in space."];

var one = false; 
var two = false;
var three = false;
var four = false;
var five = false;
var six = false;
var seven = false;
var eight = false;

var prompt = false;

bookmarks = {
    info: ["prompt", "noun1", "noun2", "noun3", "noun4",
            "noun5", "noun6", "noun7", "noun8", "color"]
}

var bm = JSON.stringify(bookmarks);
var marks = JSON.parse(sessionStorage.getItem('bm'));

function changeEveryword()
{
    document.getElementById("word1").addEventListener("click", function(){
        one = true;
        document.getElementById("word1").style.color = "#3627ab";
        document.getElementById("word1").style.fontWeight = "750";
    });
    document.getElementById("word2").addEventListener("click", function(){
        two = true;
        document.getElementById("word2").style.color = "#3627ab";
        document.getElementById("word2").style.fontWeight = "750";
    });
    document.getElementById("word3").addEventListener("click", function(){
        three = true;
        document.getElementById("word3").style.color = "#3627ab";
        document.getElementById("word3").style.fontWeight = "750";
    });
    document.getElementById("word4").addEventListener("click", function(){
        four = true;
        document.getElementById("word4").style.color = "#3627ab";
        document.getElementById("word4").style.fontWeight = "750";  
    });
    document.getElementById("word5").addEventListener("click", function(){
        five = true;
        document.getElementById("word5").style.color = "#3627ab";
        document.getElementById("word5").style.fontWeight = "750";
    });
    document.getElementById("word6").addEventListener("click", function(){
        six = true;
        document.getElementById("word6").style.color = "#3627ab";
        document.getElementById("word6").style.fontWeight = "750";
    });
    document.getElementById("word7").addEventListener("click", function(){
        seven = true;
        document.getElementById("word7").style.color = "#3627ab";
        document.getElementById("word7").style.fontWeight = "750";
    });
    document.getElementById("word8").addEventListener("click", function(){
        eight = true;
        document.getElementById("word8").style.color = "#3627ab";
        document.getElementById("word8").style.fontWeight = "750";
    });

    if(one==false){
        document.getElementById("word1").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    }
    if(two==false){
        document.getElementById("word2").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    }
    if(three==false){
        document.getElementById("word3").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    }
    if(four==false){
        document.getElementById("word4").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    }
    if(five==false){
        document.getElementById("word5").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    }
    if(six==false){
        document.getElementById("word6").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    }
    if(seven==false){
        document.getElementById("word7").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    }
    if(eight==false){
        document.getElementById("word8").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    }
}

function changePrompt()
{
    document.getElementById("prompt").innerHTML = prompts[Math.floor(Math.random() * prompts.length)];
}

function saveToBookmarkNouns()
{
    if (sessionStorage.getItem('bm') === null) {
        sessionStorage.setItem('bm', bm);    //sets session storage if not already there
    }
    marks = JSON.parse(sessionStorage.getItem('bm')); //parses the most recent storage

    marks.info[1] = document.getElementById("word1").innerHTML;
    marks.info[2] = document.getElementById("word2").innerHTML;
    marks.info[3] = document.getElementById("word3").innerHTML;
    marks.info[4] = document.getElementById("word4").innerHTML;
    marks.info[5] = document.getElementById("word5").innerHTML;
    marks.info[6] = document.getElementById("word6").innerHTML;
    marks.info[7] = document.getElementById("word7").innerHTML;
    marks.info[8] = document.getElementById("word8").innerHTML;

    bm = JSON.stringify(marks); //sends back to stringify
    sessionStorage.setItem('bm', bm); //send most recent changes back to sessionstorage
}

function saveToBookmarkPrompt()
{
    if (sessionStorage.getItem('bm') === null) {
        sessionStorage.setItem('bm', bm);    
    }
    marks = JSON.parse(sessionStorage.getItem('bm'));

    marks.info[0] = document.getElementById("prompt").innerHTML;

    bm = JSON.stringify(marks);
    sessionStorage.setItem('bm', bm);
}

function saveToBookmarkColor()
{
    if (sessionStorage.getItem('bm') === null) {
        sessionStorage.setItem('bm', bm);    
    }
    marks = JSON.parse(sessionStorage.getItem('bm'));
    
    marks.info[9] = document.getElementById("colorHeader").innerHTML

    bm = JSON.stringify(marks);
    sessionStorage.setItem('bm', bm);
}

function addElement() 
{
    if (sessionStorage.getItem('bm') === null) {
        sessionStorage.setItem('bm', bm);    
    }
    marks = JSON.parse(sessionStorage.getItem('bm'));

    
    var completelist= document.getElementById("bookmarkList");
    for(var item in marks.info)
    {
        completelist.innerHTML += "<li class=\"list-group-item\">" + marks.info[item] + "</li>";
    }

    bm = JSON.stringify(marks);
    sessionStorage.setItem('bm', bm);
}