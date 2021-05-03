class CovidAPI {

  //Inicijalni podaci

  async getInicijalno(){

    let url=[`https://covid-api.mmediagroup.fr/v1/cases?country=Croatia`]

    let pocetni= await fetch(url);
    let inicijalno= await pocetni.json();


    return inicijalno;

  }


  async getCjepljeni(){

    let url2=[`https://covid-api.mmediagroup.fr/v1/vaccines?country=Croatia`]

    let sekundarni= await fetch(url2);
    let cjepljeni= await sekundarni.json();


    return cjepljeni;

  }

  // Dohvati API pomoću metode sve

  async getAPI(podatak){

    let dogovor=await  fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${podatak}`);
    let podaci= await dogovor.json();

    return podaci;
  }


  async getCjepivo(podatak){


    let kraj= await fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${podatak}`);
    let cjepivo= await kraj.json();


    return cjepivo;

  }

  //U search boxu dohvati i prikazi elemente

  async vrijednosti(){
   let vrijednost=await fetch('https://covid-api.mmediagroup.fr/v1/cases');
   let popis=await vrijednost.json();
   let array=[];
   for(let drzava in popis){
     array.push(drzava);
   }
   return array;
 };


}
