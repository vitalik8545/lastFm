import React,{useEffect} from 'react'
import {Text, Image, ScrollView, StyleSheet, View, ActivityIndicator} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {artistGet} from "../store/actions/actions";

export const TrackScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const artist = useSelector(state=>state.post.artist)
    const loadingArtist = useSelector(state=>state.post.loadingArtist)
    const nameArtist = navigation.getParam('nameArtist')

    useEffect(() => {
        dispatch(artistGet(nameArtist))
    }, [dispatch]);

    if(loadingArtist){
        return(
            <View style={styles.center}>
                <ActivityIndicator size={50} color='black'/>
            </View>
        )
    }

    return(
        <ScrollView>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri:artist.img}}/>
            </View>
            <Text style={styles.textArtist}>{artist.name}</Text>
            <Text style={styles.textTags}>Tags:{artist.tags.map(tag=>'#'+tag+' ')}</Text>
            <Text style={styles.textDescription}>{artist.description}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    img:{
        width:150,
        height:150
    },
    imgContainer:{
      alignItems:'center',
        margin:10
    },
    textArtist:{
        textAlign:'center',
        fontSize:20,
        marginBottom:10
    },
    textTags:{
        marginBottom:10
    },
    textDescription:{

    }
})
