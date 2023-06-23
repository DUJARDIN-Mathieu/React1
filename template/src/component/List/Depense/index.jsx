
import {useContext} from "react";
import {DepenseContext} from "../../utils/DepenseContext";


function Depense({value}) {

    const [state, dispatch] = useContext(DepenseContext)

    return (
        <>
            <li>
                <div>
                    <div>
                        Categorie: {value.categorie}
                    </div>
                    {value.libelle} : {value.montant}
                    <button onClick={() => dispatch({type: 'removeDepense', payload: value})}>X</button>
                </div>
            </li>
        </>
    )
}

export default Depense