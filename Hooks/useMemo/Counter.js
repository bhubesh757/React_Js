import React , {useState , useMemo} from 'react'

function Counter() {

    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)

    const increementOne = () => {
        setcounterOne(counterOne + 1)
    }

    const increementTwo = () => {
        setcounterTwo(counterTwo + 1)
    }

    // const isEven = () => {
    //     return counterOne % 2 == 0
    // }


    // Using the usememo  used for user optimization

    const isEven = useMemo(() => {
        let i = 0
        while (i < 1000000) i++
        return counterOne % 2 == 0
    }, [counterOne])

    return (
        <div>
            <button onClick = {increementOne}>
                count One - {counterOne}
            </button>
            <span>
                {
                    isEven ? 'Even' : 'Odd'
                }
            </span>
            <button onClick = {increementTwo}>
                count Two - {counterTwo}
            </button>
        </div>
    )
}

export default Counter
