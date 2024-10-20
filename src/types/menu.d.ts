interface Item {
    name: {
        en: string,
        ar: string
    },
    price: number,
    description?: string
}

interface Menu { 
    category: string,
    items: Item[],
    image: string,
    icon?: React.JSX
}