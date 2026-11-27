import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { createClass as createClassApi } from '../../services/apiClasses'

export function useCreateClass() {
    const queryClient = useQueryClient()

    const { mutate: createClass, isPending: isCreating } = useMutation({
        mutationFn: createClassApi,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['classes'],
            })

            toast.success('Class added successfully.')
        },
    })

    return { createClass, isCreating }
}
