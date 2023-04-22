function submitData(name, email) {

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    };


    return fetch("http://localhost:3000/users", configurationObject)
        .then((response) => response.json())
        .then((data) => {
            let theID = document.querySelector("h1")
            theID.textContent = data.id
        })

        .catch((error) => {
            let theError = document.querySelector("h2")
            theError.textContent = error.message
        })


}

submitData("eli", "eli@gomez.com")

// NOTE THE return keyword in fetch() above: An amazing feature of fetch() is that if you return it, other 
// functions can tack on their own then() and catch() calls. For this lab, 
// you will need to return the fetch() chain from our submitData function to ensure that the tests run correctly.