import { useNavigate } from 'react-router-dom'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useClasses } from '../features/classes/useClasses'

import Button from '../ui/Button'
import Card from '../ui/Card'
import ClassTable from '../features/classes/ClassTable'
import Spinner from '../ui/Spinner'

function Classes() {
    const navigate = useNavigate()
    const { isPending, classes, error } = useClasses()

    if (isPending) return <Spinner />
    if (error) return <p>{error.message}</p>

    console.log(classes)

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-extrabold text-[#333333]">
                    Classes
                </h1>
                {classes.length > 0 && (
                    <Button
                        className="bg-primary text-white hover:bg-primary-hover"
                        onClick={() => navigate('/classes/add')}
                    >
                        <PlusIcon className="size-5" />
                        Add Class
                    </Button>
                )}
            </div>

            {classes.length === 0 ? (
                <Card className="flex min-h-160 flex-col items-center justify-center gap-6">
                    <p className="text-lg font-extrabold">
                        There are no existing classes yet.
                    </p>
                    <Button
                        className="bg-primary text-white hover:bg-primary-hover"
                        onClick={() => navigate('/classes/add')}
                    >
                        <PlusIcon className="size-5" />
                        Add Class
                    </Button>
                </Card>
            ) : (
                <ClassTable classes={classes} />
            )}
        </div>
    )
}

export default Classes
