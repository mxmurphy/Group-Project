/* 
    Javascript Group Project

    Authors: Brit, Julian, Michael

*/

//function to create shopping list cookie
function createCookie(name, value) {
	//adds a cookie to the document with a given name and value
	//can also be used to update a cookie
	document.cookie = `${name}=${value};`;
}

//function that uses cookies to recreate list
function getCookie(name) {
	//create an array of each cookie
	let cookieArray = document.cookie.split(";");
	//loop through array
	for (let i = 0; i < cookieArray.length; i++) {
		let pair = cookieArray[i].split("="); //splits string into 2 elements, the name and value
		if (pair[0].trim() === name) {
			//if the name is the same as the search query
			return pair[1].trim(); //returns value of cookie
		}
	}
	return null; //null if provided name is not in cookie
}

//function to delete a cookie when given a name
function deleteCookie(name) {
	//sets value of cookie with name to nothing, and sets max-age to 0 so it deletes
	document.cookie = `${name}=; max-age=0`;
}
