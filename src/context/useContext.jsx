import { format, getUnixTime } from "date-fns";
import { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext(null);

const ExpenseProvider = ({ children }) => {
    const [expense, setExpense] = useState("");
    const [value, setValue] = useState();
    const [isUpdate, setIsUpdate] = useState(false);
    const defaultDate = new Date();

    const [expenses, setExpenses] = useState(() => {
        const saved = localStorage.getItem("expenses");
        return saved ? JSON.parse(saved) : [];
    });


    const deleteExpense = (id) => {
        // 'prevExpenses' is guaranteed to be the latest state
        console.log(id);


        setExpenses(prevExpenses => prevExpenses.filter(item => item.id !== id));
    }

    const updateExpense = (e) => {

        const newExpense = {
            id: getUnixTime(defaultDate),
            name: expense,
            value: value,
            date: format(defaultDate, "dd-MM-yyy")
        }

        setExpenses([...expenses, newExpense]);

    }

    // Pro-tip: Keep localStorage in sync whenever expences changes
    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    return (
        /* Note the double braces {{ }} */
        <ExpenseContext.Provider value={{ expense, setExpense, expenses, setExpenses, value, setValue, isUpdate, setIsUpdate, deleteExpense, updateExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
};

export default ExpenseProvider;