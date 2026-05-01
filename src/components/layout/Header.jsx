import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
    { id: 1, name: "Tracker", path: "/" },
    { id: 3, name: "Expence(Charts)", path: "/expence" }
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='bg-cyan-300 relative'>
            <div className="flex justify-between items-center p-4 h-16 max-w-7xl mx-auto">
                <h1 className='text-2xl font-bold'>Expense Tracker</h1>

                <div className='md:hidden'>
                    {isOpen ?
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <X />
                        </button>
                        :
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <Menu />
                        </button>
                    }
                </div>

                <ul className={`hidden md:flex gap-6 font-medium`}>
                    {navLinks.map(li => (
                        <Link className='hover:bg-cyan-400 hover:text-[#454545] p-1 rounded'
                            to={li.path}
                            key={li.id}
                        >
                            <li>{li.name}</li>
                        </Link>
                    ))}
                </ul>


            </div>
            <div className={`${isOpen ? "block" : "hidden"} border-t-2 border-cyan-600`}>
                <ul className='flex flex-col p-4 space-y-2'>
                    {navLinks.map(li => (
                        <Link className='hover:bg-cyan-400 hover:text-[#454545] p-1 rounded'
                            to={li.path}
                            key={li.id}
                        >
                            <li>{li.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Header