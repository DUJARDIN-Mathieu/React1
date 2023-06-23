import Depense from "./Depense/index";
import {useContext} from "react";
import {DepenseContext} from "../utils/DepenseContext";


function List() {

    const [state] = useContext(DepenseContext)

    return (
        <ul>
            {
                state.depenses.map((depense, key) => <Depense key={key} value={depense} />)
            }
        </ul>
    )
}

export default List