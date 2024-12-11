let numero = 0;

do {
    numero++;
    if (numero % 2 === 0) {
        continue;
    } else {
        console.log(numero);
    }
}while (numero <= 100);