import { createContext, useContext, useState } from 'react'
import AuthContext from '../auth'

export const GlobalStoreContext = createContext({});

function GlobalStoreContextProvider(props) {
    const { auth } = useContext(AuthContext);
    const [store, setStore] = useState({
        idItemPairs: [],
        currentItem: null,
    });


    return (
        <GlobalStoreContext.Provider value={{
            store
        }}>
            {props.children}
        </GlobalStoreContext.Provider>
    );
}

export default GlobalStoreContext;
export { GlobalStoreContextProvider };