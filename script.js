let string = '';
let btns = document.querySelectorAll('.btn')



console.log(btns)

Array.from(btns).forEach(function (btn, i) {
    
    
    btn.addEventListener('click', function (event) {
        
        if (event.target.value == '=') {
            string=eval(string)
            console.log(string)
            document.querySelector('input').value=string


        }
        else if (event.target.value == 'C') {
            string=''
            document.querySelector('input').value=string
        }


        else{
             string = string + event.target.value;
            //  console.log(document.querySelector('input').value)
             document.querySelector('input').value=string
            //  console.log(document.querySelector('input').value)
        }

    })
})