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
    { id: 3, name: "Monk", level: 15, cost: 4, type: 'Troop', rarity: 'Champion', img: '/Monk_card_render.webp' },
    { id: 4, name: "Prince", level: 15, cost: 5, type: 'Troop', rarity: 'Epic', img: '/Prince_3.webp' },
    { id: 5, name: "Goblins", level: 15, cost: 2, type: 'Troop', rarity: 'Common', img: '/Goblins_Full_Body.webp' },
    { id: 6, name: "Rascals", level: 15, cost: 5, type: 'Troop', rarity: 'Common', img: '/Rascals_1.webp' },
    { id: 7, name: "Goblin Barrel", level: 15, cost: 3, type: 'Troop', rarity: 'Epic', img: '/Goblin_Barrel_card_render.webp' },
    { id: 8, name: "Baby Dragon", level: 15, cost: 4, type: 'Troop', rarity: 'Epic', img: '/Baby_Dragon_card_render.webp' },

]

