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
    async loadItem(context, payload) {
        const resultId = payload.id;
        const obj = payload.obj;
        const targetPath = payload.targetURL;
        const baseURL = process.env.VUE_APP_API_URL;
        const url = `${baseURL}/results/${targetPath}`;
        const token = localStorage.getItem('token');

        var response = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        let resultList = context.rootGetters['results/getResults'];
        const resultIdx = resultList.findIndex(entry => entry.id === resultId)
        const result = resultList[resultIdx];
        result[obj] = response.data;
        resultList[resultIdx] = result;
        context.commit('setResults', { list: resultList })

    },
    async loadCars(context, payload) {
        payload.targetURL = `${payload.id}/cars`;
        payload.obj = 'cars';
        await context.dispatch('loadItem',
            payload)
    },
    async loadLaps(context, payload) {
        payload.targetURL = `${payload.id}/${payload.carId}/laps`;
        payload.obj = 'laps';
        await context.dispatch('loadItem',
            payload)
    },
    async loadPenalties(context, payload) {
        payload.targetURL = `${payload.id}/${payload.carId}/penalties`;
        payload.obj = 'penalties';
        await context.dispatch('loadItem',
            payload)
    }
};
