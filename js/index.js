import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Verônica", 11122233309);
const cliente2 = new Cliente("Davi", 88822233309);

const contaCorrenteVeronica = new ContaCorrente(1001, cliente1);
contaCorrenteVeronica.depositar(500);
contaCorrenteVeronica.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteVeronica.tranferir(valor, conta2);

console.log(contaCorrenteVeronica);