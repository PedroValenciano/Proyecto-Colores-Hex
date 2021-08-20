(() => {
    //first creat a variable bringing the button from html
    let cambioDeColor = document.getElementById('btnCambio');
    /*here i create an a click event and define which actions going to happens
    every time i click the button*/
    cambioDeColor.addEventListener('click', ()=>{
        /*function to generate HEX color*/
        function generarCodigoHex(longitud){
            /*first i declare 2 variables with empty string*/
            let codigoHex = "";
            let codigoHex2 = "";
            /*then i declare the argument "longitud" length*/
            longitud = 6;
            //Hex color are define by numbers from 0-9 and letter from a-f, i declare a string with this parameters
            let elementosCodigoHex = "abcdef0123456789";
            //with a for loop i declare the conditions
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
