async function fetchData(category){
    try{
        let holder = document.getElementById("emoji-holder")
        holder.innerHTML=""
        let catData = await fetch(`https://emojihub.yurace.pro/api/all/category/${category}`);
        let resp = await catData.json();
        console.log(resp)
        resp.forEach(element => {
            let smileyDiv = document.createElement("div");
            smileyDiv.setAttribute("style","width:100px; height:100px;background-color: rgb(135, 176, 211);border-radius: 40px;top:50px; left:50px;position: relative;")
            smileyDiv.setAttribute("class","m-3");

            let smilyspan = document.createElement("button");
            smilyspan.setAttribute("class","btn")
            smilyspan.setAttribute("style","position: relative;top:-3%; left: -3%;")
            smilyspan.setAttribute("data-bs-toggle","tooltip")
            smilyspan.setAttribute("data-bs-placement","top");
            smilyspan.setAttribute("data-bs-title","click & copy")
            smilyspan.innerHTML = element.htmlCode[0];
           
            smilyspan.onclick = ()=>{
                navigator.clipboard.writeText(element.htmlCode[0]).then(function (){
                }).catch(function(error){
                    console.log(error);
                });
            }

            smilyspan.style.fontSize= "60px";         
            smileyDiv.appendChild(smilyspan)
            holder.appendChild(smileyDiv)
        });
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
      
    }catch(error){
        console.log(error)
    }
}


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))