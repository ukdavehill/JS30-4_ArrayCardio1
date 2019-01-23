const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
console.log("The inventors array:")
console.log(inventors);

console.log("INSTRUCTIONS");


console.log("1. Filter the list of inventors for those who were born in the 1500's");
const bornIn1500s = inventors.filter(inventor => inventor.year > 1500 && inventor.year < 1600);
console.table(bornIn1500s);
console.log("============================================================");

// Array.prototype.map()
console.log("2. Give us an array of the inventors' first and last names");
const firstAndLast = inventors.map(inventor =>{
	var obj = {};
	obj.first = inventor.first;
	obj.last = inventor.last;
	return obj;
})


console.table(firstAndLast);

console.log("Or....")

const altFirstAndLast = inventors.map(inventor =>{
	
	return inventor.first + " " + inventor.last;
});
console.table(altFirstAndLast);
console.log("============================================================");

// Array.prototype.sort()
console.log("3. Sort the inventors by birthdate, oldest to youngest");
const sortedInventorsBirthdate = inventors.sort((a,b) => a.year - b.year);
console.table(sortedInventorsBirthdate);
console.log("============================================================");

// Array.prototype.reduce()
console.log("4. How many years did all the inventors live?");
const totalYearsLived = inventors.reduce((acc, cur) => acc + (cur.passed - cur.year),0);
console.log(totalYearsLived);
console.log("============================================================");

console.log("5. Sort the inventors by years lived");
const sortedInventorsAge = inventors.sort((a,b) => (b.passed - b.year) - (a.passed - a.year));
console.table(sortedInventorsAge);
console.log("============================================================");

console.log("6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name");
console.log("Go to https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris ")
console.log("The code to add to the console is in the comments of the HTML page");


// var category = document.querySelector('.mw-category');
// var links = Array.from(category.querySelectorAll('a'));
// var de = links
// 	.map(a => a.textContent)
// 	.filter(bvd => bvd.includes('de'));
// console.log(de.length);
console.log("============================================================");

console.log("7. sort exercise - Sort the people alphabetically by last name");
const people = ['Beckett, Samuel','Becker, Carl', , 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Blake, William','Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Beck, Glenn','Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh','Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony'];

console.log(people);
const sortedPeople = people.sort((a,b) =>{

	const [aLast,afirst] = a.split(', ');
	const [bLast,bfirst] = b.split(', ');
	return aLast > bLast ? 1 : -1;
})
console.table(sortedPeople);
console.log("============================================================");
// Array.prototype.filter()"

console.log("8. Reduce Exercise - Sum up the instances of each of these");

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogo stick'];

console.log(data);

function sumInstances(data){
	// get new array with unique entries
	const newArr = [];
	for (let i = 0; i < data.length; i++){
		if(newArr.indexOf(data[i]) < 0){
			newArr.push(data[i])
		} 
	}
	
	// create new object with unique entries and number of times they occur in original array
	const obj = {}
	newArr.forEach(el => {
		obj[el] = data.filter(x => x === el).length;
	})

	console.log(obj);
	}

sumInstances(data);

console.log("Alternative way:")

const transportation = data.reduce((obj, item) => {
	if(!obj[item]){
		obj[item] = 0
	}
	obj[item]++;
	return obj;
}, {});

console.log(transportation);
