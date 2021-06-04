export default {
    setEntrylist(state, payload) {
        state.entrylist = payload.list;
    },
    addEntry(state, payload) {
        state.entrylist.push(payload.newEntry);
    }
};
