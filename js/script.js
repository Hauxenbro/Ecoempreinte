// JavaScript source code
function minus_butt(index) {
    if (parseInt(document.getElementById(`value_${co2_names[index]}`).innerText) > 0) {
        document.getElementById(`value_${co2_names[index]}`).innerText = parseInt(document.getElementById(`value_${co2_names[index]}`).innerText) - 1;
        document.getElementById(index).style.display = "none";
    } else {
        document.getElementById(index).style.display = "block";
    };

};

function plus_butt(index) {
    document.getElementById(`value_${co2_names[index]}`).innerText = parseInt(document.getElementById(`value_${co2_names[index]}`).innerText) + 1;
    document.getElementById(index).style.display = "none";
};

function bus_act() {
    document.getElementById("bus").src = "images/bus_act.png";
    document.getElementById("info_bus").style.display = "block";
    document.getElementById("bus_label").innerHTML = `${document.getElementById("bus_km").value} km par mois.`;
    document.getElementById("bus").removeEventListener("click", bus_act);
    document.getElementById("bus").addEventListener("click", bus_desact);
};

function bike_act() {
    document.getElementById("bike").src = "images/bike_act.png";
    document.getElementById("info_bike").style.display = "block";
    document.getElementById("bike_label").innerHTML = `${document.getElementById("bike_km").value} km par mois.`;
    document.getElementById("bike").removeEventListener("click", bike_act);
    document.getElementById("bike").addEventListener("click", bike_desact);
};

function train_act() {
    document.getElementById("train").src = "images/train_act.png";
    document.getElementById("info_train").style.display = "block";
    document.getElementById("train_label").innerHTML = `${document.getElementById("train_km").value} km par mois.`;
    document.getElementById("train").removeEventListener("click", train_act);
    document.getElementById("train").addEventListener("click", train_desact);
};

function walk_act() {
    document.getElementById("walk").src = "images/walk_act.png";
    document.getElementById("info_walk").style.display = "block";
    document.getElementById("walk_label").innerHTML = `${document.getElementById("walk_km").value} km par mois.`;
    document.getElementById("walk").removeEventListener("click", walk_act);
    document.getElementById("walk").addEventListener("click", walk_desact);
};

function car_act() {
    document.getElementById("car").src = "images/car_act.png";
    document.getElementById("info_car").style.display = "block";
    document.getElementById("car_label").innerHTML = `${document.getElementById("car_km").value} km par mois.`;
    document.getElementById("car").removeEventListener("click", car_act);
    document.getElementById("car").addEventListener("click", car_desact);
};

function bus_desact() {
    document.getElementById("bus").src = "images/bus.png";
    document.getElementById("info_bus").style.display = "none";
    document.getElementById("bus").removeEventListener("click", bus_desact);
    document.getElementById("bus").addEventListener("click", bus_act);
};

function bike_desact() {
    document.getElementById("bike").src = "images/bike.png";
    document.getElementById("info_bike").style.display = "none";
    document.getElementById("bike").removeEventListener("click", bike_desact);
    document.getElementById("bike").addEventListener("click", bike_act);
};

function train_desact() {
    document.getElementById("train").src = "images/train.png";
    document.getElementById("info_train").style.display = "none";
    document.getElementById("train").removeEventListener("click", train_desact);
    document.getElementById("train").addEventListener("click", train_act);
};

function walk_desact() {
    document.getElementById("walk").src = "images/walk.png";
    document.getElementById("info_walk").style.display = "none";
    document.getElementById("walk").removeEventListener("click", walk_desact);
    document.getElementById("walk").addEventListener("click", walk_act);
};

function car_desact() {
    document.getElementById("car").src = "images/car.png";
    document.getElementById("info_car").style.display = "none";
    document.getElementById("car").removeEventListener("click", car_desact);
    document.getElementById("car").addEventListener("click", car_act);
};

function input_bus_km(emission) {
    document.getElementById("bus_label").innerHTML = `${document.getElementById("bus_km").value} km par jour.`;
    document.getElementById("emission_bus").innerHTML = `Resultat: ${(document.getElementById("bus_km").value * emission).toPrecision(2)} kg CO2`;
    co2_emissions[0] = document.getElementById("bus_km").value * emission;
};

function input_bike_km(emission) {
    document.getElementById("bike_label").innerHTML = `${document.getElementById("bike_km").value} km par jour.`;
    document.getElementById("emission_bike").innerHTML = `Resultat: ${(document.getElementById("bike_km").value * emission).toPrecision(2)} kg CO2`;
    co2_emissions[2] = document.getElementById("bike_km").value * emission;
};

function input_train_km(emission) {
    document.getElementById("train_label").innerHTML = `${document.getElementById("train_km").value} km par jour.`;
    document.getElementById("emission_train").innerHTML = `Resultat: ${(document.getElementById("train_km").value * emission).toPrecision(2)} kg CO2`;
    co2_emissions[1] = document.getElementById("train_km").value * emission;
};

function input_walk_km(emission) {
    document.getElementById("walk_label").innerHTML = `${document.getElementById("walk_km").value} km par jour.`;
    document.getElementById("emission_walk").innerHTML = `Resultat: ${(document.getElementById("walk_km").value * emission).toPrecision(2)} kg CO2`;
    co2_emissions[3] = document.getElementById("walk_km").value * emission;
};

function input_car_km(emission) {
    document.getElementById("car_label").innerHTML = `${document.getElementById("car_km").value} km par jour.`;
    document.getElementById("emission_car").innerHTML = `Resultat: ${(document.getElementById("car_km").value * emission).toPrecision(2)} kg CO2`;
    co2_emissions[4] = document.getElementById("car_km").value * emission;
};

function input_smartphone(emission) {
    document.getElementById("smartphone_label").innerHTML = `${document.getElementById("smartphone").value} heures par jour.`;
    document.getElementById("emission_smartphone").innerHTML = `Resultat: ${(document.getElementById("smartphone").value * emission).toPrecision(2)} kg CO2`;
    co2_emissions[0] = document.getElementById("smartphone").value * emission;
};

function input_streaming(emission) {
    document.getElementById("streaming_label").innerHTML = `${document.getElementById("streaming").value} heures par jour.`;
    document.getElementById("emission_streaming").innerHTML = `Resultat: ${(document.getElementById("streaming").value * emission).toPrecision(2)} kg CO2`;
    co2_emissions[1] = document.getElementById("streaming").value * emission;
};

function input_cloud(emission) {
    document.getElementById("cloud_label").innerHTML = `${document.getElementById("cloud").value} GB par jour.`;
    document.getElementById("emission_cloud").innerHTML = `Resultat: ${(document.getElementById("cloud").value * emission).toPrecision(2)} kg CO2`;
    co2_emissions[2] = document.getElementById("cloud").value * emission;
};

function bilan_final() {
    document.getElementById("butt").innerHTML = "";
    let numerique_emission = 0;
    for (let em of co2_emissions) {
        if (em != undefined) {
            numerique_emission += em;
        }
    };
    emission += numerique_emission;
    emissions_parts[2] = numerique_emission;

    let article = "";
    let header = "";
    let parag = "";
    if (emission != 0) {
        header = "L’aventure vers le bas-carbone commence ici. ✅";
        parag = "Vous avez terminé votre diagnostic avec succès ! Chaque donnée partagée vous rapproche un peu plus d'un mode de vie en harmonie avec notre planète. Vous ne regarderez plus jamais votre consommation de la même manière. <b>Prêt à devenir un héros du quotidien ?</b> 🔥";
        const data = {
            labels: [
                'Alimentaire',
                'Transport',
                'Numerique'
            ],
            datasets: [{
                label: 'Votre CO2 footprint',
                data: [alimentaire_part, transport_part, numerique_part],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        };
        const config = {
            type: 'pie',
            data: data,
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: "Votre Bilan d'empreinte carbone",
                        padding: {
                            top: 10,
                            bottom: 30
                        }
                    },
                    tooltip: {
                        callbacks: {
                            labelColor: function (context) {
                                return {
                                    borderColor: "rgb(0,0,255)",
                                    backgroundColor: "rgb(255,0,0)",
                                    borderWidth: 2,
                                    borderDash: [2, 2],
                                    borderRadius: 2,
                                };
                            },
                            labelTextColor: function (context) {
                                return "#FFD700"
                            },
                            label: function (context) {
                                let label = context.dataset.label || '';

                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.parsed + "% de CO2";
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        };
        article += `<div style="width: 800px; "><canvas id="graph"></canvas></div>`;
        document.getElementById("header_questions").innerText = "Votre bilan:";
        document.getElementById("article").innerHTML = article;
        const myChart = new Chart(
            document.querySelector("canvas"),
            config
        );
    } else {
        document.getElementById("main").style.display = "none";
        header = "Oups... un petit nuage de carbone s'est glissé ici ! ☁️";
        parag = "Pas de panique, vos données ont eu un petit coup de fatigue. Pour obtenir un bilan précis и 100% fiable, le mieux est de reprendre depuis le début. Promis, ça sera encore plus rapide cette fois-ci !. <b>On repart sur de bonnes bases ?</b> 🔥";
        document.getElementById("button_div").innerHTML = `<a href="Formulaire.html" type="button" class="btn btn-success px-5 mb-5">Recommencer</a>`
    };

    document.getElementById("header_form").innerText = header;
    document.getElementById("parag_form").innerHTML = parag;
    
};

function numeriqueFunction() {
    let transport_emission = 0;
    console.log(co2_emissions);
    for (let em of co2_emissions) {
        if (em != undefined) {
            transport_emission += em;
        }
    };
    console.log("Partie emission transport: " + transport_emission);
    emission += transport_emission;
    emissions_parts[1] = transport_emission;
    co2_emissions = [];
    co2_names = [];
    let header = "Le poids de l’invisible. 📱";
    let parag = "Streaming, emails и réseaux sociaux… Votre vie digitale a une empreinte bien réelle. Mesurez l’impact de votre consommation de données et adoptez les bons réflexes pour un numérique plus responsable. <strong>Déconnectez pour la planète.</strong> 💪";
    const xhr = new XMLHttpRequest();
    let article = "";
    xhr.open("GET", "https://impactco2.fr/api/v1/thematiques/ecv/1?detail=1&language=fr");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.responseText) {
            reponse = JSON.parse(xhr.responseText);
            let numerique_emission = reponse.data[0].ecv / 364;
            article += `<div class="col d-flex align-items-start"><div class="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"><img class="bi" src="images/smartphone.png" width="32" height="32" area-hidden="true"/></div><div><h3 class="fs-2 text-body-emphasis">Temps d'ecran</h3><p>Utilisation hebdo (heures)</p><input type="range" id="smartphone" value=0 min=0 max=24 oninput="input_smartphone(${numerique_emission})" class="form_range" step="1"/><label for="smartphone" id="smartphone_label"> heures par jour.</label><p class="resultat_emission" id="emission_smartphone">Resultat: 0 kg CO2</p></div></div>`;
            article +=
                `<div class="col d-flex align-items-start"><div class="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"><img class="bi" src="images/netflix.png" width="32" height="32" area-hidden="true"/></div><div><h3 class="fs-2 text-body-emphasis">Streaming</h3><p>Utilisation hebdo (heures)</p><input type="range" id="streaming" value=0 min=0 max=24 oninput="input_streaming(0.06401675291000002)" class="form_range" step="1"/><label for="streaming" id="streaming_label"> heures par jour.</label><p class="resultat_emission" id="emission_streaming">Resultat: 0 kg CO2</p></div></div>`
                +
                `<div class="col d-flex align-items-start"><div class="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"><img class="bi" src="images/cloud-server.png" width="32" height="32" area-hidden="true"/></div><div><h3 class="fs-2 text-body-emphasis">Stockage cloud</h3><p>Utilisation (GB)</p><input type="range" id="cloud" value=0 min=0 max=1024 oninput="input_cloud(0.00023533417/364)" class="form_range" step="1"/><label for="cloud" id="cloud_label"> GB par jour.</label><p class="resultat_emission" id="emission_cloud">Resultat: 0 kg CO2</p></div></div>`
        };
        let div_butt = `<div class="card text-center border-light">
                          <div class="card-body">
                            <p class="card-text">
                                Toutes vos données sont prêtes. Votre profil écologique complet est à portée de clic. Prêt à découvrir votre score et, surtout, comment devenir un véritable héros du climat ?
                                <b>Découvrez votre impact total dès maintenant.</b>
                            </p>
                            <button type="button" id="next_numerique" class="btn btn-success" onclick="bilan_final()">Découvrir mes résultats 🏆</button>
                          </div>
                        </div>`
        document.getElementById("header_form").innerText = header;
        document.getElementById("parag_form").innerHTML = parag;
        document.getElementById("header_questions").innerText = "Numerique";
        document.getElementById("article").innerHTML = article;
        document.getElementById("butt").innerHTML = div_butt;
    };
    xhr.send();
};

function transportFunction() {
    for (let i = 0; i < co2_emissions.length; i++) {
        let val = parseInt(document.getElementById(`value_${co2_names[i]}`).innerText);
        emission += co2_emissions[i] * val / 5;
    };
    emissions_parts[0] = emission;
    co2_emissions = [];
    co2_names = [];
    let header = "Bougez en toute légèreté. 🚲";
    let parag = "Travail, loisirs ou grands voyages : vos déplacements pèsent lourd dans la balance. Identifiez vos principales sources d’émissions liées à la mobilité pour réinventer vos trajets sans perdre en liberté. <strong>Chaque kilomètre compte.</strong>";
    const xhr = new XMLHttpRequest();
    const transport_emissions = [];
    xhr.open("GET", "https://impactco2.fr/api/v1/transport?km=1&displayAll=1&transports=9%2C2%2C7%2C30%2C125&ignoreRadiativeForcing=0&occupencyRate=1&includeConstruction=0&language=fr");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.responseText) {
            const reponse = JSON.parse(xhr.responseText);
            for (let i = 0; i < reponse.data.length; i++) {
                switch (i) {
                    case 0:
                        transport_emissions[0] = reponse.data[3].value;
                        break;
                    case 1:
                        transport_emissions[1] = reponse.data[0].value;
                        break;
                    case 2:
                        transport_emissions[2] = reponse.data[2].value;
                        break;
                    case 3:
                        transport_emissions[3] = reponse.data[1].value;
                        break;
                    case 4:
                        transport_emissions[4] = reponse.data[4].value;
                        break;
                }
            };
            let article = "";
            article += `<div class="feature col"><div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3"><img src="images/bus.png" style="height:64px; width:64px;" id="bus"/></div><div style="display:none;" id="info_bus"><h3>Bus</h3><p>Distance hebdo (km)</p><input type="range" id="bus_km" value=0 min=0 max=300 oninput="input_bus_km(${transport_emissions[0]})" class="form_range" step="1"/><label for="bus_km" id="bus_label"> km par jour.</label><p class="resultat_emission" id="emission_bus">Resultat: 0 kg CO2</p></div></div>`
                + `<div class="feature col"><div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3"><img src="images/train.png" style="height:64px; width:64px;" id="train"/></div><div style="display:none;" id="info_train"><h3>Train</h3><p>Distance hebdo (km)</p><input type="range" id="train_km" value=0 min=0 max=500 oninput="input_train_km(${transport_emissions[1]})" class="form_range" step="5"/><label for="train_km" id="train_label"> km par jour.</label><p class="resultat_emission" id="emission_train">Resultat: 0 kg CO2</p></div></div>`
                + `<div class="feature col"><div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3"><img src="images/bike.png" style="height:64px; width:64px;" id="bike"/></div><div style="display:none;" id="info_bike"><h3>Bike</h3><p>Distance hebdo (km)</p><input type="range" id="bike_km" value=0 min=0 max=100 oninput="input_bike_km(${transport_emissions[2]})" class="form_range" step="1"/><label for="bike_km" id="bike_label"> km par jour.</label><p class="resultat_emission" id="emission_bike">Resultat: 0 kg CO2</p></div></div>`
                + `<div class="feature col"><div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3"><img src="images/walk.png" style="height:64px; width:64px;" id="walk"/></div><div style="display:none;" id="info_walk"><h3>Walk</h3><p>Distance hebdo (km)</p><input type="range" id="walk_km" value=0 min=0 max=100 oninput="input_walk_km(${transport_emissions[3]})" class="form_range" step="1"/><label for="walk_km" id="walk_label"> km par jour.</label><p class="resultat_emission" id="emission_walk">Resultat: 0 kg CO2</p></div></div>`
                + `<div class="feature col"><div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3"><img src="images/car.png" style="height:64px; width:64px;" id="car"/></div><div style="display:none;" id="info_car"><h3>Car</h3><p>Distance hebdo (km)</p><input type="range" id="car_km" value=0 min=0 max=300 oninput="input_car_km(${transport_emissions[4]})" class="form_range" step="1"/><label for="car_km" id="car_label"> km par jour.</label><p class="resultat_emission" id="emission_car">Resultat: 0 kg CO2</p></div></div>`;

            let div_butt = `<div class="card text-center border-light">
                          <div class="card-body">
                            <p class="card-text">
                                Vos déplacements n'ont plus de zones d'ombre. Mais saviez-vous que vos emails, vos streams и vos réseaux sociaux pèsent aussi dans la balance ?
                                <b>Explorons ensemble votre vie connectée.</b>
                            </p>
                            <button type="button" id="next_numerique" class="btn btn-success" onclick="numeriqueFunction()">Scanner mon empreinte digitale ⚡️</button>
                          </div>
                        </div>`
            document.getElementById("header_form").innerText = header;
            document.getElementById("parag_form").innerHTML = parag;
            document.getElementById("header_questions").innerText = "Transportation";
            document.getElementById("article").innerHTML = article;
            document.getElementById("butt").innerHTML = div_butt;
            document.getElementById("bus").addEventListener("click", bus_act);
            document.getElementById("train").addEventListener("click", train_act);
            document.getElementById("bike").addEventListener("click", bike_act);
            document.getElementById("walk").addEventListener("click", walk_act);
            document.getElementById("car").addEventListener("click", car_act);
        };
    };
    xhr.send();
};

let emission = 0;
const emissions_parts = [];
let co2_emissions = [];
let co2_names = [];

document.querySelector("#button_start").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://impactco2.fr/api/v1/alimentation?category=group&language=fr");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.responseText) {
            const reponse = JSON.parse(xhr.responseText);
            let nb = 0;
            let article = "";
            let header = "L’impact dans votre assiette. 🥗";
            let parag = "Ce que vous mangez est votre levier le plus puissant. Du choix des protéines à la saisonnalité de vos produits, découvrez comment chaque repas peut devenir un geste concret pour la planète. <strong>Mangez mieux, polluez moins.</strong>";
            document.getElementById("button_start").style.display = "none";
            for (let element of reponse.data) {
                co2_names[nb] = element.name;
                let src_fav = "";
                let head_name = "";
                switch (element.name) {
                    case "Viandes":
                        src_fav = "images/meat.png";
                        head_name = "Viandes & Charcuteries";
                        break;
                    case "Poissons et fruits de mer":
                        src_fav = "images/fish.png";
                        head_name = "Poissons et fruits de mer";
                        break;
                    case "Plats préparés":
                        src_fav = "images/precooked.png";
                        head_name = "Plats préparés";
                        break;
                    case "En-cas":
                        src_fav = "images/dessert.png";
                        head_name = "En-cas & Plaisirs";
                        break;
                    case "Oeufs et produits laitiers":
                        src_fav = "images/egg.png";
                        head_name = "Produits Laitiers & Œufs";
                        break;
                    case "Fruits et légumes":
                        src_fav = "images/vegetable.png";
                        head_name = "Fruits et légumes";
                        break;
                    case "Céréales et légumineuses":
                        src_fav = "images/cereal.png";
                        head_name = "Épicerie & Céréales";
                        break;
                }
                co2_emissions[nb] = element.items[0].ecv;
                article += `<div class="col d-flex align-items-start"><div class="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"><img src="${src_fav}" class="bi" width="32" height="32" aria-hidden="true"/></div><div><h3 class="fs-2 text-body-emphasis">${head_name}</h3><p>À quelle fréquence consommez-vous <i>${element.name}</i>?</p><p><i>(1 portion ≈ 200g)</i></p><button id="button_minus_${element.name}" onclick="minus_butt(${nb})" class="btn btn-danger" type="button">-</button><p><span id="value_${element.name}">0</span> par semaine.</p><button id="button_plus_${element.name}" onclick="plus_butt(${nb})" class="btn btn-success" type="button">+</button><span id=${nb} style="display:none;"><p class="error">Vous ne pouvez pas mettre une valeur négative</p></span></div></div>`
                nb += 1;
            }
            let div_butt = `<div class="card text-center border-light">
                          <div class="card-body">
                            <p class="card-text">
                                Votre assiette n'a plus de secrets pour vous. <br>
                                <b>Et si on passait à la vitesse supérieure ?</b>
                            </p>
                            <button type="button" id="button_next_tr" class="btn btn-success">C'est parti pour le Transport!</button>
                          </div>
                        </div>`
            document.getElementById("header_form").innerText = header;
            document.getElementById("parag_form").innerHTML = parag;
            document.getElementById("header_questions").innerText = "Alimentation";
            document.getElementById("article").innerHTML = article;
            document.getElementById("butt").innerHTML = div_butt;
            document.getElementById("button_next_tr").addEventListener("click", transportFunction);
        }
    };
    xhr.send();
    document.getElementById("header_form").innerText = "Alimentation";
});