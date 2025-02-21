
function ntas(notas) {

    let resultado = {
        parsed: [],
        passed: 0,
        lose: 0
    }
    for(let i = 0; i < notas.length; i++) {
        let nota = notas[i]
        let letra = ''
        
        if(nota >= 90) {
            letra = 'A'
        } else if(nota >= 80) {
            letra = 'B'
        } else if(nota >= 70) {
            letra = 'C'
        } else if(nota >= 60) {
            letra = 'D'
        } else {
            letra = 'F'
        }
        
        resultado.parsed.push(letra)
        if(letra == 'F') {
            resultado.lose = resultado.lose + 1
        } else {
            resultado.passed = resultado.passed + 1
        }
    }
    
    return resultado
}


let notas = [100, 50, 65, 70, 85, 96, 45]
let result = ntas(notas)
console.log(result)


