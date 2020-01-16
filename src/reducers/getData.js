const initalState = {
    imageData: [],
    isLoading: false,
    isError: false,
    errorMsg: ""
};

const imageData = (state = initalState, action) => {
    switch (action.type) {
        case "REQUEST_IMAGES_DATA":
            return {
                ...state,
                isLoading: true,
                isError: false,
                errorMsg: ""
            };
        case "RECEIVE_IMAGES_DATA":
            return {
                ...state,
                imageData: action.imageData,
                isLoading: false,
                isError: action.isError,
                errorMsg: action.errorMsg
            };
        default:
            return state;
    }
}

export default imageData;
