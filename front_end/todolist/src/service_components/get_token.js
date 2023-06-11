export function getToken() {
    var cookie = document.cookie
    var token="" ,turn=0
    for(var i=0 ;i<cookie.length; i++)
    {
        if (turn==1)
        {
            token+=cookie[i];
        }
        if(cookie[i] != ':' && turn == 0)
        {
            continue;
        }
        turn=1;
    }
    return token
}
