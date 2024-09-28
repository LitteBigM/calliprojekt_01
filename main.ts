input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    music.playMelody("C D C D E G A C5 ", 85)
    music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
