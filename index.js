function elem(id){
    return document.getElementById(id);
}
window.onload = () => {
    alert("This game was made by MSN(Md Saadman Nuheen) in Sololearn");
    alert("You're probably thinking what is disArmageddon");
    alert("It means u have to stop a bomb!!!");
    alert("U have 5 seconds to disarm the bomb");
    var p = elem("time");
    var int;
    var min = 0;
    var sec = 5;
    var msec = 0;
    int = setInterval(function(){
            p.innerHTML = min + ':' + sec + ':' + msec;
            if (msec < 0){
                msec = 100;
                sec--;
            }
            else {
                msec--;
            }
            if (sec < 0){
                sec = 60;
                min--;
            }
            if (min < 0){
                clearInterval(int);
document.body.removeChild(elem("cont"));
           elem("explode").style.display = "block";
           navigator.vibrate(700);
           setTimeout(function(){
               alert("Boom!");
           },1000);}
        },10);
        elem("b").onclick = function(){
                elem("b").style.backgroundColor = "red";
                elem("b").style.color = "black";
                clearInterval(int);
                alert("Congralutions!!!\nU stopped the bomb!");
                alert("That was easy ,wasn't it?");
                document.body.removeChild(elem("cont"));            
                elem("congo").style.display = "block";
            };
};
