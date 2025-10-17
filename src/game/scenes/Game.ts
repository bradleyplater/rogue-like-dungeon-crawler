import { Scene } from 'phaser';
import Player from '../gameObjects/Characters/player';

export class Game extends Scene
{
    player: Player;

    constructor ()
    {
        super('Game');
    }

    preload ()
    {

    }

    create ()
    {
        this.player = new Player(this, 0xff0000);
        this.add.existing(this.player);
    }
}
