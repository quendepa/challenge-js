/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name : De Paola Quentin    
Date :  12/11/2019
Contact information : 
What does this script do ? 
...
*/
let tab1 = d3.selectAll("tbody").text();

tab1=(tab1.replace(/\s+/g, ' ').trim());
tab1=(tab1.replace(/,/g, '.' ));

let année= (tab1.substring(0, 54));
 année= année.split(' ');
let belgique=(tab1.substring(66,141))
 belgique= belgique.split(' ');
let bulgarie=(tab1.substring(153,218))
 bulgarie= bulgarie.split(' ');
let réptchèque=(tab1.substring(233,298))
réptchèque= réptchèque.split(" ")
let danemark=(tab1.substring(310,375))
 danemark = danemark.split(" ");
let allemagne=(tab1.substring(388,462))
 allemagne= allemagne.split(" ");
let estonie=(tab1.substring(478,532))
 estonie= estonie.split(" ");
let irlande=(tab1.substring(543,571))
 irlande= irlande.split(" ");
let grece=(tab1.substring(596,661))
  grece= grece.split(" ");
let espagne=(tab1.substring(676,752))
 espagne = espagne.split(" ");
let france=(tab1.substring(763,818))
 france= france.split(" ");
let croatie=(tab1.substring(836,891))
 croatie= croatie.split(" ");
let italie=(tab1.substring(904,980))
 italie= italie.split(" ");
let chypre=(tab1.substring(991,1034))
 chypre= chypre.split(" ");
let lettonie=(tab1.substring(1050,1104))
 lettonie= lettonie.split(" ");
let littuanie=(tab1.substring(1117,1171))
 littuanie= littuanie.split(" ");
let luxembourg=(tab1.substring(1186,1240))
 luxembourg= luxembourg.split(" ");
let hongrie=(tab1.substring(1252,1317))
 hongrie= hongrie.split(" ");
let malte=(tab1.substring(1327,1382))
 malte= malte.split(" ");
let paysbas=(tab1.substring(1397,1473))
 paysbas= paysbas.split(" ");
let autriche=(tab1.substring(1486,1551))
 autriche= autriche.split(" ");
let pologne=(tab1.substring(1563,1639))
 pologne= pologne.split(" ");
let portugal=(tab1.substring(1652,1717))
 portugal= portugal.split(" ");
let roumanie=(tab1.substring(1730,1795))
 roumanie= roumanie.split(" ");
let slovenie=(tab1.substring(1808,1862))
 slovenie= slovenie.split(" ");
let slovaquie=(tab1.substring(1876,1938))
 slovaquie= slovaquie.split(" ");
let finlande=(tab1.substring(1954,2019))
 finlande= finlande.split(" ");
let suede=(tab1.substring(2029,2105))
 suede= suede.split(" ");
let islande=(tab1.substring(2120,2174))
 islande= islande.split(" ");
let liechtenstein=(tab1.substring(2192,2235))
 liechtenstein= liechtenstein.split(" ");
let norvege=(tab1.substring(2247,2312))
 norvege= norvege.split(" ");
let suisse=(tab1.substring(2326,2392))
 suisse= suisse.split(" ");
let montenegro=(tab1.substring(2406,2449))
 montenegro= montenegro.split(" ");
let ARYdeMacédoine=(tab1.substring(2468,2522))
 ARYdeMacédoine= ARYdeMacédoine.split(" ");
let serbie=(tab1.substring(2533,2592))
 serbie= serbie.split(" ");
let turquie=(tab1.substring(2607,2677));
 turquie= turquie.split(" ");

let tab=[année,belgique,bulgarie,réptchèque,danemark,allemagne,estonie,irlande,grece,espagne,france,croatie,italie,chypre,lettonie,littuanie,luxembourg,
hongrie,malte,paysbas,autriche,pologne,portugal,roumanie,slovenie,slovaquie,finlande,suede,islande,liechtenstein,norvege,suisse,montenegro,ARYdeMacédoine,
serbie,turquie ];

tab.forEach(elem => parseFloat(elem));
console.log(tab);

let type_modalites = année;
// maximum
//let nombre="nbr"+i;

let max = d3.max(belgique);
console.log(max);
// Définition des marges et de la taille du graphique
let marges = {haut: 20, droit: 20, bas: 30, gauche: 40},
    largeurTotale = 500,
    hauteurTotale = 400,
    largeurInterne = largeurTotale - marges.gauche - marges.droit,
    hauteurInterne = hauteurTotale - marges.haut - marges.bas;

// Echelle pour le taux de crim sur l'axe Y
let echelleY = d3.scaleLinear()
    .domain([0, max])
    .range([hauteurInterne, 0]);
// Echelle pour le type sur l'axe X
let echelleX = d3.scaleBand()
    .domain(type_modalites)
    .range([0, largeurInterne])
	  .padding(0.2);
// Echelle pour le type affectant une couleur automatique à chaque type
let echelleCouleur = d3.scaleOrdinal(d3["schemeSet1"])
    .domain(type_modalites);

// Création de l'axe X
let axeX = d3.axisBottom()
    .scale(echelleX);

// Création de l'axe Y
let axeY = d3.axisLeft()
    .scale(echelleY);

// Création du graphique
let graphique = d3.select("#graph").append("svg")
    .attr("width", largeurTotale)
    .attr("height", hauteurTotale)
    .append("g")
    .attr("transform", "translate(" + marges.gauche + "," + marges.haut + ")");

// Ajout de l'axe X au graphique
graphique.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + hauteurInterne + ")")
    .call(axeX);

// Ajout de l'axe Y au graphique
graphique.append("g")
    .attr("class", "y axis")
    .call(axeY);

// Ajout d'une barre pour chaque année, avec une taille en fonction des crimes
graphique.selectAll(".bar")
    .data(tab)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return echelleX(d.année); })
    .attr("width", echelleX.bandwidth())
    .attr("y", function(d) { return echelleY(d.belgique); })
    .attr("height", function(d) { return hauteurInterne - echelleY(d.belgique); })
    .style("fill", function(d) { return echelleCouleur(d.belgique); });








/*
// Your scripting goes here...
// Tableau de données obtenu sur les données AirBnB



donnees = [
  { type: "Entire home/apt", count: 35185, price: 106 },
  { type:    "Private room", count:  5827, price:  56 },
  { type:     "Shared room", count:   464, price:  40 }
];

// Liste des modalités de la variable type
var type_modalites = donnees.map(function(d) { return d.type; });
// Prix (moyen) maximum
var prix_max = d3.max(donnees, function(d) { return d.price; });

// Définition des marges et de la taille du graphique
var marges = {haut: 20, droit: 20, bas: 30, gauche: 40},
    largeurTotale = 400,
    hauteurTotale = 300,
    largeurInterne = largeurTotale - marges.gauche - marges.droit,
    hauteurInterne = hauteurTotale - marges.haut - marges.bas;

// Echelle pour les prix sur l'axe Y
var echelleY = d3.scaleLinear()
    .domain([0, prix_max])
    .range([hauteurInterne, 0]);
// Echelle pour le type sur l'axe X
var echelleX = d3.scaleBand()
    .domain(type_modalites)
    .range([0, largeurInterne])
	.padding(0.2);
// Echelle pour le type affectant une couleur automatique à chaque type
var echelleCouleur = d3.scaleOrdinal(d3["schemeSet1"])
    .domain(type_modalites);

// Création de l'axe X
var axeX = d3.axisBottom()
    .scale(echelleX);

// Création de l'axe Y
var axeY = d3.axisLeft()
    .scale(echelleY);

// Création du graphique
var graphique = d3.select("#graph").append("svg")
    .attr("width", largeurTotale)
    .attr("height", hauteurTotale)
  .append("g")
    .attr("transform", "translate(" + marges.gauche + "," + marges.haut + ")");

// Ajout de l'axe X au graphique
graphique.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + hauteurInterne + ")")
  .call(axeX);

// Ajout de l'axe Y au graphique
graphique.append("g")
    .attr("class", "y axis")
  .call(axeY);

graphique.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Prix moyen");
    
// Ajout d'une barre pour chaque type de logement, avec une taille fonction du prix moyen
graphique.selectAll(".bar")
  .data(donnees)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", function(d) { return echelleX(d.type); })
  .attr("width", echelleX.bandwidth())
  .attr("y", function(d) { return echelleY(d.price); })
  .attr("height", function(d) { return hauteurInterne - echelleY(d.price); })
  .style("fill", function(d) { return echelleCouleur(d.type); });
  */