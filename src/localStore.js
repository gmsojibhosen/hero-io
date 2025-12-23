
const getLocalStored = () => {
    const stored = localStorage.getItem('apps');

    return stored ? JSON.parse(stored) : [];
}

 const addToLoclaStorage = (id) => {
    const apps = getLocalStored();

    if(!apps.includes(id))  {
        apps.push(id);
        localStorage.setItem('apps',JSON.stringify(apps))
        return true
    }
    return false

        
    
};

export {getLocalStored, addToLoclaStorage}