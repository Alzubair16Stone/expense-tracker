import { useContext, useEffect } from 'react'
import { ExpenseContext } from '../../context/useContext'
import { format, getUnixTime } from 'date-fns';

const FormExpense = ({ buttonAddOrUpdate }) => {
    const { setExpense, expense, setValue, value, expenses, setExpenses, isUpdate, updateExpense } = useContext(ExpenseContext);
    const defaultDate = new Date();
    const addExpense = (e) => {
        if (expense === "") {
            return alert("Please add an Expense")
        } else if (value == "") {
            return alert("Please add an Value")
        }
        e.preventDefault();
        console.log(expense, value);

        const newExpense = {
            id: getUnixTime(defaultDate),
            name: expense,
            value: value,
            date: format(defaultDate, "dd-MM-yyy")
        }

        setExpenses([...expenses, newExpense]);
        setValue("");
        setExpense("")
    }



    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    return (
        <div>
            <h2 className='text-2xl font-bold border-l-4 border-[#00000058] pl-2 my-2'>Add Expense</h2>
            <form className='flex flex-col gap-2'>
                <input
                    required
                    className='bg-[#0000001a] outline-none rounded font-bold p-3 w-100 '
                    value={expense} onChange={(e) => setExpense(e.target.value)}
                    type="text"
                    placeholder='Expense'
                />
                <input
                    required
                    className='bg-[#0000001a] outline-none rounded font-bold p-3 w-100 '
                    value={value} onChange={(e) => setValue(e.target.value)}
                    type="number"
                    placeholder='Value'
                />
                <button
                    className='bg-[#0000001a] p-2 w-100 font-bold rounded mt-2 border hover:border-2 transition border-[#06bbafa5]'
                    onClick={isUpdate ? updateExpense : addExpense}
                >
                    {buttonAddOrUpdate}
                </button>
                <button
                    className={`bg-[#0000001a] p-2 w-100 font-bold rounded  transition delay-150 duration-300 ease-in-out border-[#06bbafa5] border hover:border-2 ${expense == "" || value == "" ? "opacity-80 cursor-wait" : ""}`}
                    onClick={() => {
                        setExpense("");
                        setValue("")
                    }}

                >
                    Reset
                </button>
            </form>
        </div>
    )
}

export default FormExpense