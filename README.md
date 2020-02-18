# react-native-switch-audio-output
The library for switch audio output source in your device for React Native


## Getting started

`$ npm install react-native-switch-audio-output --save`

### Mostly automatic installation (for React-native < 0.60)

`$ react-native link react-native-switch-audio-output`

## Usage
```javascript
import ReactNativeSwitchAudioOutput from 'react-native-switch-audio-output';

// check the audio source is speaker or not (Android only)
ReactNativeSwitchAudioOutput.isSpeakerphoneOn(res => {
  console.log(res) // true or false
});

// switch audio source to speaker or headphone

// enable speaker
ReactNativeSwitchAudioOutput.switchAudioOutput(true)

// disable speaker
ReactNativeSwitchAudioOutput.switchAudioOutput(false)
```
