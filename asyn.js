async function foo(){
    try{
        let data = await fetch("https://restcountries.com/v2/all",{ method : "GET"})
        let resp = await data.json()
        console.log(resp);
        resp.forEach(element => {
           
            let flag = document.createElement("img");
            let name = document.createElement("h4");
            name.innerText = element.name;
            flag.src=element.flags.png;
            flag.style.padding="2px";
            document.body.appendChild(name);
            document.body.appendChild(flag);
        });
    }
    catch (error){
        console.log(error)
    }
 
}

foo()