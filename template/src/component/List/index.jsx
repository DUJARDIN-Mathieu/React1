import Depense from "./Depense/index";
import {useContext} from "react";
import {DepenseContext} from "../utils/DepenseContext";
import './style.css'
// import Total from "./Total";

// const handleSelectCategory = ({event}) => {
    
// }

function List() {

    const [state] = useContext(DepenseContext)

    return (
        <div className={"history__head"}>
            
            <div className={"depenseHistories"}>
                {
                    state.depenses.map((depense, key) => <Depense key={key} value={depense} />)
                }
            </div>
            
            {/* <select id={"categorie"} value={state.depense.categorie} name={"changeCategorie"} onChange={handleSelectCategory}>
                <option value={"Alimentation"}>Alimentation</option>
                <option value={"Logement"}>Logement</option>
                <option value={"Transport"}>Transport</option>
                <option value={"Divertissement"}>Divertissement</option>
                <option value={"Santé"}>Santé</option>
                <option value={"Education"}>Education</option>
                <option value={"Autres"}>Autres</option>
            </select>
            <div>
                {
                    state.depenses.map((depense, key) => <Depense key={key} value={depense} />).filter((e) => e.categorie === {categorie})
                }
            </div> */}
            <div className={"total__header"}>
                <div className={"total__head"}>
                    Dépense totale à ce jour :
                </div>

                <div className={"total__body"}>
                    {Object.entries(state.total).map(([key, value]) => (
                    <div key={key}>
                        {key.replace('total','')}: {value} €
                    </div>
                    ))}
                </div>
            </div>
            
        </div>
        
    )
}

export default List