var data = {"informations": [
	{
		"mark" : "Audi",
		"model" : "A5",
		"date" : 2010,
		"color" : "Black",
		"price" : "6400zł"
	},
	{
		"mark" : "VW",
		"model" : "Crafter",
		"date" : 2018,
		"color" : "White",
		"price" : "21050zł"
	},
	{
		"mark" : "Peugeot",
		"model" : "208",
		"date" : 2007,
		"color" : "Silver",
		"price" : "16000zł"
	},
	{
		"mark" : "Mazda",
		"model" : "6",
		"date" : 2012,
		"color" : "Yelllow",
		"price" : "9300zł"
	},
	{
		"mark" : "Honda",
		"model" : "Accord",
		"date" : 2011,
		"color" : "Blue",
		"price" : "21900zł"
	}

]};

var i = 0;

function write() {
		document.getElementById("mark").innerHTML = data.informations[i].mark;
		document.getElementById("model").innerHTML = data.informations[i].model;
		document.getElementById("date").innerHTML = data.informations[i].date;
		document.getElementById("color").innerHTML = data.informations[i].color;
		document.getElementById("price").innerHTML = data.informations[i].price;
}

var btn = document.getElementById("button");
btn.addEventListener("click", function() {
	write();
	i++;
	if (i>4) i=0;
});