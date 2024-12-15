# Analise Estátiva TVSI

> Este repositório tem o proposito de guardar o código e como realizar os testes para o exemplo prático.

## Fiheiros:
> ./bad_code.js -> Possui excerto de código com defeitos/erros

> ./good_code.ks -> Possui exerto de código com 

## Regras a verificar: 
* Variáveis declaradas mas não utilizadas, que ocupam memória desnecessariamente e reduzem a clareza do código;
* Logs desnecessários que podem dificultar a leitura das saídas de depuração;
* Referências a constantes inexistentes, que podem causar erros em tempo de execução;
* Parâmetros de funções que não são utilizados, indicando potenciais problemas no design da interface da função.


## Ferramentas a verificar
1. [ESLint](ESLint.md)
2. [SonarQube](SonarQube.md)
3. [PMD](PMD.md)