export default {
    state: {
        costs: [],
    },
    actions: {
        async fetchCosts(ctx) {
            const res = await fetch('http://localhost:3000/costs')
            const costs = await res.json()

            ctx.commit('updateCosts', costs)
        },
    },
    mutations: {
        updateCosts(state, costs) {
            state.costs = costs;
        }
    },
    getters: {
        getAllCosts(state) {
            return state.costs.reverse();
        }
    },
}