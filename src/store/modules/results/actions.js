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
    }
};
