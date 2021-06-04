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
    },
    async addNewEntry(context, payload) {
        console.log(payload);
        const newEntry = JSON.parse(`{"playerID": ["${payload.steamId}"]}`);
        newEntry.username = "username will be shown after commit"

        if (payload.raceNumber > 0)
            newEntry.raceNumber = payload.raceNumber;

        if (payload.serveradmin)
            newEntry.isServerAdmin = true;

        context.commit('addEntry', { newEntry })
    },
    async removeEntry(context, payload) {
        let list = context.rootGetters['entryList/getEntryList'];
        const idx = list.findIndex(entry => parseInt(entry.playerID[0]) === parseInt(payload.steamId))
        list.splice(idx, 1);

        context.commit('setEntrylist', { list: list })
    },
    async updateEntry(context, payload) {
        let list = context.rootGetters['entryList/getEntryList'];

        const idx = list.findIndex(entry => parseInt(entry.playerID[0]) === parseInt(payload.steamId))
        let entry = list[idx];
        entry.isServerAdmin = payload.isServerAdmin;

        list[idx] = entry;
        context.commit('setEntrylist', { list: list })
    },
    async commitChangesToServer(context) {
        const list = context.rootGetters['entryList/getEntryList'];
        const listAsString = JSON.stringify(list);
        const baseURL = process.env.VUE_APP_API_URL;
        const url = `${baseURL}/entrylist`;
        const token = localStorage.getItem('token');

        await axios.patch(url, listAsString, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        return context.dispatch('loadEntrylist');
    }
};
