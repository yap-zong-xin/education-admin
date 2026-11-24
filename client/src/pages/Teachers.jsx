import { useNavigate } from 'react-router-dom'
import { PlusIcon } from '@heroicons/react/24/solid'

import Button from '../ui/Button'
import Card from '../ui/Card'

const initialTeacher = []

function Teachers() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-extrabold text-[#333333]">Teachers</h1>
            {initialTeacher.length === 0 ? (
                <Card className="flex min-h-160 flex-col items-center justify-center gap-6">
                    <p className="text-lg font-extrabold">
                        There are no existing teachers yet.
                    </p>
                    <Button
                        className="bg-primary text-white hover:bg-primary-hover"
                        onClick={() => navigate('/teachers/add')}
                    >
                        <PlusIcon className="size-5" />
                        Add Teacher
                    </Button>
                </Card>
            ) : (
                <div>have</div>
            )}
        </div>
    )
}

export default Teachers
