//Promise Chain 
fetch("https://restcountries.com/v2/all",{
    method : "GET"
}).then((data)=>
{
    return data.json()   
})
.then((reult)=>{
    reult.forEach(element =>{
        let flag = document.createElement("img")
        flag.src = element.flags.png
        document.body.appendChild(flag);
    });
})
.catch((err)=>{

    console.log(err);
})