# Desafio Iteris Food

Esse projeto é um desafio onde você deve seguir com a implementação do projeto.

## Insumos

Como insumo você tem:

- Descrição do projeto;
- Board de Tarefas;

## Preparação

Para iniciar a desenvolver esse projeto basta executar:

```bash
npm install
```

E depois

```bash
npm start
```

E assim o projeto vai estar rodando em <http://localhost:3000>.

## projeto

O projeto possui 3 rotas principais por hora:

- [Home](http://localhost:3000/)
- [Categorias](http://localhost:3000/categorias)
- [Restaurantes (onde devemos informar o id)](http://localhost:3000/restaurantes/:id)

> **Importante:** O projeto foi pensado em mobile first, ou seja, execute-o com a opção mobile em seu navegador.

Também é importante analisar que o projeto respeita a seguinte estrutura, onde destacamos o que é mais importante para o seu desenvolvimento:

```bash
.
├── README.md                                # este arquivo
├── package.json                             # arquivo de dependências
└── src
    ├── App.css                              # CSS do componente App
    ├── App.js                               # Componente App e raiz do projeto
    ├── components                          
    │   └── Header                           # Header do topo da aplicação
    ├── index.css                            # CSS global da aplicação
    ├── pages
    │   ├── Banners                          # Página Home
    │   ├── Categorias                       # Página de Categorias
    │   └── Restaurantes                     # Página de Restaurantes por categoria
    └── services                             # Chamadas da nossa API
```

> **Bom Desafio!**
>
> Se você leu até aqui não esqueça de alertar seus colegas da importância desse arquivo.