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
    "Write about what a hug feels like.", "Write about your character's thoughts as they give a big presentation", "Write about a picnic, but give it a plot twist."];

function changeEveryword()
{
    document.getElementById("word1").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    document.getElementById("word2").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    document.getElementById("word3").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    document.getElementById("word4").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    document.getElementById("word5").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    document.getElementById("word6").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    document.getElementById("word7").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
    document.getElementById("word8").innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
}

function changePrompt()
{
    document.getElementById("prompt").innerHTML = prompts[Math.floor(Math.random() * prompts.length)];
}