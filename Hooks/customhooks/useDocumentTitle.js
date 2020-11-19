import React ,{useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `count - ${count}`
    }, [count])
}

export default useDocumentTitle


// what is custom hooks is that,

// taking the hooks separately and passing that hooks in the custom document or the jsx file 
