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
        async postCost({ commit }, payload) {
            fetch('http://localhost:3000/costs', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => {
                console.log( response.json() );
                commit('addCost', payload);
            })
        },
        async deleteCost({ commit }, id) {
            fetch('http://localhost:3000/costs/' + id, {
                method: 'DELETE',
            })
        }
    },
    mutations: {
        updateCosts(state, costs) {
            state.costs = costs;
        },
        addCost(state, cost) {
            state.costs.push(cost);
        },
    },
    getters: {
        getAllCosts(state) {
            return state.costs.slice().reverse();
        },
        getLastCostId(state) {
            return state.costs[state.costs.length - 1].id + 1;
        }
    },
}