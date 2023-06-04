
export async function verifyLogin(userName, password) {
    try{
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "userName": userName,
                     "password": password
                })
          });

        if (response.ok) {
            const content = await response.json();
            return content;
        } else {
            return null;
        }
    } catch(error) {
        return null;
    }
}
