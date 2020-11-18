import React ,{useCallback , useState} from 'react'

function useCallBackStarter() {

    const [age, setage] = useState(5)
    const handleClick = () => setage(age + 1)

    return (
            
        <div>
            <div>
                Today i am {age} years of Age!
            </div>
            <pre> - click the Button Below</pre>
            <button onClick = { handleClick }>
                Get older!
            </button>
        </div>
    )
}

export default useCallBackStarter
