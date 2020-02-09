import Phaser from "phaser";
//credit for core formula to https://iquilezles.org/www/articles/deform/deform.htm
const tunnelShader = `
precision mediump float;

uniform sampler2D uMainSampler;
uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;

varying vec2 outTexCoord;

void main() {
  // normalized coordinates (-1 to 1 vertically)
  // original formula from iq:
  // vec2 p = (-resolution.xy + 2.0*gl_FragCoord.xy)/resolution.y;

  // vec2 p = (-mouse.xy+gl_FragCoord.xy)/resolution.y;
  vec2 p = vec2(
      (gl_FragCoord.x-mouse.x)/resolution.y,
      (mouse.y-gl_FragCoord.y)/resolution.y
    );

  // p.y = 1.0-sqrt(p.y);

  // angle of each pixel to the center of the screen
  float a = atan(p.y,p.x);

  #if 1
  // cylindrical tunnel
  float r = length(p)*2.0;
  #else
  // squareish tunnel
  float r = pow( pow(p.x*p.x,4.0) + pow(p.y*p.y,4.0), 1.0/8.0 );
  #endif

  // index texture by (animated inverse) radious and angle
  vec2 uv = vec2( 0.3/r + 0.2 * time, a/3.1415927 );
  
  vec3 col =  texture2D(uMainSampler, uv ).xyz;

  // darken at the center    
  col = col*r;

  // add the blinkin'
  #if 0
  vec3 rblink = vec3(abs(sin(time)),abs(cos(time)),sin(time));
  gl_FragColor = vec4( col * rblink, 0.0 );
  #else
  gl_FragColor = vec4( col, 0.0 );
  #endif
}`;

const TunnelPipeline = new Phaser.Class({
  Extends: Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline,

  initialize: function DistortionPipeline(game) {
    Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline.call(this, {
      game: game,
      renderer: game.renderer,
      fragShader: tunnelShader
    });
  }
});

export default TunnelPipeline;