import { getUserId } from "./getcookie";

export async function readItem() {
    try{
        const response = await fetch('http://localhost:8000/users/'+ getUserId() +'/items/', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
           
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
