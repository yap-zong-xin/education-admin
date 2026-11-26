import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { SUBJECTS } from '../../utils/constants'
import { useCreateTeacher } from './useCreateTeacher'

import Button from '../../ui/Button'
import Card from '../../ui/Card'
import Input from '../../ui/Input'
import Select from '../../ui/Select'
import Spinner from '../../ui/Spinner'
import toast from 'react-hot-toast'

function CreateTeacherForm() {
    const navigate = useNavigate()
    const { createTeacher, isCreating } = useCreateTeacher()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm()

    function onSubmit(data) {
        createTeacher(data, {
            onSuccess: () => {
                navigate('/teachers')
            },

            onError: (error) => {
                if (error.status === 409) {
                    setError('email', {
                        type: 'server',
                        message: error.message,
                    })

                    return
                }

                toast.error(error.message)
            },
        })
    }

    return (
        <form
            noValidate
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Card className="p-8">
                <fieldset disabled={isCreating} className="flex flex-col gap-6">
                    <Input
                        id="name"
                        label="Name"
                        placeholder="Name"
                        error={errors.name}
                        registration={register('name', {
                            required: 'Name is required.',
                            maxLength: {
                                value: 100,
                                message: 'Name must not exceed 100 characters.',
                            },
                            validate: (value) =>
                                value.trim() !== '' || 'Name is required.',
                        })}
                    />

                    <Select
                        id="subject"
                        label="Subject"
                        placeholder="Select a subject"
                        options={SUBJECTS.map((subject) => ({
                            label: subject,
                            value: subject,
                        }))}
                        error={errors.subject}
                        registration={register('subject', {
                            required: 'Please select a subject.',
                            validate: (value) =>
                                SUBJECTS.includes(value) || 'Invalid subject.',
                        })}
                    />

                    <Input
                        id="email"
                        label="Email Address"
                        type="email"
                        placeholder="Email address"
                        error={errors.email}
                        registration={register('email', {
                            required: 'Email address is required.',
                            maxLength: {
                                value: 120,
                                message:
                                    'Email address must not exceed 120 characters.',
                            },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'This email address is invalid.',
                            },
                        })}
                    />

                    <Input
                        id="contactNumber"
                        label="Work Contact Number"
                        type="tel"
                        placeholder="Work contact number"
                        error={errors.contactNumber}
                        registration={register('contactNumber', {
                            required: 'Work contact number is required.',
                            pattern: {
                                value: /^\d{8}$/,
                                message: 'This work contact number is invalid.',
                            },
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
                    {isCreating ? 'Adding...' : 'Add Teacher'}
                </Button>
            </div>
        </form>
    )
}

export default CreateTeacherForm
