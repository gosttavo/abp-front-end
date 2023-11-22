export interface Restaurante {
    id: number,
    nome: string,
    descricao: string,
    endereco: string,
    telefone: string,
    horario: string,
    imagem: string,
    categoria: string,
    nota: number,
    itemsCardapio: ItemsCardapio[]
}

export interface RestaurantesContextProps {
    restaurantes: Restaurante[],
    setRestaurantes: (restaurantes?: Restaurante[]) => void
}