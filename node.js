// Saldo inicial da conta
let saldo = 1000; // Você pode definir o saldo inicial desejado

// Array para armazenar o histórico de transações
const historicoTransacoes = [];

// Função para exibir o menu e obter a escolha do usuário
function exibirMenu() {
  console.log("Bem-vindo ao Sistema de Conta Bancária! Escolha uma opção:");
  console.log("1. Depositar");
  console.log("2. Sacar");
  console.log("3. Ver Saldo");
  console.log("4. Ver Histórico de Transações");
  console.log("5. Sair");
  
  const escolha = parseInt(prompt("Digite o número da opção desejada:"));
  
  switch (escolha) {
    case 1:
      depositar();
      break;
    
   
case 2:
      sacar();
      break;
    case 3:
      verSaldo();
      break;
    case 4:
      verHistorico();
      break;
    case 5:
      console.log("Obrigado por usar nosso sistema. Adeus!");
      return;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
  
  exibirMenu(); // Chama o menu novamente para permitir mais ações
}

// Função para realizar um depósito
function depositar() {
  const valor = parseFloat(prompt("Digite o valor a ser depositado:"));
  if (isNaN(valor) || valor <= 0) {
    console.log("Valor inválido. Tente novamente.");
    return;
  }
  
  saldo += valor;
  historicoTransacoes.push({ tipo: "Depósito", valor, data: new Date() });
  console.log(`Depósito de $${valor.toFixed(2)} realizado com sucesso.`);
}

// Função para realizar um saque
function sacar() {
  const valor = parseFloat(prompt("Digite o valor a ser sacado:"));
  if (isNaN(valor) || valor <= 0 || valor > saldo) {
    console.log("Valor inválido ou saldo insuficiente. Tente novamente.");
    return;
  }
  
  saldo -= valor;
  historicoTransacoes.push({ tipo: "Saque", valor, data: new Date() });
  console.log(`Saque de $${valor.toFixed(2)} realizado com sucesso.`);
}

// Função para verificar o saldo atual
function verSaldo() {
  console.log(`Saldo atual: $${saldo.toFixed(2)}`);
}

// Função para exibir o histórico de transações
function verHistorico() {
  console.log("Histórico de Transações:");
  for (const transacao of historicoTransacoes) {
    console.log(`${transacao.tipo}: $${transacao.valor.toFixed(2)} em ${transacao.data.toLocaleString()}`);
  }
}

// Iniciar o programa exibindo o menu
exibirMenu();