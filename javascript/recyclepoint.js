const locations = [
    {
        lat: -21.42512741118613,  // Prefeitura
        lng: -45.949767243095266,
        zoom: 17,
        info: "Ecoponto - Prefeitura Municipal de Alfenas:\nLocal para descarte de eletrônicos no prédio da Prefeitura.\n(Observação: Pilhas, lâmpadas e baterias não devem ser descartadas.)"
    },
    {
        lat: -21.41006978033587, // Alfenas Ambiental
        lng: -45.973905575618154,
        zoom: 17,
        info: "Ponto de Coleta - Alfenas Ambiental:\nUnidade de coleta para resíduos eletrônicos. Verifique os horários de funcionamento."
    },
    {
        lat: -21.420964604560012, // Unifal
        lng: -45.94861900506598,
        zoom: 17,
        info: "Ponto de Coleta - UNIFAL-MG:\nEspaço destinado à reciclagem segura de resíduos eletrônicos na UNIFAL-MG."
    },
    {
        lat: -21.43082050408932, // Vida Viva
        lng: -45.959207436363265,
        zoom: 17,
        info: "Ecoponto - Vida Viva:\nLocal destinado ao descarte adequado de resíduos eletrônicos, conforme recomendações ambientais."
    },

];


function updateMap(index) {
    const loc = locations[index];
    const url = `https://www.google.com/maps?q=${loc.lat},${loc.lng}&hl=pt-BR&z=${loc.zoom}&output=embed`;
    document.getElementById('map').src = url;
    document.getElementById('infoText').value = loc.info;
    animateInfo();
}


function animateInfo() {
    const infoElem = document.getElementById('infoText');
    infoElem.classList.remove('fade-transition');
    void infoElem.offsetWidth;
    infoElem.classList.add('fade-transition');
}


document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', () => {
    const index = parseInt(button.getAttribute('data-index'));
    updateMap(index);
    });
});