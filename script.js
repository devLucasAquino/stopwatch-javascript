// //99%
// var temp_min
// var minuto = 24

// var temp_seg
// var segundo = 59

// var flag_stop = false

// const decMin = () => {
//     minuto -= 1;
//     if(minuto < 10) document.querySelector('#minutes').innerText = '0' + minuto
//     else document.querySelector('#minutes').innerText = minuto

// }

// const decSeg = () =>{
//     segundo -= 1;
//     if(segundo < 10) document.querySelector('#seconds').innerText = '0' + segundo
//     else document.querySelector('#seconds').innerText = segundo
//     if(segundo == 0){
//         if(minuto == 0){
//             clear()
//         }
//         segundo = 60
//     } 
// }

// function start(){

//     clear()

//     if(flag_stop == false){
//         minuto = 24
//         segundo = 59
//     }else{
//         flag_stop = false
//     }

//     document.querySelector('#minutes').innerText = minuto
//     document.querySelector('#seconds').innerText = segundo
//     //callback
//     temp_min = setInterval(decMin, 60000); //(função gatilho, tempo( 1ms = 1x10^-3= 0,001 s -> 1s = 1000ms))
//     temp_seg = setInterval(decSeg, 1000); //(função gatilho, tempo( 1ms = 1x10^-3= 0,001 s -> 1s = 1000ms))
// }

// function template(){
//     minuto = 25
//     segundo = '00'
//     document.querySelector('#minutes').innerText = minuto
//     document.querySelector('#seconds').innerText = segundo
//     clear()
// }

// function stop(){
//     clear()
//     flag_stop = true
// }

// function clear(){
//     clearInterval(temp_min);
//     clearInterval(temp_seg);
// }


function start(){
    const minutes = document.querySelector('input').value;
    var min = minutes;
    
    function lessMinutes(){
        
        if(min > 0){
            min = min - 1;
        }
        
        return min
    }

    console.log('min: ' +lessMinutes())
    console.log('minutes: ' +minutes); 
}


//ESCOPO PARA EXECUTAR UMA LINHA DE CODIGO APENAS UMA VEZ!

// var codigoExecutado = false; // Variável de controle

// function executarCodigo() {
//     if (!codigoExecutado) {
//         // Coloque aqui a linha de código que você deseja executar apenas uma vez
//         console.log("Esta linha de código será executada apenas uma vez.");
        
//         codigoExecutado = true; // Marca que a linha de código já foi executada
//     }
// }

// // Chame a função executarCodigo() quantas vezes quiser
// executarCodigo();
// executarCodigo();
