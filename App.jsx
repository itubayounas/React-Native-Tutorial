import { View} from 'react-native'
import React from 'react'
// import Loader from './src/components/Loader'
import PracticeApi from './src/components/PracticeApi'

const App = () => {
  return (
    <View style={{ flex: 1 }} >
      {/* <Loader /> */}
      <PracticeApi />

    </View>
  )
}



export default App