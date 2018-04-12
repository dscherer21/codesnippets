var word =  '';

word = word + 'hello';
word = word + '';
word = word + 'world';
word = word + '!';
console.log(word);



for(var i=0; i<word.length; i++) {
    console.log(word[i]);
}


var animal = 'the fox says';

console.log(animal.indexOf['f'] + 1);


var animal = 'the giraffe says sup';

//one way
console.log(animal.indexOf('sup') > -1);
console.log(animal.indexOf('the') > -1);

//another way
if(indexOf(animal.length) === 'sup') {
    console.log(True);
} else {
    console.log(false);
}

if(indexOf(animal.length) === 'the')  {
    console.log(true);
} else {
    console.log(false);
}

length-1;

var word = 'fiesta';

console.log(word[2]);


greeting = 'hellg wgrld';

greeting = 'gello world';


var f = 'apple';

console.log(f[2] + f[3]);

9.

var gg = 'the giraffe said hi';

console.log(gg[0].toUpperCase() + gg[0].slice());

10.

var animal = 'moose';

animal.replace('s', 'z');

11.

var dogs = [];

dogs.push('rover');

dogs.push('hunter');

dogs.push('oak');

console.log(dogs.length - 3);

12. 
a.
var letters = ['h', 'c', 'i', 'r'];

letters.reverse;

console.log(letters[0] + letter[1] + letters[2] + letters[3]);

b.
var famousToms = ['Tom Cruis', 'Tom Hanks', 'Tom Keel'];
famousToms[0].replace('Tom Petty');

c.
var nums = [];
for(var i = 8; i <= 1000; i++) {
    nums.push(i);
}
console.log(nums);

13.

function tripleLength(str) {
    return str.length * 3;
}
tripleLength('allen');
console.log(str);

14.

var nums = [102, 101];

for(var i = 100; i > 0; i--) {
    nums.push(i);
}

15.

function arrayMerge(arr) {
    return arr.join('');
}

16.

function arrSum(arr) {
   sum = 0
   for(i=0; i<arr.length; i++) {
       sum + i;
   }
}

17.

a.  11x NaN 

b.  15

c.  11x NaN

d.  'hi6'

e.  69x 48

18.

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="main.js"></script>

</head>
<body>
    <button>hello</button>
</body>
<script>
    $('button').on('click', function() {
        alert('Hello!');
    })
</script>

</html>

bonus 1. doctype is what tells the browser to render this page in html
bonus 2. 

var tyler = {
    name: 'Tyler',
    waterBottle: true,
    whereLunchTodya: "Tyler's House"
}

tyler['is A Bro'] = true;
tyler['favBand'] = 'Iron Maiden';
tyler.waterBottle = false;
for(key in tyler)

app.get('/name/:person_name', function(req, res) {
    var person_name = req.params.person_name;
    res.send(person_name.toLowerCase());
})

app.get('/:string1/:string2', function(req, res) {
    var string1 = req.params.string1;
    var string2 = req.params.string2;
    if(string1.length === string2.length) {
        res.send(true);
    } else {
        res.send(false);
    };
});