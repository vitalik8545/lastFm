import React,{useEffect} from 'react'
import {View,FlatList,StyleSheet,ActivityIndicator} from 'react-native'
import { Feather } from '@expo/vector-icons';
import {Track} from "../components/Track";
import {useDispatch, useSelector} from "react-redux";
import {loadTracks} from "../store/actions/actions";

export const MainScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const loading = useSelector((state)=>state.post.loading)
    const tracks = useSelector((state)=>state.post.topSongs)

    useEffect(() => {
        dispatch(loadTracks())
    }, [dispatch]);

    const opOpenHandler = (nameArtist) => {
        navigation.navigate('Track',{nameArtist:nameArtist})
    }

    if(loading){
        return(
            <View style={styles.center}>
                <ActivityIndicator size={50} color='black'/>
            </View>
        )
    }

    return(
        <View>
            <FlatList
                data={tracks}
                keyExtractor={(track)=>track.id}
                renderItem={({item})=>(
                    <Track onOpen={opOpenHandler} rank={item.rank} artist={item.artist} track={item.track} urlArtist={item.urlArtist}/>
                )}
            />
        </View>
    )
}

MainScreen.navigationOptions = ({navigation}) => {
    return {
        headerTitle: 'Top songs',
        headerRight: ()=>(
            <Feather
                name="search"
                size={24}
                color="black"
                style={styles.iconSearch}
                onPress={()=>{navigation.navigate('Search')}}
            />
        )
    }
}

const styles = StyleSheet.create({
    iconSearch:{
        marginRight:10
    },
    center:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})
