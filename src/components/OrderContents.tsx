import { formatCurrency } from '../helpers/formatCurrency'
import { OrderActions } from '../reducers/orderReducer'
import type { OrderItem } from '../types/types'
type OrderItemProps = {
    order: OrderItem[]
    dispatch: React.Dispatch<OrderActions>
}
export default function OrderContents({ order, dispatch }: OrderItemProps) {
    return (
        <div>
            <h2 className=" font-black text-4xl"> Consumo</h2>
            <div className=" space-y-3 mt-10">
                {
                    <>
                        {order.map((orderItem) => {
                            return (
                                <div
                                    key={orderItem.id}
                                    className=" flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                                >
                                    <div>
                                        <p className=" text-lg">
                                            {orderItem.name} -{' '}
                                            {formatCurrency(orderItem.price)}
                                        </p>
                                        <p className=" font-black">
                                            Cantidad: {orderItem.quantity} -{' '}
                                            {formatCurrency(
                                                orderItem.price *
                                                    orderItem.quantity,
                                            )}
                                        </p>
                                    </div>
                                    <button
                                        className=" bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                        onClick={() =>
                                            dispatch({
                                                type: 'remove-item',
                                                payload: { id: orderItem.id },
                                            })
                                        }
                                    >
                                        X
                                    </button>
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        </div>
    )
}
