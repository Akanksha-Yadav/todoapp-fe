import { getUserId } from "./getcookie";

export async function createItem(title) {
    try{
        const response = await fetch('http://localhost:8000/'+ getUserId() +'/items/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
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
