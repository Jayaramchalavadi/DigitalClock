function rotatewheel()
{
    var num=Math.floor(Math.random()*360)
    document.getElementById("wheel").style.transition="rotate 10s"
    document.getElementById("wheel").style.rotate=num*10+"deg"
}