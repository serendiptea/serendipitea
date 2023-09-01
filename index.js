// Newsletter Lists
// function returnEmail() {
    //let input = document.getElementById("email_input").value
    //alert(input)
//}

    function subscribe() {
        const email = document.getElementById("email_input").value;
        fetch('http://localhost:3000/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        .then(response => response.text())
        .then(message => {
            alert(message);
            document.getElementById("email_input").value = "";
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
