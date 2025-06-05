export const isTokenExpired = (token) => {
    if (!token) {
        localStorage.removeItem('auth');
        return true ;
    }
       
    try{
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expiry = payload.exp * 1000;
        if (Date.now() > expiry){
            localStorage.removeItem('auth');
            return true;
        }
    }catch(e){
        console.error('Failed to parse token', e);
        localStorage.removeItem('auth');
        return true;
    }
}   