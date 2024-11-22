const showLoading=(element)=>{
  //clear the element
  const oldText=element.innerText;
  element.setAttribute("disabled","true");
  element.innerText="•";
  const interval=setInterval(()=>{
    if(element.innerText.replace("•","").length==2){
      element.innerText="•";
    }
    else{
      element.innerText+="•";
    }
  },1000/1.5);
  return {
    end:()=>{
      element.innerText=oldText;
      element.removeAttribute("disabled");
      clearInterval(interval)
    }
  };
};
