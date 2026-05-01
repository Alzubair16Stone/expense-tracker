import { useContext, useEffect, useState } from 'react'
import ExpensePie from '../components/charts/circle'
import { ExpenseContext } from '../context/useContext';
import FormExpense from '../components/ui/FormExpense';

const Tracker = () => {

    const { expenses } = useContext(ExpenseContext);


    return (
        <div className={`flex justify-${expenses.length == 0 ? "center" : "between"} [770px]:flex-col px-20 w-100vh items-center my-10`}>
            <FormExpense buttonAddOrUpdate={"Add"} />
            <div className={`${expenses.length == 0 ? "hidden" : "block"}`}>
                <ExpensePie />
            </div>
        </div>
    )
}

export default Tracker