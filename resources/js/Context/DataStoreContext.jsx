import React, { createContext, useContext } from "react";
import { useState } from "react";

const DataStoreContext = createContext();

export function DataStoreProvider({ children }) {
    const [modalWinnerIsOpen, setModalWinnerIsOpen] = useState(false);
    const [winner, setWinner] = useState("");

    return (
        <DataStoreContext.Provider
            value={{
                modalWinnerIsOpen,
                setModalWinnerIsOpen,
                winner,
                setWinner,
            }}
        >
            {children}
        </DataStoreContext.Provider>
    );
}

export function useDataStore() {
    return useContext(DataStoreContext);
}
