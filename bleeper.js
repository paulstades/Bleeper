// -------------------------GLOBAL VARIABLES-----------------------------

const maleNames = [
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
    "Wade"
];

const femaleNames = [
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

const firstNames = [maleNames, femaleNames];

const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
    "Lee",
    "Perez",
    "Thompson",
    "White",
    "Harris",
    "Sanchez",
    "Clark",
    "Ramirez",
    "Lewis",
    "Robinson",
    "Walker",
    "Young",
    "Allen",
    "King",
    "Wright",
    "Scott",
    "Torres",
    "Nguyen",
    "Hill",
    "Flores",
    "Green",
    "Adams",
    "Nelson",
    "Baker",
    "Hall",
    "Rivera",
    "Campbell",
    "Mitchell",
    "Carter",
    "Roberts",
    "Gomez",
    "Phillips",
    "Evans",
    "Turner",
    "Diaz",
    "Parker",
    "Cruz",
    "Edwards",
    "Collins",
    "Reyes",
    "Stewart",
    "Morris",
    "Morales",
    "Murphy",
    "Cook",
    "Rogers",
    "Gutierrez",
    "Ortiz",
    "Morgan",
    "Cooper",
    "Peterson",
    "Bailey",
    "Reed",
    "Kelly",
    "Howard",
    "Ramos",
    "Kim",
    "Cox",
    "Ward",
    "Richardson",
    "Watson",
    "Brooks",
    "Chavez",
    "Wood",
    "James",
    "Bennett",
    "Gray",
    "Mendoza",
    "Ruiz",
    "Hughes",
    "Price",
    "Alvarez",
    "Castillo",
    "Sanders",
    "Patel",
    "Myers",
    "Long",
    "Ross",
    "Foster",
    "Jimenez",
    "Powell",
    "Jenkins",
    "Perry",
    "Russell",
    "Sullivan",
    "Bell",
    "Coleman",
    "Butler",
    "Henderson",
    "Barnes",
    "Gonzales",
    "Fisher",
    "Vasquez",
    "Simmons",
    "Romero",
    "Jordan",
    "Patterson",
    "Alexander",
    "Hamilton",
    "Graham",
    "Reynolds",
    "Griffin",
    "Wallace",
    "Moreno",
    "West",
    "Cole",
    "Hayes",
    "Bryant",
    "Herrera",
    "Gibson",
    "Ellis",
    "Tran",
    "Medina",
    "Aguilar",
    "Stevens",
    "Murray",
    "Ford",
    "Castro",
    "Marshall",
    "Owens",
    "Harrison",
    "Fernandez",
    "McDonald",
    "Woods",
    "Washington",
    "Kennedy",
    "Wells",
    "Vargas",
    "Henry",
    "Chen",
    "Freeman",
    "Webb",
    "Tucker",
    "Guzman",
    "Burns",
    "Crawford",
    "Olson",
    "Simpson",
    "Porter",
    "Hunter",
    "Gordon",
    "Mendez",
    "Silva",
    "Shaw",
    "Snyder",
    "Mason",
    "Dixon",
    "Munoz",
    "Hunt",
    "Hicks",
    "Holmes",
    "Palmer",
    "Wagner",
    "Black",
    "Robertson",
    "Boyd",
    "Rose",
    "Stone",
    "Salazar",
    "Fox",
    "Warren",
    "Mills",
    "Meyer",
    "Rice",
    "Schmidt",
    "Garza",
    "Daniels",
    "Ferguson",
    "Nichols",
    "Stephens",
    "Soto",
    "Weaver",
    "Ryan",
    "Gardner",
    "Payne",
    "Grant",
    "Dunn",
    "Kelley",
    "Spencer",
    "Hawkins",
    "Arnold",
    "Pierce",
    "Vazquez",
    "Hansen",
    "Peters",
    "Santos",
    "Hart",
    "Bradley",
    "Knight",
    "Elliott",
    "Cunningham",
    "Duncan",
    "Armstrong",
    "Hudson",
    "Carroll",
    "Lane",
    "Riley",
    "Andrews",
    "Alvarado",
    "Ray",
    "Delgado",
    "Berry",
    "Perkins",
    "Hoffman",
    "Johnston",
    "Matthews",
    "Pena",
    "Richards",
    "Contreras",
    "Willis",
    "Carpenter",
    "Lawrence",
    "Sandoval",
    "Guerrero",
    "George",
    "Chapman",
    "Rios",
    "Estrada",
    "Ortega",
    "Watkins",
    "Greene",
    "Nunez",
    "Wheeler",
    "Valdez",
    "Harper",
    "Burke",
    "Larson",
    "Santiago",
    "Maldonado",
    "Morrison",
    "Franklin",
    "Carlson",
    "Austin",
    "Dominguez",
    "Carr",
    "Lawson",
    "Jacobs",
    "Obrien",
    "Lynch",
    "Singh",
    "Vega",
    "Bishop",
    "Montgomery",
    "Oliver",
    "Jensen",
    "Harvey",
    "Williamson",
    "Gilbert",
    "Dean",
    "Sims",
    "Espinoza",
    "Howell",
    "Li",
    "Wong",
    "Reid",
    "Hanson",
    "Le",
    "McCoy",
    "Garrett",
    "Burton",
    "Fuller",
    "Wang",
    "Weber",
    "Welch",
    "Rojas",
    "Lucas",
    "Marquez",
    "Fields",
    "Park",
    "Yang",
    "Little",
    "Banks",
    "Padilla",
    "Day",
    "Walsh",
    "Bowman",
    "Schultz",
    "Luna",
    "Fowler",
    "Mejia",
    "Davidson",
    "Acosta",
    "Brewer",
    "May",
    "Holland",
    "Juarez",
    "Newman",
    "Pearson",
    "Curtis",
    "Cortez",
    "Douglas",
    "Schneider",
    "Joseph",
    "Barrett",
    "Navarro",
    "Figueroa",
    "Keller",
    "Avila",
    "Wade",
    "Molina",
    "Stanley",
    "Hopkins",
    "Campos",
    "Barnett",
    "Bates",
    "Chambers",
    "Caldwell",
    "Beck",
    "Lambert",
    "Miranda",
    "Byrd",
    "Craig",
    "Ayala",
    "Lowe",
    "Frazier",
    "Powers",
    "Neal",
    "Leonard",
    "Gregory",
    "Carrillo",
    "Sutton",
    "Fleming",
    "Rhodes",
    "Shelton",
    "Schwartz",
    "Norris",
    "Jennings",
    "Watts",
    "Duran",
    "Walters",
    "Cohen",
    "McDaniel",
    "Moran",
    "Parks",
    "Steele",
    "Vaughn",
    "Becker",
    "Holt",
    "Deleon",
    "Barker",
    "Terry",
    "Hale",
    "Leon",
    "Hail",
    "Benson",
    "Haynes",
    "Horton",
    "Miles",
    "Lyons",
    "Pham",
    "Graves",
    "Bush",
    "Thornton",
    "Wolfe",
    "Warner",
    "Cabrera",
    "McKinney",
    "Mann",
    "Zimmerman",
    "Dawson",
    "Lara",
    "Fletcher",
    "Page",
    "McCarthy",
    "Love",
    "Robles",
    "Cervantes",
    "Solis",
    "Erickson",
    "Reeves",
    "Chang",
    "Klein",
    "Salinas",
    "Fuentes",
    "Baldwin",
    "Daniel",
    "Simon",
    "Velasquez",
    "Hardy",
    "Higgins",
    "Aguirre",
    "Lin",
    "Cummings",
    "Chandler",
    "Sharp",
    "Barber",
    "Bowen",
    "Ochoa",
    "Dennis",
    "Robbins",
    "Liu",
    "Ramsey",
    "Francis",
    "Griffith",
    "Paul",
    "Blair",
    "O'Connor",
    "Cardenas",
    "Pacheco",
    "Cross",
    "Calderon",
    "Quinn",
    "Moss",
    "Swanson",
    "Chan",
    "Rivas",
    "Khan",
    "Rodgers",
    "Serrano",
    "Fitzgerald",
    "Rosales",
    "Stevenson",
    "Christensen",
    "Manning",
    "Gill",
    "Curry",
    "McLaughlin",
    "Harmon",
    "McGee",
    "Gross",
    "Doyle",
    "Garner",
    "Newton",
    "Burgess",
    "Reese",
    "Walton",
    "Blake",
    "Trujillo",
    "Adkins",
    "Brady",
    "Goodman",
    "Roman",
    "Webster",
    "Goodwin",
    "Fischer",
    "Huang",
    "Potter",
    "de la Cruz",
    "Montoya",
    "Todd",
    "Wu",
    "Hines",
    "Mullins",
    "Castaneda",
    "Malone",
    "Cannon",
    "Tate",
    "Mack",
    "Sherman",
    "Hubbard",
    "Hodges",
    "Zhang",
    "Guerra",
    "Wolf",
    "Valencia",
    "Saunders",
    "Franco",
    "Rowe",
    "Gallagher",
    "Farmer",
    "Hammond",
    "Hampton",
    "Townsend",
    "Ingram",
    "Wise",
    "Gallegos",
    "Clarke",
    "Barton",
    "Schroeder",
    "Maxwell",
    "Waters",
    "Logan",
    "Camacho",
    "Strickland",
    "Norman",
    "Person",
    "Colon",
    "Parsons",
    "Frank",
    "Harrington"
]

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

const celebs = [
    "Scarlett Johansson",
    "Robert Downey Jr.",
    "Samuel L. Jackson",
    "Chris Hemsworth",
    "Chris Pratt",
    "Tom Cruise",
    "Chris Evans",
    "Zoe Saldaña",
    "Tom Hanks",
    "Vin Diesel",
    "Stan Lee",
    "Frank Welker",
    "John Ratzenberger",
    "Bob Bergen",
    "Andy Serkis",
    "Benedict Cumberbatch",
    "Alan Tudyk",
    "Warwick Davis",
    "Jon Favreau",
    "Paul Bettany",
    "Dwayne Johnson",
    "Idris Elba",
    "Don Cheadle",
    "Keanu Reeves",
    "Bruce Willis",
    "Will Smith",
    "Sandra Bullock",
    "Harrison Ford",
    "Jack Nicholson",
    "Leonardo DiCaprio",
    "Johnny Depp",
    "Jackie Chan",
    "Cameron Diaz",
    "Denzel Washington",
    "Aamir Khan",
    "Jim Carrey",
    "Arnold Schwarzenegger",
    "Mel Gibson",
    "Brad Pitt",
    "Leonardo DiCaprio ",
    "Matt Damon",
    "Jennifer Lawrence",
    "Ben Affleck",
    "Melissa McCarthy",
    "Shah Rukh Khan",
    "Bradley Cooper",
    "Adam Sandler",
    "Amitabh Bachchan",
    "Salman Khan",
    "Mark Wahlberg",
    "Akshay Kumar",
    "George Clooney",
    "Sofía Vergara",
    "Ryan Reynolds",
    "Lin-Manuel Miranda"
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

const profileArray = [];

const bleepArray = [];

let i = 0; // numerical value tied to bleep number

let targetUsername;

// -------------------------CLASSES-----------------------------

class Profile {
    constructor(gender, image, firstName, lastName, username) {
        this.gender = gender;
        this.image = image;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
    }
        get fullName() {
            return `${this.firstName}  ${this.lastName}`;
        }
}

class Bleep {
    constructor(time, text, attachments, shares, comments, likes) {
        this.time = time;
        this.text = text;
        this.attachments = attachments;
        this.shares = shares;
        this.comments = comments;
        this.likes = likes;
    }

    // !! needs a more efficient version
    get likesTransformer() {
        if (this.likes>999) {
            let number = this.likes.toString();
            return `${number.slice(0,-3)}K`;
        }
        if (this.likes<=999) {
            return this.likes;
        }
        else{
            return null;
        }
    
    }
    get sharesTransformer() {
        if (this.shares===0) {
            return null;
        }
    return `${this.shares}+`;
    }

    get commentsTransformer() {
        if (this.comments===0) {
            return null;
        }
    return `${this.comments}+`;
    }
}

class PopUp {
    constructor(input) {
        this.itself = document.querySelector(`#${input}`);
        this.profileImage = document.querySelector(`#${input}_profileImage`);
        this.profileName = document.querySelector(`#${input}_profileName`);
        this.profileUsername = document.querySelector(`#${input}_profileUsername`);
    }
}


// -------------------------GLOBAL FUNCTIONS-----------------------------

const x = (limit) => Math.floor(Math.random() * limit)

//WORKS
async function fetchData(url) {
    const response = await fetch(url);
    return response;
}

function toggleDisplayNoneOf() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].classList.toggle("off");
    }
}

function updateCharsLeftCounter() {
    const charsLeft = countCharsLeft();
    if (charsLeft === 1){
        composeNavCharsLeftCounter.placeholder = `1 character left`;
    }else{
        composeNavCharsLeftCounter.placeholder = `${charsLeft} characters left`;
    }
}

function countCharsLeft() {
    return 300 - composeInput.value.length;
}

function generateComments(n){
    createCommentsSection(n);
}

function createCommentsSection(n){
    document.querySelector(`#bleep${n}`).insertAdjacentHTML("afterend", 
    `<section class="commentsSection" id="commentsSection${n}">
        <div class="commentsSectionButtons">
            <button class="commentsSectionHideButton">Hide</button>
            <button class="commentsSectionMoreButton">More >></button>
        </div>
    </section>`);
}

// ---------------BUTTONS

const navComposeButton = document.querySelector("#mainNav_composeButton");
const navMenuButton = document.querySelector("#mainNav_sidebarButton");
const composeCancelButton = document.querySelector("#compose_cancelButton");
const composeSendButton = document.querySelector("#compose_sendButton");
const composeNavEraseButton = document.querySelector("#composeNav_eraseButton");
const sendWarningYesButton = document.querySelector("#sendWarning_yesButton");
const sendWarningNoButton = document.querySelector("#sendWarning_noButton");
const eraseWarningYesButton = document.querySelector("#eraseWarning_yesButton");
const eraseWarningNoButton = document.querySelector("#eraseWarning_noButton");
const blockUserPopUpYesButton = document.querySelector("#blockUserPopUp_yesButton");
const blockUserPopUpNoButton = document.querySelector("#blockUserPopUp_noButton");
const reportPopUpCancelButton = document.querySelector("#reportPopUp_cancelButton");
const reportPopUpConfirmButton = document.querySelector("#reportPopUp_confirmButton");
const confirmReportYesButton = document.querySelector("#confirmReport_yesButton");
const confirmReportNoButton = document.querySelector("#confirmReport_noButton");

// ---------------ELEMENTS
const bleepList = document.querySelector("#bleepList");
const composeContent = document.querySelector("#composeContent");
const composeInput = document.querySelector("#compose_input");
const composeNav = document.querySelector("#composeNav");
const sidebar = document.querySelector("#sidebar");
const sendWarning = document.querySelector("#sendWarning");
const eraseWarning = document.querySelector("#eraseWarning");
const composeNavCharsLeftCounter = document.querySelector("#composeNav_charsLeftCounter");
const blockUserPopUp = document.querySelector("#blockUserPopUp");
const blockProfileImage = document.querySelector("#blockUserPopUp_profileImage");
const blockProfileName = document.querySelector("#blockUserPopUp_profileName");
const blockProfileUsername = document.querySelector("#blockUserPopUp_profileUsername");
const reportProfileImage = document.querySelector("#confirmReport_profileImage");
const reportProfileName = document.querySelector("#confirmReport_profileName");
const reportProfileUsername = document.querySelector("#confirmReport_profileUsername");
const reportPopUp = document.querySelector("#reportPopUp");
const confirmReport = document.querySelector("#confirmReport");
const confirmReportmessageReason = document.querySelector("#confirmReport_message_reason");
const reportPopUpForm = document.querySelector("#reportPopUp_form");

const blockUserPopUp2 = new PopUp("blockUserPopUp");

const confirmReport2 = new PopUp("confirmReport");
// ----------------------------ONLOAD-----------------------------

window.onload=onLoad();

function onLoad() {
    window.scrollTo(0, 0);
    generatebleeps(10);
}

function generatebleeps(numberOfbleeps, type) {
    const initial = i;
    for (i; i<initial+numberOfbleeps; i++) {
        createbleep(i, type);
    }
}

function toggleBodyNoScroll() {
    document.body.classList.toggle("noscroll");
}

// ---------------------------INFINITE SCROLL---------------------------

const action = entries => {
    let targ = entries[0];
    if (targ.isIntersecting) {
        viewport.unobserve(bleep);
        generatebleeps(10);
        bleep = document.querySelectorAll(".bleep")[i-2];
        viewport.observe(bleep);
    }
}

const options = {
    rootMargin: "-10%"
}

const viewport = new IntersectionObserver(action, options);
let bleep = document.querySelectorAll(".bleep")[i-2];

viewport.observe(bleep);

// ----------------------------GLOBAL LISTENERS-----------------------------

//-----------MAIN PAGE
navComposeButton.addEventListener("click", e => {
    toggleDisplayNoneOf(composeContent, bleepList);
})

navMenuButton.addEventListener("click", e => {
    toggleDisplayNoneOf(sidebar);
})

//-----------COMPOSE PAGE
composeCancelButton.addEventListener("click", e => {
    toggleDisplayNoneOf(composeContent, bleepList);
})

composeSendButton.addEventListener("click", e => {
    toggleDisplayNoneOf(sendWarning);
})

sendWarningNoButton.addEventListener("click", e => {
    toggleDisplayNoneOf(sendWarning);
})

sendWarningYesButton.addEventListener("click", e => {
    toggleDisplayNoneOf(sendWarning, composeContent, bleepList);
})

composeInput.addEventListener("keydown", e => {
    updateCharsLeftCounter();
});

composeNavEraseButton.addEventListener("click", e => {
    toggleDisplayNoneOf(eraseWarning);
})

eraseWarningYesButton.addEventListener("click", e => {
    composeInput.value = "";
    eraseWarning.classList.toggle("off");
    updateCharsLeftCounter();
})

eraseWarningNoButton.addEventListener("click", e => {
    toggleDisplayNoneOf(eraseWarning);
})

blockUserPopUpYesButton.addEventListener("click", e => {
    blockUser(i);
    toggleBodyNoScroll();
    toggleDisplayNoneOf(blockUserPopUp);
    i--;
})

blockUserPopUpNoButton.addEventListener("click", e => {
    toggleDisplayNoneOf(blockUserPopUp);
    toggleBodyNoScroll();
})

reportPopUpCancelButton.addEventListener("click", e => {
    toggleDisplayNoneOf(reportPopUp);
})

reportPopUpConfirmButton.addEventListener("click", e => {
    confirmReportmessageReason.innerText = reportPopUpForm.value;
    toggleDisplayNoneOf(reportPopUp, confirmReport);
    toggleBodyNoScroll();
})

confirmReportYesButton.addEventListener("click", e => {
    blockUser(i);
    i--;
    toggleDisplayNoneOf(confirmReport);
})

confirmReportNoButton.addEventListener("click", e => {
    toggleDisplayNoneOf(confirmReport);
})

//todo backspace registers as -character after a long series

navComposeButton.addEventListener("click", e => {
    updateCharsLeftCounter();
})

sendWarningYesButton.addEventListener("click", e => {
    composeInput.value = "";
    updateCharsLeftCounter();
})

function blockUser(i){
    const bleepUsername = document.querySelectorAll(".bleep_profileInfo_username");
    for (let a=0; a<i; a++) {
        if (bleepUsername[a].innerText === targetUsername){
            bleepUsername[a].closest(".bleep").remove();
        }
    }
}

// ----------------------------bleep CREATION------------------------------

function createbleep(i, type) {
    pushHtml(i, type);
    setInnerContent(i);
}

function pushHtml(i, type) {
    if (!type) {
        bleepList.insertAdjacentHTML("beforeend", 
            `
                <div class="bleep" id=bleep${i}>
                    <img class="bleep_profileImage" alt="Profile Image">
                    <header class="bleep_profileInfo">
                        <h5 class="bleep_profileInfo_name"></h5>
                        <h6 class="bleep_profileInfo_username">@</h6>
                        <time class="bleep_profileInfo_timestamp"></time>
                        <button class="bleep_topRightButton"><img src="svgs/report_off.svg"></button>
                    </header>
                    <div class="bleep_topRight off">
                        <button class="bleep_topRight_blockButton">Block</button>
                        <button class="bleep_topRight_reportButton">Report</button>
                    </div>sidebar
            
                    <p class="bleep_message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque, molestias laudantium omnis suscipit cumque delectus, tempore doloribus tempora ut nemo, sapiente mollitia! Sit, facilis.</p>
                    
                    <div class="actionbar">
                        <button class="action action_shareButton">
                            <label for="shares" class="shares"></label>
                            <img src="svgs/share_off.svg" class="action_shareButtonImg">
                        </button>
            
                        <button class="action action_commentButton">
                            <label for="comments" class="comments"></label>
                            <img src="svgs/comment_off.svg" class="action_commentButtonImg">
                        </button>
            
                        <button class="action action_likeButton">
                            <label for="likes" class="likes"></label>
                            <img src="svgs/like_off.svg" class="action_likeButtonImg">
                        </button>
                    </div>
                </div>
                `);
    }else{
        type.insertAdjacentHTML("afterbegin", 
        `
            <div class="bleep" id=bleep${i}>
                <img class="bleep_profileImage" alt="Profile Image">
                <header class="bleep_profileInfo">
                    <h5 class="bleep_profileInfo_name"></h5>
                    <h6 class="bleep_profileInfo_username">@</h6>
                    <time class="bleep_profileInfo_timestamp"></time>
                    <button class="bleep_topRightButton"><img src="svgs/report_off.svg"></button>
                </header>
                <div class="bleep_topRight off">
                    <button class="bleep_topRight_blockButton">Block</button>
                    <button class="bleep_topRight_reportButton">Report</button>
                </div>sidebar
        
                <p class="bleep_message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque, molestias laudantium omnis suscipit cumque delectus, tempore doloribus tempora ut nemo, sapiente mollitia! Sit, facilis.</p>
                
                <div class="actionbar">
                    <button class="action action_shareButton">
                        <label for="shares" class="shares"></label>
                        <img src="svgs/share_off.svg" class="action_shareButtonImg">
                    </button>
        
                    <button class="action action_commentButton">
                        <label for="comments" class="comments"></label>
                        <img src="svgs/comment_off.svg" class="action_commentButtonImg">
                    </button>
        
                    <button class="action action_likeButton">
                        <label for="likes" class="likes"></label>
                        <img src="svgs/like_off.svg" class="action_likeButtonImg">
                    </button>
                </div>
            </div>
            `);
    }
    
}

// ----------------------------bleep SETUP--------------------------------

function setInnerContent(i){
    createProfile(i);
    setProfileInfo(i);
    setNumericalValues(i);
    setEventListeners(i);
}

// ----------------------------PROFILE CREATION------------------------------

function createProfile(i){
    const gender = genderPicker();
    const image = imagePicker();
    const firstName = namePicker(gender);
    const lastName = namePicker();
    const username = usernamePicker(firstName, lastName, gender);
    profileArray[i] = new Profile(gender, image, firstName, lastName, username);
}

//^ SATISFIED
function genderPicker(){
    let n = x(2);
    if (n === 0) {
        return "male";
        }
    return "female";
}

// WORKS
// async function imagePicker(gender, i) {
//     // const data = await fetchData(`https://fakeface.rest/face/view?gender=${gender}&minimum_age=18`);
//     // profileArray[i].image = data.url;
//     // document.querySelectorAll(".bleep_profileImage")[i].src = data.url;
// }

//^ SATISFIED
function imagePicker() {
    let n = x(50);
    return `pics/${n}.jpg`;
}

//^ SATISFIED
function namePicker(gender) {
    let y = x(300);
    switch (gender){
        case "male": return maleNames[y];
        case "female": return femaleNames[y];
        case undefined: y = x(500);
            return lastNames[y];
    }
}

//# WORKS, Needs more options
function usernamePicker(firstname, lastname, gender) {
    let dice = x(4);
    let suffix = x(100);
    switch (dice){
        case 0: result = `${firstname}${lastname}`;
        break;
        case 1: result = `${firstname}${lastname}${suffix}`;
        break;
        case 2:
            if (gender==="male") {
                y=x(prefixM.length);
                result=`${prefixM[y]}${firstname}`;
                break;
            }else{
                y=x(prefixF.length);
                result=`${prefixF[y]}${firstname}`;
                break;
            }
        case 3:
            if (gender==="male") {
                y=x(postfixM.length);
                result=`${firstname}${postfixM[y]}`;
                break;
            }else{
                y=x(postfixF.length);
                result=`${firstname}${postfixF[y]}`;
                break;
            }
    }
    return result.toLowerCase();
}



function timeStamper(i) {
    return Date.now();
}

function setProfileInfo(i) {
    const profileImage = document.querySelector(`#bleep${i} .bleep_profileImage`);
    const profileName = document.querySelector(`#bleep${i} .bleep_profileInfo_name`);
    const profileUsername = document.querySelector(`#bleep${i} .bleep_profileInfo_username`);

    profileImage.src = profileArray[i].image;
    profileName.innerText = profileArray[i].fullName;
    profileUsername.innerText = `@${profileArray[i].username}`;
}

function setNumericalValues(i) {
    const time = timeStamper(i);
    const text = null;
    const attachments = null;
    const shares = x(500)
    const comments = x(200);
    const likes = x(15000);

    
    bleepArray[i] = new Bleep(time, text, attachments, shares, comments, likes);
    const timestamp = document.querySelector(`#bleep${i} .bleep_profileInfo_timestamp`);
    const numberofShares = document.querySelector(`#bleep${i} .shares`);
    const numberofComments = document.querySelector(`#bleep${i} .comments`);
    const numberofLikes = document.querySelector(`#bleep${i} .likes`);

    timestamp.innerText = bleepArray[i].time;
    numberofShares.innerText = bleepArray[i].sharesTransformer;
    numberofComments.innerText = bleepArray[i].comments;
    numberofLikes.innerText = bleepArray[i].likesTransformer;
}

function setEventListeners(i){
    //------------Buttons
    const topRightButton = document.querySelector(`#bleep${i} .bleep_topRightButton`);
    const shareButton = document.querySelector(`#bleep${i} .action_shareButton`);
    const commentButton = document.querySelector(`#bleep${i} .action_commentButton`);
    const likeButton = document.querySelector(`#bleep${i} .action_likeButton`);
    const topRightBlockButton = document.querySelector(`#bleep${i} .bleep_topRight_blockButton`);
    const topRightReportButton = document.querySelector(`#bleep${i} .bleep_topRight_reportButton`);

    //------------Elements
    const bleepTopRight = document.querySelector(`#bleep${i} .bleep_topRight`);

    //------------Listeners
    let firstTime = true;
    let commentsSection;
    let commentsSectionHideButton;

    commentButton.addEventListener("click", e => {
        if (!firstTime) {
            return toggleDisplayNoneOf(commentsSection);
        }else{
            generateComments(i);
            commentsSection = document.querySelector(`#commentsSection${i}`);
            commentsSectionHideButton = document.querySelector(`#commentsSection${i} .commentsSectionHideButton`);
            commentsSectionHideButton.addEventListener("click", e => {
            toggleDisplayNoneOf(commentsSection);})
            generatebleeps(3, commentsSection);
            firstTime=false;
        }
    })

    topRightButton.addEventListener("click", e => {
        toggleDisplayNoneOf(bleepTopRight);
    })
    
//# I don't like blockUserPopUp2
    topRightBlockButton.addEventListener("click", e => {
        toggleDisplayNoneOf(blockUserPopUp, bleepTopRight);
        toggleBodyNoScroll();
        passProfileInfoTo(blockUserPopUp2, i);
    })

//# I don't like confirmReport2
    topRightReportButton.addEventListener("click", e => {
        toggleDisplayNoneOf(reportPopUp, bleepTopRight);
        toggleBodyNoScroll();
        passProfileInfoTo(confirmReport2, i);
    })

    //------------Functions

    function passProfileInfoTo(element, i) {
        element.profileImage.src = profileArray[i].image;
        element.profileName.innerText = profileArray[i].fullName;
        element.profileUsername.innerText = `@${profileArray[i].username}`;
        targetUsername = `@${profileArray[i].username}`;
    }

}