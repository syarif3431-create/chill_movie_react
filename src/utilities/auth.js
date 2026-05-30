export const getUsers = () => {
    try {
        return JSON.parse(localStorage.getItem("users")) || [];
    } catch {
        return [];
    }
};
export const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
};
export const setCurrentUser = (username) => {
    localStorage.setItem("currentUser", username);
};
export const getCurrentUser = () => {
    return localStorage.getItem("currentUser");
};
export const logout = () => {
    localStorage.removeItem("currentUser");
};