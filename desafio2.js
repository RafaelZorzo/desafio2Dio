let level 
let saldo 
function saldoVitorias (victorys,defeats){
    return saldo = victorys - defeats
}
saldoVitorias(150,50)

if (saldo <= 10){
    level = "Ferro"

}   else if (saldo >11 && saldo <= 20){
        level="Bronze"
    }   else if (saldo >20 && saldo <= 50){
            level="Prata"

        }   else if (saldo >50 && saldo <= 80){
                level="Ouro"

            }   else if (saldo > 80  && saldo <= 90){
                    level="Diamante"
                }   else if (saldo >90 && saldo <= 100){
                        level="Lendário"
                    }   else if (saldo > 100){
                            level="Imortal"
                        } 

console.log(`O Herói tem saldo de ${saldo} e está no nível de ${level}`)
