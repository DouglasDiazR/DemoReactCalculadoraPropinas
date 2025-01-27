import { useState } from 'react'
import type { MenuItem, OrderItem } from '../types/types'

export const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        const itemExists = order.find((orderItem) => orderItem.id === item.id)
        if (itemExists) {
            const updateOrder = order.map((orderItem) =>
                orderItem.id === item.id
                    ? { ...orderItem, quantity: itemExists.quantity + 1 }
                    : orderItem,
            )
            console.log('Ya Existe', updateOrder)
            setOrder(updateOrder)
        } else {
            console.log('agregando', item)
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: OrderItem['id']) => {
        console.log('Eliminando', id)
        setOrder(order.filter((item) => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return { addItem, order, removeItem, tip, setTip, placeOrder }
}
