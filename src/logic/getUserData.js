export const getUserData = () => {
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');
    return { token, userId }
};