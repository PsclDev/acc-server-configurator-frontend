import axios from 'axios';

export default {
    async loadEntrylist(context) {
        const baseURL = process.env.VUE_APP_API_URL;
        const url = `${baseURL}/entrylist`;
        const token = localStorage.getItem('token');

        var response = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        context.commit('setEntrylist', { list: response.data })
    }
};
