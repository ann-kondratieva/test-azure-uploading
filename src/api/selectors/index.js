export const createLoadingSelector = (action) => (state) => state.apiCalls[action] || false;
