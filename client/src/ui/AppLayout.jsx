import { Outlet } from 'react-router-dom'
import Header from './Header'

function AppLayout() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            <main className="mx-auto w-full max-w-7xl px-6 py-8">
                <Outlet />
            </main>
        </div>
    )
}

export default AppLayout
