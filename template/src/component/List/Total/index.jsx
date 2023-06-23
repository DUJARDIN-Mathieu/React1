import React from 'react'

const Total = ({value}) => {

    const [state, dispatch] = useContext(DepenseContext)

    return (
        <>
            <li>
                {/* {value.totalAlimentation} */}
            </li>
        </>
    )
}

export default Total