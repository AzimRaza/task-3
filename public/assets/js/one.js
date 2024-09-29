var myToken=config.my_token;
function submitForm(){
    var mail = document.getElementById("mail").value;
    var query = document.getElementById("query").value;

    var body = "Email:" + mail + "<br>" + "Query:" + query;
    console.log(body);

    Email.send({
        SecureToken : myToken,
        To : 'azimraza4213@gmail.com',
        From : "azimraza4213@gmail.com",
        Subject : "New Query",
        Body : body,
    }).then(
    message => {
        if(message=='OK'){
        swal("Successfull", "Your query is submitted.", "success");
        }else{
        swal("Something went wrong!", "Query not submitted.", "error");
        }
    }
    );
}