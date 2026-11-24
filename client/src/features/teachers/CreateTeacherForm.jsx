import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

import Button from '../../ui/Button'
import Card from '../../ui/Card'
import Input from '../../ui/Input'
import Select from '../../ui/Select'

import { SUBJECTS } from '../../utils/constants'

function CreateTeacherForm() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <form
            noValidate
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Card className="flex flex-col gap-6 p-8">
                <Input
                    id="name"
                    label="Name"
                    placeholder="Name"
                    error={errors.name}
                    registration={register('name', {
                        required: 'Name is required.',
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
            </Card>

            <div className="flex justify-end gap-4">
                <Button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="border border-primary text-primary hover:bg-gray-200"
                >
                    <ArrowLeftIcon className="size-5" /> Back
                </Button>

                <Button
                    type="submit"
                    className="bg-primary text-white hover:bg-primary-hover"
                >
                    Add Teacher
                </Button>
            </div>
        </form>
    )
}

export default CreateTeacherForm
