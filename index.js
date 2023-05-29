const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generatePwdEl = document.getElementById("generatePwd")
const password1El = document.getElementById("pwd1")
const password2El = document.getElementById("pwd2")

function randomPassword(){
    let password = ""
    for(let i=0; i<15; i++){
        const index = Math.floor(Math.random()*characters.length);
        password += characters[index]
    }
    return password
}

generatePwdEl.addEventListener("click", function(){
    password1El.value = randomPassword()
    password2El.value = randomPassword()
})

