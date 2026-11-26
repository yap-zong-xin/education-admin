import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'

import AppLayout from './ui/AppLayout'
import Teachers from './pages/Teachers'
import Classes from './pages/Classes'
import AddTeacher from './pages/AddTeacher'

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />

            <Toaster
                position="top-center"
                gutter={12}
                toastOptions={{
                    duration: 3000,
                    style: {
                        fontSize: '14px',
                        padding: '12px 20px',
                    },
                }}
            />

            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route
                            index
                            element={<Navigate replace to="/classes" />}
                        />
                        <Route path="classes" element={<Classes />} />
                        <Route path="teachers" element={<Teachers />} />
                        <Route path="teachers/add" element={<AddTeacher />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
})
