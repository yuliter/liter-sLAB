
var x;//鼠标的初始位置
var y;  
var ox;//要移动的div对象的位置  
var oy;  
var flag=false;//判断鼠标此时是否处于按下的状态  
function mouse_over(obj){
	var oDiv = document.getElementById("divCont");
        var x1 = oDiv.offsetLeft,
        y1 = -oDiv.offsetTop, //注意坐标，所有的y坐标都是负数
        x2 = x1 + oDiv.offsetWidth,
        y2 = y1 - oDiv.offsetHeight, //同样y坐标为负数
        x0 = (x1 + x2) / 2,
        y0 = (y1 + y2) / 2;
        var k = (y2 - y1) / (x2 - x1); //斜率k
        var e =window.event;
        var x = e.clientX, //鼠标刚移入div内，记录下当前的x坐标
        y = -e.clientY; //鼠标刚移入div内，记录下当前的y坐标
        var K = (y - y0) / (x - x0); //K是鼠标移入点和中心点的斜率
        //当K大于k并且小于-k时，则肯定是左右移入，当移入点的x坐标大于中心点 ，则为右移入，小于则是左移入
        if(k < K && K < -k){
        if(x > x0){
            oDiv.style.cursor="e-resize";
        }else{
        	oDiv.style.cursor="e-resize";
        }
        }else{
        //注意此处y是负数，判断上下的方法同上
        if(y > y0){
        	oDiv.style.cursor="move";
        }else{
        	oDiv.style.cursor="n-resize";
        }
        }	
}
function mouse_down(obj){  
	
//	if(oDiv.style.cursor=="move"){
//		oDiv.style.cursor="n-resize";
//	}
    ox=obj.style.left;  
    oy=obj.style.top;  
    x=window.event.clientX;  
    y=window.event.clientY;  
    flag=true; 
   // sessionStorage.clear();
}  
function mouse_move(obj){
	var oDiv = document.getElementById("divCont");
    var xx=window.event.clientX;//鼠标现在的位置  
    var yy=window.event.clientY;  
    if(flag){
    	var cursorStyle=oDiv.style.cursor;
    	switch(cursorStyle){
    		case "move":
    		obj.style.left=parseInt(ox)+parseInt(xx)-parseInt(x)+"px";  
            obj.style.top=parseInt(oy)+parseInt(yy)-parseInt(y)+"px"; 
            break;
            case "e-resize":
            obj.style.width=parseInt(obj.style.width)+parseInt(xx)-parseInt(x)+"px";
            x=xx;
            break;
            case "n-resize":
            obj.style.height=parseInt(obj.style.height)+parseInt(yy)-parseInt(y)+"px";
            y=yy;
            break;
    	}
        
    }  
}  
function mouse_up(obj){  
	var oDiv = document.getElementById("divCont");
    var xx=window.event.clientX;//鼠标现在的位置  
    var yy=window.event.clientY;  
    if(flag){  
        var cursorStyle=oDiv.style.cursor;
    	switch(cursorStyle){
    		case "move":
    		obj.style.left=parseInt(ox)+parseInt(xx)-parseInt(x)+"px";  
            obj.style.top=parseInt(oy)+parseInt(yy)-parseInt(y)+"px"; 
            break;
            case "e-resize":
            obj.style.width=parseInt(obj.style.width)+parseInt(xx)-parseInt(x)+"px";
            x=xx;
            break;
            case "n-resize":
            obj.style.height=parseInt(obj.style.height)+parseInt(yy)-parseInt(y)+"px";
            y=yy;
            break;
    	}
    	obj.style.cursor="default";  
        flag=false; 
        sessionStorage.setItem("left",obj.style.left);
        sessionStorage.setItem("top",obj.style.top);
        sessionStorage.setItem("width",obj.style.width);
        sessionStorage.setItem("height",obj.style.height);
//      x=xx;  
//      y=yy;  

         
    }  
}  