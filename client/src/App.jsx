import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import AppLayout from './ui/AppLayout'
import Teachers from './pages/Teachers'
import Classes from './pages/Classes'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<Navigate replace to="/classes" />} />
                    <Route path="classes" element={<Classes />} />
                    <Route path="teachers" element={<Teachers />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
