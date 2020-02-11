import Phaser from "phaser";

class TunnelScene extends Phaser.Scene {
  constructor() {
    super("basicScene");
  }

  init() {
    console.log("initializing");
  }

  preload() {
    console.log("preloading");
    this.load.image("space", "space.png");
    this.load.image("stars", "stars.png");
  }

  create() {
    console.log("creating");
    this.background = this.add.sprite(640, 360, "space");
    this.background.setOrigin(0.5, 0.5);
    this.background.setPipeline("Tunnel");

    // this.starfield = this.add.sprite(640, 360, "stars");
    // this.starfield.setOrigin(0.5, 0.5);
    // this.starfield.setAngle(30);
    // this.starfield.setPipeline("Tunnel");

    // this.closeStarfield = this.add.sprite(640, 360, "stars");
    // this.closeStarfield.setOrigin(0.5, 0.5);
    // this.closeStarfield.setAngle(-30);
    // this.closeStarfield.setPipeline("CloseTunnel");

    this.t = 0;
    this.tIncrement = 0.05;
    // if (true) {
    //   this.starfield.setPipeline("Tunnel");

    //   this.input.on(
    //     "pointerdown",
    //     function(pointer) {
    //       if (this.starfield.pipeline === this.game.tunnelPipeline) {
    //         this.starfield.resetPipeline();
    //       } else {
    //         this.starfield.setPipeline("Tunnel");
    //       }
    //     },
    //     this
    //   );
    // } else {
    //   this.starfield.setPipeline("RainbowWave");

    //   this.input.on(
    //     "pointerdown",
    //     function(pointer) {
    //       if (this.starfield.pipeline === this.game.rainbowWavePipeline) {
    //         this.starfield.resetPipeline();
    //       } else {
    //         this.starfield.setPipeline("RainbowWave");
    //       }
    //     },
    //     this
    //   );
    // }
  }

  update() {
    this.updateTunnelPipeline();
  }

  updateTunnelPipeline() {
    // use physics engine with an invisible "front of ship" shape for checking for impacts
    // this way we can send 2d sprites at the player-camera (shape in front of camera)
    this.t += this.tIncrement;
    this.game.closeTunnelPipeline.setFloat1("time", this.t);
    this.game.tunnelPipeline.setFloat1("time", this.t);
    this.game.slowTunnelPipeline.setFloat1("time", this.t);
    this.game.rainbowBlinkPipeline.setFloat1("time", this.t);
    this.game.rainbowWavePipeline.setFloat1("time", this.t);

    //console.log(`X: ${this.input.activePointer.worldX}, Y: ${this.input.activePointer.worldY}`);
    this.game.tunnelPipeline.setFloat2('mouse', this.input.activePointer.worldX, this.input.activePointer.worldY);
    //this.game.tunnelPipeline.setFloat2('mouse', 0.5, 0.5);

    // this.starfield.setOrigin(
    //     this.starfield.displayOriginX + Math.cos(this.t),
    //     this.starfield.displayOriginY + Math.sin(this.t));
    //     console.log(`${Math.cos(this.t)} ${Math.sin(this.t)}` )
  }
}

export default TunnelScene;
