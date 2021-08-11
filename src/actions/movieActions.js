export const DELETE_MOVIE = "DELETE_MOVIE";
export const APP_TITLE = 'APP_TITLE'

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export function appTitle() {
    return {type: APP_TITLE};
}

