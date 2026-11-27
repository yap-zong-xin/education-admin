import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { CLASS_LEVELS } from '../../utils/constants'
import { useTeachers } from '../teachers/useTeachers'
import { useCreateClass } from './useCreateClass'

import Button from '../../ui/Button'
import Card from '../../ui/Card'
import Input from '../../ui/Input'
import Select from '../../ui/Select'
import Spinner from '../../ui/Spinner'
import toast from 'react-hot-toast'

function CreateClassForm() {
    const navigate = useNavigate()
    const { teachers, isPending, error } = useTeachers()
    const { createClass, isCreating } = useCreateClass()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm()

    function onSubmit(data) {
        createClass(data, {
            onSuccess: () => {
                navigate('/classes')
            },

            onError: (error) => {
                if (error.status === 409 || error.status === 404) {
                    setError('teacherEmail', {
                        type: 'server',
                        message: error.message,
                    })

                    return
                }

                toast.error(error.message)
            },
        })
    }

    if (isPending)
        return (
            <div className="flex min-h-160 items-center justify-center">
                <Spinner />
            </div>
        )

    if (error) return <p>{error.message}</p>

    return (
        <form
            noValidate
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Card className="p-8">
                <fieldset disabled={isCreating} className="flex flex-col gap-6">
                    <Select
                        id="level"
                        label="Class Level"
                        placeholder="Select a level"
                        options={CLASS_LEVELS.map((level) => ({
                            label: level,
                            value: level,
                        }))}
                        error={errors.level}
                        registration={register('level', {
                            required: 'Please select a level.',
                            validate: (value) =>
                                CLASS_LEVELS.includes(value) ||
                                'Invalid level.',
                        })}
                    />

                    <Input
                        id="name"
                        label="Class Name"
                        placeholder="Class Name"
                        error={errors.name}
                        registration={register('name', {
                            required: 'Class name is required.',
                            maxLength: {
                                value: 100,
                                message:
                                    'Class name must not exceed 100 characters.',
                            },
                            validate: (value) =>
                                value.trim() !== '' ||
                                'Class name is required.',
                        })}
                    />

                    <Select
                        id="teacherEmail"
                        label="Form Teacher"
                        placeholder="Assign a form teacher"
                        options={teachers.map((teacher) => ({
                            label: teacher.name,
                            value: teacher.email,
                        }))}
                        error={errors.teacherEmail}
                        registration={register('teacherEmail', {
                            required: 'Please select a form teacher.',
                            validate: (value) =>
                                teachers.some(
                                    (teacher) => teacher.email === value
                                ) || 'Invalid form teacher.',
                        })}
                    />
                </fieldset>
            </Card>

            <div className="flex justify-end gap-4">
                <Button
                    type="button"
                    onClick={() => navigate(-1)}
                    disabled={isCreating}
                    className="border border-primary text-primary hover:bg-gray-200"
                >
                    <ArrowLeftIcon className="size-5" /> Back
                </Button>

                <Button
                    type="submit"
                    disabled={isCreating}
                    className="bg-primary text-white hover:bg-primary-hover"
                >
                    {isCreating && <Spinner size="sm" className="text-white" />}
                    {isCreating ? 'Adding...' : 'Add Class'}
                </Button>
            </div>
        </form>
    )
}

export default CreateClassForm
