let userNum;
let i;
document.querySelector('.submit').addEventListener('click', function(){
  document.querySelector('h2').innerHTML = '';
  userNum = document.querySelector('#number').value;
  userNum = Number(userNum);
  let header = document.querySelector('h1')
  if(userNum==0){
    header.textContent='0 can not be divided by any number';
  }else if(isNaN(userNum)){
    header.textContent ='Enter a valid number';
  }else{
    for(i=2;i<=1000;i++){
      if(userNum%i===0){
        document.querySelector('h2').innerHTML+=`${i} <br>`;
      }
    }
  }
})




