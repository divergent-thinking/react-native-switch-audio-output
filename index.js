import { NativeModules } from "react-native";

const { ReactNativeSwitchAudioOutput } = NativeModules;

export default class RNSwitchAudioOutput {
  static AUDIO_SPEAKER = "SPEAKER";
  static AUDIO_HEADPHONE = "HEADPHONE";

  static isSpeakerphoneOn = (cb) =>
    ReactNativeSwitchAudioOutput.isSpeakerphoneOn(cb);

  /**
   * @deprecated Please replace to function 'selectAudioOutput'
   */
  static switchAudioOutput = (isSpeakerPhoneOn) => {
    console.warn(
      "Function is deprecated, this function is remove next version soon."
    );
    ReactNativeSwitchAudioOutput.switchAudioOutput(isSpeakerPhoneOn);
  };

  static selectAudioOutput = (audioOutput) => {
    switch (audioOutput) {
      case AUDIO_SPEAKER:
        ReactNativeSwitchAudioOutput.switchAudioOutput(true);
        break;
      case AUDIO_HEADPHONE:
        ReactNativeSwitchAudioOutput.switchAudioOutput(false);
        break;
      default:
        throw new Error(
          "selectAudioOutput `audioOutput` must be only `AUDIO_SPEAKER` and `AUDIO_HEADPHONE` only"
        );
    }
  };
}
