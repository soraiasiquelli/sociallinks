var sectlink = document.getElementById("sectlink");
var sectinfo = document.getElementById("sectinfo")
var btnProximo = document.getElementById("btnProximo")
var linkText; // Definindo a variável linkText fora das funções para torná-la global
var linkTexts = []; // Array global para armazenar os links
var selectPlataforma; // Definindo selectPlataforma globalmente
var  plataformaOptions = ["Instagram", "Facebook", "TikTok", "Youtube", "Linkedin", "GitHub"];
var option;
var imageURL; // Definindo imageURL globalmente




/*inputs*/

var nome = document.getElementById("nome").value
var imagemperfil = document.getElementById("img")


sectinfo.style.display = "none"

document.getElementById("btnnovolink").addEventListener("click", function(){
    criarLink();
});

function criarLink() {
    var labelLegenda = document.createElement("label");
    labelLegenda.classList.add("legenda"); // Adiciona a classe à nova seção
    labelLegenda.textContent = "Plataforma: ";

    var selectPlataforma = document.createElement("select");
    selectPlataforma.classList.add("plataforma");

    var plataformaOptions = ["Instagram", "Facebook", "TikTok", "Youtube", "Linkedin", "GitHub"];
    for (var i = 0; i < plataformaOptions.length; i++) {
        option = document.createElement("option");
        option.text = plataformaOptions[i];
        selectPlataforma.add(option);
    }




    var labelLegendaLink = document.createElement("label");
    labelLegendaLink.classList.add("legenda");
    labelLegendaLink.textContent = "Insira o Link: ";

    linkText = document.createElement("input");
    linkText.type = "text";
    linkText.classList.add("input-text"); // Adiciona a classe ao input de texto

    var br = document.createElement("br");

    sectlink.appendChild(labelLegenda);
    sectlink.appendChild(selectPlataforma);
    sectlink.appendChild(labelLegendaLink);
    sectlink.appendChild(linkText);
    sectlink.appendChild(br);
    linkTexts.push(linkText);


    adcImg();
}

document.getElementById("btnProximo").addEventListener("click", function(){

    sectinfo.style.display = "block"
    sectlink.style.display = "none"
    btnProximo.style.display = "none"


});


// Obtém o elemento de entrada de arquivo
var fileInput = document.getElementById("fotoescolhida");
var imagemSelecionada = document.getElementById("imagemSelecionada");

 
function adcImg(){
    fileInput.addEventListener("change", function() {
        // Verifica se um arquivo foi selecionado
        if (fileInput.files.length > 0) {
            // Obtém o arquivo selecionado
            var file = fileInput.files[0];
            // Cria um objeto URL para a imagem selecionada
            imageURL = URL.createObjectURL(file);
            // Exibe a imagem selecionada
            imagemSelecionada.src = imageURL;
            imagemSelecionada.style.display = "block";
            return imagemSelecionada;
            // Exibe o nome do arquivo selecionado em outro elemento HTML
            var selectedFileName = document.getElementById("selectedFileName");
            selectedFileName.textContent = "Arquivo selecionado: " + file.name;
        } else {
            // Se nenhum arquivo foi selecionado, limpa o conteúdo do elemento HTML
            imagemSelecionada.src = "#";
            imagemSelecionada.style.display = "none";
            var selectedFileName = document.getElementById("selectedFileName");
            selectedFileName.textContent = "";
        }
    });
}


/*CONCLUÍDO*/

document.getElementById("concluido").addEventListener("click", function(){

    paglink();
    plataformaLink()
});





function paglink() {
    var titulo = document.getElementById("nomeperfil");
    titulo.textContent = document.getElementById("nome").value;

    var sobrenome = document.getElementById("sobrenome");
    sobrenome.textContent = document.getElementById("segundonome").value;

    var emaillink = document.getElementById("emaillink");
    emaillink.textContent = document.getElementById("email").value;

    var p_links = document.getElementById("p_links");
    p_links.innerHTML = ""; // Limpa o conteúdo anterior

    linkTexts.forEach(function(linkText) {
        var link = document.createElement("a");
        link.href = linkText.value;
        link.textContent = linkText.value;
        p_links.appendChild(link);
        p_links.appendChild(document.createElement("br"));
    });

    // Exibe a imagem selecionada
    if (imageURL) {/*verifica se tem algum valor  e caso tenha executa o código*/
        var imagemperfil = document.getElementById("imagemperfil");
        imagemperfil.src = imageURL;
        imagemperfil.style.display = "block";
    }

    sectinfo.style.display = "none"
    var secaopaglink = document.getElementById("paglinks")
    secaopaglink.style.display = "block"
}


