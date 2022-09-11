function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    const serviceId = "service_5348a1w";
    const templateId = "template_44h3goo";

    emailjs.send(serviceId,templateId,params)
    .then(
        res => {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            console.log(res);
            alert("Email sent successfully");
        }
    )
    .catch(err=>console.log(err));

}
