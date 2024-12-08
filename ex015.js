const idade = parseInt(prompt("Digite sua idade"));

switch (true) {
    case idade >= 18 && idade < 50:
        console.log("Adulto");
        break;
    case idade >= 50:
        console.log("Senhor");
        break;
    case idade < 18:
        console.log("Jovem");
        break;
}