
export const getLocalStored = () => {
    const stored = localStorage.getItem('apps');

    return stored ? JSON.parse(stored) : [];
}

export const addToLoclaStorage = (id) => {
    const apps = getLocalStored();

    if(!apps.includes(id) => {
        apps.push(id);
        localStorage
    })
}