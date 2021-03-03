function elem(id){
    return document.getElementById(id);
}
window.onload = () => {
    alert('This game was made by MSN(Mohammad Saadman Nuheen) in Sololearn')
    Swal.fire({text:"You have 8 seconds to disarm the bomb",icon:"warning",timer:3000,showCloseButton: false,showCancelButton: false,showConfirmButton:false});
    var p = elem("time");
    p.style.fontSize = '60px';
    var int;
    var min = 0;
    var sec = 11;
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
               Swal.fire("Boom!","You failed to stop the bomb.Reload to try again.","error");
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
