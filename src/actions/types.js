const createAsyncActionType = (type) => ({
    START: `${type}_START`,
    RESOLVED: `${type}_RESOLVED`,
    ERROR: `${type}_ERROR`,
    actionType: type
});

export const GET_CUNTRIES = createAsyncActionType('GET_CUNTRIES');

