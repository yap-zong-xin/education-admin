const API_URL = import.meta.env.VITE_API_URL

export async function getClasses() {
    const response = await fetch(`${API_URL}/classes`)
    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error || 'Failed to retrieve classes.')
    }

    return result.data
}
