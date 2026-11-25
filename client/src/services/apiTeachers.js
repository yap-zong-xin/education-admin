const API_URL = import.meta.env.VITE_API_URL

export async function getTeachers() {
    const response = await fetch(`${API_URL}/teachers`)
    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error || 'Failed to retrieve teachers.')
    }

    return result.data
}

export async function createTeacher(teacher) {
    const response = await fetch(`${API_URL}/teachers`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(teacher),
    })

    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.error || 'Failed to register teacher.')
    }

    return result.data
}
