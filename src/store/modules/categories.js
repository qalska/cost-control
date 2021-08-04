export default {
    state: {
        categories: [],
    },
    actions: {
        async fetchCategories(ctx) {
            const res = await fetch('http://localhost:3000/categories')
            const categories = await res.json()

            ctx.commit('updateCategories', categories)
        }
    },
    mutations: {
        updateCategories(state, categories) {
            state.categories = categories;
        },
    },
    getters: {
        getAllCategoriesTitle(state) {
            let categoriesTitles = [];
            state.categories.forEach( e => {
                categoriesTitles.push(e.title);
            })

            return categoriesTitles;
        }
    },
}