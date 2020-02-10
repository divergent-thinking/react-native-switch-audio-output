import { NativeModules } from 'react-native';

const { ReactNativeSwitchAudioOutput } = NativeModules;

export default class ReactNativeSwitchAudioOutput {
    static isSpeakerphoneOn = cb => ReactNativeSwitchAudioOutput.isSpeakerphoneOn(cb)
    static switchAudioOutput = (isSpeakerPhoneOn) => ReactNativeSwitchAudioOutput.switchAudioOutput(isSpeakerPhoneOn)
}

