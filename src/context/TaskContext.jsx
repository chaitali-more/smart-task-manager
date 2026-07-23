import { createContext, useContext } from "react";

export const TaskContext = createContext(null);

// custom hook
export const useTaskDetails = () =>{
    const taskContext = useContext(TaskContext);
    if(!taskContext){
        throw new Error("useTaskDetails must be inside TaskContextProvider")
    }
    return taskContext;
}

// Provider
export const TaskContextProvider = ({children, value}) =>{
    return(
        <TaskContext.Provider value = {value}>
            {children}
        </TaskContext.Provider>
    )
}