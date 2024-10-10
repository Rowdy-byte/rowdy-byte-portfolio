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
    { id: 1, name: "Minions", level: 15, cost: 3, type: 'Troop', rarity: 'Common', img: '/Minions_card_render.webp' },
    { id: 2, name: "Mini P.E.K.K.A", level: 15, cost: 4, type: 'Troop', rarity: 'Rare', img: '/Mini_P.E.K.K.A._card_render.webp' },
    { id: 3, name: "Guards", level: 15, cost: 3, type: 'Troop', rarity: 'Epic', img: '/Guards_1.webp' },
    { id: 4, name: "Magic Archer", level: 15, cost: 4, type: 'Troop', rarity: 'Legendary', img: '/Magic_Archer_2.webp' },
    { id: 5, name: "Archer Queen", level: 15, cost: 5, type: 'Troop', rarity: 'Champion', img: '/Archer_Queen_card_render.webp' },
    { id: 6, name: "Balloon", level: 15, cost: 6, type: 'Troop', rarity: 'Epic', img: '/Balloon_card_render.webp' },
    { id: 7, name: "Archers", level: 15, cost: 3, type: 'Troop', rarity: 'Common', img: '/Archers_card_render.webp' },
    { id: 8, name: "Arrows", level: 15, cost: 3, type: 'Spell', rarity: 'Common', img: '/Arrows_card_render.webp' },
    { id: 9, name: "Golem", level: 15, cost: 8, type: 'Troop', rarity: 'Epic', img: '/Golem_card_render.webp' },
    { id: 10, name: "Bandit", level: 15, cost: 3, type: 'Troop', rarity: 'Legendary', img: '/Bandit_card_render.webp' },
    { id: 11, name: "Electro Wizard", level: 15, cost: 4, type: 'Troop', rarity: 'Legendary', img: '/Electro_Wizard_card_render.webp' },
    { id: 12, name: "Flying Machine", level: 15, cost: 4, type: 'Troop', rarity: 'Rare', img: '/Flying_Machine_card_render.webp' },
    { id: 13, name: "3 Musketeers", level: 15, cost: 9, type: 'Troop', rarity: 'Rare', img: '/Three_Musketeers_card_render.webp' },
    { id: 14, name: "Night Witch", level: 15, cost: 4, type: 'Troop', rarity: 'Legendary', img: '/Night_Witch_1.webp' },
]

