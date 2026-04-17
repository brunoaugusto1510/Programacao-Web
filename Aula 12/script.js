let precoProduto = 100
let percentualDesconto = 10
let nome = "Juninho"

let valor_desconto = precoProduto * (percentualDesconto / 100); 

let preco_final = precoProduto - valor_desconto;

let precoAcimaDe100 = precoProduto > 100;
let descontoValido = percentualDesconto > 0;

const msg = 
`Olá, ${nome}! O produto custa R$ ${precoProduto}
Desconto de ${percentualDesconto}%: R$ ${valor_desconto}
Preço final: R$ ${preco_final}
Preço acima de R$ 100? ${precoAcimaDe100}
Desconto válido? ${descontoValido}
`;

console.log(msg);
