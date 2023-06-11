export function getUserId() {
    var cookie = document.cookie
    var userId=""
    for(var i=0 ;i<cookie.length; i++)
    {
         if(cookie[i] == ':')
         {
            break;
         }
         userId+=cookie[i];
    }
    return userId
}
