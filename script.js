function sendMessage() {
    // Get form values
    const name = document.getElementById('inputName').value;
    const email = document.getElementById('inputEmail4').value;
    const address = document.getElementById('inputAddress').value;
    const address2 = document.getElementById('inputAddress2').value;
    const city = document.getElementById('inputCity').value;
    const state = document.getElementById('inputState').value;
    const zip = document.getElementById('inputZip').value;
    const subject = document.getElementById('inputSubject').value;
    const message = document.getElementById('inputMessage').value;


    // Display the submitted data
    document.getElementById('resultName').textContent = name;
    document.getElementById('resultEmail').textContent = email;
    document.getElementById('resultAddress').textContent = address;
    document.getElementById('resultAddress2').textContent = address2;
    document.getElementById('resultCity').textContent = city;
    document.getElementById('resultState').textContent = state;
    document.getElementById('resultZip').textContent = zip;
    document.getElementById('resultSubject').textContent = subject;
    document.getElementById('resultMessage').textContent = message;
    

    // Hide the form and show the result
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}
