function Verificar() {
let email = document.getElementById('email').value;
let tel = document.getElementById('telefone').value;
let cpf = document.getElementById('cpf').value;
let estado = document.getElementById('estado').value;
 let numero = document.getElementById('numero').value;
let rua = document.getElementById('rua').value;
let cep = document.getElementById('cep').value;
let senha = document.getElementById('senha').value;
let senha2 = document.getElementById('senha2').value;
let nome = document.getElementById('name').value;
let cidade = document.getElementById('cidade').value;
let email2 = document.getElementById('email').value;

if (!email || !email2 || !tel || !cpf || !cep || !estado || !numero || !rua || !senha || !senha2 || !nome || ! cidade) {

     alert("Campo de preenchimento obrigatorio. Favor preencher");
    
     } else {
    
     alert("Campos preenchidos com sucesso!");
    }
    
}