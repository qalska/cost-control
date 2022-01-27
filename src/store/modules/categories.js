export default {
    state: {
        categories: [],
    },
    actions: {
        async fetchCategories(ctx) {
            const res = await fetch('http://localhost:3000/categories');
            const categories = await res.json();

            ctx.commit('updateCategories', categories);
        },
        async updateCategoryTotal(ctx, {sum, category}) {
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
            const updatedCategory = await res.json();
            console.log(updatedCategory)

            ctx.commit('updateCategoriyTotal', updatedCategory)
        }
    },
    mutations: {
        updateCategories(state, categories) {
            state.categories = categories;
        },
        updateCategoriyTotal(state, updatedCategory) {
            state.categories.splice(updatedCategory.id, 1, updatedCategory);
        }
    },
    getters: {
        allCategories(state) {
            return state.categories;
        },
        categoriesTitles(state) {
            const titles = [];

            state.categories.forEach(item => {
                titles.push(item.title);
            })
            return titles;
        },
        categoriesTotals(state) {
            const totals = [];

            state.categories.forEach(item => {
                totals.push(item.total);
            })
            return totals;
        }
    },
}