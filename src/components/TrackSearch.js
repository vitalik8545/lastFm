import React from 'react'
import {View,Text,StyleSheet} from "react-native";

export const TrackSearch = ({id,track,artist}) => {
    return(
        <View style={styles.container}>
            <Text style={{...styles.fontSizeCard,...styles.textRank}} numberOfLines={1} ellipsizeMode='tail'>{id}</Text>
            <Text style={{...styles.fontSizeCard,...styles.textTrack}} numberOfLines={1} ellipsizeMode='tail'>{track}</Text>
            <Text style={{...styles.fontSizeCard,...styles.textArtist}} numberOfLines={1} ellipsizeMode='tail'>{artist}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        marginLeft:5,
        marginRight:10,
        marginTop:10,
        borderBottomWidth:0.5,
        borderBottomColor:'silver',
        paddingBottom:5
    },
    fontSizeCard:{
        fontSize:15
    },
    textRank:{
        width:30,
    },
    textTrack:{
        width:150,
    },
    textArtist:{
        width:150,
    }
})
