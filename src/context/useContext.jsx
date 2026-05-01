import { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext(null);

const ExpenseProvider = ({ children }) => {
    const [expence, setExpence] = useState("");
    const [value, setValue] = useState();

    const [expences, setExpences] = useState(() => {
        const saved = localStorage.getItem("expences");
        return saved ? JSON.parse(saved) : [];
    });

    // Pro-tip: Keep localStorage in sync whenever expences changes
    useEffect(() => {
        localStorage.setItem("expences", JSON.stringify(expences));
    }, [expences]);

    return (
        /* Note the double braces {{ }} */
        <ExpenseContext.Provider value={{ expence, setExpence, expences, setExpences, value, setValue }}>
            {children}
        </ExpenseContext.Provider>
    );
};

export default ExpenseProvider;