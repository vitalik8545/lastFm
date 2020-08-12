import {LOADING_ARTIST, SEARCH_TRACKS, UPLOAD_ARTIST, UPLOAD_TRACKS} from "../type";

export const loadTracks = () =>{
    return async (dispatch) => {
        const tracks = await getTracks()

        dispatch({
            type:UPLOAD_TRACKS,
            tracks
        })
    }
}

export const searchTrack = (track) => {
    return async (dispatch) => {
        const tracks = await searchTracks(track)

        dispatch({
            type:SEARCH_TRACKS,
            tracks
        })
    }
}

export const artistGet = (nameArtist) => {
    return async (dispatch) => {
        dispatch({
            type:LOADING_ARTIST
        })

        const artist = await artistGetInfo(nameArtist)



        dispatch({
            type:UPLOAD_ARTIST,
            artist
        })
    }
}

export const artistGetInfo = async (artistName) => {
    const jsonData = (
        await get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+artistName+'&api_key=c4e62b8b7c81d95db241b6894344882a&format=json')
    ).artist;
    let artist = {};

    console.log('request artist.getinfo');

    artist.name = jsonData.name;
    artist.img = jsonData.image[3]['#text'];
    artist.tags = []

    let jsonTags = jsonData.tags.tag

    for (let i = 0; i < jsonTags.length; i++) {
        artist.tags.push(jsonTags[i].name);
    }

    artist.description = jsonData.bio.content

    return artist;
};

export const searchTracks = async (track) => {
    const jsonData = (
        await get('http://ws.audioscrobbler.com/2.0/?method=track.search&track='+track+'&api_key=c4e62b8b7c81d95db241b6894344882a&format=json')
    ).results.trackmatches.track;
    let tracks = [];

    console.log('request searchTracks');

    for (let i = 0; i < jsonData.length; i++) {
        const track = {
            id: i+1,
            track: jsonData[i].name,
            artist: jsonData[i].artist
        };
        tracks.push(track);
    }

    return tracks;
};

export const getTracks = async () => {
    const jsonData = (
        await get('http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=c4e62b8b7c81d95db241b6894344882a&format=json')
    ).tracks.track;
    let tracks = [];

    console.log('request tracks');

    for (let i = 0; i < jsonData.length; i++) {
        const track = {
            id: i+1,
            track: jsonData[i].name,
            artist: jsonData[i].artist.name,
            urlArtist: jsonData[i].artist.url,
            rank: jsonData[i]['@attr'].rank
        };
        tracks.push(track);
    }

    return tracks;
};

export const get = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
    });
    return await response.json();
};
