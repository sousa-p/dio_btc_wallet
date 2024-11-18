# Gerador de Carteiras Bitcoin

Este projeto cria uma carteira Bitcoin utilizando pares de chave pública e privada, com um endereço pronto para transações na testnet. Também permite importar a carteira no Electrum para simular o envio e recebimento de Bitcoin.

## Requisitos

- **Node.js** e **npm**

## Estrutura do projeto

```bash
project-root/
├── functions/
│   ├── create_account.js       # Deriva a conta a partir da seed
│   └── create_seed.js          # Gera a seed a partir da frase mnemônica
├── index.js                    # Script principal
└── README.md                   # Documentação
```
