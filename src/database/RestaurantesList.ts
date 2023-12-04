import { Restaurante } from "../interfaces/Restaurante";

export const RestaurantesList: Restaurante[] = [
    {
        id: 1,
        nome: "Thiago's Burguer",
        descricao: "Descrição do restaurante 1",
        endereco: "Rua 1, 123",
        telefone: "Telefone do restaurante 1",
        horario: "00:00",
        imagem: "Imagem do restaurante 1",
        categoria: "Fast Food",
        nota: 5,
        cidade: {
            id: 3,
            nome: "Florianópolis",
            estado: "SC"
        },
        itemsCardapio: [
            {
                id: 1,
                nome: "Item 1 do cardápio do restaurante 1",
                descricao: "Descrição do item 1 do cardápio do restaurante 1",
                imagem: "Imagem do item 1 do cardápio do restaurante 1",
                preco: 10
            },
            {
                id: 2,
                nome: "Item 2 do cardápio do restaurante 1",
                descricao: "Descrição do item 2 do cardápio do restaurante 1",
                imagem: "Imagem do item 2 do cardápio do restaurante 1",
                preco: 20
            },
            {
                id: 3,
                nome: "Item 3 do cardápio do restaurante 1",
                descricao: "Descrição do item 3 do cardápio do restaurante 1",
                imagem: "Imagem do item 3 do cardápio do restaurante 1",
                preco: 30
            },
            {
                id: 4,
                nome: "Item 4 do cardápio do restaurante 1",
                descricao: "Descrição do item 4 do cardápio do restaurante 1",
                imagem: "Imagem do item 4 do cardápio do restaurante 1",
                preco: 30
            }
        ]
    },
    {
        id: 2,
        nome: "Gaúcho do Zé",
        descricao: "Descrição do restaurante 2",
        endereco: "rua 2, 123",
        telefone: "Telefone do restaurante 2",
        horario: "03:00",
        imagem: "Imagem do restaurante 2",
        categoria: "Churrascaria",
        nota: 4,
        cidade: {
            id: 2,
            nome: "Tubarão",
            estado: "SC"
        },
        itemsCardapio: [
            {
                id: 1,
                nome: "Item 1 do cardápio do restaurante 2",
                descricao: "Descrição do item 1 do cardápio do restaurante 2",
                imagem: "Imagem do item 1 do cardápio do restaurante 2",
                preco: 10
            },
            {
                id: 2,
                nome: "Item 2 do cardápio do restaurante 2",
                descricao: "Descrição do item 2 do cardápio do restaurante 2",
                imagem: "Imagem do item 2 do cardápio do restaurante 2",
                preco: 20
            },
            {
                id: 3,
                nome: "Item 3 do cardápio do restaurante 2",
                descricao: "Descrição do item 3 do cardápio do restaurante 2",
                imagem: "Imagem do item 3 do cardápio do restaurante 2",
                preco: 30
            }
        ]
    },
    {
        id: 3,
        nome: "Mc Donalds Criciúma",
        descricao: "Descrição do restaurante 2",
        endereco: "rua 2, 123",
        telefone: "Telefone do restaurante 2",
        horario: "03:00",
        imagem: "Imagem do restaurante 2",
        categoria: "Fast Food",
        nota: 4,
        cidade: {
            id: 2,
            nome: "Tubarão",
            estado: "SC"
        },
    },
    {
        id: 4,
        nome: "Spoletto",
        descricao: "Descrição do restaurante 2",
        endereco: "rua 2, 123",
        telefone: "Telefone do restaurante 2",
        horario: "03:00",
        imagem: "Imagem do restaurante 2",
        categoria: "Restaurante",
        nota: 4,
        cidade: {
            id: 1,
            nome: "Criciúma",
            estado: "SC"
        },
        itemsCardapio: [
            {
                id: 1,
                nome: "Item 1 do cardápio do restaurante 2",
                descricao: "Descrição do item 1 do cardápio do restaurante 2",
                imagem: "Imagem do item 1 do cardápio do restaurante 2",
                preco: 10
            },
            {
                id: 2,
                nome: "Item 2 do cardápio do restaurante 2",
                descricao: "Descrição do item 2 do cardápio do restaurante 2",
                imagem: "Imagem do item 2 do cardápio do restaurante 2",
                preco: 20
            },
            {
                id: 3,
                nome: "Item 3 do cardápio do restaurante 2",
                descricao: "Descrição do item 3 do cardápio do restaurante 2",
                imagem: "Imagem do item 3 do cardápio do restaurante 2",
                preco: 30
            }
        ]
    },
    {
        id: 5,
        nome: "Daniel Lanches",
        descricao: "Descrição do restaurante 2",
        endereco: "rua 2, 123",
        telefone: "Telefone do restaurante 2",
        horario: "03:00",
        imagem: "Imagem do restaurante 2",
        categoria: "Fast Food",
        nota: 4,
        cidade: {
            id: 1,
            nome: "Criciúma",
            estado: "SC"
        },
        itemsCardapio: [
            {
                id: 1,
                nome: "Item 1 do cardápio do restaurante 2",
                descricao: "Descrição do item 1 do cardápio do restaurante 2",
                imagem: "Imagem do item 1 do cardápio do restaurante 2",
                preco: 10
            },
            {
                id: 2,
                nome: "Item 2 do cardápio do restaurante 2",
                descricao: "Descrição do item 2 do cardápio do restaurante 2",
                imagem: "Imagem do item 2 do cardápio do restaurante 2",
                preco: 20
            },
            {
                id: 3,
                nome: "Item 3 do cardápio do restaurante 2",
                descricao: "Descrição do item 3 do cardápio do restaurante 2",
                imagem: "Imagem do item 3 do cardápio do restaurante 2",
                preco: 30
            }
        ]
    }
];
