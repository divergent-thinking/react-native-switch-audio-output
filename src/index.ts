import { NativeModules } from "react-native";

const { ReactNativeSwitchAudioOutput } = NativeModules;

export default class RNSwitchAudioOutput {
  static AUDIO_SPEAKER = "SPEAKER";
  static AUDIO_HEADPHONE = "HEADPHONE";

  static isSpeakerphoneOn = (cb: (on: boolean) => any) =>
    ReactNativeSwitchAudioOutput.isSpeakerphoneOn(cb);

  /**
   * @deprecated Please replace to function 'selectAudioOutput'
   */
  static switchAudioOutput = (isSpeakerPhoneOn: boolean): void | never => {
    console.warn(
      "Function is deprecated, this function is remove next version soon."
    );
    ReactNativeSwitchAudioOutput.switchAudioOutput(isSpeakerPhoneOn);
  };

  static selectAudioOutput = (audioOutput: "SPEAKER" | "HEADPHONE") => {
    switch (audioOutput) {
      case this.AUDIO_SPEAKER:
        ReactNativeSwitchAudioOutput.switchAudioOutput(true);
        break;
      case this.AUDIO_HEADPHONE:
        ReactNativeSwitchAudioOutput.switchAudioOutput(false);
        break;
      default:
        throw new Error(
          "selectAudioOutput `audioOutput` must be only `AUDIO_SPEAKER` and `AUDIO_HEADPHONE` only"
        );
    }
  };
}
