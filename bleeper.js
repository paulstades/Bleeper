// -------------------------GLOBAL VARIABLES-----------------------------

const namesList = [
    'James',
    'John',
    'Robert',
    'Michael',
    'William',
    'David',
    'Richard',
    'Charles',
    'Joseph',
    'Thomas',
    'Christopher',
    'Daniel',
    'Paul',
    'Mark',
    'Donald',
    'George',
    'Kenneth',
    'Steven',
    'Edward',
    'Brian',
    'Ronald',
    'Anthony',
    'Kevin',
    'Jason',
    'Matthew',
    'Gary',
    'Timothy',
    'Jose',
    'Larry',
    'Jeffrey',
    'Frank',
    'Scott',
    'Eric',
    'Stephen',
    'Andrew',
    'Raymond',
    'Gregory',
    'Joshua',
    'Jerry',
    'Dennis',
    'Walter',
    'Patrick',
    'Peter',
    'Harold',
    'Douglas',
    'Henry',
    'Carl',
    'Arthur',
    'Ryan',
    'Roger',
    'Joe',
    'Juan',
    'Jack',
    'Albert',
    'Jonathan',
    'Justin',
    'Terry',
    'Gerald',
    'Keith',
    'Samuel',
    'Willie',
    'Ralph',
    'Lawrence',
    'Nicholas',
    'Roy',
    'Benjamin',
    'Bruce',
    'Brandon',
    'Adam',
    'Harry',
    'Fred',
    'Wayne',
    'Billy',
    'Steve',
    'Louis',
    'Jeremy',
    'Aaron',
    'Randy',
    'Howard',
    'Eugene',
    'Carlos',
    'Russell',
    'Bobby',
    'Victor',
    'Martin',
    'Ernest',
    'Phillip',
    'Todd',
    'Jesse',
    'Craig',
    'Alan',
    'Shawn',
    'Clarence',
    'Sean',
    'Philip',
    'Chris',
    'Johnny',
    'Earl',
    'Jimmy',
    'Antonio',
    'Danny',
    'Bryan',
    'Tony',
    'Luis',
    'Mike',
    'Stanley',
    'Leonard',
    'Nathan',
    'Dale',
    'Manuel',
    'Rodney',
    'Curtis',
    'Norman',
    'Allen',
    'Marvin',
    'Vincent',
    'Glenn',
    'Jeffery',
    'Travis',
    'Jeff',
    'Chad',
    'Jacob',
    'Lee',
    'Melvin',
    'Alfred',
    'Kyle',
    'Francis',
    'Bradley',
    'Jesus',
    'Herbert',
    'Frederick',
    'Ray',
    'Joel',
    'Edwin',
    'Don',
    'Eddie',
    'Ricky',
    'Troy',
    'Randall',
    'Barry',
    'Alexander',
    'Bernard',
    'Mario',
    'Leroy',
    'Francisco',
    'Marcus',
    'Micheal',
    'Theodore',
    'Clifford',
    'Miguel',
    'Oscar',
    'Jay',
    'Jim',
    'Tom',
    'Calvin',
    'Alex',
    'Jon',
    'Ronnie',
    'Bill',
    'Lloyd',
    'Tommy',
    'Leon',
    'Derek',
    'Warren',
    'Darrell',
    'Jerome',
    'Floyd',
    'Leo',
    'Alvin',
    'Tim',
    'Wesley',
    'Gordon',
    'Dean',
    'Greg',
    'Jorge',
    'Dustin',
    'Pedro',
    'Derrick',
    'Dan',
    'Lewis',
    'Zachary',
    'Corey',
    'Herman',
    'Maurice',
    'Vernon',
    'Roberto',
    'Clyde',
    'Glen',
    'Hector',
    'Shane',
    'Ricardo',
    'Sam',
    'Rick',
    'Lester',
    'Brent',
    'Ramon',
    'Charlie',
    'Tyler',
    'Gilbert',
    'Gene',
    'Marc',
    'Reginald',
    'Ruben',
    'Brett',
    'Angel',
    'Nathaniel',
    'Rafael',
    'Leslie',
    'Edgar',
    'Milton',
    'Raul',
    'Ben',
    'Chester',
    'Cecil',
    'Duane',
    'Franklin',
    'Andre',
    'Elmer',
    'Brad',
    'Gabriel',
    'Ron',
    'Mitchell',
    'Roland',
    'Arnold',
    'Harvey',
    'Jared',
    'Adrian',
    'Karl',
    'Cory',
    'Claude',
    'Erik',
    'Darryl',
    'Jamie',
    'Neil',
    'Jessie',
    'Christian',
    'Javier',
    'Fernando',
    'Clinton',
    'Ted',
    'Mathew',
    'Tyrone',
    'Darren',
    'Lonnie',
    'Lance',
    'Cody',
    'Julio',
    'Kelly',
    'Kurt',
    'Allan',
    'Nelson',
    'Guy',
    'Clayton',
    'Hugh',
    'Max',
    'Dwayne',
    'Dwight',
    'Armando',
    'Felix',
    'Jimmie',
    'Everett',
    'Jordan',
    'Ian',
    'Wallace',
    'Ken',
    'Bob',
    'Jaime',
    'Casey',
    'Alfredo',
    'Alberto',
    'Dave',
    'Ivan',
    'Johnnie',
    'Sidney',
    'Byron',
    'Julian',
    'Isaac',
    'Morris',
    'Clifton',
    'Willard',
    'Daryl',
    'Ross',
    'Virgil',
    'Andy',
    'Marshall',
    'Salvador',
    'Perry',
    'Kirk',
    'Sergio',
    'Marion',
    'Tracy',
    'Seth',
    'Kent',
    'Terrance',
    'Rene',
    'Eduardo',
    'Terrence',
    'Enrique',
    'Freddie',
    'Wade',
    'Mary',
    'Patricia',
    'Linda',
    'Barbara',
    'Elizabeth',
    'Jennifer',
    'Maria',
    'Susan',
    'Margaret',
    'Dorothy',
    'Lisa',
    'Nancy',
    'Karen',
    'Betty',
    'Helen',
    'Sandra',
    'Donna',
    'Carol',
    'Ruth',
    'Sharon',
    'Michelle',
    'Laura',
    'Sarah',
    'Kimberly',
    'Deborah',
    'Jessica',
    'Shirley',
    'Cynthia',
    'Angela',
    'Melissa',
    'Brenda',
    'Amy',
    'Anna',
    'Rebecca',
    'Virginia',
    'Kathleen',
    'Pamela',
    'Martha',
    'Debra',
    'Amanda',
    'Stephanie',
    'Carolyn',
    'Christine',
    'Marie',
    'Janet',
    'Catherine',
    'Frances',
    'Ann',
    'Joyce',
    'Diane',
    'Alice',
    'Julie',
    'Heather',
    'Teresa',
    'Doris',
    'Gloria',
    'Evelyn',
    'Jean',
    'Cheryl',
    'Mildred',
    'Katherine',
    'Joan',
    'Ashley',
    'Judith',
    'Rose',
    'Janice',
    'Kelly',
    'Nicole',
    'Judy',
    'Christina',
    'Kathy',
    'Theresa',
    'Beverly',
    'Denise',
    'Tammy',
    'Irene',
    'Jane',
    'Lori',
    'Rachel',
    'Marilyn',
    'Andrea',
    'Kathryn',
    'Louise',
    'Sara',
    'Anne',
    'Jacqueline',
    'Wanda',
    'Bonnie',
    'Julia',
    'Ruby',
    'Lois',
    'Tina',
    'Phyllis',
    'Norma',
    'Paula',
    'Diana',
    'Annie',
    'Lillian',
    'Emily',
    'Robin',
    'Peggy',
    'Crystal',
    'Gladys',
    'Rita',
    'Dawn',
    'Connie',
    'Florence',
    'Tracy',
    'Edna',
    'Tiffany',
    'Carmen',
    'Rosa',
    'Cindy',
    'Grace',
    'Wendy',
    'Victoria',
    'Edith',
    'Kim',
    'Sherry',
    'Sylvia',
    'Josephine',
    'Thelma',
    'Shannon',
    'Sheila',
    'Ethel',
    'Ellen',
    'Elaine',
    'Marjorie',
    'Carrie',
    'Charlotte',
    'Monica',
    'Esther',
    'Pauline',
    'Emma',
    'Juanita',
    'Anita',
    'Rhonda',
    'Hazel',
    'Amber',
    'Eva',
    'Debbie',
    'April',
    'Leslie',
    'Clara',
    'Lucille',
    'Jamie',
    'Joanne',
    'Eleanor',
    'Valerie',
    'Danielle',
    'Megan',
    'Alicia',
    'Suzanne',
    'Michele',
    'Gail',
    'Bertha',
    'Darlene',
    'Veronica',
    'Jill',
    'Erin',
    'Geraldine',
    'Lauren',
    'Cathy',
    'Joann',
    'Lorraine',
    'Lynn',
    'Sally',
    'Regina',
    'Erica',
    'Beatrice',
    'Dolores',
    'Bernice',
    'Audrey',
    'Yvonne',
    'Annette',
    'June',
    'Samantha',
    'Marion',
    'Dana',
    'Stacy',
    'Ana',
    'Renee',
    'Ida',
    'Vivian',
    'Roberta',
    'Holly',
    'Brittany',
    'Melanie',
    'Loretta',
    'Yolanda',
    'Jeanette',
    'Laurie',
    'Katie',
    'Kristen',
    'Vanessa',
    'Alma',
    'Sue',
    'Elsie',
    'Beth',
    'Jeanne',
    'Vicki',
    'Carla',
    'Tara',
    'Rosemary',
    'Eileen',
    'Terri',
    'Gertrude',
    'Lucy',
    'Tonya',
    'Ella',
    'Stacey',
    'Wilma',
    'Gina',
    'Kristin',
    'Jessie',
    'Natalie',
    'Agnes',
    'Vera',
    'Willie',
    'Charlene',
    'Bessie',
    'Delores',
    'Melinda',
    'Pearl',
    'Arlene',
    'Maureen',
    'Colleen',
    'Allison',
    'Tamara',
    'Joy',
    'Georgia',
    'Constance',
    'Lillie',
    'Claudia',
    'Jackie',
    'Marcia',
    'Tanya',
    'Nellie',
    'Minnie',
    'Marlene',
    'Heidi',
    'Glenda',
    'Lydia',
    'Viola',
    'Courtney',
    'Marian',
    'Stella',
    'Caroline',
    'Dora',
    'Jo',
    'Vickie',
    'Mattie',
    'Terry',
    'Maxine',
    'Irma',
    'Mabel',
    'Marsha',
    'Myrtle',
    'Lena',
    'Christy',
    'Deanna',
    'Patsy',
    'Hilda',
    'Gwendolyn',
    'Jennie',
    'Nora',
    'Margie',
    'Nina',
    'Cassandra',
    'Leah',
    'Penny',
    'Kay',
    'Priscilla',
    'Naomi',
    'Carole',
    'Brandy',
    'Olga',
    'Billie',
    'Dianne',
    'Tracey',
    'Leona',
    'Jenny',
    'Felicia',
    'Sonia',
    'Miriam',
    'Velma',
    'Becky',
    'Bobbie',
    'Violet',
    'Kristina',
    'Toni',
    'Misty',
    'Mae',
    'Shelly',
    'Daisy',
    'Ramona',
    'Sherri',
    'Erika',
    'Katrina',
    'Claire'
];

const prefix = [
    'bot',
    'bot',
    'machinned',
    'machinned_',
    'wellmachined',
    'well_machined_',
    'shiny',
    'shiny_',
    'welloiled',
    'well_oiled_',
    'fast',
    'fast_',
    'binary',
    'binary_',
    'terminator',
    'terminator_',
    'friendly',
    'friendly_',
    'automaton',
    'automaton_',
    'autobot',
    'autobot_',
    'optimus',
    'optimus_',
    'clever',
    'clever_',
    'smart',
    'smart_',
    'i',
    'tighttolerance',
    'tight_tolerance_',
    'quantum',
    'quantum_'
]

const postfix = [
    'theterminator',
    '_the_terminator',
    'bot',
    '_bot',
    'thesuperbot',
    '_the_superbot',
    '_the_super_bot',
    'thebot',
    '_the_bot',
    'lovesoil',
    '_loves_oil',
    'likesoil',
    '_likes_oil',
    'thecalculator',
    '_the_calculator',
]

const adj = [
    'abrupt',
    'acidic',
    'adorable',
    'amiable',
    'amused',
    'average',
    'batty',
    'bored',
    'brave',
    'bright',
    'broad',
    'charming',
    'cheeky',
    'cheerful',
    'chubby',
    'clean',
    'clear',
    'cloudy',
    'crooked',
    'cruel',
    'cumbersome',
    'curved',
    'cynical',
    'dangerous',
    'dashing',
    'decayed',
    'deceitful',
    'deep',
    'defeated',
    'dizzy',
    'drab',
    'drained',
    'dull',
    'eager',
    'elegant',
    'emaciated',
    'embarrassed',
    'enchanting',
    'energetic',
    'fancy',
    'fantastic',
    'fierce',
    'filthy',
    'flat',
    'floppy',
    'fluttering',
    'foolish',
    'frantic',
    'fresh',
    'friendly',
    'gentle',
    'ghastly',
    'giddy',
    'gigantic',
    'glamorous',
    'gleaming',
    'glorious',
    'gorgeous',
    'graceful',
    'greasy',
    'grieving',
    'gritty',
    'grotesque',
    'healthy',
    'helpful',
    'helpless',
    'high',
    'hollow',
    'homely',
    'horrific',
    'huge',
    'hungry',
    'hurt',
    'icy',
    'ideal',
    'irritable',
    'itchy',
    'jealous',
    'jittery',
    'jolly',
    'icy',
    'ideal',
    'jolly',
    'joyous',
    'juicy',
    'jumpy',
    'kind',
    'lethal',
    'lucky',
    'ludicrous',
    'macho',
    'narrow',
    'nasty',
    'naughty',
    'nervous',
    'nutty',
    'perfect',
    'perplexed',
    'petite',
    'petty',
    'plain',
    'pleasant',
    'poised',
    'pompous',
    'precious',
    'prickly',
    'proud',
    'pungent',
    'puny',
    'quaint',
    'reassured',
    'relieved',
    'repulsive',
    'responsive',
    'ripe',
    'robust',
    'rotten',
    'rotund',
    'rough',
    'round',
    'salty',
    'sarcastic',
    'scant',
    'shaggy',
    'shaky',
    'shallow',
    'sharp',
    'shiny',
    'short',
    'silky',
    'silly',
    'skinny',
    'slimy',
    'slippery',
    'tasty',
    'teeny',
    'tender',
    'tense',
    'terrible',
    'testy',
    'thankful',
    'thick',
    'tight',
    'timely',
    'tricky',
    'trite',
    'weary',
    'zany',
    'zealous',
    'zippy',
    'horny',
    'hot',
    'cold',
    'sexy',
    'cool',
    'raw',
    'sloppy',
    'moist',
    'cocky',
    'sleazy'
]

const noun = [
    // ANIMALS
    'dog',
    'cow',
    'cat',
    'horse',
    'donkey',
 	'tiger',
    'lion',
    'panther',
    'leopard',
    'cheetah',
    'bear',
    'polarbear',
    'elephant',
  	'turtle',
    'tortoise',
    'crocodile',
    'rabbit',
 	'porcupine',
    'hare',
    'hen',
    'pigeon',
 	'albatross',
    'crow',
    'fish',
    'dolphin',
 	'frog',
    'whale',
    'alligator',
    'eagle',
 	'squirrel',
    'ostrich',
    'fox',
    'shark',
    'goat',
 	'jackal',
    'emu',
    'armadillo',
    'eel',
 	'goose',
    'arcticfox',
    'wolf',
    'beagle',
    'gorilla',
 	'chimpanzee',
    'monkey',
    'beaver',
 	'orangutan',
    'antelope',
    'bat',
    'badger',
 	'giraffe',
    'crab',
    'giant',
    'panda',
    'hamster',
    'cobra',
    'camel',
    'hawk',
 	'deer',
    'chameleon',
    'hippopotamus',
    'jaguar',
 	'chihuahua',
    'king cobra',
    'ibex',
    'lizard',
 	'koala',
    'kangaroo',
    'iguana',
    'llama',
 	'chinchillas',
    'dodo',
    'jellyfish',
    'rhinoceros',
 	'hedgehog',
    'zebra',
    'possum',
    'wombat',
    'bison',
    'bull',
    'buffalo',
    'sheep',
    'meerkat',
    'mouse',
    'otter',
    'sloth',
    'owl',
    'vulture',
    'flamingo',
    'racoon',
    'mole',
    'duck',
    'swan',
    'lynx',
    'monitor',
    'elk',
    'boar',
    'lemur',
    'mule',
    'baboon',
    'mammoth',
    'bluewhale',
    'rat',
    'snake',
    'peacock',
    // FOODS
    'salad',
    'sandwich',
    'bread',
    'steak',
    'tuna',
    'fish',
    'shrimp',
    'rice',
    'spaghetti',
    'pizza',
    'hamburger',
    'egg',
    'cheese',
    'sausage',
    'apple',
    'grape',
    'juice',
    'milk',
    'candy',
    'cookie',
    'pie',
    'cake',
    'cupcake',
    'mutton',
    'beef',
    'stew',
    'lamb',
    'chicken',
    'turkey',
    'salmon',
    'cod',
    'banana',
    'grapefruit',
    'lasagna',
    'porridge',
    'wheat',
    'kiwi',
    'pineapple',
    'potato',
    'carrot',
    'mint',
    'basil',
    'thyme',
    'pepper',
    'chili',
    'tomato',
    'beets',
    'onion',
    'garlic',
    'mustard',
    'ranch',
    'ketchup',
    'olive',
    'bean',
    'cola',
    'water',
    'jin',
    'whiskey',
    'vodka',
    'tequila',
    'wine',
    'absinthe',
    'beer',
    'champagne'
]

const verb = [
    'have',
    'do',
    'say',
    'go',
    'get',
    'make',
    'know',
    'think',
    'take',
    'see',
    'come',
    'want',
    'look',
    'use',
    'find',
    'give',
    'tell',
    'work',
    'call',
    'try',
    'ask',
    'need',
    'feel',
    'become',
    'leave',
    'put',
    'mean',
    'keep',
    'let',
    'begin',
    'seem',
    'help',
    'talk',
    'turn',
    'start',
    'show',
    'hear',
    'play',
    'run',
    'move',
    'like',
    'live',
    'believe',
    'hold',
    'bring',
    'happen',
    'write',
    'provide',
    'scratch',
    'shag',
    'sit',
    'stand',
    'lose',
    'pay',
    'meet',
    'include',
    'continue',
    'set',
    'learn',
    'change',
    'lead',
    'understand',
    'watch',
    'follow',
    'stop',
    'create',
    'speak',
    'read',
    'allow',
    'add',
    'spend',
    'grow',
    'open',
    'walk',
    'win',
    'offer',
    'remember',
    'love',
    'consider',
    'appear',
    'buy',
    'wait',
    'serve',
    'die',
    'send',
    'expect',
    'build',
    'stay',
    'fall',
    'cut',
    'reach',
    'kill',
    'remain',
    'suggest',
    'raise',
    'pass',
    'sell',
    'require',
    'report',
    'decide',
    'pull',
    'monitor',
    'rub',
    'feel',
    'rid',
    'cool',
    'grip',
    'march',
    'sink',
    'gain',
    'request',
    'strangle',
    'slay',
    'strain',
    'heat',
    'discover',
    'incur',
    'drive',
    'favour',
    'marry',
    'flow',
    'assemble',
    'multiply',
    'succeed',
    'stick',
    'rate',
    'convict',
    'control',
    'load',
    'trade',
    'float',
    'wear',
    'object',
    'weigh',
    'seal',
    'argue',
    'distribute',
    'scream',
    'ask',
    'twist',
    'slip',
    'press',
    'declare',
    'price',
    'entail',
    'install',
    'enclose',
    'waste',
    'chug',
    'score',
    'base',
    'collect',
    'fear',
    'worry',
    'kill',
    'love',
    'die',
    'sniff',
    'squeal',
    'fire',
    'forget',
    'wash',
    'clean',
    'wreck'
]

const bleepArray = [];

const commentsSectionArray = [];

let b = 0; // bleep index

let targetUsername;

function bleepTemplate() {
return `<div class='bleep' id=bleep${b}>
    <img class='profileImage' alt='Profile Image'>
    <header class='infoContainer'>
        <h5 class='profileName'></h5>
        <h6 class='profileUsername'></h6>
        <time class='timeStamp'></time>
        <button class='topRightButton'><img src='svgs/report_off.svg'></button>
    </header>
    <div class='topRightPopup off'>
        <button class='blockButton'>Block</button>
        <button class='reportButton'>Report</button>
    </div>

    <p class='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis atque, molestias laudantium omnis suscipit cumque delectus, tempore doloribus tempora ut nemo, sapiente mollitia! Sit, facilis.</p>
    
    <div class='actionbar'>
        <button class='leftButton'>
            <label class='sharesCounter'></label>
            <img src='svgs/share.svg' class='shareButtonImage'>
        </button>

        <button class='centerButton'>
            <label class='commentsCounter'></label>
            <img src='svgs/comment.svg' class='commentButtonImage'>
        </button>

        <button class='rightButton'>
            <label class='likesCounter'></label>
            <img src='svgs/like.svg' class='likeButtonImage'>
        </button>
    </div>
</div>`;}

function commentsSectionTemplate(b) {
  return`<section class='commentsSection' id='commentsSection${b}'>
        <div class='commentsSectionButtons'>
            <button class='hideButton'>Hide</button>
            <button class='moreButton'>More >></button>
        </div>
    </section>`
}

// -------------------------CLASSES-----------------------------

class Profile {
    constructor (email, password, name, username) {
        this.email = email
        this.password = password
        this.name = name
        this.username = username
        this.image
        this.bleepCount = 0
        this.bleep = []
    }
}

class Generic {
    constructor(identifier){
        this.itself = document.querySelector(`${identifier}`);
    }
}

class Settings extends Generic {
    constructor(identifier) {
        super(identifier)
        this.accountSettings = this.itself.querySelector(`#accountSettings`)
        this.blockList = this.itself.querySelector(`#blockList`)
        this.language = this.itself.querySelector(`#language`)
        this.appearance = this.itself.querySelector(`#appearance`)
        this.logOut = this.itself.querySelector(`#logOut`)
        this.clearLS = this.itself.querySelector(`#clearLS`)
        this.about = this.itself.querySelector(`#about`)

        this.logOut.addEventListener('click', e => {
            login.change()
        })
        this.clearLS.addEventListener('click', e => {
            localStorage.clear()
        })
    }
}

class BleepList extends Generic {
    generateNewBleeps(number){
        for (const initial=b; b<initial+number; b++) {
            this.itself.insertAdjacentHTML('beforeend', bleepTemplate());
            bleepArray[b] = new Bleep(`#bleep${b}`);
            bleepArray[b].updateValues();
            timeLimit = bleepArray[b].time;
        }
    }
    generateComments(){
        this.itself.insertAdjacentHTML('beforeend', bleepTemplate());
        bleepArray[b] = new Bleep(`#bleep${b}`);
        // bleepArray[b].setImage(sessionStorage.getItem('targetImage'))
        bleepArray[b].setName(sessionStorage.getItem('targetName'))
        bleepArray[b].setUsername(sessionStorage.getItem('targetUsername'))
        bleepArray[b].settimeStamp(sessionStorage.getItem('targetTime'))
        bleepArray[b].setShares(sessionStorage.getItem('targetShares'))
        bleepArray[b].setComments(sessionStorage.getItem('targetComments'))
        bleepArray[b].setLikes(sessionStorage.getItem('targetLikes'))
        timeLimit = bleepArray[b].time;
    }
}

class GenericBleep extends Generic{
    constructor(identifier) {
        super(identifier)
        this.profileImage = this.itself.querySelector(`.profileImage`)
        this.profileName = this.itself.querySelector(`.profileUsername`)
        this.profileUsername = this.itself.querySelector(`.profileUsername`)
        this.timeStamp = this.itself.querySelector(`.timeStamp`)
        this.topRightButton = this.itself.querySelector(`.topRightButton`)
        this.leftButton = this.itself.querySelector(`.leftButton`);
        this.leftButtonImage = this.leftButton.querySelector(`img`);
        this.centerButton = this.itself.querySelector(`.centerButton`);
        this.rightButton = this.itself.querySelector(`.rightButton`);
        this.rightButtonImage = this.rightButton.querySelector(`img`);
        this.attachMediaInput = this.itself.querySelector(`#attachMediaInput`)
    }
}

class Bleep extends GenericBleep {
    constructor(identifier) {
        super(identifier)
        this.image = imagePicker();
        this.name = namePicker();
        this.username = usernamePicker(this.name);
        this.time = timeSetter(timeLimit);
        this.shares = x(300);
        this.comments = x(150);
        this.likes = x(19500)+500;
        this.cBfirstTime = true;
        this.likedByYou = false;
        this.commentsSection;
        this.topRightPopup = this.itself.querySelector('.topRightPopup');
        this.blockButton = this.itself.querySelector('.blockButton');
        this.reportButton = this.itself.querySelector('.reportButton');
        this.sharesCounter = this.itself.querySelector('.sharesCounter');
        this.commentsCounter = this.itself.querySelector('.commentsCounter');
        this.likesCounter = this.itself.querySelector('.likesCounter');    

        this.topRightButton.addEventListener('click', e =>{
            toggleDisplayNoneOf(this.topRightPopup);
        })
        this.blockButton.addEventListener('click', e =>{
            toggleDisplayNoneOf(blockSection.itself, this.topRightPopup);
            toggleBodyNoScroll();
            this.passInfoTo(blockSection);
        })
        this.reportButton.addEventListener('click', e => {
            toggleDisplayNoneOf(reportSection.itself, this.topRightPopup);
            toggleBodyNoScroll();
            this.passInfoTo(confirmReportSection);
        })
        this.leftButton.addEventListener('click', e => {
            navigator.share(`https://youtu.be/dQw4w9WgXcQ`)
        })
        this.centerButton.addEventListener('click', e => {
            if (this.cBfirstTime === false) {
                toggleDisplayNoneOf(this.itself.nextSibling);
            }
            else {
                this.generateCommentsSection();
                commentsSectionArray[b].generateNewBleeps(3);
                this.cBfirstTime = false;
                this.storeInSession();
            }
        })
        this.rightButton.addEventListener('click', e => {
            if (this.likedByYou === false){
                this.likes++;
                this.likedByYou = true;
            }else{
                this.likes--;
                this.likedByYou = false;
            }
            this.updateValues();
        })
    }

    updateValues() {
        this.profileImage.src = this.image;
        this.profileName.innerText = this.name;
        this.profileUsername.innerText = '@'+this.username;
        this.timeStamp.innerText = timeToText(this.time);
        this.sharesCounter.innerText = this.shares+'+';
        this.commentsCounter.innerText = this.comments;
        this.likesCounter.innerText = transformNumber(this.likes);
    }

    setImage(value) {
        this.profileImage.src=value;
    }
    setName(value) {
        this.profileName.innerText=value;
    }
    setUsername(value) {
        this.profileUsername.innerText=value;
    }
    settimeStamp(value) {
        this.timeStamp.innerText=timeToText(value);
    }
    setShares(value) {
        this.sharesCounter.innerText=`${value}+`;
    }
    setComments(value) {
        this.commentsCounter.innerText=`${value}+`;
    }
    setLikes(value) {
        this.likesCounter.innerText=transformNumber(value);
    }

    passInfoTo(identifier){
        identifier.profileImage.src = this.image;
        identifier.profileName.innerText = this.name;
        identifier.profileUsername.innerText = '@'+this.username;
        identifier.target = this.itself;
    }

    storeInSession() {
        sessionStorage.setItem('targerPicture', this.image)
        sessionStorage.setItem('targetName', this.name)
        sessionStorage.setItem('tagertUsername', this.username)
        sessionStorage.setItem('targetTime', this.time)
        sessionStorage.setItem('targetShares', this.shares)
        sessionStorage.setItem('targetComments', this.comments)
        sessionStorage.setItem('targetLikes', this.likes)
    }

    generateCommentsSection() {
        this.itself.insertAdjacentHTML('afterend', commentsSectionTemplate(b));
        commentsSectionArray[b] = new CommentsSection(`#commentsSection${b}`);
    }
}

class CommentBleep extends Bleep {
    constructor(identifier) {
        super(identifier)
        this.comment;
        this.centerButton.addEventListener('click', e => {
            console.log('success');
        })
    }
}

class Navbar extends Generic {
    constructor(identifier) {
        super(identifier)
        this.leftButton = this.itself.querySelector(`.leftButton`);
        this.leftButtonImage = this.leftButton.querySelector(`img`);
        this.centerButton = this.itself.querySelector(`.centerButton`);
        this.rightButton = this.itself.querySelector(`.rightButton`);
        this.rightButtonImage = this.rightButton.querySelector(`img`);
    }
}

class MainNav extends Navbar {
    constructor(identifier){
        super(identifier)

        this.leftButton.addEventListener('click', e => {
            for (let i=0; i<15; i++) {
                if (login.status) {
                    toggleDisplayNoneOf(bleepList.itself, settings.itself, settingsNav.itself)
                }else{
                    displayLoginPopup(`adjust settings`)
                }
            }
            
        })
        this.centerButton.addEventListener('click', e=> {
            for (let i=0; i<15; i++) {
                if (login.status) {
                    toggleDisplayNoneOf(composeSection.itself)
                    toggleBodyNoScroll()
                }else{
                    displayLoginPopup(`bleep out`)
                }
            }
        })
        this.rightButton.addEventListener('click', e => {
            for (let i=0; i<15; i++) {
                if (login.status) {
                    console.log('your profile')
                }else{
                    displayLoginPopup(`access your profile page`)
                }
            }
        })
    }
}

class Login {
    constructor() {
        localStorage.setItem('logged', false)
    }
    
    get status() {
        return localStorage.getItem('logged')
    }

    change() {
        if (localStorage.getItem('logged')) {
            localStorage.setItem('logged', false)
        }else{
            localStorage.setItem('logged', true)
        }
    }
}

class ComposeNav extends Navbar {
    constructor(identifier) {
        super(identifier)

        this.leftButton.addEventListener('click', e => {
            toggleDisplayNoneOf(composeSection.itself)
            toggleBodyNoScroll()
        })
    }

    updateCharsLeftCounter() {
        const charsLeft = 300 - composeBleep.textArea.value.length;
        if (charsLeft > 1){
            this.centerButton.innerText = `${charsLeft} characters left`;
        }else if (charsLeft === 1){
            this.centerButton.innerText = `1 character left`;
        }else{
            this.centerButton.innerText = `0 characters left`;
        }
    }
}

class SettingsNav extends Navbar {
    constructor(identifier) {
        super(identifier)

        this.rightButton.addEventListener('click', e => {
            toggleDisplayNoneOf(this.itself, settings.itself, bleepList.itself);
            toggleBodyNoScroll();
        })
    }
}

class ComposeBleep extends GenericBleep {
    constructor(identifier) {
        super(identifier)
        this.textArea = this.itself.querySelector(`#textArea`)
        this.attachPreview = this.itself.querySelector(`#attachPreview`)
        this.attachDeleteButton = this.itself.querySelector(`#attachDeleteButton`)
        this.attachPreviewImage = this.itself.querySelector(`#attachPreviewImage`)
        // this.attachedFile = this.attachMediaInput.files[0]

        this.textArea.addEventListener('input', e => {
            composeNav.updateCharsLeftCounter();
            this.autoSize();
        })
        this.leftButton.addEventListener('click', e => {
            toggleDisplayNoneOf(erasePopup.itself);
        })
        this.centerButton.addEventListener('click', e => {
            this.attachMediaInput.click()
        })
        this.attachDeleteButton.addEventListener('click', e => {
            console.log('yes')
            toggleDisplayNoneOf(this.attachPreview)
            // this.attachedFile.value = null;
        })
    }

    autoSize() {
        this.textArea.setAttribute('rows', 1);
        const initialScrollHeight = this.textArea.clientHeight
        let rowNumber = Math.round(this.textArea.scrollHeight/initialScrollHeight);
        this.textArea.setAttribute('rows', rowNumber);
    }
}

class Popup extends Generic {
    constructor(identifier) {
        super(identifier)
        this.leftButton = this.itself.querySelector(`.leftButton`)
        this.rightButton = this.itself.querySelector(`.rightButton`)

        this.itself.addEventListener('click', e => {
            if (e.target !== this.itself) return
            else {
            toggleDisplayNoneOf(this.itself)
            toggleBodyNoScroll()
            }
        })
    }
}

class ErasePopup extends Popup {
    constructor(identifier) {
        super(identifier)

        this.leftButton.addEventListener('click', e => {
            composeBleep.textArea.value = null;
            composeBleep.textArea.setAttribute('rows', 1);
            composeNav.updateCharsLeftCounter();
            toggleDisplayNoneOf(this.itself);
        })
        this.rightButton.addEventListener('click', e => {
            toggleDisplayNoneOf(this.itself);
        })
    }
}

class SignupSection extends Popup {
    constructor(identifier) {
        super(identifier)
        this.inputEmail = this.itself.querySelector(`#inputEmail`)
        this.inputPassword = this.itself.querySelector(`#inputPassword`)
        this.inputName = this.itself.querySelector(`#inputName`)
        this.inputUsername = this.itself.querySelector(`#inputUsername`)

        this.rightButton.addEventListener('click', e => {
            e.preventDefault()
            if (this.validation()) {
                createProfile()
                imageSection.name.innerText = this.inputName.value
                imageSection.username.innerText = '@'+this.inputUsername.value
                toggleDisplayNoneOf(this.itself, imageSection.itself)
            }else{
            console.log('Validation failed')
            }
        })
    }

    validation() {
        let nov = 0 // number of validations
        if (this.emailValidation()) nov++
        if (this.passwordValidation()) nov++
        if (this.nameValidation()) nov++
        if (this.usernameValidation()) nov++
        if (nov === 4) return true
        return false
    }

    emailValidation() {
        const input = this.inputEmail.value.toString().toLowerCase()
        const format = /.{2,}@.{2,}\..{2,}/
        const regex = /[^\w0-9@\.-]/
        const atSplit = input.split('@')
        if (!input) {
            this.inputEmail.setAttribute('placeholder', `Please, enter your email`)
            return false
        }
        if (input.length < 5) {
            invalidate()
        }
        if (!format.test(input)) {
            invalidate()
        }
        if (regex.test(input)) {
            invalidate()
        }
        if (atSplit.length > 2) { // testing for excess @
            invalidate()
        }
        if (atSplit[1].split('.').length > 2) { // testing for excess . after @
            invalidate()
        }
        for (let i=0; i<15; i++) {
            if (input === localStorage.getItem(`profile${i}email`)) {
                this.inputEmail.value = null
                this.inputEmail.setAttribute('placeholder', `This email is already in use`)
                return false
            }
        }
        console.log('true')
        return true
    }

    passwordValidation() {
        const input = this.inputPassword.value.toString()
        if (!input) {
            this.inputPassword.setAttribute('placeholder', `Please, enter a password`)
            return false
        }
        if (input.length < 5) {
            this.inputPassword.value = null
            this.inputPassword.setAttribute('placeholder', `This password is too short`)
            return false
        }
        return true
    }

    nameValidation() {
        const input = this.inputName.value.toString()
        if (!input) {
            this.inputName.setAttribute('placeholder', `Please, choose a name`)
            return false
        }
        if (input.length < 2) {
            this.inputName.value = null
            this.inputName.setAttribute('placeholder', `This name is too short`)
            return false
        }
        return true
    }

    usernameValidation() {
        const input = this.inputUsername.value.toString()
        const regex = /[^\w|\.|\-]|' '/
        if (!input) {
            this.inputUsername.setAttribute('placeholder', `Please, choose a username`)
            return false
        }
        if (input.length < 2) {
            this.inputUsername.value = null
            this.inputUsername.setAttribute('placeholder', `This username is too short`)
            return false
        }
        if (regex.test(input)) {
            this.inputUsername.value = null
            this.inputUsername.setAttribute('placeholder', `Can't use forbidden characters`)
            return false
        }
        for (let i=0; i<bleepArray.length; i++) { 
            if (input === localStorage.getItem(`profile${i}username`) || input === bleepArray[i].username) {
                this.inputUsername.value = null
                this.inputUsername.setAttribute('placeholder', `This username is already in use`)
                return false
            }
        }
        return true
    }
}

class ImageSection extends Popup {
    constructor(identifier) {
        super(identifier)
        this.imageInput = this.itself.querySelector(`#imageInput`)
        this.name = this.itself.querySelector(`.name`)
        this.username = this.itself.querySelector(`.username`)

        this.leftButton.addEventListener('click', e => {
            toggleDisplayNoneOf(this.itself)
            toggleBodyNoScroll()
        })
    }
}

class BlockSection extends Popup {
    constructor(identifier) {
        super(identifier)
        this.profileImage = this.itself.querySelector(`.profileDetails img`);
        this.profileName = this.itself.querySelector(`.profileDetails .name`);
        this.profileUsername = this.itself.querySelector(`.profileDetails .username`);

        this.leftButton.addEventListener('click', e => {
            toggleDisplayNoneOf(this.itself)
            toggleBodyNoScroll()
        })
    }
}

class ReportSection extends Popup {
    constructor(identifier) {
        super(identifier)
        this.select = this.itself.querySelector(`select`);

        this.leftButton.addEventListener('click', e => {
            toggleDisplayNoneOf(this.itself);
            toggleBodyNoScroll();
        })
        this.rightButton.addEventListener('click', e => {
            confirmReportSection.reason.innerText = this.select.value
            toggleDisplayNoneOf(this.itself, confirmReportSection.itself)

        })
    }
}

class LoginSignup extends Popup {
    constructor(identifier) {
        super(identifier)
        this.insert = this.itself.querySelector(`#insert`)

        this.leftButton.addEventListener('click', e=>{
            console.log('LOGIN')
        })
        this.rightButton.addEventListener('click', e=>{
            toggleDisplayNoneOf(this.itself, signupSection.itself)
        })
    }
}

class ConfirmReportSection extends Popup {
    constructor(identifier) {
        super(identifier)
        this.reason = this.itself.querySelector(`#reason`);
        this.profileImage = this.itself.querySelector(`.profileDetails img`);
        this.profileName = this.itself.querySelector(`.profileDetails .name`);
        this.profileUsername = this.itself.querySelector(`.profileDetails .username`);
        this.target;

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

class CommentsSection extends Generic {
    constructor (identifier) {
        super(identifier)
        this.hideButton = this.itself.querySelector(`.hideButton`);
        this.moreButton = this.itself.querySelector(`.moreButton`);

        this.hideButton.addEventListener('click', e=> {
            toggleDisplayNoneOf(this.itself);
        })
        this.moreButton.addEventListener('click', e => {
            toggleDisplayNoneOf(bleepList2.itself, bleepList.itself);
            bleepList2.generateComments();
        })
    }

    generateNewBleeps(number){
        for (const initial=b; b<initial+number; b++) {
            this.itself.insertAdjacentHTML('afterbegin', bleepTemplate(b));
            bleepArray[b] = new CommentBleep(`#bleep${b}`);
            bleepArray[b].updateValues();
        }
    }
}

// -------------------------GLOBAL FUNCTIONS-----------------------------

const x = (limit) => Math.floor(Math.random() * limit)

function toggleDisplayNoneOf() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].classList.toggle('off');
    }
}

function createProfile() {
    profile[pi] = new Profile(
        this.inputEmail.value,
        this.inputPassword.value,
        this.inputName.value,
        this.inputUsername.value
    )
    localStorage.setItem(`loggedIn`, true)
    localStorage.setItem(`profile${pi}email`, profile[pi].email)
    localStorage.setItem(`profile${pi}password`, profile[pi].password)
    localStorage.setItem(`profile${pi}name`, profile[pi].name)
    localStorage.setItem(`profile${pi}username`, profile[pi].username)
    pi++
}

function invalidate() {
    this.inputEmail.value = null
    this.inputEmail.setAttribute('placeholder', `Please, enter a valid email`)
    return false
}

function displayLoginPopup(text) {
    toggleDisplayNoneOf(loginSignup.itself)
    toggleBodyNoScroll()
    loginSignup.insert.innerText = text
}


// ---------------ELEMENTS
const bleepList = new BleepList('#bleepList');
const bleepList2 = new BleepList(`#bleepList2`);
const mainNav = new MainNav(`#mainNav`);
const composeSection = new Generic (`#composeSection`);
const composeBleep = new ComposeBleep(`#composeBleep`)
const composeNav = new ComposeNav(`#composeNav`);
const blockSection = new BlockSection(`#blockSection`)
const reportSection = new ReportSection(`#reportSection`)
const confirmReportSection = new ConfirmReportSection(`#confirmReportSection`)
const erasePopup = new ErasePopup(`#erasePopup`)
const settings = new Settings(`#settings`)
const settingsNav = new SettingsNav(`#settingsNav`);
const loginSignup = new LoginSignup(`#loginSignup`)
const signupSection = new SignupSection(`#signupSection`)
const imageSection = new ImageSection(`#imageSection`)
const login = new Login
const profile = []
let pi = 0 //profile index
let timeLimit;

// ----------------------------ONLOAD-----------------------------

window.onload=pageSetup();

function pageSetup() {
    window.scrollTo(0, 0);
    bleepList.generateNewBleeps(10);
}

function toggleBodyNoScroll() {
    document.body.classList.toggle('noscroll');
}

// ---------------------------INFINITE SCROLL---------------------------

const action = entries => {
    let targ = entries[0];
    if (targ.isIntersecting) {
        viewport.unobserve(targetBleep);
        bleepList.generateNewBleeps(10);
        targetBleep = document.querySelectorAll('.bleep')[b-2];
        viewport.observe(targetBleep);
    }
}

const options = {
    rootMargin: '-10%'
}

const viewport = new IntersectionObserver(action, options);
let targetBleep = document.querySelectorAll('.bleep')[b-2];

viewport.observe(targetBleep);

// ----------------------------GLOBAL LISTENERS-----------------------------

//-----------MAIN PAGE

//-----------COMPOSE PAGE


//# backspace registers as -character after a long series of inputs`

function blockUser(b){
    const bleepUsername = document.querySelectorAll('.profileUsername');
    for (let n=0; n<b; n++) {
        if (bleepUsername[n].innerText === targetUsername){
            bleepUsername[n].closest('.bleep').remove();
        }
    }
}

// ----------------------------BLEEP CREATION------------------------------

function setupBleep(b, place, position, content) {
    place.insertAdjacentHTML(position, content)
    bleepArray[b] = new Bleep(`#bleep${b}`)
    bleepArray[b].updateValues()
}

//^ SATISFIED
function genderPicker(){
    let n = x(2);
    if (n === 0) return 'male'
    return 'female'
}

//^ SATISFIED
function imagePicker() {
    let n = x(50)
    return `pics/${n}.jpg`
}

//^ SATISFIED
function namePicker() {
    let n = x(600)
    return namesList[n]
}

//# WORKS, Needs more options
function usernamePicker(name) {
    let dice = x(3)
    let username
    switch (dice) {
        case 0: username = name
        break
        case 1: username = prefix[x(prefix.length)]+name
        break
        case 2: username = name+postfix[x(postfix.length)]
        break
    }
    return username.toLowerCase()
}

function timeSetter(limit) {
    if (limit === undefined) return Date.now() - x(90)*1000
    return limit - x(90)*1000
}

function timeToText(timeStamp) {
    const difference = (Date.now() - timeStamp)/1000
    if (difference<60) return `Less than a minute ago`
    if (difference<120) return `One minute ago`
    if (difference<3600) return `${Math.round(difference/60)} minutes ago`
    if (difference<7200) return `One hour ago`
    if (difference<86400) return `${Math.round((difference/60)/60)} hours ago`
}

function transformNumber(number) {
    if (number === 0) return null
    if (number<1001) return number
    if (number<1000000) return `${Math.floor(number/1000)}K+`
}