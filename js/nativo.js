th = document.getElementsByTagName('th');

for(let c=0; c < th.length; c++){

    th[c].addEventListener('click',item(c))
}


function item(c){

    return function(){
      console.log(c)
      sortTable(c)
    }
}


function sortTable(c) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("Table");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[c];
      y = rows[i + 1].getElementsByTagName("TD")[c];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function consisteNome() {
    if (document.faleconosco.nome.value.length < 10) {
        alert("Preencha com o nome completo");
        document.faleconosco.nome.focus();
    }
  }
  
  function consisteEmail() {
    if (document.faleconosco.email.value.length < 10) {
        alert("Preencha com o email completo");
        document.faleconosco.email.focus();
    }
  }
  
  function consisteTelefone() {
    if (document.faleconosco.telefone.value.length < 11 || 
        document.faleconosco.telefone.value.length > 14) {
        alert("Preencha com o DDD e telefone completo");
    }
  }
  
  function consisteIdade() {
    if (document.faleconosco.idade.value > 120) {
        alert("Preencha com uma idade válida (máx. 120 anos)");
        document.faleconosco.idade.style.backgroundColor="yellow";
        //document.faleconosco.datanascimento.focus();
    } else {
        document.faleconosco.idade.style.backgroundColor="white";
    }
  }

  function dataHora() {

    var hoje = new Date();

    var dia = hoje.getDate();
    var mes = hoje.getMonth();
    var ano = hoje.getFullYear();
    var hora = hoje.getHours();
    var minuto = hoje.getMinutes();
    var segundo = hoje.getSeconds();
    
    if(hora <= 9){
      hora = '0' + hora;
    }
    if(minuto <= 9) {
      minuto = '0' + minuto;
    }
    if(segundo <= 9){
      segundo = '0' + segundo;
    }
    if(dia <= 9){
      dia = '0' + dia;
    }
    
    //define mes por extenso
    var meses = new Array('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro');
    var nomeMes = meses[mes];

    document.faleconosco.hoje.value = dia + ' de ' + nomeMes + ' de ' + ano  + ', ' + hora + ':' + minuto + ':' + segundo;
  }
  
  
  function consiste() {
    consisteNome();
    consisteEmail();
    consisteTelefone();
    consisteIdade();
  }

  
  function quantificaErrada() {
    document.faleconosco.medidor1.value = document.faleconosco.quantidade.value;
    document.faleconosco.medidor2.value = document.faleconosco.quantidade.value / 10;
    document.faleconosco.barraProgresso.value = document.faleconosco.quantidade.value * 10;
  }
  
  function preencheBarra() {
    document.getElementById("medidor1").value = document.getElementById("quantidade").value;
    document.getElementById("medidor2").value = document.getElementById("quantidade").value / 10;
    document.getElementById("barraProgresso").value = document.getElementById("quantidade").value * 10;
  }
