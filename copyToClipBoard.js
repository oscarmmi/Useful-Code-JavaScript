function copyToClipBoard(textSelected) {
    try {
        let seleccion = document.createRange();
        seleccion.selectNodeContents(textSelected);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);
        let res = document.execCommand('copy');
        window.getSelection().removeRange(seleccion);
        if(textSelected) {
           alert("-Se copio el elemento");
        }
    }catch (e){
        alert("-Ocurrió un error al copiar el elemento", e);
    }
}