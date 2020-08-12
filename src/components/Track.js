import React from 'react'
import {View,Text,StyleSheet,Linking} from "react-native";

export const Track = ({track,artist,urlArtist,rank,onOpen}) => {
    return(
        <View style={styles.container}>
            <Text style={{...styles.fontSizeCard,...styles.textRank}} numberOfLines={1} ellipsizeMode='tail'>{rank}</Text>
            <Text style={{...styles.fontSizeCard,...styles.textTrack}} numberOfLines={1} ellipsizeMode='tail'>{track}</Text>
            <Text style={{...styles.fontSizeCard,...styles.textArtist}} numberOfLines={1} ellipsizeMode='tail'
                    onPress={()=>{
                        onOpen(artist)
                    }}
            >{artist}</Text>
            <Text style={{...styles.fontSizeCard,...styles.textUrlArtist}} numberOfLines={1} ellipsizeMode='tail'
                  onPress={()=>{
                      Linking.openURL(urlArtist)
                  }
                  }>Page artist</Text>
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
        width:120,
    },
    textArtist:{
        width:120,
    },
    textUrlArtist:{
        width:100,
    }
})
