
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

const removeFromLoclaStore = (id) => {
  const apps = getLocalStored();

  if (!apps.includes(id)) {
 return false;
  }

  const remaining = apps.filter(appId => appId !== id);
  localStorage.setItem('apps', JSON.stringify(remaining));
  return true;
};
export {getLocalStored, addToLoclaStorage, removeFromLoclaStore}
