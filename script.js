/* 
    Javascript Group Project

    Authors: Brit, Julian, Michael

*/
const fetchSearch = (event) => {
    const checkboxes = document.getElementsByClassName("checkbox")
    const numBoxes = checkboxes.length();
    let searchParams = [];
    for (let i = 0; i < numBoxes; i++) { //look at each check box, if it's checked add it to params
        let currentCheckbox = checkboxes[i];
        if (currentCheckbox.checked) {
            searchParams.push(currentCheckbox.innerText)
        }
    }
    //turn it into fetch query format
    const numParams = searchParams.length();
    let formattedParam = `i=${searchParams[0]}`
    for (let i = 0; i < numParams; i++) {
        formattedParam += `%2C${searchParams[i]}`
    }
    //fetch time 
    let results = []
    fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?${formattedParam}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "51e4ca45e9msh1a0ceac8a334233p1adcf3jsn2cd977ff146a"
            }
        })
        .then(response => {
            printCarousel(response.drinks); // call next function with data
        })
        .catch(err => {
            console.error(err);
        });
}