document.body.addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);
  })

  let input = document.getElementById('inputBox');
  let buttons = document.querySelectorAll('button');

  let string = "";
  let arr = Array.from(buttons);
  arr.forEach(button => {
    button.addEventListener('click', (e) =>{
      if(e.target.innerHTML == '='){
        string = eval(string);
        input.value = string;
      }
      
      else if (e.target.innerHTML == 'AC'){
        string = "";
        input.value= string;
      }

      else if(e.target.innerHTML == 'DEL'){
        string = string.substring(0, string.length-1);
        input.value = string;
      }
      else {
        string += e.target.innerHTML;
        input.value = string;
      }
    })
  })