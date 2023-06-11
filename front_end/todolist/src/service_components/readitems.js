import { getToken } from "./get_token";
import { getUserId } from "./get_userId";

export async function readItem() {
    try{
        const response = await fetch('http://localhost:8000/users/'+ getUserId() +'/items/', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
               'token': getToken()
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
