#import "ReactNativeSwitchAudioOutput.h"
#import <AVFoundation/AVFoundation.h>

@implementation ReactNativeSwitchAudioOutput

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(switchAudioOutput: (BOOL *)isSpeckerPhoneOn) {
  NSError* error;
  AVAudioSession* session = [AVAudioSession sharedInstance];

  [session setCategory:AVAudioSessionCategoryPlayAndRecord error:&error];
  [session setMode:AVAudioSessionModeVoiceChat error:&error];
  if (isSpeckerPhoneOn) // Enable speaker
  {
    [session overrideOutputAudioPort:AVAudioSessionPortOverrideSpeaker error:&error];
  }
  else // Disable speaker
  {
    [session overrideOutputAudioPort:AVAudioSessionPortOverrideNone error:&error];
  }
  [session setActive:YES error:&error];
}
@end

