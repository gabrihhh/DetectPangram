const input = document.getElementById('input');
const resultado = document.getElementById('resultado');
const btn = document.getElementById('btn');


btn.addEventListener('click',()=>{detect(input.value)})
window.addEventListener('keydown',(e)=>{if(e.keyCode == 13){detect(input.value)}})


function detect(string){
        let alfabeto = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let pontos = 0
        let array = string.split('').filter(function(value){return value != ' '})
    
        alfabeto.split('').forEach(e=> {
            let ponto = array.indexOf(e,0)
            if(ponto != -1){
                pontos++
            }
        });
        
        if(pontos >= 26){
            resultado.textContent = "True"
        }else{
            resultado.textContent = "False"
        }
}
