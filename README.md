# InEvent-desafio

### Desafio

Escreva uma função que recebe um parâmetro string referente a um nome completo de uma pessoa (tamanho variável) e reduz para no máximo 13 caracteres.

Exemplos:

Input: Yan Rui Barbosa

Output: Yan Rui B.

Input: Yan Da Silva Fonseca

Output: Yan Da S. F.

### Resolução

Para este desafio, o codigo foi feito em HTML para a inserção dos dados e JS para a construção da logica.
O Codigo foi desenvolvido pensando em escalabilidade e manutenabildade, assim como as boas praticas de Clean code.

Seguindo as boas praticas, a logica funciona da seguinte forma:

1. A função `convertUserName` recebe o nome completo passado no input do HTML
2. É guardado o tamanho da variavel, caso seja maior que 13 caracteres e realizado as tratativas para a redução do nome. Se não for maior que 13, retorna o nome completo.
3. Realizo a separação do nome pelo split() para analisar cada palavra
4. Guardo o primeiro nome em uma variavel e removo o mesmo da lista a ser analisada
5. Percorrendo os elementos do array, verifico se o tamanho do elemento e menor que 3 para abranger palavras que nao mudam como "Das", "Dos", "De","Do","Da" e verifico se variavel com o nome é menor do que 13 para se adicionado. Caso nao seja menor que 3, a palavra é reduzida pelo primeiro caractere
6. Retorna o nome simplificado am até 13 caractere.
