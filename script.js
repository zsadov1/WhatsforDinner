function GetValue() {
	var cuisines = new Array(
		"Chinese",
		"Tacos",
		"Sushi",
		"Mexican",
		"Indian",
		"Chicken Wings",
		"Pizza",
		"Grocery Store",
		"My Choice",
		"Your Choice"
	);
	var random = cuisines[Math.floor(Math.random() * cuisines.length)];

	document.getElementById("choices").innerHTML = random;
}
