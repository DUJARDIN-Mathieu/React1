import Depense from "./Depense/index";
import {useContext} from "react";
import {DepenseContext} from "../utils/DepenseContext";
// import Total from "./Total";

function List() {

    const [state] = useContext(DepenseContext)

    return (
        <>
            <ul>
                {
                    state.depenses.map((depense, key) => <Depense key={key} value={depense} />)
                }
            </ul>
            _____________________________
            {/* <ul>
                {
                    state.depenses.map((total, key) => <Total key={key} value={total} />)
                }
            </ul> */}
        </>
        
    )
}

export default List