import { OrderActions } from '../reducers/orderReducer'
import type { MenuItem } from '../types/types'

type MenuItemProps = {
    item: MenuItem
    dispatch: React.Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
    const { name, price } = item
    return (
        <button
            className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
            onClick={() => dispatch({ type: 'add-item', payload: { item } })}
        >
            <p>{name}</p>
            <p className=" font-black"> ${price} </p>
        </button>
    )
}
