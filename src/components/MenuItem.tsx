import type { MenuItem } from '../types/types'

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
    const { name, price } = item
    return (
        <button
            className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
            onClick={() => addItem(item)}
        >
            <p>{name}</p>
            <p className=" font-black"> ${price} </p>
        </button>
    )
}
