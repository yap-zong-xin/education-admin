import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTeacher as createTeacherApi } from '../../services/apiTeachers'

export function useCreateTeacher() {
    const queryClient = useQueryClient()

    const {
        mutate: createTeacher,
        isPending: isCreating,
        error,
    } = useMutation({
        mutationFn: createTeacherApi,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['teachers'],
            })
        },
    })

    return { createTeacher, isCreating, error }
}
