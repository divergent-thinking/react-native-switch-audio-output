# This project is no longer maintenance and support

# react-native-switch-audio-output
The library for switch audio output source in your device for React Native


## Getting started

`$ npm install react-native-switch-audio-output --save`

### If you are using React Native >= 0.60, install CocoaPods dependency

`cd ios && pod install && cd ..`

### If you are using React Native < 0.60, link React Native dependency and install CocoaPods dependency

`$ react-native link react-native-switch-audio-output && cd ios && pod install && cd ..`

## Usage
```javascript
import RNSwitchAudioOutput from 'react-native-switch-audio-output';

// check the audio source is speaker or not (Android only) return boolean
RNSwitchAudioOutput.isSpeakerphoneOn(res => {

});

/* 
switch audio source to speaker or headphone
*/

// switch to speakerphone
RNSwitchAudioOutput.selectAudioOutput(RNSwitchAudioOutput.AUDIO_SPEAKER)

// switch to headphone
RNSwitchAudioOutput.switchAudioOutput(RNSwitchAudioOutput.AUDIO_HEADPHONE)
```
