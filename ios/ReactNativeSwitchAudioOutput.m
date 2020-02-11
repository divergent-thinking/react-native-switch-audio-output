#import "ReactNativeSwitchAudioOutput.h"


@implementation ReactNativeSwitchAudioOutput

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(switchAudioOutput: (BOOL *)isSpeckerPhoneOn) {
  NSError* error;
  AVAudioSession* session = [AVAudioSession sharedInstance];

  [session setCategory:AVAudioSessionCategoryPlayAndRecord error:&error];
  [session setMode:AVAudioSessionModeVoiceChat error:&error];
  RCTLogInfo(@"Setting audio output");
  if (isSpeckerPhoneOn) // Enable speaker
  {
    [session overrideOutputAudioPort:AVAudioSessionPortOverrideSpeaker error:&error];
    RCTLogInfo(@"Enable Speaker");
  }
  else // Disable speaker
  {
    [session overrideOutputAudioPort:AVAudioSessionPortOverrideNone error:&error];
    RCTLogInfo(@"Disable Speaker");
  }
  [session setActive:YES error:&error];
}

@end

