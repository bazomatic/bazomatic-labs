import Phaser from "phaser";

// based on the phaser labs example
const rainbowWaveShader = `
precision mediump float;

uniform sampler2D uMainSampler;
uniform vec2 resolution;
uniform float time;

varying vec2 outTexCoord;

vec4 effect() {
  vec2 pixelPosition = gl_FragCoord.xy / resolution * 20.0;
  float freq = 0.8;
  float value =
    sin(time + pixelPosition.x * freq) +
    sin(time + pixelPosition.y * freq) +
    sin(time + (pixelPosition.x+ pixelPosition.y) * freq) +
    cos(time + sqrt(length(pixelPosition - 0.5)) * freq * 2.0);
  return vec4(
    cos(value),
    sin(value),
    sin(value * 3.14 * 2.0),
    cos(value)
    );
}

void main() {
  vec4 texel = texture2D(uMainSampler, outTexCoord);

  gl_FragColor = texel * effect();
}`;

const RainbowWavePipeline = new Phaser.Class({
  Extends: Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline,

  initialize: function RainbowWavePipeline(game) {
    Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline.call(this, {
      game: game,
      renderer: game.renderer,
      fragShader: rainbowWaveShader
    });
  }
});

export default RainbowWavePipeline;