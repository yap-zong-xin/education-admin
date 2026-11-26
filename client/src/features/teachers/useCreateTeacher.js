import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { createTeacher as createTeacherApi } from '../../services/apiTeachers'

export function useCreateTeacher() {
    const queryClient = useQueryClient()

    const { mutate: createTeacher, isPending: isCreating } = useMutation({
        mutationFn: createTeacherApi,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['teachers'],
            })

            toast.success('Teacher added successfully.')
        },
    })

    return { createTeacher, isCreating }
}
