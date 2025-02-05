import { MenuItem, OrderItem } from '../types/types'

export type OrderActions =
    | { type: 'add-item'; payload: { item: MenuItem } }
    | { type: 'remove-item'; payload: { id: MenuItem['id'] } }
    | { type: 'add-tip'; payload: { value: number } }
    | { type: 'place-order' }

export type OrderState = {
    order: OrderItem[]
    tip: number
}

export const initialOrder = (): OrderItem[] => {
    const localStorageOrder = localStorage.getItem('order')
    return localStorageOrder ? JSON.parse(localStorageOrder) : []
}

export const initialTip = (): number => {
    const localStorageTip = localStorage.getItem('tip')
    return localStorageTip ? JSON.parse(localStorageTip) : 0
}

export const intialState = {
    order: initialOrder(),
    tip: initialTip(),
}

export const orderReduce = (
    state: OrderState = intialState,
    action: OrderActions,
) => {
    if (action.type === 'add-item') {
        console.log('desde el reduce', state)

        const itemExists = state.order.find(
            (item) => item.id === action.payload.item.id,
        )
        let updatedOrder: OrderItem[] = []
        if (itemExists) {
            updatedOrder = state.order.map((item) =>
                item.id === action.payload.item.id
                    ? { ...item, quantity: itemExists.quantity + 1 }
                    : item,
            )
        } else {
            const newItem: OrderItem = { ...action.payload.item, quantity: 1 }
            updatedOrder = [...state.order, newItem]
        }

        return {
            ...state,
            order: updatedOrder,
        }
    }
    if (action.type === 'remove-item') {
        let updatedOrder: OrderItem[] = []
        updatedOrder = state.order.filter(
            (item) => item.id !== action.payload.id,
        )
        return {
            ...state,
            order: updatedOrder,
        }
    }
    if (action.type === 'add-tip') {
        const tip = action.payload.value
        return {
            ...state,
            tip,
        }
    }
    if (action.type === 'place-order') {
        return {
            ...state,
            order: [],
            tip: 0,
        }
    }
    return state
}
