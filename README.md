# Documentação API Mitologia
![NPM](https://img.shields.io/npm/l/react)

# API Mitologia
Esta API é utilizada para gerenciar um CRUD (criar, ler, atualizar e deletar) de diversas informações sobre Mitologias.

## Endpoints
### - GET /mitologias
Esse endpoint é responsável por retornar a listagem de todas as mitologias cadastrados no banco de dados (Atualmente Hospedado na Nuvem - Mongo Atlas).

#### Parâmetros:
Nenhum

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber a listagem de todas as mitologias presentes no banco de dados.

Exemplo de resposta:

```
{
  "_id": {
    "$oid": "68da7e3f6f1abf22156ab0cf"
  },
  "name": "Mitologia Grega",
  "origin": "Grécia Antiga",
  "period": "aprox. 1200 a.C. – 146 a.C.",
  "summary": "A Mitologia Grega reúne narrativas, deuses e heróis criados para explicar fenômenos da natureza e a vida humana.",
  "characters": [
    {
      "name": "Zeus",
      "symbols": ["Raio", "Águia", "Carvalho"],
      "summary": "Rei dos deuses do Olimpo, governava o céu e os fenômenos atmosféricos."
    },
    {
      "name": "Atena",
      "symbols": ["Coruja", "Oliveira", "Lança", "Escudo"],
      "summary": "Deusa da sabedoria, da estratégia militar e das artes."
    }
  ]
}

```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:

```
{
    "error": "Erro interno papito."
}
```

### - POST /mitologias
Esse endpoint é responsável por cadastrar uma nova mitologia no banco de dados.

#### Parâmetros:
name: Nome da mitologia.
origin: Origem da mitologia.
period: Período do mitologia.
summary: Resumo da mitologia.
characters: Personagens da mitologia.

Exemplo de requisição:

```
{
  "name": "Mitologia Grega",
  "origin": "Grécia Antiga",
  "period": "aprox. 1200 a.C. – 146 a.C.",
  "summary": "A Mitologia Grega reúne narrativas, deuses e heróis criados para explicar fenômenos da natureza e a vida humana.",
  "characters": [
    {
      "name": "Zeus",
      "symbols": "Raio, águia, carvalho",
      "summary": "Rei dos deuses do Olimpo, governava o céu e os fenômenos atmosféricos."
    },
    {
      "name": "Atena",
      "symbols": "Coruja, oliveira, lança e escudo",
      "summary": "Deusa da sabedoria, da estratégia militar e das artes."
    }
  ]
}
```

#### Respostas:
##### Criado! 201
Caso essa resposta aconteça, uma nova mitologia é criada e adicionada ao banco de dados.

Exemplo de resposta: Mitologia criada certinho.

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro dentro do servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno patrão."
}
```


### - DELETE /mitologias/_id
Esse endpoint é responsável por deletar uma mitologia do banco de dados pelo seu ID.

#### Parâmetros:
id: ID da mitologia a ser deletada.

#### Respostas:
##### Sem Conteúdo! 204 / 200 Ok Delete realizado
Caso essa resposta aconteça, a mitologia foi deletado com sucesso e não há conteúdo para retornar ao cliente.

Exemplo de resposta: Mitologia deletada com sucesso.

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID ou alguma composição da rota fornecida foi requisitada de forma incorreta.

Exemplo de resposta:

```
{
    "error: "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error: "Deu barba."
}
```

### - PUT /mitologias/_id
Esse endpoint é responsável por atualizar as informações de uma mitologia selecionada.

#### Parâmetros:
id: ID da mitologia a ser atualizada.
name: Nome da mitologia.
origin: Origem da mitologia.
period: Período do mitologia.
summary: Resumo da mitologia.
characters: Personagens da mitologia.

Exemplo de requisição:

```
{
  "_id": {
    "$oid": "68da7e3f6f1abf22156ab0cf"
  },
  "name": "Mitologia Grega",
  "origin": "Grécia Antiga",
  "period": "aprox. 1200 a.C. – 146 a.C.",
  "summary": "A Mitologia Grega reúne narrativas, deuses e heróis criados para explicar fenômenos da natureza e a vida humana.",
  "characters": [
    {
      "name": "Icaro",
      "symbols": ["asas"],
      "summary": "Tentou voar pelos ceus"
    },
    {
      "name": "Atena",
      "symbols": ["Coruja", "Oliveira", "Lança", "Escudo"],
      "summary": "Deusa da sabedoria, da estratégia militar e das artes."
    }
  ]
}

```

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, as informações da mitologia foram atualizadas com sucesso.

Exemplo de resposta:

```
{
  "_id": {
    "$oid": "68da7e3f6f1abf22156ab0cf"
  },
  "name": "Mitologia Grega",
  "origin": "Grécia Antiga",
  "period": "aprox. 1200 a.C. – 146 a.C.",
  "summary": "A Mitologia Grega reúne narrativas, deuses e heróis criados para explicar fenômenos da natureza e a vida humana.",
  "characters": [
    {
      "name": "Icaro",
      "symbols": ["asas"],
      "summary": "Tentou voar pelos ceus"
    },
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido ou a requisição contém dados mal construídos.

Exemplo de resposta:

```
{
    "error": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno patrão."
}
```

### - GET /mitologias/_id
Esse endpoint é responsável por retornar as informações de uma mitologia específico pelo seu ID.

#### Parâmetros:
id: ID da mitologia a ser consultada

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber as informações da mitologia solicitada.

Exemplo de resposta:

```
{
  "_id": {
    "$oid": "68da7e3f6f1abf22156ab0cf"
  },
  "name": "Mitologia Grega",
  "origin": "Grécia Antiga",
  "period": "aprox. 1200 a.C. – 146 a.C.",
  "summary": "A Mitologia Grega reúne narrativas, deuses e heróis criados para explicar fenômenos da natureza e a vida humana.",
  "characters": [
    {
      "name": "Icaro",
      "symbols": ["asas"],
      "summary": "Tentou voar pelos ceus"
    },
```

##### Não Encontrado! 404
Caso essa resposta aconteça, significa que a mitologia com o ID fornecido não foi encontrada.

Exemplo de resposta:

```
{
    "error": "Mitologia não encontrada!"
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "error": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno patrão."
}
```
