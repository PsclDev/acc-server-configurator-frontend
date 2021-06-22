export default {
    getResults(state) {
        return state.results;
    },
    getCars: (state) => (id) => {
        return state.results.filter((result) => result.id === id)[0].cars;
    }
};
