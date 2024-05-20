const passwordbox=document.getElementById('password')


let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase="abcdefghijhlmnopqrstuvwxyz"
let numeric="1234567890"
let symbol="!@#$%^&*()_+}{[]><?/.,}"

const allchars= upperCase+lowerCase+numeric+symbol
console.log(allchars)

function generatePassword(){
    let password="";
    const length=12;
    for(i=0; i<length;i++){
        password+=allchars[Math.floor(Math.random()* allchars.length)]
        // password+=upperCase[Math.floor(Math.random()* upperCase.length)]
        // password+=lowerCase[Math.floor(Math.random()* lowerCase.length)]
        // password+=numeric[Math.floor(Math.random()* numeric.length)]
        // password+=symbol[Math.floor(Math.random()* symbol.length)]
    }
    // password+=upperCase[Math.floor(Math.random()* upperCase.length)]
    // password+=lowerCase[Math.floor(Math.random()* lowerCase.length)]
    // password+=numeric[Math.floor(Math.random()* numeric.length)]
    // password+=symbol[Math.floor(Math.random()* symbol.length)]
    // console.log(password)


    // while(length>password.length){
    //     password+=allchars[Math.floor(Math.random()* allchars.length)]
       
    // }
    passwordbox.value=password

}


function copy(){
    passwordbox.select();
    document.execCommand('copy')
}