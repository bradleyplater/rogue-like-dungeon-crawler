import gameConfiguration from "../../configuration/game-configuration";

// Player class will be updated to be a sprite, but for initial development use rectangle
export default class Player extends Phaser.GameObjects.Rectangle
{
    constructor(scene: Phaser.Scene, color: number)
    {
        super(scene, gameConfiguration.width / 2, gameConfiguration.height / 2, 20, 20, color);
    }
}