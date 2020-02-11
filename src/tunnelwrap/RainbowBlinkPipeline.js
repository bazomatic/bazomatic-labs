import Phaser from "phaser";

const rainbowBlinkShader = `
precision mediump float;

uniform sampler2D uMainSampler;
uniform vec2 resolution;
uniform float time;

varying vec2 outTexCoord;

void main() {
  vec4 texel = texture2D(uMainSampler, outTexCoord);

  gl_FragColor = texel * vec4(abs(sin(time*1.2)),abs(cos(time*1.2)),sin(time*1.2),1.0);
}`;

const RainbowBlinkPipeline = new Phaser.Class({
  Extends: Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline,

  initialize: function DistortionPipeline(game) {
    Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline.call(this, {
      game: game,
      renderer: game.renderer,
      fragShader: rainbowBlinkShader
    });
  }
});

export default RainbowBlinkPipeline;