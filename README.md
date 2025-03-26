Shopee Cart Simulator
Simulador de carrinho da Shopee, criado com base no projeto do bootcamp "Formação Node.js Fundamentals" da DIO, com algumas melhorias em relação ao projeto original.

Melhorias implementadas
🛠 Correção de erro no subtotal
Corrigi um problema onde o subtotal no displayCart não era atualizado corretamente após a remoção de um item. Antes, mesmo diminuindo a quantidade de um produto com removeItem, o subtotal continuava exibindo o valor correspondente à quantidade original. Exemplo: se havia 2 itens de R$40 cada e um fosse removido, o subtotal ainda mostrava R$80, em vez de R$40.

🪙 Implementação do sistema de moedas da Shopee
Criei um módulo para calcular o desconto das moedas da Shopee com base no valor final da compra.

🚚 Adição do sistema de frete
Agora, compras abaixo de R$100 têm um frete fixo de R$15, enquanto compras de R$100 ou mais têm frete grátis. Além disso, implementei uma lógica para garantir que o desconto das moedas não afete o benefício do frete grátis. Ou seja:
Se o valor inicial for R$100 ou mais, o frete é gratuito, independentemente do desconto das moedas.
Se o valor inicial for menor que R$100, o frete de R$15 é aplicado.

📌 Adição de uma Wish List
E para tornar o código mais organizado, criei uma função separada para adicionar itens a uma Wish List.

