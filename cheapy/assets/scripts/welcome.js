let listitems = document.getElementsByClassName('option')

listitems[0].style.color = 'yellow'

let logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", ()=>{
    window.location.href = './login.html'
})

for(let i = 0; i < listitems.length; i++){

    listitems[i].addEventListener('click', ()=>{

        optionSelected = listitems[i].innerHTML
        //alert(listitems[i].innerHTML)

        for(let i = 0; i < listitems.length; i++){

            if(listitems[i].innerHTML == optionSelected){
                listitems[i].style.color = 'yellow'
                continue;
            }

            listitems[i].style.color = 'black'
        }
    })
}

alert(window.localStorage.getItem('email'))