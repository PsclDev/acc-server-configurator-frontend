export default {
    userPermissions(state) {
        return state.permissions;
    },
    token(state) {
        return state.token;
    },
    isAuthenticated(state) {
        return !!state.token;
    },
    didAutoLog(state) {
        return state.didAutoLog;
    }
};
