const MAIN_URL = "https://daw11.arenadaw.com.es/api/"

export async function login(user){
    try {
    let response = await fetch(`${MAIN_URL}/login`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
    })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
}

        return response.json();
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
}
