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
  "Claire",
];

const prefix = [
  "bot",
  "bot",
  "machinned",
  "machinned_",
  "wellmachined",
  "well_machined_",
  "shiny",
  "shiny_",
  "welloiled",
  "well_oiled_",
  "fast",
  "fast_",
  "binary",
  "binary_",
  "terminator",
  "terminator_",
  "friendly",
  "friendly_",
  "automaton",
  "automaton_",
  "autobot",
  "autobot_",
  "optimus",
  "optimus_",
  "clever",
  "clever_",
  "smart",
  "smart_",
  "i",
  "tighttolerance",
  "tight_tolerance_",
  "quantum",
  "quantum_",
];

const postfix = [
  "theterminator",
  "_the_terminator",
  "bot",
  "_bot",
  "thesuperbot",
  "_the_superbot",
  "_the_super_bot",
  "thebot",
  "_the_bot",
  "lovesoil",
  "_loves_oil",
  "likesoil",
  "_likes_oil",
  "thecalculator",
  "_the_calculator",
];

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
  "sleazy",
];

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
  "champagne",
];

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
  "wreck",
];

const bleep = [];

const commentsSectionArray = [];

let bi = 0; // bleep index

let targetUsername;

function bleepTemplate() {
  return `<div class='bleep' id=bleep${bi}>
    <img class='profileImage' alt='Profile Image'>
    <header class='infoContainer'>
        <h5 class='profileName'></h5>
        <h6 class='profileUsername'></h6>
        <time class='timeStamp'></time>
        <button class='topRightButton'>
            <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 600 600" xml:space="preserve">
                <path class="svg1" d="M300,0C134.3,0,0,134.3,0,300s134.3,300,300,300s300-134.3,300-300S465.7,0,300,0z M300,525
                C175.7,525,75,424.3,75,300S175.7,75,300,75s225,100.7,225,225S424.3,525,300,525z"/>
                <path class="svg2 off" d="M600,300c0,165.7-134.3,300-300,300S0,465.7,0,300S134.3,0,300,0S600,134.3,600,300z"/>
            </svg>
        </button>
    </header>
    
    <div class=textField>
    <p class='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. NostrLorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quLorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quLorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quum qui vel earum vero impedit aperiam a quos quibusdam ex laudantium, nisi ullam sequi deleniti id!</p>
    <div class='hiddenMenu blockMenu off'>
        <button class='blockButton'>Block</button>
        <button class='reportButton'>Report</button>
    </div>
    <div class='hiddenMenu shareMenu off'>
        <button class='copyButton'>Copy link</button>
        <button class='viaButton'>Share via..</button>
    </div>
    </div>

    <div class='actionbar'>
        <button class='leftButton'>
            <label class='sharesCounter'></label>
            <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 600 600" xml:space="preserve">
                <path class="svg1" d="M0,300c0,82.8,67.2,150,150,150c42.8,0,81.4-17.9,108.7-46.7l117.8,65.5c-1,6.1-1.6,12.3-1.6,18.7
                c0,62.1,50.4,112.5,112.5,112.5S600,549.6,600,487.5S549.6,375,487.5,375c-28.6,0-54.7,10.7-74.5,28.2l-117.8-65.4
                c3.1-12.1,4.8-24.7,4.8-37.8s-1.7-25.7-4.8-37.8L413,196.8c19.8,17.6,45.9,28.2,74.5,28.2c62.1,0,112.5-50.4,112.5-112.5
                S549.6,0,487.5,0S375,50.4,375,112.5c0,6.4,0.5,12.7,1.6,18.7l-117.8,65.5C231.4,167.9,192.8,150,150,150C67.2,150,0,217.2,0,300z
                M450,112.5c0-20.7,16.8-37.5,37.5-37.5S525,91.8,525,112.5S508.2,150,487.5,150S450,133.2,450,112.5z M450,487.5
                c0-20.7,16.8-37.5,37.5-37.5s37.5,16.8,37.5,37.5S508.2,525,487.5,525S450,508.2,450,487.5z M75,300c0-41.4,33.6-75,75-75
                s75,33.6,75,75s-33.6,75-75,75S75,341.4,75,300z"/>
                <path class="svg2 off" d="M600,487.5c0,62.1-50.5,112.5-112.6,112.5s-112.5-50.4-112.5-112.5c0-6.4,0.6-12.6,1.6-18.7l-117.8-65.5
                C231.4,432.1,192.8,450,150,450C67.2,450,0,382.8,0,300s67.2-150,150-150c42.8,0,81.4,17.9,108.8,46.7l117.8-65.5
                c-1.1-6-1.6-12.3-1.6-18.7C375,50.4,425.4,0,487.5,0S600,50.4,600,112.5S549.6,225,487.5,225c-28.6,0-54.7-10.6-74.5-28.2
                l-117.8,65.4c3.1,12.1,4.8,24.7,4.8,37.8s-1.7,25.7-4.8,37.8L413,403.2c19.8-17.5,45.9-28.2,74.5-28.2
                C549.6,375,600,425.4,600,487.5z"/>
            </svg>
        </button>

        <button class='centerButton'>
            <label class='commentsCounter'></label>
            <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 600 600" xml:space="preserve">
                        <g class="svg1">
                            <path d="M525,56.3H75c-41.4,0-75,33.6-75,75v412.5c0,20.7,16.8,37.5,37.5,37.5c8.4,0,16.2-2.8,22.5-7.5l0.1-0.1
                            L75,562.5l64.9-48.6c0.1-0.1,0.3-0.2,0.4-0.3c6.2-4.6,13.9-7.3,22.2-7.3H525c41.4,0,75-33.6,75-75V131.3
                            C600,89.8,566.4,56.3,525,56.3z M525,412.5c0,10.4-8.4,18.8-18.8,18.8H137.5c-8.3,0-16,2.7-22.3,7.3c-0.1,0.1-0.2,0.2-0.3,0.3
                            L90,457.5c-1.6,1.2-3.5,1.9-5.6,1.9c-5.2,0-9.4-4.2-9.4-9.4V150c0-10.4,8.4-18.8,18.8-18.8h412.5c10.4,0,18.8,8.4,18.8,18.8
                            L525,412.5L525,412.5z"/>
                            <path d="M450,273.8c0,20.7-16.8,37.5-37.5,37.5h-225c-20.7,0-37.5-16.8-37.5-37.5s16.8-37.5,37.5-37.5h225
                            C433.2,236.3,450,253,450,273.8z"/>
                        </g>
                        <path class="svg2 off" d="M525,56.3H75c-41.4,0-75,33.6-75,75v412.5c0,20.7,16.8,37.5,37.5,37.5c8.4,0,16.2-2.8,22.5-7.5l0.1-0.1
                        L75,562.5l64.9-48.6c0.1-0.1,0.3-0.2,0.4-0.3c6.2-4.6,13.9-7.3,22.2-7.3H525c41.4,0,75-33.6,75-75V131.3
                        C600,89.8,566.4,56.3,525,56.3z M412.5,311.3h-225c-20.7,0-37.5-16.8-37.5-37.5s16.8-37.5,37.5-37.5h225
                        c20.7,0,37.5,16.8,37.5,37.5S433.2,311.3,412.5,311.3z"/>
                    </svg>
        </button>

        <button class='rightButton'>
            <label class='likesCounter'></label>
            <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 600 600" xml:space="preserve">
                <path class="svg1" d="M450,37.5c-44.5,0-84.5,19.4-112,50.2c-0.2,0.2-24,27-24,27c0,0-0.1,0.1-0.1,0.2c-3.4,3.8-8.4,6.1-13.8,6.1
                c-5.5,0-10.4-2.3-13.8-6.1c0-0.1-0.1-0.1-0.1-0.2c0,0-23.8-26.8-24-27c-27.5-30.8-67.5-50.2-112-50.2c-82.8,0-150,67.2-150,150
                c0,39.3,15.1,75,39.8,101.8L272,549.9c6.9,7.7,16.9,12.6,28,12.6c11.1,0,21.1-4.8,28-12.6l232.2-260.6
                c24.7-26.7,39.8-62.5,39.8-101.8C600,104.7,532.8,37.5,450,37.5z M506.1,237.3L506.1,237.3c-0.5,0.5-86.5,97.1-86.5,97.1L314,452.9
                c0,0-0.1,0.1-0.1,0.2c-3.4,3.8-8.4,6.1-13.8,6.1c-5.5,0-10.4-2.4-13.8-6.1c0-0.1-0.1-0.1-0.1-0.2L180.5,334.4
                c0,0-86.2-96.7-86.5-97.1c-27.5-31-24.7-78.4,6.3-105.9c30.9-27.4,78.1-24.7,105.6,6c0.1,0.1,0.2,0.2,0.2,0.3
                c0.1,0.1,0.1,0.2,0.2,0.3l65.7,73.8c6.9,7.7,16.9,12.6,28,12.6c11.1,0,21.1-4.8,28-12.6l65.9-74c0,0,0,0,0,0c0,0,0,0,0,0
                c27.5-30.9,74.9-33.7,105.8-6.2C530.8,158.9,533.6,206.3,506.1,237.3z"/>
                <path class="svg2 off" d="M600,187.5c0,39.3-15.1,75-39.8,101.8L328,549.9c-6.9,7.7-16.9,12.6-28,12.6s-21.1-4.8-28-12.6L39.8,289.3
                C15.1,262.5,0,226.8,0,187.5c0-82.8,67.2-150,150-150c44.5,0,84.5,19.4,112,50.2c0.2,0.2,24,27,24,27c0,0,0.1,0.1,0.1,0.2
                c3.4,3.8,8.4,6.1,13.8,6.1s10.4-2.4,13.8-6.1c0-0.1,0.1-0.1,0.1-0.2c0,0,23.9-26.8,24-27c27.5-30.8,67.5-50.2,112-50.2
                C532.8,37.5,600,104.7,600,187.5z"/>
            </svg>
        </button>
    </div>
</div>`;
}

function commentsSectionTemplate(bi) {
  return `<section class='commentsSection' id='commentsSection${bi}'>
        <div class='commentsSectionButtons'>
            <button class='hideButton'>Hide</button>
            <button class='moreButton'>More >></button>
        </div>
    </section>`;
}

// -------------------------OBJECTS-----------------------------

let timeLimit;

const localSt = {
  add(code, value) {
    let key;
    if (code === "email") key = "emailList";
    if (code === "password") key = "passwordList";
    if (code === "name") key = "nameList";
    if (code === "username") key = "usernameList";
    let list;
    if (!localStorage.getItem(key)) list = [];
    else list = localStorage.getItem(key).split(",");
    list.push(value);
    localStorage.setItem(key, list);
  },
};

let logged = {
  get status() {
    return localStorage.getItem("logged");
  },

  change() {
    console.log(logged);
    if (!logged) {
      localStorage.setItem("logged", true);
    } else {
      localStorage.setItem("logged", false);
    }
  },
};

class Generic {
  constructor(identifier) {
    this.itself = document.querySelector(`${identifier}`);
  }
}

class Infobox extends Generic {
  invoke(text) {
    this.itself.innerText = text;
    this.itself.classList.toggle("off");
    setTimeout((e) => {
      this.itself.classList.toggle("off");
    }, 1000);
  }
}

class Settings extends Generic {
  constructor(identifier) {
    super(identifier);
    this.accountSettings = this.itself.querySelector(`#accountSettings`);
    this.blockList = this.itself.querySelector(`#blockList`);
    this.language = this.itself.querySelector(`#language`);
    this.appearance = this.itself.querySelector(`#appearance`);
    this.logOut = this.itself.querySelector(`#logOut`);
    this.clearLS = this.itself.querySelector(`#clearLS`);
    this.about = this.itself.querySelector(`#about`);

    this.logOut.addEventListener("click", (e) => {
      logged.change();
    });
    this.clearLS.addEventListener("click", (e) => {
      localStorage.clear();
    });
  }
}

class BleepList extends Generic {
  generateNewBleeps(number) {
    for (const initial = bi; bi < initial + number; bi++) {
      bleep[bi] = new Bleep(`#bleep${bi}`);
    }
  }
}

class BleepCarcass extends Generic {
  constructor(identifier) {
    super(identifier);
    this.profileImage = this.itself.querySelector(`.profileImage`);
    this.profileName = this.itself.querySelector(`.profileName`);
    this.profileUsername = this.itself.querySelector(`.profileUsername`);
    this.timeStamp = this.itself.querySelector(`.timeStamp`);
    this.leftButton = this.itself.querySelector(`.leftButton`);
    this.leftButtonSVG1 = this.leftButton.querySelector(`.svg1`);
    this.leftButtonSVG2 = this.leftButton.querySelector(`.svg2`);
    this.centerButton = this.itself.querySelector(`.centerButton`);
    this.centerButtonSVG1 = this.centerButton.querySelector(`.svg1`);
    this.centerButtonSVG2 = this.centerButton.querySelector(`.svg2`);
    this.rightButton = this.itself.querySelector(`.rightButton`);
    this.rightButtonSVG1 = this.rightButton.querySelector(`.svg1`);
    this.rightButtonSVG2 = this.rightButton.querySelector(`.svg2`);
  }
}

class Bleep extends BleepCarcass {
  constructor(identifier) {
    bleepList.itself.insertAdjacentHTML("beforeend", bleepTemplate());
    super(identifier);
    this.image = imagePicker();
    this.name = namePicker();
    this.username = usernamePicker(this.name);
    this.time = timeSetter(timeLimit);
    this.shares = x(300);
    this.comments = x(150);
    this.likes = x(19500) + 500;
    this.firstClick = true;
    this.likedByYou = false;
    this.commentsSection;
    this.text = this.itself.querySelector(`.text`);
    this.topRightButton = this.itself.querySelector(`.topRightButton`);
    this.topRightButtonSVG1 = this.topRightButton.querySelector(`.svg1`);
    this.topRightButtonSVG2 = this.topRightButton.querySelector(`.svg2`);
    this.blockMenu = this.itself.querySelector(".blockMenu");
    this.blockButton = this.itself.querySelector(".blockButton");
    this.reportButton = this.itself.querySelector(".reportButton");
    this.shareMenu = this.itself.querySelector(".shareMenu");
    this.copyButton = this.itself.querySelector(`.copyButton`);
    this.viaButton = this.itself.querySelector(`.viaButton`);
    this.sharesCounter = this.itself.querySelector(".sharesCounter");
    this.commentsCounter = this.itself.querySelector(".commentsCounter");
    this.likesCounter = this.itself.querySelector(".likesCounter");

    this.setProfileInfo();

    this.updateValues();

    this.topRightButton.addEventListener("click", (e) => {
      if (!this.shareMenu.classList.contains("off")) {
        this.leftButton.click();
      }
      toggleDisplayNoneOf(
        this.blockMenu,
        this.topRightButtonSVG1,
        this.topRightButtonSVG2,
        this.text
      );
    });
    this.blockButton.addEventListener("click", (e) => {
      this.passInfoTo(blockSection);
      toggleDisplayNoneOf(blockSection.itself, this.blockMenu);
      toggleBodyNoScroll();
    });
    this.reportButton.addEventListener("click", (e) => {
      this.passInfoTo(confirmReportSection);
      toggleDisplayNoneOf(reportSection.itself, this.blockMenu);
      toggleBodyNoScroll();
    });
    this.leftButton.addEventListener("click", (e) => {
      if (!this.blockMenu.classList.contains("off")) {
        this.topRightButton.click();
      }
      toggleDisplayNoneOf(
        this.leftButtonSVG1,
        this.leftButtonSVG2,
        this.text,
        this.shareMenu
      );
    });
    this.copyButton.addEventListener("click", (e) => {
      navigator.clipboard.writeText(`https://youtu.be/dQw4w9WgXcQ`);
      infobox.invoke(`Copied!`);
    });
    this.viaButton.addEventListener("click", (e) => {
      navigator.share(`https://youtu.be/dQw4w9WgXcQ`);
    });
    this.centerButton.addEventListener("click", (e) => {
      toggleDisplayNoneOf(this.centerButtonSVG1, this.centerButtonSVG2);
    });
    this.rightButton.addEventListener("click", (e) => {
      if (this.likedByYou === false) {
        this.likes++;
        this.likedByYou = true;
      } else {
        this.likes--;
        this.likedByYou = false;
      }
      toggleDisplayNoneOf(this.rightButtonSVG1, this.rightButtonSVG2);
      this.updateValues();
    });
  }

  updateValues() {
    this.sharesCounter.innerText = transformNumber(this.shares);
    this.commentsCounter.innerText = transformNumber(this.comments);
    this.likesCounter.innerText = transformNumber(this.likes);
  }

  setProfileInfo() {
    this.profileImage.src = this.image;
    this.profileName.innerText = this.name;
    this.profileUsername.innerText = "@" + this.username;
    this.timeStamp.innerText = timeToText(this.time);
  }

  passInfoTo(identifier) {
    identifier.profileImage.src = this.image;
    identifier.profileName.innerText = this.name;
    identifier.profileUsername.innerText = "@" + this.username;
    identifier.target = this.itself;
  }

  generateCommentsSection() {
    this.itself.insertAdjacentHTML("afterend", commentsSectionTemplate(bi));
    commentsSectionArray[bi] = new CommentsSection(`#commentsSection${bi}`);
  }
}

class CommentBleep extends Bleep {
  constructor(identifier) {
    super(identifier);
    this.comment;
    this.centerButton.addEventListener("click", (e) => {
      console.log("success");
    });
  }
}

class Navbar extends Generic {
  constructor(identifier) {
    super(identifier);
    this.leftButton = this.itself.querySelector(`.leftButton`);
    this.leftButtonImage = this.leftButton.querySelector(`img`);
    this.centerButton = this.itself.querySelector(`.centerButton`);
    this.rightButton = this.itself.querySelector(`.rightButton`);
    this.rightButton = this.itself.querySelector(`.rightButton`);
    this.rightButtonImage = this.rightButton.querySelector(`img`);
  }
}

class MainNav extends Navbar {
  constructor(identifier) {
    super(identifier);

    this.leftButton.addEventListener("click", (e) => {
      if (logged.status === true) {
        console.log("logged");
        toggleDisplayNoneOf(
          bleepList.itself,
          settings.itself,
          settingsNav.itself
        );
      } else {
        console.log("not logged");
        displayLoginPopup(`adjust settings`);
      }
    });
    this.centerButton.addEventListener("click", (e) => {
      if (logged.status === true) {
        console.log("logged");
        toggleDisplayNoneOf(composeSection.itself);
        toggleBodyNoScroll();
      } else {
        console.log("not logged");
        displayLoginPopup(`bleep out`);
      }
    });
    this.rightButton.addEventListener("click", (e) => {
      if (logged.status === true) {
        console.log("logged");
      } else {
        console.log("not logged");
        displayLoginPopup(`access your profile page`);
      }
    });
  }
}

class ComposeNav extends Navbar {
  constructor(identifier) {
    super(identifier);

    this.leftButton.addEventListener("click", (e) => {
      toggleDisplayNoneOf(composeSection.itself);
      toggleBodyNoScroll();
    });
  }

  updateCharsLeftCounter() {
    const charsLeft = 300 - composeBleep.textArea.value.length;
    if (charsLeft > 1) {
      this.centerButton.innerText = `${charsLeft} characters left`;
    } else if (charsLeft === 1) {
      this.centerButton.innerText = `1 character left`;
    } else {
      this.centerButton.innerText = `0 characters left`;
    }
  }
}

class SettingsNav extends Navbar {
  constructor(identifier) {
    super(identifier);

    this.rightButton.addEventListener("click", (e) => {
      toggleDisplayNoneOf(this.itself, settings.itself, bleepList.itself);
      toggleBodyNoScroll();
    });
  }
}

class ComposeBleep extends BleepCarcass {
  constructor(identifier) {
    super(identifier);
    this.textArea = this.itself.querySelector(`#textArea`);
    this.attachPreview = this.itself.querySelector(`#attachPreview`);
    this.attachDeleteButton = this.itself.querySelector(`#attachDeleteButton`);
    this.attachPreviewImage = this.itself.querySelector(`#attachPreviewImage`);
    // this.attachedFile = this.attachMediaInput.files[0]

    this.textArea.addEventListener("input", (e) => {
      composeNav.updateCharsLeftCounter();
      this.autoSize();
    });
    this.leftButton.addEventListener("click", (e) => {
      toggleDisplayNoneOf(erasePopup.itself);
    });
    this.centerButton.addEventListener("click", (e) => {
      this.attachMediaInput.click();
    });
    this.attachDeleteButton.addEventListener("click", (e) => {
      console.log("yes");
      toggleDisplayNoneOf(this.attachPreview);
      // this.attachedFile.value = null;
    });
  }

  autoSize() {
    this.textArea.setAttribute("rows", 1);
    const initialScrollHeight = this.textArea.clientHeight;
    let rowNumber = Math.round(
      this.textArea.scrollHeight / initialScrollHeight
    );
    this.textArea.setAttribute("rows", rowNumber);
  }
}

class Popup extends Generic {
  constructor(identifier) {
    super(identifier);
    this.button1 = this.itself.querySelector(`.button1`);

    this.itself.addEventListener("click", (e) => {
      if (e.target !== this.itself) return;
      else {
        toggleDisplayNoneOf(this.itself);
        toggleBodyNoScroll();
      }
    });
  }
}

class ErasePopup extends Popup {
  constructor(identifier) {
    super(identifier);

    this.button1.addEventListener("click", (e) => {
      composeBleep.textArea.value = null;
      composeBleep.textArea.setAttribute("rows", 1);
      composeNav.updateCharsLeftCounter();
      toggleDisplayNoneOf(this.itself);
    });
  }
}

class LoginSection extends Popup {
  constructor(identifier) {
    super(identifier);
    this.loginEmail = this.itself.querySelector(`#loginEmail`);
    this.loginPassword = this.itself.querySelector(`#loginPassword`);

    this.button1.addEventListener("submit", (e) => {
      e.preventDefault();
      this.verifyLogin();
    });
  }

  verifyLogin() {
    console.log("start");
    if (!localStorage.getItem("emailList")) {
      return false;
    }
    let email = this.loginEmail.value.toString();
    let emailList = localStorage.getItem("emailList").split(",");
    let index = emailList.indexOf(email);
    if (index === -1) return false;
    // password
    let password = this.loginPassword.value.toString();
    let passwordList = localStorage.getItem("passwordList").split(",");
    if (password !== passwordList[index]) {
      return false;
    }
    return true;
  }
}

class SignupSection extends Popup {
  constructor(identifier) {
    super(identifier);
    this.signupEmail = this.itself.querySelector(`#signupEmail`);
    this.signupPassword = this.itself.querySelector(`#signupPassword`);
    this.signupName = this.itself.querySelector(`#signupName`);
    this.signupUsername = this.itself.querySelector(`#signupUsername`);

    this.button1.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.validation()) {
        createProfile();
        imageSection.name.innerText = this.signupName.value.toString();
        imageSection.username.innerText =
          "@" + this.signupUsername.value.toString();
        toggleDisplayNoneOf(this.itself, imageSection.itself);
      } else {
        console.log("Validation failed");
      }
    });
  }

  validation() {
    let nov = 0; // number of validations
    if (this.emailValidation()) nov++;
    if (this.passwordValidation()) nov++;
    if (this.nameValidation()) nov++;
    if (this.usernameValidation()) nov++;
    if (nov === 4) return true;
    return false;
  }

  emailValidation() {
    const input = this.signupEmail.value.toString().toLowerCase();
    const format = /.{2,}@.{2,}\..{2,}/;
    const regex = /[^\w0-9@\.-]/;
    const atSplit = input.split("@");
    const localEmailList = localStorage.getItem("emailList");
    if (!input) {
      failEmailValidation(`Please, enter your email`);
    }
    if (input.length < 5) {
      failEmailValidation();
      return false;
    }
    if (!format.test(input)) {
      failEmailValidation();
      return false;
    }
    if (regex.test(input)) {
      failEmailValidation();
      return false;
    }
    if (atSplit.length > 2) {
      // testing for excess @
      failEmailValidation();
      return false;
    }
    if (atSplit[1].split(".").length > 2) {
      // testing for excess . after @
      failEmailValidation();
      return false;
    }
    if (localEmailList?.indexOf(input) !== -1) {
      failEmailValidation(`This email is already in use`);
      return false;
    }
    return true;
  }

  passwordValidation() {
    const input = this.signupPassword.value.toString();
    if (!input) {
      failPasswordValidation(`Please, enter a password`);
      return false;
    }
    if (input.length < 5) {
      failPasswordValidation(`This password is too short`);
      return false;
    }
    return true;
  }

  nameValidation() {
    const input = this.signupName.value.toString();
    if (!input) {
      failNameValidation(`Please, choose a name`);
      return false;
    }
    if (input.length < 2) {
      failNameValidation(`This name is too short`);
      return false;
    }
    return true;
  }

  usernameValidation() {
    const input = this.signupUsername.value.toString();
    const regex = /[^\w|\.|\-]|' '/;
    const localUsernameList = localStorage.getItem("usernameList");
    if (!input) {
      failUsernameValidation(`Please, choose a username`);
      return false;
    }
    if (input.length < 2) {
      failUsernameValidation(`This username is too short`);
      return false;
    }
    if (regex.test(input)) {
      failUsernameValidation(`Can't use forbidden characters`);
      return false;
    }
    for (let i = 0; i < bleep.length; i++) {
      if (input === bleep[i].username) {
        failUsernameValidation(`This username is already in use`);
        return false;
      }
    }
    if (localUsernameList?.indexOf(input) !== -1) {
      failUsernameValidation(`This username is already in use`);
      return false;
    }
    return true;
  }
}

class ImageSection extends Popup {
  constructor(identifier) {
    super(identifier);
    this.imageInput = this.itself.querySelector(`#imageInput`);
    this.name = this.itself.querySelector(`.name`);
    this.username = this.itself.querySelector(`.username`);

    this.button1.addEventListener("click", (e) => {
      console.log("image uploaded");
    });
  }
}

class BlockSection extends Popup {
  constructor(identifier) {
    super(identifier);
    this.profileImage = this.itself.querySelector(`.profileDetails img`);
    this.profileName = this.itself.querySelector(`.profileDetails .name`);
    this.profileUsername = this.itself.querySelector(
      `.profileDetails .username`
    );

    this.button1.addEventListener("click", (e) => {
      toggleDisplayNoneOf(this.itself);
      toggleBodyNoScroll();
    });
  }
}

class ReportSection extends Popup {
  constructor(identifier) {
    super(identifier);
    this.select = this.itself.querySelector(`select`);

    this.button1.addEventListener("click", (e) => {
      confirmReportSection.reason.innerText = this.select.value;
      toggleDisplayNoneOf(this.itself, confirmReportSection.itself);
    });
  }
}

class LoginSignup extends Popup {
  constructor(identifier) {
    super(identifier);
    this.button2 = this.itself.querySelector(`.button2`);
    this.insert = this.itself.querySelector(`#insert`);

    this.button1.addEventListener("click", (e) => {
      toggleDisplayNoneOf(this.itself, loginSection.itself);
    });
    this.button2.addEventListener("click", (e) => {
      toggleDisplayNoneOf(this.itself, signupSection.itself);
    });
  }
}

class ConfirmReportSection extends Popup {
  constructor(identifier) {
    super(identifier);
    this.reason = this.itself.querySelector(`#reason`);
    this.profileImage = this.itself.querySelector(`.profileDetails img`);
    this.profileName = this.itself.querySelector(`.profileDetails .name`);
    this.profileUsername = this.itself.querySelector(
      `.profileDetails .username`
    );
    this.target;

    this.button1.addEventListener("click", (e) => {
      this.target.remove();
      toggleDisplayNoneOf(this.itself);
      toggleBodyNoScroll();
    });
  }
}

class CommentsSection extends Generic {
  constructor(identifier) {
    super(identifier);
    this.hideButton = this.itself.querySelector(`.hideButton`);
    this.moreButton = this.itself.querySelector(`.moreButton`);

    this.hideButton.addEventListener("click", (e) => {
      toggleDisplayNoneOf(this.itself);
    });
    this.moreButton.addEventListener("click", (e) => {
      toggleDisplayNoneOf(bleepList2.itself, bleepList.itself);
      bleepList2.generateComments();
    });
  }

  generateNewBleeps(number) {
    for (const initial = bi; bi < initial + number; bi++) {
      this.itself.insertAdjacentHTML("afterbegin", bleepTemplate(bi));
      bleep[bi] = new CommentBleep(`#bleep${bi}`);
      bleep[bi].updateValues();
    }
  }
}

// -------------------------GLOBAL FUNCTIONS-----------------------------

const x = (limit) => Math.floor(Math.random() * limit);

function toggleDisplayNoneOf() {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].classList.toggle("off");
  }
}

function createProfile() {
  const email = this.signupEmail.value;
  const password = this.signupPassword.value;
  const name = this.signupName.value;
  const username = this.signupUsername.value;

  localSt.add("email", email);
  localSt.add("password", password);
  localSt.add("name", name);
  localSt.add("username", username);
  logged.change();
}

function displayLoginPopup(text) {
  toggleDisplayNoneOf(loginSignup.itself);
  toggleBodyNoScroll();
  loginSignup.insert.innerText = text;
}

function verifyLogin() {}

function failEmailValidation(message = `Please, enter a valid email`) {
  this.signupEmail.value = null;
  this.signupEmail.setAttribute("placeholder", message);
}

function failPasswordValidation(message) {
  this.signupPassword.value = null;
  this.signupPassword.setAttribute("placeholder", message);
}

function failNameValidation(message) {
  this.signupName.value = null;
  this.signupName.setAttribute("placeholder", message);
}

function failUsernameValidation(message) {
  this.signupUsername.value = null;
  this.signupUsername.setAttribute("placeholder", message);
}

// ---------------ELEMENTS
const infobox = new Infobox(`#infobox`);
const loginSection = new LoginSection(`#loginSection`);
const bleepList = new BleepList("#bleepList");
const bleepList2 = new BleepList(`#bleepList2`);
const mainNav = new MainNav(`#mainNav`);
const composeSection = new Generic(`#composeSection`);
const composeBleep = new ComposeBleep(`#composeBleep`);
const composeNav = new ComposeNav(`#composeNav`);
const blockSection = new BlockSection(`#blockSection`);
const reportSection = new ReportSection(`#reportSection`);
const confirmReportSection = new ConfirmReportSection(`#confirmReportSection`);
const erasePopup = new ErasePopup(`#erasePopup`);
const settings = new Settings(`#settings`);
const settingsNav = new SettingsNav(`#settingsNav`);
const loginSignup = new LoginSignup(`#loginSignup`);
const signupSection = new SignupSection(`#signupSection`);
const imageSection = new ImageSection(`#imageSection`);

// ----------------------------ONLOAD-----------------------------

window.onload = pageSetup();

function pageSetup() {
  window.scrollTo(0, 0);
  bleepList.generateNewBleeps(10);
}

function toggleBodyNoScroll() {
  document.body.classList.toggle("noscroll");
}

// ---------------------------INFINITE SCROLL---------------------------

const action = (entries) => {
  let targ = entries[0];
  if (targ.isIntersecting) {
    viewport.unobserve(targetBleep);
    bleepList.generateNewBleeps(10);
    targetBleep = document.querySelectorAll(".bleep")[bi - 2];
    viewport.observe(targetBleep);
  }
};

const options = {
  rootMargin: "-10%",
};

const viewport = new IntersectionObserver(action, options);
let targetBleep = document.querySelectorAll(".bleep")[bi - 2];

viewport.observe(targetBleep);

// ----------------------------GLOBAL LISTENERS-----------------------------

//-----------MAIN PAGE

//-----------COMPOSE PAGE

//# backspace registers as -character after a long series of inputs`

function blockUser(bi) {
  const bleepUsername = document.querySelectorAll(".profileUsername");
  for (let n = 0; n < bi; n++) {
    if (bleepUsername[n].innerText === targetUsername) {
      bleepUsername[n].closest(".bleep").remove();
    }
  }
}

// ----------------------------BLEEP CREATION------------------------------

//^ SATISFIED
function genderPicker() {
  let n = x(2);
  if (n === 0) return "male";
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
  let dice = x(3);
  let username;
  switch (dice) {
    case 0:
      username = name;
      break;
    case 1:
      username = prefix[x(prefix.length)] + name;
      break;
    case 2:
      username = name + postfix[x(postfix.length)];
      break;
  }
  return username.toLowerCase();
}

function timeSetter(limit) {
  if (limit === undefined) return Date.now() - x(90) * 1000;
  return limit - x(90) * 1000;
}

function timeToText(timeStamp) {
  const difference = (Date.now() - timeStamp) / 1000;
  if (difference < 60) return `Less than a minute ago`;
  if (difference < 120) return `One minute ago`;
  if (difference < 3600) return `${Math.round(difference / 60)} minutes ago`;
  if (difference < 7200) return `One hour ago`;
  if (difference < 86400)
    return `${Math.round(difference / 60 / 60)} hours ago`;
}

function transformNumber(number) {
  if (number === 0) return null;
  if (number < 1001) return number;
  if (number < 1000000) return `${Math.floor(number / 1000)}K`;
}
