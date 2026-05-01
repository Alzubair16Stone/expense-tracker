import React, { useContext, useState } from 'react'
import { ExpenseContext } from '../context/useContext'
import FormExpense from '../components/ui/FormExpense';
import ExpensePie from '../components/charts/circle';

const ExpenseWithChart = () => {

    const { expense, setExpense, expenses, setExpenses, value, setValue, deleteExpense, isUpdate, setIsUpdate } = useContext(ExpenseContext)


    const selectTheForm = (item) => {
        setIsUpdate(true);
        deleteExpense(item.id);
        setExpense(item.name)
        setValue(item.value);
    }

    return (
        <div className='flex justify-between items-center px-20'>
            <div className='flex flex-col justify-between my-10 items-center min-h-100'>
                <FormExpense buttonAddOrUpdate={isUpdate ? "Update" : "Add"} />
                <ul className='flex flex-col gap-3 my-6'>
                    {expenses.map((expense, index) => (
                        <li className={`flex justify-between items-center gap-20 bg-[#e2b7b7] max-w-200 py-2 px-10 rounded`} key={index}>
                            Name: {expense.name} <br />
                            Value: {Number(expense.value)}<br />
                            Date: {expense.date}
                            <div className={`flex flex-col gap-2`}>
                                <button onClick={() => deleteExpense(expense.id)} className='bg-red-600 text-white p-0.5 cursor-pointer rounded hover:bg-red-800'>Delete</button>
                                <button onClick={() => selectTheForm(expense)} className='bg-blue-600 text-white p-0.5 cursor-pointer rounded hover:bg-blue-800'>Update</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ExpensePie />
            </div>
        </div>
    )
}

export default ExpenseWithChart;