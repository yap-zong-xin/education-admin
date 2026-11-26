import { useNavigate } from 'react-router-dom'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useTeachers } from '../features/teachers/useTeachers'

import Button from '../ui/Button'
import Card from '../ui/Card'
import TeacherTable from '../features/teachers/TeacherTable'
import Spinner from '../ui/Spinner'

function Teachers() {
    const navigate = useNavigate()
    const { isPending, teachers, error } = useTeachers()

    if (isPending) return <Spinner />
    if (error) return <p>{error.message}</p>

    console.log(teachers)

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-extrabold text-[#333333]">
                    Teachers
                </h1>
                {teachers.length > 0 && (
                    <Button
                        className="bg-primary text-white hover:bg-primary-hover"
                        onClick={() => navigate('/teachers/add')}
                    >
                        <PlusIcon className="size-5" />
                        Add Teacher
                    </Button>
                )}
            </div>

            {teachers.length === 0 ? (
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
                <TeacherTable teachers={teachers} />
            )}
        </div>
    )
}

export default Teachers
