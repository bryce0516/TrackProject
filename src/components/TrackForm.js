import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { Input, Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'
const TrackForm = () => {
  const {
    state:{ name, recording, locations},
    startRecording,
     stopRecording,
      changeName
    } = useContext(LocationContext)
  const [saveTrack] = useSaveTrack();
  return (
    <View>
      <Spacer />
        <Input 
          placeholder="Enter name"
          onChangeText={changeName}  
          value={name}
          />

      {recording ? (
        <Button title="Stop Recording" onPress={stopRecording}/>
      )

      :
      (<Button 
        title="Start Recording"
        onPress={startRecording}
      />)

      }
      <Spacer />
      {
        !recording && locations.length
        ? <Button title="Save Recording" onPress={saveTrack} />
        : null
      }

    </View>
  )
}

export default TrackForm