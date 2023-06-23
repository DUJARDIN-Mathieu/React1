
import {useContext} from "react";
import {DepenseContext} from "../../utils/DepenseContext";


function Depense({value}) {

    const [state, dispatch] = useContext(DepenseContext)

    return (
        <>
            <div className="depenseHistory">
                <div>
                    <div className={"card category__header"}>
                        {value.categorie}
                    </div>
                    <div className={"card category__body"}>
                        <span className="card libelle">{value.libelle}</span> : {value.montant}
                        
                    </div>
                    <div className={"button__delete"}>

                            <button className={"delete"} onClick={() => dispatch({type: 'removeDepense', payload: value})}>X</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Depense