
const nextinput=document.querySelector(".ok");

const no=document.querySelector(".no");

nextinput.addEventListener("click",()=>{
    han();
    pleymusic();
});

function pleymusic(){
            mus=document.getElementById("inpu");
            mus.play();
        }

function han(){
    let doc=document.querySelector(".main");
    doc.style.border="2px solid";
    doc.style.borderImage="linear-gradient(90deg, #ff4d4d, #ffcc00, #33ff99, #3399ff) 1";
    let lo=document.querySelector(".logo");
    lo.style.marginLeft="170px";

    let newdiv=document.createElement("div");
  
    //  newdiv.style.border="2px solid red";
    //  newdiv.style.width="500px";
     newdiv.className="newdiv";
       newdiv.style.height="60px";
      let name=document.createElement("input");
    let fdone=document.createElement("button");   
    name.className="name";
    name.placeholder="enter your name";
    name.classList.add("name");
    fdone.className="fdone";

    fdone.textContent="done";
    fdone.style.width="70px";
    fdone.style.height="40px";
    sign=document.querySelector(".main");
    sign.appendChild(newdiv);
    newdiv.appendChild(name);
    newdiv.appendChild(fdone);
    fdone.addEventListener("click",()=>{
        name.style.filter="blur(1.3px)";
        let sdiv=document.createElement("div");

        sdiv.className="sdiv";
        sdiv.classList.add("sdiv");
        let email=document.createElement("input");
        let sdone=document.createElement("button"); 
        // sdiv.style.border="2px solid red";
        // sdiv.style.width="500px";
        sdiv.style.height="70px";
        email.className="email";
        email.placeholder="enter your email";
        email.classList.add("email");
        sdone.className="sdone";
        sdone.textContent="done";
        sdone.style.width="70px";
        sdone.style.height="40px";
        sign=document.querySelector(".main");
        sign.appendChild(sdiv);
        sdiv.appendChild(email);
        sdiv.appendChild(sdone);
        sdone.addEventListener("click",()=>{
            email.style.filter="blur(1.3px)";
            let tdiv=document.createElement("div");
            let pass=document.createElement("input");
            let tdone=document.createElement("button"); 
            // tdiv.style.border="2px solid red";
            // tdiv.style.width="500px";
            tdiv.style.height="70px";
            tdiv.className="tdiv";
            tdiv.classList.add("tdiv");
            pass.className="pass";
            pass.placeholder="enter new password";
            pass.classList.add("pass");
            tdone.className="tdone";
            tdone.textContent="done";
            tdone.style.width="70px";
            tdone.style.height="40px";
            tdone.style.textAlign="center"
            sign=document.querySelector(".main");
            sign.appendChild(tdiv);
            tdiv.appendChild(pass);
            tdiv.appendChild(tdone);
            tdone.addEventListener("click",()=>{
                pass.style.filter="blur(1.3px)";
                let fodiv=document.createElement("div");
                let confim=document.createElement("input");
                let fodone=document.createElement("button"); 
                // fodiv.style.border="2px solid red";
                // fodiv.style.width="500px";
                fodiv.style.height="70px";
                fodiv.className="fodiv";
                fodiv.classList.add("fodiv");
                confim.className="confim";
                confim.placeholder="confirm your password";
                confim.classList.add("confim");
                fodone.className="fodone";
                fodone.textContent="done";
                fodone.style.width="70px";
                fodone.style.height="40px";
                sign=document.querySelector(".main");
                sign.appendChild(fodiv);
                fodiv.appendChild(confim);
                fodiv.appendChild(fodone);
                fodone.addEventListener("click",()=>{
                    if(confim.value===pass.value){
                        
                        let sub=document.createElement("button");
                        let subatt=document.createElement("a");
                        sub.className="sumbit";
                        sub.classList.add("sumbit")
                            
;
                       
                        subatt.href="index3.html";
                        subatt.textContent="submit";
                        sign.appendChild(sub);
                        sub.appendChild(subatt);
                        sub.addEventListener("click",pase(event);
                          function pase(event){
                              event.preventDefault();
                              window.location.href="index3.html";
                              
            musice=document.getElementById("inpu");
            musice.pause();
        }
              

                        

                    }
                    else{
                        alert("password miss match! try again");
                        let a=document.querySelector(".confim");
                        let b=document.querySelector(".pass");
                        a.value="";
                        b.value="";
              


                        

                    }
                })


    })

    

    })
})
}

// no.removeEventListener("click", han);  this will not work kyuki  addebet listner nahi naya
no.addEventListener("click",()=>{
    nextinput.removeEventListener("click",han);
    
    const main = document.querySelector(".main");
     main.querySelectorAll("div:not(.logo)").forEach(div => {
        if (!div.matches(".logo")) {
            div.remove();
        }
          
    });
       document.querySelector(".signin").style.gridTemplateColumns = "1.5fr 0.2fr 1.5fr";
});
