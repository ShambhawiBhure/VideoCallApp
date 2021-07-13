const MessageListReducer = (state, action) => {
    let draftState = [...state];  //just cloning the state
    switch (action.type) {
        case "addMessage":
            return [...draftState, action.payload];
        default:
            return state;
    }
};

export default MessageListReducer;