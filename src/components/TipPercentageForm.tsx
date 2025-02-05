import { tipOptions } from '../helpers/tipOption'
import { OrderActions } from '../reducers/orderReducer'

type TipPercentageFormProps = {
    dispatch: React.Dispatch<OrderActions>
    tip: number
}

export default function TipPercentageForm({
    dispatch,
    tip,
}: TipPercentageFormProps) {
    return (
        <div>
            <h3 className=" font-black text-2xl">Propina: </h3>
            <form>
                {tipOptions.map((tipOption) => (
                    <div className=" flex gap-2" key={tipOption.id}>
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            checked={tipOption.value === tip}
                            onChange={(e) =>
                                dispatch({
                                    type: 'add-tip',
                                    payload: { value: +e.target.value },
                                })
                            }
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
