const total = {
    totalAlimentation: '0',
    totalTransport: '0',
    totalSante: '0',
    totalLogement: '0',
    totalDivertissement:'0',
    totalEducation: '0',
    totalAutres: '0'
}

const depense = {
    montant: '',
    libelle: '',
    categorie: 'Alimentation'
}

export const initialeState = {
    depenses: [],
    depense,
    totals : total
}

const reducer = (state,action) => {
    switch(action.type){
        case 'ajoutDepense':

            const depenses = [...state.depenses]
            depenses.push(state.depense)
            const total = [...state.totals]
            depense.categorie === 'Alimentation' ? 
                total.totalAlimentation = parseFloat(total.totalAlimentation) + parseFloat(depense.montant) :
            depense.categorie === 'Logement' ? 
                total.totalLogement = parseFloat(total.totalLogement) + parseFloat(depense.montant) :
            depense.categorie === 'Transport' ? 
                total.totalTransport = parseFloat(total.totalTransport) + parseFloat(depense.montant) :
            depense.categorie === 'Divertissement' ? 
                total.totalDivertissement = parseFloat(total.totalDivertissement) + parseFloat(depense.montant) :
            depense.categorie === 'Santé' ? 
                total.totalSante = parseFloat(total.totalSante) + parseFloat(depense.montant) :
            depense.categorie === 'Education' ? 
                total.totalEducation = parseFloat(total.totalEducation) + parseFloat(depense.montant) :           
            total.totalAutres = parseFloat(total.totalAutres) + parseFloat(depense.montant) 
            
            return {
                depenses,
                depense,
                totals: total
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
            const newDepenses = state.Depenses.filter((Depense) => Depense !== action.payload)

            return {
                ...state,
                depenses: newDepenses

            }

        default :
            return state
    }
}

export default reducer