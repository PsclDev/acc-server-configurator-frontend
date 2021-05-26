export default {
    setToken(state, payload) {
        state.token = payload.token;
    },
    setUser(state, payload) {
        state.username = payload.username
        state.permissions = payload.permissions
    }
};
