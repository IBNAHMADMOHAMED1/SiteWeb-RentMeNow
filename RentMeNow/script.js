function senMessag(){
    var Nom=document.getElementById("name").value;
    var emil=document.getElementById("Email").value;
    var obj=document.getElementById("Objet").value;
    var mesg=document.getElementById("Message").value;
    var send="Votr Nom : "+Nom+", Votre Email : "+emil+"\nSujet : "+obj+", Message : "+mesg;
    alert(send);
}
