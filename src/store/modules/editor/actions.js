import axios from 'axios';

export default {
    async getEditorContent(context) {
        context.dispatch('getAssistRules');
        context.dispatch('getConfiguration');
        context.dispatch('getEvent');
        context.dispatch('getEventRules');
        context.dispatch('getSettings');
    },
    async getAssistRules(context) {
        context.dispatch('setDynamicListContent', {
            targetPath: '/game-files/assistRules',
            mutationPath: 'setAssistRules'
        })
    },
    async getConfiguration(context) {
        context.dispatch('setDynamicListContent', {
            targetPath: '/game-files/configuration',
            mutationPath: 'setConfiguration'
        })
    },
    async getEvent(context) {
        context.dispatch('setDynamicListContent', {
            targetPath: '/game-files/event',
            mutationPath: 'setEvent'
        })
    },
    async getEventRules(context) {
        context.dispatch('setDynamicListContent', {
            targetPath: '/game-files/eventRules',
            mutationPath: 'setEventRules'
        })
    },
    async getSettings(context) {
        context.dispatch('setDynamicListContent', {
            targetPath: '/game-files/settings',
            mutationPath: 'setSettings'
        })
    },
    async setDynamicListContent(context, payload) {
        const baseURL = process.env.VUE_APP_API_URL;
        const url = `${baseURL}${payload.targetPath}`;
        const token = localStorage.getItem('token');

        var response = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        context.commit(payload.mutationPath, { list: response.data })
    },
    async selectRacetrack(context, payload) {
        const list = context.rootGetters['editor/event'];

        const idx = list.findIndex(entry => entry.name === 'track')
        let entry = list[idx];
        entry.value = payload.track;
        list[idx] = entry;

        context.commit('setEvent', { list })
    },
    async changeValue(context, payload) {
        let category = payload.category;
        const list = context.rootGetters[`editor/${category}`];

        const idx = list.findIndex(entry => entry.name === payload.name)
        let entry = list[idx];
        entry.value = payload.value;
        list[idx] = entry;

        category = category[0].toUpperCase() + category.substr(1);
        context.commit(`set${category}`, { list })
    },
    async commitChangesToServer(context) {
        //context.dispatch('commitAssistRulesToServer');
        //context.dispatch('commitConfigurationToServer');
        //context.dispatch('commitEventToServer');
        context.dispatch('commitEventRulesToServer');
        context.dispatch('commitSettingsToServer');
    },
    async commitAssistRulesToServer(context) {
        await context.dispatch('pushToServer', {
            category: 'assistRules',
            targetPath: '/game-files/assistRules'
        })
    },
    async commitConfigurationToServer(context) {
        await context.dispatch('pushToServer', {
            category: 'configuration',
            targetPath: '/game-files/configuration'
        })
    },
    async commitEventToServer(context) {
        //TODO IS BROKEN
        await context.dispatch('pushToServer', {
            category: 'event',
            targetPath: '/game-files/event'
        })
    },
    async commitEventRulesToServer(context) {
        await context.dispatch('pushToServer', {
            category: 'eventRules',
            targetPath: '/game-files/eventRules'
        })
    },
    async commitSettingsToServer(context) {
        await context.dispatch('pushToServer', {
            category: 'settings',
            targetPath: '/game-files/settings'
        })
    },
    async pushToServer(context, payload) {
        let category = payload.category;
        let list = context.rootGetters[`editor/${category}`];

        const listAsString = JSON.stringify(list);
        const baseURL = process.env.VUE_APP_API_URL;
        const url = `${baseURL}${payload.targetPath}`;
        const token = localStorage.getItem('token');

        await axios.patch(url, listAsString, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    }
};
