// -------------------------GLOBAL VARIABLES-----------------------------

const namesList = [
    "James",
    "John",
    "Robert",
    "Michael",
    "William",
    "David",
    "Richard",
    "Charles",
    "Joseph",
    "Thomas",
    "Christopher",
    "Daniel",
    "Paul",
    "Mark",
    "Donald",
    "George",
    "Kenneth",
    "Steven",
    "Edward",
    "Brian",
    "Ronald",
    "Anthony",
    "Kevin",
    "Jason",
    "Matthew",
    "Gary",
    "Timothy",
    "Jose",
    "Larry",
    "Jeffrey",
    "Frank",
    "Scott",
    "Eric",
    "Stephen",
    "Andrew",
    "Raymond",
    "Gregory",
    "Joshua",
    "Jerry",
    "Dennis",
    "Walter",
    "Patrick",
    "Peter",
    "Harold",
    "Douglas",
    "Henry",
    "Carl",
    "Arthur",
    "Ryan",
    "Roger",
    "Joe",
    "Juan",
    "Jack",
    "Albert",
    "Jonathan",
    "Justin",
    "Terry",
    "Gerald",
    "Keith",
    "Samuel",
    "Willie",
    "Ralph",
    "Lawrence",
    "Nicholas",
    "Roy",
    "Benjamin",
    "Bruce",
    "Brandon",
    "Adam",
    "Harry",
    "Fred",
    "Wayne",
    "Billy",
    "Steve",
    "Louis",
    "Jeremy",
    "Aaron",
    "Randy",
    "Howard",
    "Eugene",
    "Carlos",
    "Russell",
    "Bobby",
    "Victor",
    "Martin",
    "Ernest",
    "Phillip",
    "Todd",
    "Jesse",
    "Craig",
    "Alan",
    "Shawn",
    "Clarence",
    "Sean",
    "Philip",
    "Chris",
    "Johnny",
    "Earl",
    "Jimmy",
    "Antonio",
    "Danny",
    "Bryan",
    "Tony",
    "Luis",
    "Mike",
    "Stanley",
    "Leonard",
    "Nathan",
    "Dale",
    "Manuel",
    "Rodney",
    "Curtis",
    "Norman",
    "Allen",
    "Marvin",
    "Vincent",
    "Glenn",
    "Jeffery",
    "Travis",
    "Jeff",
    "Chad",
    "Jacob",
    "Lee",
    "Melvin",
    "Alfred",
    "Kyle",
    "Francis",
    "Bradley",
    "Jesus",
    "Herbert",
    "Frederick",
    "Ray",
    "Joel",
    "Edwin",
    "Don",
    "Eddie",
    "Ricky",
    "Troy",
    "Randall",
    "Barry",
    "Alexander",
    "Bernard",
    "Mario",
    "Leroy",
    "Francisco",
    "Marcus",
    "Micheal",
    "Theodore",
    "Clifford",
    "Miguel",
    "Oscar",
    "Jay",
    "Jim",
    "Tom",
    "Calvin",
    "Alex",
    "Jon",
    "Ronnie",
    "Bill",
    "Lloyd",
    "Tommy",
    "Leon",
    "Derek",
    "Warren",
    "Darrell",
    "Jerome",
    "Floyd",
    "Leo",
    "Alvin",
    "Tim",
    "Wesley",
    "Gordon",
    "Dean",
    "Greg",
    "Jorge",
    "Dustin",
    "Pedro",
    "Derrick",
    "Dan",
    "Lewis",
    "Zachary",
    "Corey",
    "Herman",
    "Maurice",
    "Vernon",
    "Roberto",
    "Clyde",
    "Glen",
    "Hector",
    "Shane",
    "Ricardo",
    "Sam",
    "Rick",
    "Lester",
    "Brent",
    "Ramon",
    "Charlie",
    "Tyler",
    "Gilbert",
    "Gene",
    "Marc",
    "Reginald",
    "Ruben",
    "Brett",
    "Angel",
    "Nathaniel",
    "Rafael",
    "Leslie",
    "Edgar",
    "Milton",
    "Raul",
    "Ben",
    "Chester",
    "Cecil",
    "Duane",
    "Franklin",
    "Andre",
    "Elmer",
    "Brad",
    "Gabriel",
    "Ron",
    "Mitchell",
    "Roland",
    "Arnold",
    "Harvey",
    "Jared",
    "Adrian",
    "Karl",
    "Cory",
    "Claude",
    "Erik",
    "Darryl",
    "Jamie",
    "Neil",
    "Jessie",
    "Christian",
    "Javier",
    "Fernando",
    "Clinton",
    "Ted",
    "Mathew",
    "Tyrone",
    "Darren",
    "Lonnie",
    "Lance",
    "Cody",
    "Julio",
    "Kelly",
    "Kurt",
    "Allan",
    "Nelson",
    "Guy",
    "Clayton",
    "Hugh",
    "Max",
    "Dwayne",
    "Dwight",
    "Armando",
    "Felix",
    "Jimmie",
    "Everett",
    "Jordan",
    "Ian",
    "Wallace",
    "Ken",
    "Bob",
    "Jaime",
    "Casey",
    "Alfredo",
    "Alberto",
    "Dave",
    "Ivan",
    "Johnnie",
    "Sidney",
    "Byron",
    "Julian",
    "Isaac",
    "Morris",
    "Clifton",
    "Willard",
    "Daryl",
    "Ross",
    "Virgil",
    "Andy",
    "Marshall",
    "Salvador",
    "Perry",
    "Kirk",
    "Sergio",
    "Marion",
    "Tracy",
    "Seth",
    "Kent",
    "Terrance",
    "Rene",
    "Eduardo",
    "Terrence",
    "Enrique",
    "Freddie",
    "Wade",
    "Mary",
    "Patricia",
    "Linda",
    "Barbara",
    "Elizabeth",
    "Jennifer",
    "Maria",
    "Susan",
    "Margaret",
    "Dorothy",
    "Lisa",
    "Nancy",
    "Karen",
    "Betty",
    "Helen",
    "Sandra",
    "Donna",
    "Carol",
    "Ruth",
    "Sharon",
    "Michelle",
    "Laura",
    "Sarah",
    "Kimberly",
    "Deborah",
    "Jessica",
    "Shirley",
    "Cynthia",
    "Angela",
    "Melissa",
    "Brenda",
    "Amy",
    "Anna",
    "Rebecca",
    "Virginia",
    "Kathleen",
    "Pamela",
    "Martha",
    "Debra",
    "Amanda",
    "Stephanie",
    "Carolyn",
    "Christine",
    "Marie",
    "Janet",
    "Catherine",
    "Frances",
    "Ann",
    "Joyce",
    "Diane",
    "Alice",
    "Julie",
    "Heather",
    "Teresa",
    "Doris",
    "Gloria",
    "Evelyn",
    "Jean",
    "Cheryl",
    "Mildred",
    "Katherine",
    "Joan",
    "Ashley",
    "Judith",
    "Rose",
    "Janice",
    "Kelly",
    "Nicole",
    "Judy",
    "Christina",
    "Kathy",
    "Theresa",
    "Beverly",
    "Denise",
    "Tammy",
    "Irene",
    "Jane",
    "Lori",
    "Rachel",
    "Marilyn",
    "Andrea",
    "Kathryn",
    "Louise",
    "Sara",
    "Anne",
    "Jacqueline",
    "Wanda",
    "Bonnie",
    "Julia",
    "Ruby",
    "Lois",
    "Tina",
    "Phyllis",
    "Norma",
    "Paula",
    "Diana",
    "Annie",
    "Lillian",
    "Emily",
    "Robin",
    "Peggy",
    "Crystal",
    "Gladys",
    "Rita",
    "Dawn",
    "Connie",
    "Florence",
    "Tracy",
    "Edna",
    "Tiffany",
    "Carmen",
    "Rosa",
    "Cindy",
    "Grace",
    "Wendy",
    "Victoria",
    "Edith",
    "Kim",
    "Sherry",
    "Sylvia",
    "Josephine",
    "Thelma",
    "Shannon",
    "Sheila",
    "Ethel",
    "Ellen",
    "Elaine",
    "Marjorie",
    "Carrie",
    "Charlotte",
    "Monica",
    "Esther",
    "Pauline",
    "Emma",
    "Juanita",
    "Anita",
    "Rhonda",
    "Hazel",
    "Amber",
    "Eva",
    "Debbie",
    "April",
    "Leslie",
    "Clara",
    "Lucille",
    "Jamie",
    "Joanne",
    "Eleanor",
    "Valerie",
    "Danielle",
    "Megan",
    "Alicia",
    "Suzanne",
    "Michele",
    "Gail",
    "Bertha",
    "Darlene",
    "Veronica",
    "Jill",
    "Erin",
    "Geraldine",
    "Lauren",
    "Cathy",
    "Joann",
    "Lorraine",
    "Lynn",
    "Sally",
    "Regina",
    "Erica",
    "Beatrice",
    "Dolores",
    "Bernice",
    "Audrey",
    "Yvonne",
    "Annette",
    "June",
    "Samantha",
    "Marion",
    "Dana",
    "Stacy",
    "Ana",
    "Renee",
    "Ida",
    "Vivian",
    "Roberta",
    "Holly",
    "Brittany",
    "Melanie",
    "Loretta",
    "Yolanda",
    "Jeanette",
    "Laurie",
    "Katie",
    "Kristen",
    "Vanessa",
    "Alma",
    "Sue",
    "Elsie",
    "Beth",
    "Jeanne",
    "Vicki",
    "Carla",
    "Tara",
    "Rosemary",
    "Eileen",
    "Terri",
    "Gertrude",
    "Lucy",
    "Tonya",
    "Ella",
    "Stacey",
    "Wilma",
    "Gina",
    "Kristin",
    "Jessie",
    "Natalie",
    "Agnes",
    "Vera",
    "Willie",
    "Charlene",
    "Bessie",
    "Delores",
    "Melinda",
    "Pearl",
    "Arlene",
    "Maureen",
    "Colleen",
    "Allison",
    "Tamara",
    "Joy",
    "Georgia",
    "Constance",
    "Lillie",
    "Claudia",
    "Jackie",
    "Marcia",
    "Tanya",
    "Nellie",
    "Minnie",
    "Marlene",
    "Heidi",
    "Glenda",
    "Lydia",
    "Viola",
    "Courtney",
    "Marian",
    "Stella",
    "Caroline",
    "Dora",
    "Jo",
    "Vickie",
    "Mattie",
    "Terry",
    "Maxine",
    "Irma",
    "Mabel",
    "Marsha",
    "Myrtle",
    "Lena",
    "Christy",
    "Deanna",
    "Patsy",
    "Hilda",
    "Gwendolyn",
    "Jennie",
    "Nora",
    "Margie",
    "Nina",
    "Cassandra",
    "Leah",
    "Penny",
    "Kay",
    "Priscilla",
    "Naomi",
    "Carole",
    "Brandy",
    "Olga",
    "Billie",
    "Dianne",
    "Tracey",
    "Leona",
    "Jenny",
    "Felicia",
    "Sonia",
    "Miriam",
    "Velma",
    "Becky",
    "Bobbie",
    "Violet",
    "Kristina",
    "Toni",
    "Misty",
    "Mae",
    "Shelly",
    "Daisy",
    "Ramona",
    "Sherri",
    "Erika",
    "Katrina",
    "Claire"
];



const prefixM = [
    "lord",
    "earl",
    "mr",
    "sir",
    "dr",
    "doctor",
    // name only
    "yourmajesty",
    "saint",
    "prince",
    "king",
    "handsome",
    "awesome",
    "amazing",
    "cool",
    "hot",
    "jacked",
    "party",
    "don",
    "captain"
]

const prefixF = [
    "lady",
    "mrs",
    "ms",
    "madam",
    //name only
    "yourmajesty",
    "cutie",
    "awesome",
    "amazing",
    "cool",
    "party",
    "queen",
    "princess",
    "saint"
]

const postfixM = [
    "theimpaler",
    "theterrible",
    "thegreat"
]

const postfixF = [
    "thegreat"
]

const adj = [
    "abrupt",
    "acidic",
    "adorable",
    "amiable",
    "amused",
    "average",
    "batty",
    "bored",
    "brave",
    "bright",
    "broad",
    "charming",
    "cheeky",
    "cheerful",
    "chubby",
    "clean",
    "clear",
    "cloudy",
    "crooked",
    "cruel",
    "cumbersome",
    "curved",
    "cynical",
    "dangerous",
    "dashing",
    "decayed",
    "deceitful",
    "deep",
    "defeated",
    "dizzy",
    "drab",
    "drained",
    "dull",
    "eager",
    "elegant",
    "emaciated",
    "embarrassed",
    "enchanting",
    "energetic",
    "fancy",
    "fantastic",
    "fierce",
    "filthy",
    "flat",
    "floppy",
    "fluttering",
    "foolish",
    "frantic",
    "fresh",
    "friendly",
    "gentle",
    "ghastly",
    "giddy",
    "gigantic",
    "glamorous",
    "gleaming",
    "glorious",
    "gorgeous",
    "graceful",
    "greasy",
    "grieving",
    "gritty",
    "grotesque",
    "healthy",
    "helpful",
    "helpless",
    "high",
    "hollow",
    "homely",
    "horrific",
    "huge",
    "hungry",
    "hurt",
    "icy",
    "ideal",
    "irritable",
    "itchy",
    "jealous",
    "jittery",
    "jolly",
    "icy",
    "ideal",
    "jolly",
    "joyous",
    "juicy",
    "jumpy",
    "kind",
    "lethal",
    "lucky",
    "ludicrous",
    "macho",
    "narrow",
    "nasty",
    "naughty",
    "nervous",
    "nutty",
    "perfect",
    "perplexed",
    "petite",
    "petty",
    "plain",
    "pleasant",
    "poised",
    "pompous",
    "precious",
    "prickly",
    "proud",
    "pungent",
    "puny",
    "quaint",
    "reassured",
    "relieved",
    "repulsive",
    "responsive",
    "ripe",
    "robust",
    "rotten",
    "rotund",
    "rough",
    "round",
    "salty",
    "sarcastic",
    "scant",
    "shaggy",
    "shaky",
    "shallow",
    "sharp",
    "shiny",
    "short",
    "silky",
    "silly",
    "skinny",
    "slimy",
    "slippery",
    "tasty",
    "teeny",
    "tender",
    "tense",
    "terrible",
    "testy",
    "thankful",
    "thick",
    "tight",
    "timely",
    "tricky",
    "trite",
    "weary",
    "zany",
    "zealous",
    "zippy",
    "horny",
    "hot",
    "cold",
    "sexy",
    "cool",
    "raw",
    "sloppy",
    "moist",
    "cocky",
    "sleazy"
]

const noun = [
    // ANIMALS
    "dog",
    "cow",
    "cat",
    "horse",
    "donkey",
 	"tiger",
    "lion",
    "panther",
    "leopard",
    "cheetah",
    "bear",
    "polarbear",
    "elephant",
  	"turtle",
    "tortoise",
    "crocodile",
    "rabbit",
 	"porcupine",
    "hare",
    "hen",
    "pigeon",
 	"albatross",
    "crow",
    "fish",
    "dolphin",
 	"frog",
    "whale",
    "alligator",
    "eagle",
 	"squirrel",
    "ostrich",
    "fox",
    "shark",
    "goat",
 	"jackal",
    "emu",
    "armadillo",
    "eel",
 	"goose",
    "arcticfox",
    "wolf",
    "beagle",
    "gorilla",
 	"chimpanzee",
    "monkey",
    "beaver",
 	"orangutan",
    "antelope",
    "bat",
    "badger",
 	"giraffe",
    "crab",
    "giant",
    "panda",
    "hamster",
    "cobra",
    "camel",
    "hawk",
 	"deer",
    "chameleon",
    "hippopotamus",
    "jaguar",
 	"chihuahua",
    "king cobra",
    "ibex",
    "lizard",
 	"koala",
    "kangaroo",
    "iguana",
    "llama",
 	"chinchillas",
    "dodo",
    "jellyfish",
    "rhinoceros",
 	"hedgehog",
    "zebra",
    "possum",
    "wombat",
    "bison",
    "bull",
    "buffalo",
    "sheep",
    "meerkat",
    "mouse",
    "otter",
    "sloth",
    "owl",
    "vulture",
    "flamingo",
    "racoon",
    "mole",
    "duck",
    "swan",
    "lynx",
    "monitor",
    "elk",
    "boar",
    "lemur",
    "mule",
    "baboon",
    "mammoth",
    "bluewhale",
    "rat",
    "snake",
    "peacock",
    // FOODS
    "salad",
    "sandwich",
    "bread",
    "steak",
    "tuna",
    "fish",
    "shrimp",
    "rice",
    "spaghetti",
    "pizza",
    "hamburger",
    "egg",
    "cheese",
    "sausage",
    "apple",
    "grape",
    "juice",
    "milk",
    "candy",
    "cookie",
    "pie",
    "cake",
    "cupcake",
    "mutton",
    "beef",
    "stew",
    "lamb",
    "chicken",
    "turkey",
    "salmon",
    "cod",
    "banana",
    "grapefruit",
    "lasagna",
    "porridge",
    "wheat",
    "kiwi",
    "pineapple",
    "potato",
    "carrot",
    "mint",
    "basil",
    "thyme",
    "pepper",
    "chili",
    "tomato",
    "beets",
    "onion",
    "garlic",
    "mustard",
    "ranch",
    "ketchup",
    "olive",
    "bean",
    "cola",
    "water",
    "jin",
    "whiskey",
    "vodka",
    "tequila",
    "wine",
    "absinthe",
    "beer",
    "champagne"
]

const verb = [
    "have",
    "do",
    "say",
    "go",
    "get",
    "make",
    "know",
    "think",
    "take",
    "see",
    "come",
    "want",
    "look",
    "use",
    "find",
    "give",
    "tell",
    "work",
    "call",
    "try",
    "ask",
    "need",
    "feel",
    "become",
    "leave",
    "put",
    "mean",
    "keep",
    "let",
    "begin",
    "seem",
    "help",
    "talk",
    "turn",
    "start",
    "show",
    "hear",
    "play",
    "run",
    "move",
    "like",
    "live",
    "believe",
    "hold",
    "bring",
    "happen",
    "write",
    "provide",
    "scratch",
    "shag",
    "sit",
    "stand",
    "lose",
    "pay",
    "meet",
    "include",
    "continue",
    "set",
    "learn",
    "change",
    "lead",
    "understand",
    "watch",
    "follow",
    "stop",
    "create",
    "speak",
    "read",
    "allow",
    "add",
    "spend",
    "grow",
    "open",
    "walk",
    "win",
    "offer",
    "remember",
    "love",
    "consider",
    "appear",
    "buy",
    "wait",
    "serve",
    "die",
    "send",
    "expect",
    "build",
    "stay",
    "fall",
    "cut",
    "reach",
    "kill",
    "remain",
    "suggest",
    "raise",
    "pass",
    "sell",
    "require",
    "report",
    "decide",
    "pull",
    "monitor",
    "rub",
    "feel",
    "rid",
    "cool",
    "grip",
    "march",
    "sink",
    "gain",
    "request",
    "strangle",
    "slay",
    "strain",
    "heat",
    "discover",
    "incur",
    "drive",
    "favour",
    "marry",
    "flow",
    "assemble",
    "multiply",
    "succeed",
    "stick",
    "rate",
    "convict",
    "control",
    "load",
    "trade",
    "float",
    "wear",
    "object",
    "weigh",
    "seal",
    "argue",
    "distribute",
    "scream",
    "ask",
    "twist",
    "slip",
    "press",
    "declare",
    "price",
    "entail",
    "install",
    "enclose",
    "waste",
    "chug",
    "score",
    "base",
    "collect",
    "fear",
    "worry",
    "kill",
    "love",
    "die",
    "sniff",
    "squeal",
    "fire",
    "forget",
    "wash",
    "clean",
    "wreck"
]

const bleepArray = [];

const commentsSectionArray = [];

let b = 0; // bleep index

let targetUsername;

function bleepTemplate() {
return `<div class="bleep" id=bleep${b}>
    <img class="profileImage" alt="Profile Image">
    <header class="infoContainer">
        <h5 class="profileName"></h5>
        <h6 class="profileUsername"></h6>
        <time class="timestamp"></time>
        <button class="topRightButton"><img src="svgs/report_off.svg"></button>
    </header>
    <div class="topRightPopUp off">
        <button class="blockButton">Block</button>
        <button class="reportButton">Report</button>
    </div>

    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque, molestias laudantium omnis suscipit cumque delectus, tempore doloribus tempora ut nemo, sapiente mollitia! Sit, facilis.</p>
    
    <div class="actionbar">
        <button class="shareButton">
            <label for="shares" class="shareCounter"></label>
            <img src="svgs/share_off.svg" class="shareButtonImage">
        </button>

        <button class="commentButton">
            <label for="comments" class="commentCounter"></label>
            <img src="svgs/comment_off.svg" class="commentButtonImage">
        </button>

        <button class="likeButton">
            <label for="likes" class="likeCounter"></label>
            <img src="svgs/like_off.svg" class="likeButtonImage">
        </button>
    </div>
</div>`;}

function commentsSectionTemplate(b) {
  return`<section class="commentsSection" id="commentsSection${b}">
        <div class="commentsSectionButtons">
            <button class="hideButton">Hide</button>
            <button class="moreButton">More >></button>
        </div>
    </section>`
}

// -------------------------CLASSES-----------------------------

class Generic {
    constructor(element){
        this.itself = document.querySelector(`${element}`);
    }
}

class BleepList extends Generic {
    generateNewBleeps(number){
        for (const initial=b; b<initial+number; b++) {
            this.itself.insertAdjacentHTML('beforeend', bleepTemplate());
            bleepArray[b] = new Bleep(`#bleep${b}`);
            bleepArray[b].updateValues();
            bleepArray[b].setEventListeners();
        }
    }
}

class Bleep extends Generic {
    constructor(element) {
        super(element)
        this.image = imagePicker();
        this.name = namePicker();
        this.username = usernamePicker(this.name);
        this.time = timeSetter();
        this.shares = x(300);
        this.comments = x(150);
        this.likes = x(19500)+500;
        this.profileImage = this.itself.querySelector(".profileImage");
        this.profileName = this.itself.querySelector(".profileName");
        this.profileUsername = this.itself.querySelector(".profileUsername");
        this.timestamp = this.itself.querySelector(".timestamp");
        this.topRightButton = this.itself.querySelector(".topRightButton");
        this.topRightPopUp = this.itself.querySelector(".topRightPopUp");
        this.blockButton = this.itself.querySelector(".blockButton");
        this.reportButton = this.itself.querySelector(".reportButton");
        this.shareButton = this.itself.querySelector(".shareButton");
        this.shareCounter = this.itself.querySelector(".shareCounter");
        this.commentButton = this.itself.querySelector(".commentButton");
        this.commentButtonImage = this.itself.querySelector('.commentButtonImage')
        this.commentCounter = this.itself.querySelector(".commentCounter");
        this.likeButton = this.itself.querySelector(".likeButton");
        this.likeButtonImage = this.itself.querySelector('.likeButtonImage')
        this.likeCounter = this.itself.querySelector(".likeCounter");    
    }

    updateValues() {
        this.profileImage.src = this.image;
        this.profileName.innerText = this.name;
        this.profileUsername.innerText = this.username;
        this.timestamp.innerText = timeToText(this.time);
        this.shareCounter.innerText = this.shares+'+';
        this.commentCounter.innerText = this.comments;
        this.likeCounter.innerText = this.likes;
    }

    setEventListeners() {
        this.topRightButton.addEventListener('click', e =>{
            toggleDisplayNoneOf(this.topRightPopUp);
        })
        this.blockButton.addEventListener('click', e =>{
            toggleDisplayNoneOf(blockPopUp.itself, this.topRightPopUp);
            toggleBodyNoScroll();
            this.passInfoTo(blockPopUp);
        })
        this.reportButton.addEventListener('click', e => {
            toggleDisplayNoneOf(reportPopUp.itself, this.topRightPopUp);
            toggleBodyNoScroll();
            this.passInfoTo(confirmReportPopUp);
        })
        this.likeButton.addEventListener('click', e => {
            if (this.likeButtonImage.src === 'http://127.0.0.1:5500/svgs/like_off.svg'){
                this.likeButtonImage.src = 'http://127.0.0.1:5500/svgs/like_on.svg';
                this.likes++;
            }else{
                this.likeButtonImage.src = 'http://127.0.0.1:5500/svgs/like_off.svg';
                this.likes--;
            }
            this.updateNumbers();
        })
        this.commentButton.addEventListener("click", e => {
            this.generateCommentsSection(); 
        })
    }

    passInfoTo (element){
        element.profileImage.src = this.image;
        element.profileName.innerText = this.name;
        element.profileUsername.innerText = this.username;
        element.target = this.itself;
    }

    updateNumbers() {
        this.timestamp.innerText = this.time;
        this.shareCounter.innerText = this.shares+'+';
        this.commentCounter.innerText = this.comments;
        this.likeCounter.innerText = this.likes;
    }

    generateCommentsSection() {
        this.itself.insertAdjacentHTML('afterend', commentsSectionTemplate(b));
        commentsSectionArray[b] = new CommentsSection(`#commentsSection${b}`);
        commentsSectionArray[b].setEventListeners();
    }
}

class Navbar extends Generic {
    constructor(element) {
        super(element)
        this.leftButton = this.itself.querySelector(`.leftButton`);
        this.leftButtonImage = this.leftButton.querySelector(`img`);
        this.centerButton = this.itself.querySelector(`.centerButton`);
        this.rightButton = this.itself.querySelector(`.rightButton`);
        this.rightButtonImage = this.rightButton.querySelector(`img`);
    }
}

class MainNav extends Navbar {
    setEventListeners(){
        this.leftButton.addEventListener('click', e => {
            toggleDisplayNoneOf(settings.itself, settingsNav.itself);
            toggleBodyNoScroll();
        })
        this.centerButton.addEventListener('click', e => {
            composeNav.updateCharsLeftCounter();
            toggleDisplayNoneOf(composeArea.itself, composeNav.itself);
            autoSize(composeBleep.textarea)
            composeBleep.textarea.focus();
            toggleBodyNoScroll();
        })
    }
}

class ComposeNav extends Navbar {
    setEventListeners(){
        this.leftButton.addEventListener('click', e => {
            toggleDisplayNoneOf(composeArea.itself, composeNav.itself);
            toggleBodyNoScroll();
        })
    }

    updateCharsLeftCounter() {
        const charsLeft = 300 - composeBleep.textarea.value.length;
        if (charsLeft > 1){
            this.centerButton.innerText = `${charsLeft} characters left`;
        }
        else if (charsLeft === 1){
            this.centerButton.innerText = `1 characters left`;
        }else{
            this.centerButton.innerText = `0 character left`;
        }
    }
}

class SettingsNav extends Navbar {
    setEventListeners(){
        this.rightButton.addEventListener('click', e => {
            toggleDisplayNoneOf(this.itself, settings.itself);
            toggleBodyNoScroll();
        })
    }
}

class ComposeBleep extends Generic {
    constructor(element) {
        super(element)
        this.profileImage = this.itself.querySelector(`.profileImage`);
        this.profileName = this.itself.querySelector(`.profileUsername`);
        this.profileUsername = this.itself.querySelector(`.profileUsername`);
        this.timestamp = this.itself.querySelector(`.timestamp`);
        this.topRightButton = this.itself.querySelector(`.topRightButton`);
        this.textarea = this.itself.querySelector(`textarea`);
    }

    setEventListeners() {
        this.textarea.addEventListener('input', e => {
            composeNav.updateCharsLeftCounter();
            this.textarea.setAttribute('rows', 1);
            autoSize(this.textarea);
            composeBleep.textarea.focus();
        })
        this.topRightButton.addEventListener('click', e=> {
            toggleDisplayNoneOf(eraseWarning.itself);
        })
    }
}

function autoSize(element) {
    let rowNumber = element.scrollHeight/19;
    element.setAttribute('rows', rowNumber);
}

class Warning extends Generic {
    constructor(element) {
        super(element)
        this.message = this.itself.querySelector(`.message`);
        this.leftButton = this.itself.querySelector(`.leftButton`);
        this.rightButton = this.itself.querySelector(`.rightButton`);
    }
}

class EraseWarning extends Warning {
    setEventListeners(){
        this.leftButton.addEventListener('click', e => {
            composeBleep.textarea.value = null;
            composeBleep.textarea.setAttribute('rows', 1);
            composeNav.updateCharsLeftCounter();
            toggleDisplayNoneOf(this.itself);
        })
        this.rightButton.addEventListener('click', e => {
            toggleDisplayNoneOf(this.itself);
        })
    }
}

class PopUp extends Warning {
    constructor(element){
        super(element)
        this.select = this.itself.querySelector(`select`);
    }
    setEventListeners(){
        this.leftButton.addEventListener('click', e => {
            confirmReportPopUp.reason.innerText = this.select.value
            toggleDisplayNoneOf(this.itself, confirmReportPopUp.itself)

        })
        this.rightButton.addEventListener('click', e => {
            toggleDisplayNoneOf(this.itself);
            toggleBodyNoScroll();
        })
    }
}

class RemovePopUp extends Warning {
    constructor(element) {
        super(element)
        this.target;
        this.profileImage = this.itself.querySelector(`.profileImage`);
        this.profileName = this.itself.querySelector(`.profileName`);
        this.profileUsername = this.itself.querySelector(`.profileUsername`);
    }
    setEventListeners(){
        this.leftButton.addEventListener('click', e => {
            this.target.remove();
            toggleDisplayNoneOf(this.itself);
            toggleBodyNoScroll();
        })
        this.rightButton.addEventListener('click', e => {
            toggleDisplayNoneOf(this.itself);
            toggleBodyNoScroll();
        })
    }
}

class ConfirmReportPopUp extends RemovePopUp {
    constructor(element) {
        super(element)
        this.reason = this.itself.querySelector(`#reason`);
    }
}

class CommentsSection extends Generic {
    constructor (element) {
        super(element)
        this.hideButton = this.itself.querySelector(`.hideButton`);
        this.moreButton = this.itself.querySelector(`.moreButton`);
    }

    generateNewBleeps(number){
        for (const initial=b; b<initial+number; b++) {
            this.itself.insertAdjacentHTML('afterbegin', bleepTemplate(b));
            bleepArray[b] = new Bleep(`#bleep${b}`);
            bleepArray[b].updateValues();
            bleepArray[b].setEventListeners();
        }
    }

    setEventListeners() {
        this.hideButton.addEventListener('click', e=> {
            toggleDisplayNoneOf(this.itself);
        })
    }
}

// -------------------------GLOBAL FUNCTIONS-----------------------------

const x = (limit) => Math.floor(Math.random() * limit)

function toggleDisplayNoneOf() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].classList.toggle("off");
    }
}

// ---------------ELEMENTS
const bleepList = new BleepList('#bleepList');
const mainNav = new MainNav(`#mainNav`);
const composeBleep = new ComposeBleep(`#composeBleep`);
const composeNav = new ComposeNav(`#composeNav`);
const blockPopUp = new RemovePopUp(`#blockPopUp`);
const confirmReportPopUp = new ConfirmReportPopUp(`#confirmReportPopUp`);
const eraseWarning = new EraseWarning(`#eraseWarning`);
const composeArea = new Generic(`#composeArea`);
const settings = new Generic(`#settings`);
const settingsNav = new SettingsNav(`#settingsNav`);
const reportPopUp = new PopUp(`#reportPopUp`);

// ----------------------------ONLOAD-----------------------------

window.onload=pageSetup();

function pageSetup() {
    window.scrollTo(0, 0);
    bleepList.generateNewBleeps(10);
    mainNav.setEventListeners();
    composeNav.setEventListeners();
    composeBleep.setEventListeners();
    eraseWarning.setEventListeners();
    settingsNav.setEventListeners();
    blockPopUp.setEventListeners();
    confirmReportPopUp.setEventListeners();
    reportPopUp.setEventListeners();
}

function toggleBodyNoScroll() {
    document.body.classList.toggle("noscroll");
}

// ---------------------------INFINITE SCROLL---------------------------

const action = entries => {
    let targ = entries[0];
    if (targ.isIntersecting) {
        viewport.unobserve(targetBleep);
        bleepList.generateNewBleeps(10);
        targetBleep = document.querySelectorAll(".bleep")[b-2];
        viewport.observe(targetBleep);
    }
}

const options = {
    rootMargin: "-10%"
}

const viewport = new IntersectionObserver(action, options);
let targetBleep = document.querySelectorAll(".bleep")[b-2];

viewport.observe(targetBleep);

// ----------------------------GLOBAL LISTENERS-----------------------------

//-----------MAIN PAGE

//-----------COMPOSE PAGE


//# backspace registers as -character after a long series of inputs`

function blockUser(b){
    const bleepUsername = document.querySelectorAll(".profileUsername");
    for (let n=0; n<b; n++) {
        if (bleepUsername[n].innerText === targetUsername){
            bleepUsername[n].closest(".bleep").remove();
        }
    }
}

// ----------------------------BLEEP CREATION------------------------------

function setupBleep(b, place, position, content) {
    place.insertAdjacentHTML(position, content);
    bleepArray[b] = new Bleep(`#bleep${b}`);
    bleepArray[b].updateValues();
    bleepArray[b].setEventListeners();
}

// ----------------------------PROFILE CREATION------------------------------

function createProfile(b){
    bleepArray[b].setValues();
    bleepArray[b].updateValues();

}

//^ SATISFIED
function genderPicker(){
    let n = x(2);
    if (n === 0) {
        return "male";
        }
    return "female";
}

//^ SATISFIED
function imagePicker() {
    let n = x(50);
    return `pics/${n}.jpg`;
}

//^ SATISFIED
function namePicker() {
    let n = x(600);
    return namesList[n];

}

//# WORKS, Needs more options
function usernamePicker(name) {
    return '@'+name.toLowerCase();
}

function timeSetter(limit) {
    if (!limit) {
    return Date.now() - x(150)*1000;
    }
    return limit - x(150)*1000;
}

function timeToText(timestamp) {
    const difference = (Date.now() - timestamp)/1000
    if (difference<60) return `Less than a minute ago`
    if (difference<120) return `One minute ago`
    if (difference<3600) return `${Math.floor(difference/60)} minutes ago`
    if (difference<7200) return `One hour ago`
    if (difference<86400) return `${Math.floor((difference/60)/60)} hours ago`
}