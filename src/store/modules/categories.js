export default {
    state: {
        categories: [],
    },
    actions: {
        async fetchCategories(ctx) {
            const res = await fetch('http://localhost:3000/categories')
            const categories = await res.json()

            ctx.commit('updateCategories', categories)
        },
        async updateCategoryTotal({ commit }, {sum, category}) {
            const res = await fetch('http://localhost:3000/categories/' + category.id, {
                method: 'PUT',
                body: JSON.stringify({
                    id: category.id,
                    title: category.title,
                    total: +category.total + (+sum)
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                }
            })
        }
    },
    mutations: {
        updateCategories(state, categories) {
            state.categories = categories;
        }
    },
    getters: {
        getAllCategories(state) {
            return state.categories;
        }
    },
}