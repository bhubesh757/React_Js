import React, {useEffect} from 'react'

function useEffectswithcleanup() {

    useEffect(() => {
        const clicked = () => console.log('window clciked')
        window.addEventListener('click' , clicked)
        return () => {
            console.log('Removed');
            window.removeEventListener('click' , clicked)
        }
    }, [])
    return (
        <div>
            when you click the window you will find a message logged to the console
        </div>
    )
}

export default useEffectswithcleanup
