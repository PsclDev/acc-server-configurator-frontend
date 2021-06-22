import axios from 'axios';

export default {
    async loadResults(context) {
        const baseURL = process.env.VUE_APP_API_URL;
        const url = `${baseURL}/results`;
        const token = localStorage.getItem('token');

        var response = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        context.commit('setResults', { list: response.data })
    },
    async loadCars(context, payload) {
        const resultId = payload.id;
        const baseURL = process.env.VUE_APP_API_URL;
        const url = `${baseURL}/results/${resultId}/cars`;
        const token = localStorage.getItem('token');

        var response = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        let resultList = context.rootGetters['results/getResults'];
        const resultIdx = resultList.findIndex(entry => entry.id === resultId)
        const result = resultList[resultIdx];
        result.cars = response.data;
        resultList[resultIdx] = result;
        context.commit('setResults', { list: resultList })
    }
};
