import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Button, FlatList,TouchableOpacity } from 'react-native'
import {Context as TrackContext} from '../context/TrackContext'
import {ListItem} from 'react-native-elements'

const TrackListScreen = ({navigation}) => {
  const { state, fetchTracks } = useContext(TrackContext)

  useEffect (() => {
    navigation.addListener('focus',() => {
      fetchTracks();
    })
  },[])

  return (
    <View>
    <FlatList
      data={state}
      keyExtractor={item => item._id}
      renderItem={({item}) => {
        return (
        <TouchableOpacity onPress={() => navigation.navigate('TrackDetail',{_id: item._id})}>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>
                {item.name}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity> 
        )
      }}
      
    />
    </View>
  )
}



const styles = StyleSheet.create({})
 
export default TrackListScreen

