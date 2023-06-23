import { createContext, useReducer } from 'react'
import reducer, {initialeState} from '../reducer'

export const DepenseContext = createContext()

const DepenseContextProvide = ({children}) => {
    const [state,dispatch] = useReducer(reducer, initialeState)

    return (
        <DepenseContext.Provider value={[state, dispatch]}>
            {children}
        </DepenseContext.Provider>            
    )
}

export default DepenseContextProvide