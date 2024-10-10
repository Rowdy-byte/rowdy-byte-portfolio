export type CardType = {
    id?: number
    name?: string
    level?: number
    cost?: number
    type?: string
    rarity?: string
    img?: string
}

export const cards: CardType[] = [
    { id: 1, name: "Archer Queen", level: 15, cost: 5, type: 'Troop', rarity: 'Champion', img: '/Archer_Queen_card_render.webp' },
    { id: 2, name: "Night Witch", level: 15, cost: 4, type: 'Troop', rarity: 'Legendary', img: '/Night_Witch_2.webp' },

]

