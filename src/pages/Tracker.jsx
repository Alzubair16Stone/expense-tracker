import { useContext, useEffect, useState } from 'react'
import ExpensePie from '../components/charts/circle'
import { ExpenseContext } from '../context/useContext'

const Tracker = () => {

    const { setExpence, expence, setValue, value, expences, setExpences } = useContext(ExpenseContext);

    const addExpence = (e) => {
        e.preventDefault();
        console.log(expence, value);

        const newExpence = {
            name: expence,
            value: value
        }

        setExpences([...expences, newExpence]);
        setValue("");
        setExpence("")
    }

    useEffect(() => {
        localStorage.setItem("expences", JSON.stringify(expences));
    }, [expences]);

    return (
        <div className='flex justify-between [770px]:flex-col px-20 w-100vh items-center my-10'>
            <div>
                <h2 className='text-2xl font-bold border-l-4 border-[#00000058] pl-2 my-2'>Add Expense</h2>
                <form className='flex flex-col gap-2'>
                    <input required className='bg-[#0000001a] outline-none rounded font-bold p-3 w-100 ' value={expence} onChange={(e) => setExpence(e.target.value)} type="text" placeholder='Expense' />
                    <input required className='bg-[#0000001a] outline-none rounded font-bold p-3 w-100 ' value={value} onChange={(e) => setValue(e.target.value)} type="number" placeholder='Value' />
                    <button className='bg-[#0000001a] p-2 w-100 font-bold rounded mt-2' onClick={addExpence} >Add</button>
                    <button className='bg-[#0000001a] p-2 w-100 font-bold rounded' >Reset</button>
                </form>
            </div>
            <div>
                <ExpensePie />
            </div>
        </div>
    )
}

export default Tracker