let covid19= new CovidAPI();
let sucelje=new UI();

let novo=covid19.vrijednosti();

let prazanDiv=document.querySelector('.prazanDiv');
let input=document.querySelector('.input');
input.addEventListener('input',odgNaEvent);

function odgNaEvent(e){
  let prazno=[];
  prazanDiv.innerHTML='';
  if(e.target.value){
    function loopaj(nes){
       nes.then(function(data){
          prazno=data.filter(dio=>dio.includes(e.target.value));
          prazno.forEach((dio) => {
            if(dio.includes(input.value)){
              let option=document.createElement('option');
              option.size=60;
              option.classList.add('obrisi');
              option.innerHTML=`${dio}`;
              prazanDiv.appendChild(option);

            }

         });

         let zadnji=prazanDiv.lastElementChild;
         zadnji.style.marginBottom="10%";
       });

     }

    loopaj(novo);
  }

}


document.body.addEventListener('click',dodajVrijednost);

function dodajVrijednost(e){
  if(e.target.classList.contains('obrisi')){
    input.value=e.target.value;
    prazanDiv.innerHTML='';
  }
  e.preventDefault();
}

window.onload=function(){
  covid19.getInicijalno()
    .then((inicijalno)=>sucelje.pokaziInicijalno(inicijalno)),
  covid19.getCjepljeni()
      .then((cjepljeni)=>sucelje.pokaziCjepljeni(cjepljeni));
}



let gumb=document.querySelector('.gumb');


gumb.addEventListener('click',ispisi);


function ispisi(e){



    let podatak=input.value;

    function prva(){
      covid19.getAPI(podatak)
        .then((podaci)=>sucelje.pokaziPodatke(podaci));
    }

    prva();

    function druga(){
      covid19.getCjepivo(podatak)
        .then((cjepivo)=>sucelje.pokaziCjepivo(cjepivo));
    }

    druga();






  e.preventDefault();
}
