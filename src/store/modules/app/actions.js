export default {
    async setActiveTab(context, payload) {
        return context.commit('setNavigation', {
            activeTab: payload.activeTab
        })
    },
};
