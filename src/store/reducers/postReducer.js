import {LOADING_ARTIST, SEARCH_TRACKS, UPLOAD_ARTIST, UPLOAD_TRACKS} from "../type";

const initialState = {
    topSongs:[],
    searchSongs:[],
    artist: {},
    loading:true,
    loadingArtist:true
}

export const postReducer = (state=initialState,action) => {
    switch (action.type){
        case UPLOAD_TRACKS:
            return {
                ...state,
                topSongs:action.tracks,
                loading:false
            }
        case SEARCH_TRACKS:
            return {
                ...state,
                searchSongs:action.tracks
            }
        case UPLOAD_ARTIST:
            return {
                ...state,
                artist:action.artist,
                loadingArtist:false
            }
        case LOADING_ARTIST:
            return {
                ...state,
                loadingArtist:true
            }
        default:
            return state
    }
}
