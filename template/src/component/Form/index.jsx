import { useContext } from "react"
import { DepenseContext } from '../utils/DepenseContext'
import './style.css'

const Form = () => {

    const [state, dispatch] = useContext(DepenseContext)

    const handleChange = (event) => {
        const { value, name } = event.target
        dispatch({ type: name, payload: value })
    }
    const handleSelectChange = (event) => {
        const { value } = event.target
        dispatch({type: 'changeCategorie', payload: value})
    }

    return (
        <>
            <div className="form">
                <div>
                    <input className={"input"} id={"libelle"} type={"text"} value={state.depense.libelle} name={"changeLibelle"} placeholder="Libelle" onChange={handleChange}/>
                </div>
                <div>
                    <input className={"input"} id={"montant"} type={"number"} step={"0.01"} value={state.depense.montant} name={"changeMontant"} placeholder="Montant" onChange={handleChange}/>
                </div>
                <div>
                    <select className="input" id={"categorie"} value={state.depense.categorie} name={"changeCategorie"} onChange={handleSelectChange}>
                        <option value={"Alimentation"}>Alimentation</option>
                        <option value={"Logement"}>Logement</option>
                        <option value={"Transport"}>Transport</option>
                        <option value={"Divertissement"}>Divertissement</option>
                        <option value={"Santé"}>Santé</option>
                        <option value={"Education"}>Education</option>
                        <option value={"Autres"}>Autres</option>
                    </select>
                </div>
                <button className="add" onClick={() => dispatch({ type: 'ajoutDepense' })} >Ajouter</button>
            </div>

        </>
    )
}

export default Form