var horaatual = new Date()
var hora = horaatual.getHours()
console.log(`Agora são exatamente ${hora} horas!`)
if (hora <= 11) {
    console.log('Bom dia.')
}
else if (hora <= 18) {
    console.log('Boa tarde')
}
else if (hora > 18){
    console.log ('Boa noite')
}
