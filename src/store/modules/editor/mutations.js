export default {
    setAssistRules(state, payload) {
        state.assistRulesList = payload.list;
    },
    setConfiguration(state, payload) {
        state.configurationList = payload.list;
    },
    setEvent(state, payload) {
        state.eventList = payload.list;
    },
    setEventRules(state, payload) {
        state.eventRulesList = payload.list;
    },
    setSettings(state, payload) {
        state.settingsList = payload.list;
    }
};
