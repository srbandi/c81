canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
color="mauve";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=7;
ctx.arc(200,200,45,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);
}
function circle(x,y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=7;
    ctx.arc(x,y,45,0,2*Math.PI);
    ctx.stroke()
}
