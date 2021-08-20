(() => {
    let cambioDeColor = document.getElementById('btnCambio');
    cambioDeColor.addEventListener('click', ()=>{
        function generarCodigoHex(longitud){
            let codigoHex = "";
            let codigoHex2 = "";
            longitud = 6;
            let elementosCodigoHex = "abcdef0123456789";
            for (let i =0; i<longitud; i++){
                codigoHex+= elementosCodigoHex.charAt(Math.floor(Math.random()*elementosCodigoHex.length));
                codigoHex2+= elementosCodigoHex.charAt(Math.floor(Math.random()*elementosCodigoHex.length));
            }
            document.body.style.background = `linear-gradient(to right, #${codigoHex}, #${codigoHex2})`;
            document.querySelector("#bgtext1").textContent = codigoHex;
            document.querySelector("#bgtext2").textContent = codigoHex2;
}
return generarCodigoHex();
    }, false)
})();
