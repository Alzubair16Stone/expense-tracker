import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ExpenseContext } from '../../context/useContext';
import { useContext } from 'react';

const data = [
    { name: 'Rent', value: 1200, date: "2026-4-15" },
    { name: 'Food', value: 400, date: "2024-7-12" },
    { name: 'Entertainment', value: 150, date: "2020-2-16" },
    { name: 'Utilities', value: 250, date: "2021-2-21" },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ExpensePie = () => {

    const { expenses } = useContext(ExpenseContext);

    console.log(expenses.length);



    return (
        <div className={` w-60 h-100`} >
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={expenses.map(item => ({
                            ...item,
                            value: Number(item.value)
                        }))}
                        cx="50%" // Center X
                        cy="50%" // Center Y
                        innerRadius={60} // Set this to 0 for a solid circle
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {expenses.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExpensePie;