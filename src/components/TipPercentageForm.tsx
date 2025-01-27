import { tipOptions } from '../helpers/tipOption'

type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}

export default function TipPercentageForm({
    setTip,
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
                            onChange={(e) => setTip(+e.target.value)}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
