import React,{useState} from 'react'
import {View,TextInput,StyleSheet,FlatList} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {useDispatch, useSelector} from "react-redux";
import {TrackSearch} from "../components/TrackSearch";
import {searchTrack} from "../store/actions/actions";

export const SearchTrackScreen = () => {
    const dispatch = useDispatch()
    const [track,setTrack] = useState(null)
    const searchSongs = useSelector(state=>state.post.searchSongs)

    const searchSongsHandler = () => {
        if(track!==null)
            dispatch(searchTrack(track))
    }

    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    onChangeText={(value)=>setTrack(value)}
                    text={track}
                    placeholder='Search string'
                    style={{...styles.fontSizeCard,...styles.textInput}}
                />
                <Ionicons name="ios-search" onPress={searchSongsHandler} size={24} color="black" />
            </View>

            <FlatList
                style={styles.flatList}
                data={searchSongs}
                keyExtractor={track=>track.id}
                renderItem={({item})=>(
                    <TrackSearch track={item.track} artist={item.artist} id={item.id}/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatList:{
        marginTop:30
    },
    searchContainer:{
        flexDirection:'row',
        height:20,
        marginTop:10,
        paddingHorizontal:10
    },
    textInput:{
        width:'90%',
        borderBottomWidth:1,
        borderBottomColor:'silver',
        height:20,
        marginRight:5
    },
    fontSizeCard:{
        fontSize:15
    }
})
