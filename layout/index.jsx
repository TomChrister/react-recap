import { Link, Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <div className='min-h-screen flex flex-col'>
            <header className='p-1'>
                <nav className='flex flex-row gap-2'>
                    <Link to={'/'} className='border p-2 rounded-sm'>Home</Link>
                    <Link to={'/login'} className='border p-2 rounded-sm'>Login</Link>
                </nav>
            </header>
            <main className='grow'>
                <Outlet/>
            </main>
            <footer>2025</footer>
        </div>
    )
}