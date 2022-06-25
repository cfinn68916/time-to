onload=function(){
    if(this.localStorage.getItem('')){

    }
}

function createE(ElementType,id,classlist,ParentElement,type,src,href,value,onclick,innerHTML){
    const ele=document.createElement(ElementType);
    ele.setAttribute("id",id);
    if(type!=null){
        ele.setAttribute("type",type);
    }
    if(src!=null){
        ele.setAttribute("src",src);
    }
    if(href!=null){
        ele.setAttribute("href",href);
    }
    if(value!=null){
        ele.setAttribute("value",value);
    }
    if(innerHTML!=null){
        ele.innerHTML=innerHTML;
    }
    if(onclick!=null){
        ele.onclick=onclick;
    }
    if(classlist!=null){
        ele.classList=classlist;
    }
    ParentElement.appendChild(ele);
}
