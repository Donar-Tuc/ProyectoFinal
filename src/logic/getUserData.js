export const getUserData = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    
    return { token, userId };
};
