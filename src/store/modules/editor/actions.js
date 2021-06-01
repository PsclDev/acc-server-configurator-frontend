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
        context.dispatch('setListContent', {
            targetPath: '/game-files/assistRules',
            mutationPath: 'setAssistRules'
        })
    },
    async getConfiguration(context) {
        context.dispatch('setListContent', {
            targetPath: '/game-files/configuration',
            mutationPath: 'setConfiguration'
        })
    },
    async getEvent(context) {
        context.dispatch('setListContent', {
            targetPath: '/game-files/event',
            mutationPath: 'setEvent'
        })
    },
    async getEventRules(context) {
        context.dispatch('setListContent', {
            targetPath: '/game-files/eventRules',
            mutationPath: 'setEventRules'
        })
    },
    async getSettings(context) {
        context.dispatch('setListContent', {
            targetPath: '/game-files/settings',
            mutationPath: 'setSettings'
        })
    },
    async setListContent(context, payload) {
        const baseURL = process.env.VUE_APP_API_URL;
        const url = `${baseURL}${payload.targetPath}`;
        const token = localStorage.getItem('token');

        var response = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        context.commit(payload.mutationPath, { list: response.data })
    }
};
