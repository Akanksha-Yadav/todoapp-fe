import { getToken } from "./get_token";
import { getUserId } from "./get_userId";

export async function createItem(title) {
    try{
        const response = await fetch('http://localhost:8000/'+ getUserId() +'/items/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'token': getToken()
            },
            body: JSON.stringify(
                {
                    "title": title,
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
