const API_URL = import.meta.env.VITE_API_URL

export async function getClasses() {
    const response = await fetch(`${API_URL}/classes`)
    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error || 'Failed to retrieve classes.')
    }

    return result.data
}

export async function createClass(classData) {
    const response = await fetch(`${API_URL}/classes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(classData),
    })

    const result = await response.json()

    if (!response.ok) {
        const error = new Error(result.error || 'Failed to create class.')
        error.status = response.status
        throw error
    }

    return result.data
}
