class UI{
  constructor(){
    this.div=document.querySelector('.podaci');
    this.drzava=document.querySelector('.drzava');
    this.zarazeni=document.querySelector('.ukupno-zarazeni');
    this.ozdravjeli=document.querySelector('.ukupno-ozdravjeli');
    this.zacjepiti=document.querySelector('.cjepljeni');
    this.necjepljeni=document.querySelector('.necjepljeni');
    this.umrli=document.querySelector('.umrli');
    this.odabir=document.querySelector('.viseOpcija');
    this.update=document.querySelector('#update');
    this.input=document.querySelector('.input');
  }

  pokaziInicijalno(inicijalno){

    this.drzava.innerHTML=`Country:<br><div class='ime'>${inicijalno.All.country}</div>`;
    this.zarazeni.innerHTML=`Total infected population:<br> ${inicijalno.All.confirmed}`;
    this.ozdravjeli.innerHTML=`Total recovered population:<br> ${inicijalno.All.recovered}`;
    this.umrli.innerHTML=`Total deaths:<br> ${inicijalno.All.deaths}`;
    this.update.innerHTML=` ${inicijalno.All.updated}`;

  }

  pokaziCjepljeni(cjepljeni){

    this.zacjepiti.innerHTML=`Total vaccinated population:<br> ${cjepljeni.All.people_vaccinated}`;
    this.necjepljeni.innerHTML=`Total unvaccinated population:<br> ${cjepljeni.All.population-cjepljeni.All.people_partially_vaccinated}`;

  }

  pokaziPodatke(podatak){

    if(podatak.All.country!=undefined){
      this.drzava.innerHTML=`Country:<br><div> ${podatak.All.country}</div>`;
    }else{
      this.drzava.innerHTML=`Country:<br><div>${this.input.value}</div>`;
    }
    //this.drzava.innerHTML=`Country:<br><div class='ime'>${podatak.All.country}</div>`;
    if(podatak.All.confirmed!=undefined || podatak.All.confirmed!=0 ){
      this.zarazeni.innerHTML=`Total infected population:<br><div> ${podatak.All.confirmed}</div>`;
    }else{
      this.zarazeni.innerHTML=`Total infected population:<br><div>No information available</div>`;
    }


    //this.zarazeni.innerHTML=`Total infected population:<br> ${podatak.All.confirmed}`;

    if(podatak.All.recovered!=undefined || podatak.All.recovered!=0){
      this.ozdravjeli.innerHTML=`Total recovered population:<br><div> ${podatak.All.recovered}</div>`;
    }else{
      this.ozdravjeli.innerHTML=`Total recovered population:<br><div>No information available</div>`;
    }

    //this.ozdravjeli.innerHTML=`Total recovered population:<br> ${podatak.All.recovered}`;
    //this.umrli.innerHTML=`Total deaths:<br> ${podatak.All.deaths}`;

    if(podatak.All.deaths==0 || podatak.All.deaths==NaN){
      this.umrli.innerHTML=`Deaths:<br><div>No information available</div>`;
    }else{
      this.umrli.innerHTML=`Deaths:<br><div> ${podatak.All.deaths}</div>`;
    }

    if(podatak.All.updated!=undefined){
      this.update.innerHTML=` ${podatak.All.updated}`;
    }else{
      this.update.innerHTML=`No information available`;
    }

  }

  pokaziCjepivo(cjepivo){

    this.zacjepiti.innerHTML=`Total vaccinated population:<br><div> ${cjepivo.All.people_vaccinated}</div>`;
    this.necjepljeni.innerHTML=`Total unvaccinated population:<br> ${cjepivo.All.population-cjepivo.All.people_vaccinated}`;
  }

  pokaziListu(array){
    array.forEach((stavka) => {
      this.odabir.innerHTML=`<div>${stavka}</div>`;
    });

  }

}
