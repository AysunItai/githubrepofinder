

export function getData(username) {
    return async dispatch=>{
        dispatch({type:"FETCH_REPOS_START"});
        try{
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await response.json();
            dispatch({type:"FETCH_REPOS_SUCCESS",payload:data});
        }catch(error){
            dispatch({type:"FETCH_REPOS_ERROR",error:error.message});
        }
    }
}