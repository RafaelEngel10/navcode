let alternar = true;

function trocarImagem() {
    document.getElementById("alemão").src = alternar ? "../navcode/partyimages/partyimages-joke/alemanha.png" : "../navcode/partyimages/Alemão.jpeg";
    document.getElementById("francês").src = alternar ? "../navcode/partyimages/partyimages-joke/frança.png" : "../navcode/partyimages/Francês.jpeg";
    document.getElementById("italiano").src = alternar ? "../navcode/partyimages/partyimages-joke/italia.png" : "../navcode/partyimages/Italiano.jpeg";
    document.getElementById("russo").src = alternar ? "../navcode/partyimages/partyimages-joke/russia.png" : "../navcode/partyimages/Russo.jpeg";

    document.getElementById("suiço").src = alternar ? "../navcode/partyimages/partyimages-joke/lituano.png" : "../navcode/partyimages/Suiço.jpeg";
    document.getElementById("suiço-lituano").textContent = alternar ? "Ryan Augusto Chagas" : "Thiago de Oliveira Becker Bayao";

    document.getElementById("croata").src = alternar ? "../navcode/partyimages/partyimages-joke/croacia.png" : "../navcode/partyimages/Croata.jpeg";
    document.getElementById("americano").src = alternar ? "../navcode/partyimages/partyimages-joke/america.png" : "../navcode/partyimages/Americano.jpeg";

    alternar = !alternar; 
}