export async function deleteItem(item_id) {
    try{
        const response = await fetch('http://localhost:8000/items/'+ item_id +"/", {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
           
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
