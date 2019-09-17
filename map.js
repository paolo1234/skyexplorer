var OK = false; // dichiarazione variabile booleana ok

function Create2DArray(rows) { // Funzione per creare una matrice in js
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

const Mappa = Create2DArray(100);  // Crea matrice con dimensione 100
const ContS = Create2DArray(100);

const Dim= prompt("Definisci la dimensione del tuo universo personale: "); // inserisci dim in prompt

console.log(Dim); // stampa dim nella console

const Num = prompt("Definisci il numero di specie nel tuo universo personale: ");
console.log(Num);


	for(let ContY=1;ContY<=Dim;ContY++) {
		for(let ContX=1;ContX<=Dim;ContX++){
			Mappa[ContX][ContY]=0;
		}
	}

console.log("Eseguo 'CreaRamo()'...");
for(let Cont1=0;Cont1<Dim;Cont1++) {
	CreaRamo();
}

console.log("Eseguo 'AggiungiSettori()'...");
for(let Cont1=0;Cont1<2;Cont1++){ 
	AggiungiSettori();
}

console.log("Eseguo 'CreaSpawn()'...");
CreaSpawn();

console.log("Eseguo 'StampaMappa()'...");
StampaMappa();


/* IMPLEMENTARE GESTIONE ERRORI
function ControllaErrori(){
if(Dim<0||Dim>100)alert("ERRORE: Inserisci un numero compreso tra 0 e 100");
}while(Dim<0||Dim>100);
alert("Definisci il numero di specie nel tuo universo personale: ");
do {
if(Dim<0||Dim>26)alert("ERRORE: Inserisci un numero compreso tra 0 e 26");
}while(Dim<0||Dim>26);
Num=prompt();
for(ContY=1;ContY<=Dim;ContY++) {
for(ContX=1;ContX<=Dim;ContX++){
Mappa[ContX][ContY]=0;
}
}
alert("Eseguo 'CreaRamo()'...");
for(Cont1=0;Cont1<Dim;Cont1++) CreaRamo();
alert("Eseguo 'AggiungiSettori()'...");
for(Cont1=0;Cont1<2;Cont1++) AggiungiSettori();
alert("Eseguo 'CreaSpawn()'...");
CreaSpawn();
alert("Eseguo 'StampaMappa()'...");
StampaMappa();
}while(Dim>0);
}
*/


function CreaRamo() { // crea funzione 
	//dichiarazione variabili
let MovX, MovY, Length;
let RamoX=  Math.floor(Math.random() * Dim) + 1;  
// Math.floor arrotonda ad un numero ad intero, Math.random genera numero casuale da 0 a Dim
let RamoY=  Math.floor(Math.random() * Dim) + 1;  

Mappa[RamoX][RamoY]=1;

let Chance= Math.floor(Math.random() * 2) + 1;

	if(Chance==1) {
		MovX=1;MovY =Math.floor(Math.random() * 5) + 1
	}
	if(Chance==2) {
		MovY=1;MovX= Math.floor(Math.random() * 5) +1;
	}

	ChanceX=Math.floor(Math.random() * 2)+1;
	ChanceY=Math.floor(Math.random() * 2)+1;
	Length=Math.floor(Math.random() * 5) + 1;

	for(Cont2=0;Cont2<Length;Cont2++) {
		for(Cont3=0;Cont3<MovX;Cont3++) {
			if(ChanceX==1&&RamoX<Dim+1)RamoX++;
			if(ChanceX==2&&RamoX>0)RamoX--;
			Mappa[RamoX][RamoY]=1;
		}
		for(Cont3=0;Cont3<MovY;Cont3++) {
			if(ChanceY==1&&RamoY<Dim+1)RamoY++;
			if(ChanceY==2&&RamoY>0)RamoY--;
			Mappa[RamoX][RamoY]=1;
		}
	}
} // fine funzione 

function AggiungiSettori() {
	let Chance;
for(let ContY=1;ContY<=Dim;ContY++) {
for(let ContX=1;ContX<=Dim;ContX++){
if(ContX>1&&ContX<Dim&&ContY>1&&ContY<Dim) {
ContS[ContX][ContY]=0;
if(ContX<Dim&&Mappa[ContX+1][ContY]==1)ContS[ContX][ContY]++;
if(ContX>1&&Mappa[ContX-1][ContY]==1)ContS[ContX][ContY]++;
if(ContY<Dim&&Mappa[ContX][ContY+1]==1)ContS[ContX][ContY]++;
if(ContY>1&&Mappa[ContX][ContY-1]==1)ContS[ContX][ContY]++;
if(ContS[ContX][ContY]==1)Chance= Math.floor(Math.random() * 2)+1;
if(ContS[ContX][ContY]==2)Chance= Math.floor(Math.random() * 4)+1;
if(ContS[ContX][ContY]==3)Chance= Math.floor(Math.random() * 8)+1;
if(Chance==1)Mappa[ContX][ContY]=1;
}
}
}
}

function CreaSpawn() {
for(let Cont1=1;Cont1<=Num;Cont1++) {
 let Cont2=0;
do{
 let ChanceX=Math.floor(Math.random() * Dim)+1;
 let ChanceY=Math.floor(Math.random() * Dim)+1;
if(ChanceX>1&&ChanceX<Dim&&ChanceY>1&&ChanceY<Dim) {
if(Mappa[ChanceX][ChanceY]==1) {
if(ChanceX>1&&ChanceY>1)if(Mappa[ChanceX-1][ChanceY-1]>1)OK=false;
else if(ChanceY>1)if(Mappa[ChanceX][ChanceY-1]>1)OK=false;
else if(ChanceX<Dim&&ChanceY>1)if(Mappa[ChanceX+1][ChanceY-1]>1)OK=false;
else if(ChanceX>1)if(Mappa[ChanceX-1][ChanceY]>1)OK=false;
else if(ChanceX<Dim)if(Mappa[ChanceX+1][ChanceY]>1)OK=false;
else if(ChanceX>1&&ChanceY<Dim)if(Mappa[ChanceX-1][ChanceY+1]>1)OK=false;
else if(ChanceY<Dim)if(Mappa[ChanceX][ChanceY+1]>1)OK=false;
else if(ChanceX<Dim&&ChanceY<Dim)if(Mappa[ChanceX+1][ChanceY+1]>1)OK=false;
else{
Mappa[ChanceX][ChanceY]=Cont1+1;
OK=true;
console.log("Spawn per il giocatore "+Cont1+" settato a: x"+ChanceX+" y"+ChanceY);
}
if(OK==false)Cont2++;
if(Cont2>=100)alert("Non sono riuscito a trovare uno spawn per il giocatore "+Cont1+". Sorry :(");
}
else OK=false;
}
else OK=false;
}while(OK==false&&Cont2<100);
}
}


function DrawConn(el1 , el2, line){  // funzione per disegnare linee svg 
	var line = $(`#${String(line)}`); // id linea
var el1 = $(`#${String(el1)}`); // id cella di partenza
var el2 = $(`#${String(el2)}`); // id cella di arrivo 

var x1 = el1.offset().left + (el1.width()/2);
var y1 = el1.offset().top + (el1.height()/2 +30);

var x2 = el2.offset().left + (el2.width()/2);
var y2 = el2.offset().top + (el2.height()/2 -3);

line.attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2); // aggiungo attributi svg per disegnare la linea

return true;
}

function StampaMappa() {
	const test = new Array();const test2 = new Array();const test3 = new Array(); // crea array per salvare pos linee
document.write("<br>"); // scrive uno spazio
for(let ContY=1;ContY<=Dim;ContY++) {
	for(let ContX=1;ContX<=Dim;ContX++){
		if(Mappa[ContX][ContY]==1)document.write("<span class='cella' id='"+ ContX + "" + ContY +"'  >&nbsp;</span>");
		else if(Mappa[ContX][ContY]==2)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' ></span>");
		else if(Mappa[ContX][ContY]==3)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >B</span>");
		else if(Mappa[ContX][ContY]==4)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >C</span>");
		else if(Mappa[ContX][ContY]==5)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >D</span>");
		else if(Mappa[ContX][ContY]==6)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >E</span>");
		else if(Mappa[ContX][ContY]==7)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >F</span>");
		else if(Mappa[ContX][ContY]==8)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >G</span>");
		else if(Mappa[ContX][ContY]==9)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >H</span>");
		else if(Mappa[ContX][ContY]==10)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >I</span>");
		else if(Mappa[ContX][ContY]==11)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >J</span>");
		else if(Mappa[ContX][ContY]==12)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >K</span>");
		else if(Mappa[ContX][ContY]==13)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >L</span>");
		else if(Mappa[ContX][ContY]==14)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >M</span>");
		else if(Mappa[ContX][ContY]==15)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >N</span>]");
		else if(Mappa[ContX][ContY]==16)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >O</span>");
		else if(Mappa[ContX][ContY]==17)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >P</span>");
		else if(Mappa[ContX][ContY]==18)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >Q</span>");
		else if(Mappa[ContX][ContY]==19)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >R</span>");
		else if(Mappa[ContX][ContY]==20)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >S</span>");
		else if(Mappa[ContX][ContY]==21)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >T</span>");
		else if(Mappa[ContX][ContY]==22)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >U</span>");
		else if(Mappa[ContX][ContY]==23)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >V</span>");
		else if(Mappa[ContX][ContY]==24)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >W</span>");
		else if(Mappa[ContX][ContY]==25)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >X</span>");
		else if(Mappa[ContX][ContY]==26)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >Y</span>");
		else if(Mappa[ContX][ContY]==27)document.write("<span class='cella' id='"+ ContX + "" + ContY +"' >Z</span>");
		else document.write("&nbsp;&nbsp;&nbsp;");
		if(ContX>0&&ContX<Dim)if(Mappa[ContX][ContY]!=0&&Mappa[ContX+1][ContY]!=0)document.write("-");
		else document.write("&nbsp;");
	}
document.write("<p style='margin-bottom: 5px;'></p>");
	for(ContX=1;ContX<=Dim;ContX++) {
		if(ContY<Dim&&Mappa[ContX][ContY]!=0&&Mappa[ContX][ContY+1]!=0){
			
			let lineId = () =>{  // arrow functions, Get lineId
				return 'line' + ContX + ContY;
			};
			let el1 = () =>{
				return ContX+""+ContY;
			};
			let el2 = () =>{
				return ContX+""+(ContY+1);
			};

			document.write("&nbsp; <svg class='svg'><line class='line' id='"+lineId()+"' /></svg> &nbsp;&nbsp;"); 
			// print contenitore svg per contenere la linea

			test.push(el1());
			test2.push(el2());
			test3.push(lineId());
			// aggiungi elementi ai vettori
		}

		else document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
	}
document.write("<p style='margin-bottom: 5px;'></p>");
}

 // disegna tutte le lineee
for(let i=0; i<test.length; i++){
	DrawConn(test[i], test2[i], test3[i]); 
}


}

// Al click di una cella
$('.cella').click((e) => {alert("Hai cliccato sulla casella con id: " + e.target.id)});


