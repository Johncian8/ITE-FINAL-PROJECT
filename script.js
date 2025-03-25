let logInBtn = document.querySelector("#lbtn")
//Log in Area

//Encapsulation
class Credentials{
    
    #email
    #password
    
    constructor(email, password){
        
            this.#email = email
            this.#password = password
        }
        
        get email(){
            
            return this.#email
        }
        get password(){
            
            return this.#password
        }
    }
    
    logInBtn.addEventListener('click', ()=>{
        
        let email = document.querySelector("#email").value
        let password = document.querySelector("#password").value
        
        //mas ok pag nasa database ang mga ito
        let systemEmail = "John Cian Lioc"
        let systemPassword = "password"
        
        const userLogin = new Credentials(email, password)

        //Promise
        const promise = new Promise((resolve, reject)=>{

            if(userLogin.email == systemEmail && userLogin.password == systemPassword){

                resolve("Login successfully")
            }else{

                reject("Login Failed")
            }

        })

        promise.then((value)=>{

            document.location.href = "choose/choose.html"
            alert(value)
        }).catch((error)=>{

            alert(error)
        })
        
});

let dm = true;

window.oncontextmenu = (e)=>{
    
    e.preventDefault()
    let body = document.querySelector("body")
    let h1 = document.querySelector("h1")

    if(dm){
        
    body.style.backgroundColor = "black"
    h1.style.color = "white"
    dm = false
    }else{
    
    body.style.backgroundColor = "white"
    h1.style.color = "blue"
    dm = true
    }

}

