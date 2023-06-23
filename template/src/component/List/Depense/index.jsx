
import {useContext} from "react";
import {DepenseContext} from "../../utils/DepenseContext";


function Depense({value}) {

    const [state, dispatch] = useContext(DepenceContext)

    return (
        <>
            <li>
                
                <button onClick={() => dispatch({type: 'removeDepense', payload: value})}>X</button>
            </li>
        </>
    )
}

export default Depense