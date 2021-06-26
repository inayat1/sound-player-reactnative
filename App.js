/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import TrackPlayer from 'react-native-track-player';

class App extends React.Component {
  componentDidMount() {
    const track = {
      id: 1,
      title: 'Advertising URL',
      url:
        'https://github.com/ShivamJoker/sample-songs/raw/master/Bad%20Liar.mp3',
    };
    TrackPlayer.setupPlayer().then(() => {
      // The player is ready to be used
      TrackPlayer.add([track]);
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.pause()}>
            <Text style={styles.text}>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => TrackPlayer.play()}>
            <Text style={styles.text}>Play</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => TrackPlayer.skipToPrevious()}
          >
            <Text style={styles.text}>Prev</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => TrackPlayer.skipToNext()}
          >
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  btn: {
    backgroundColor: "#ff0044",
    padding: 15,
    borderRadius: 5,
    margin: 10,
    width: 160,
  },
  text: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
})


export default App;
