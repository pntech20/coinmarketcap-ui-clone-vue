// State object
const state = {
    variable1: "",
}

// Getter functions
const getters = {
    getVariable1( state ) {
       return state.varaible1;
    }
}

// Actions 
const actions = {

}
// Mutations
const mutations = {
    SET_VARIABLE_1(state, data) {
       state.varaible1 = data;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}