const total = {
    totalAlimentation: 0,
    totalTransport: 0,
    totalSante: 0,
    totalLogement: 0,
    totalDivertissement:0,
    totalEducation: 0,
    totalAutres: 0,
    totalFinal: 0
}

const depense = {
    montant: '',
    libelle: '',
    categorie: 'Alimentation'
}

export const initialeState = {
    depenses: [],
    depense,  
    total
}

const reducer = (state,action) => {
    switch(action.type){
        case 'ajoutDepense':

            const depenses = [...state.depenses]
            depenses.push(state.depense)

            const name = 'total' + state.depense.categorie 
            total[name] = parseFloat(total[name]) + (parseFloat(state.depense.montant) / 2)
            total['totalFinal'] = parseFloat(total['totalFinal']) + (parseFloat(state.depense.montant) / 2)

            return {
                depenses,
                depense,
                total
            }

        case 'changeLibelle':
            return {
                ...state,
                depense: {
                    ...state.depense,
                    libelle: action.payload
                }
            }
  
        case 'changeMontant':
            return {
                ...state,
                depense : {
                    ...state.depense,
                    montant: action.payload
                }
            }

        case 'changeCategorie' :
            return {
                ...state,
                depense: {
                    ...state.depense,
                    categorie: action.payload
                }
            }
        
        case 'removeDepense':
            const newDepenses = state.depenses.filter((Depense) => Depense !== action.payload)

            return {
                ...state,
                depenses: newDepenses

            }

        default :
            return state
    }
}

export default reducer