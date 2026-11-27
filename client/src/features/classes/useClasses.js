import { useQuery } from '@tanstack/react-query'
import { getClasses } from '../../services/apiClasses'

export function useClasses() {
    const {
        isPending,
        data: classes,
        error,
    } = useQuery({
        queryKey: ['classes'],
        queryFn: getClasses,
    })

    return { isPending, classes, error }
}
