import React from "react";
import Phaser from "phaser";
import TunnelScene from "./TunnelScene";
import TunnelPipeline from "./TunnelPipeline";
import RainbowWavePipeline from "./RainbowWavePipeline";
import RainbowBlinkPipeline from "./RainbowBlinkPipeline";
import SlowTunnelPipeline from "./SlowTunnel";
import CloseTunnelPipeline from "./CloseTunnel";
/*
Write up some kind of game logic controller
Load card data
Populate community deck
Round begins
Prep begins
Draw and display draft choices to each player
Player drafts
Prep ends
Battle begins
Battle ends
Battle consequences
Round ends

*/
const phaser = {
  fire: function() {
    const config = {
      type: Phaser.WEBGL,
      width: 1280,
      height: 720,
      parent: document.getElementById("phaserContainer"),
      scene: [TunnelScene],
      settings: {
        mapAdd: {
          game: phaserGame
        }
      },
      callbacks: {
        postBoot: game => {
          game.rainbowWavePipeline = game.renderer.addPipeline('RainbowWave', new RainbowWavePipeline(game));
          game.rainbowWavePipeline.setFloat2('resolution', game.config.width, game.config.height);

          game.rainbowBlinkPipeline = game.renderer.addPipeline('RainbowBlink', new RainbowBlinkPipeline(game));
          game.rainbowBlinkPipeline.setFloat2('resolution', game.config.width, game.config.height);

          game.tunnelPipeline = game.renderer.addPipeline('Tunnel', new TunnelPipeline(game));
          game.tunnelPipeline.setFloat2('resolution', game.config.width, game.config.height);

          game.slowTunnelPipeline = game.renderer.addPipeline('SlowTunnel', new SlowTunnelPipeline(game));
          game.slowTunnelPipeline.setFloat2('resolution', game.config.width, game.config.height);

          game.closeTunnelPipeline = game.renderer.addPipeline('CloseTunnel', new CloseTunnelPipeline(game));
          game.closeTunnelPipeline.setFloat2('resolution', game.config.width, game.config.height);
        }
      }
    };
    const phaserGame = new Phaser.Game(config);
  }
};

class GameCanvas extends React.Component {
  componentDidMount() {
    phaser.fire();
  }
  render() {
    return (
      <div>
        <div id="phaserContainer" />
      </div>
    );
  }
}
export default GameCanvas;
