function elem(id){
    return document.getElementById(id);
}
window.onload = () => {
    Swal.fire("Intro","This game was made by MSN(Md Saadman Nuheen) in Sololearn","info");
    Swal.fire({text:"You have 5 seconds to disarm the bomb",icon:"warning});
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
               Swal.fire("Boom!","You failed to stop the bomb","error");
           },1000);}
        },10);
        elem("b").onclick = function(){
                elem("b").style.backgroundColor = "red";
                elem("b").style.color = "black";
                clearInterval(int);
                Swal.fire("Congralutions!","You stopped the bomb!","success");
                document.body.removeChild(elem("cont"));            
                elem("congo").style.display = "block";
            };
};
