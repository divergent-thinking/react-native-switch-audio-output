package com.reactlibrary;

import android.media.AudioManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class ReactNativeSwitchAudioOutputModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public ReactNativeSwitchAudioOutputModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "ReactNativeSwitchAudioOutput";
    }

    @ReactMethod
    public void isSpeakerphoneOn(Callback callback) {
        AudioManager audioManager = (AudioManager)this.reactContext.getSystemService(this.reactContext.AUDIO_SERVICE);
        callback.invoke(audioManager.isSpeakerphoneOn());
    }

    @ReactMethod
    public void switchAudioOutput(Boolean isSpeakerPhoneOn) {
        AudioManager audioManager = (AudioManager)this.reactContext.getSystemService(this.reactContext.AUDIO_SERVICE);
        if (isSpeakerPhoneOn) {
            audioManager.setSpeakerphoneOn(true);
        } else {
            audioManager.setSpeakerphoneOn(false);
        }
    }
}
