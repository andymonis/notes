/**
 * Snake
 */

import V3Instance from "/vee3/vee_instance.js";
import V32D from "/vee3/vee_2d.js";

export default class Main {
    constructor(config) {
        V3Instance.instanceId(config.app.instancedid);

        this.tail = [];
        this.tail_length = 5;
        this.direction = {up:true, down:false, left:false, right: false};

        this.map = {x:0,y:0,w:0,h:0}
    }

    game_loop(){ 
        // Add the current x/y
        this.tail.unshift({x:this.x, y:this.y})
        // Remove end of Tail if too long
        if(this.tail.length > this.tail_length){
            this.tail.pop();
        }

        // Replace background
        this.ctx.clearRect(0, 0, V32D.$props.width, V32D.$props.height);
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.map.x, this.map.y, this.map.w, this.map.h);

        // Draw the snake blobs
        for(let i=0;i<this.tail.length; i++){
            let blob_x = (this.tail[i].x * this.tile_size) + this.map.x;
            let blob_y = (this.tail[i].y * this.tile_size) + this.map.y;
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(blob_x, blob_y, this.tile_size, this.tile_size);
        }

        // add user controls
        if(this.direction.up){
            this.y--;
        } else if(this.direction.down){
            this.y++;
        } else if(this.direction.left){
            this.x--;
        }else if(this.direction.right){
            this.x++;
        }

        // add wrap
        if(this.x >= this.grid_size){
            this.x = 0;
        } else if (this.x < 0){
            this.x = this.grid_size - 1;
        }
        if(this.y >= this.grid_size){
            this.y = 0;
        } else if (this.y < 0){
            this.y = this.grid_size - 1;
        }
    }

    game_setup(ctx){
        this.tile_size = 15;
        this.grid_size = 20;
        this.x = Math.floor(Math.random()*this.grid_size);
        this.y = Math.floor(Math.random()*this.grid_size);
        
        let width = this.tile_size * this.grid_size;;
        let height = this.tile_size * this.grid_size;
        let half_width = width/2;
        let half_height = height/2;

        let x = V32D.$props.half_width - half_width;
        let y = 0;

        this.map.x = V32D.$props.half_width - half_width;;
        this.map.y = 0;
        this.map.w = width; 
        this.map.h = height
        ctx.fillStyle = "blue";
        ctx.fillRect(this.map.x, this.map.y, this.map.w, this.map.h);
    }

    clear(){
        this.direction.down = false;
        this.direction.up = false;
        this.direction.left = false;
        this.direction.right = false;
    }

    interupt_setup(){
        // Keyboard
        document.addEventListener('keyup', (event) => {
            const keyName = event.key;
            
            if(keyName==="ArrowUp"){
                this.clear();
                this.direction.up = true;
            } else if (keyName==="ArrowDown"){
                this.clear();
                this.direction.down = true;
            } else if (keyName==="ArrowLeft"){
                this.clear();
                this.direction.left = true;
            } else if (keyName==="ArrowRight"){
                this.clear();
                this.direction.right = true;
            }
        }, false);

        // Touch
        // get a reference to an element
        var stage = document.getElementById('main');        
        // create a manager for that element
        var hammer = new Hammer(stage);
        hammer.on('tap', (ev) => {
            this.clear();
            if(ev.center.y < 50 ){
                console.log("up");
                this.direction.up = true;
            } else if(ev.center.y > 350 ){
                console.log("down");
                this.direction.down = true;
            } if(ev.center.x < 50  ){
                console.log("left");
                this.direction.left = true;
            } if(ev.center.x > 300){
                console.log("right");
                this.direction.right = true;
            }
        });
    }

    /**
     * Main start point for the app
     * @param {*} params
     */
    async init(params) {
        // Attach to canvas
        this.ctx = V32D.$canvas("#main");
        if(this.ctx){
            // Make it fullscreen
            V32D.$full_screen();

            // Keyboard handler
            this.interupt_setup();

            // Setup the board
            this.game_setup(this.ctx);

            setInterval(() => { 
                this.game_loop()
            },1000/10);
        }
    }
}