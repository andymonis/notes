/**
 * Snake
 * Game 1
 * 
 * 
 */

import V3Instance from "/vee3/vee_instance.js";
import V32D from "/vee3/vee_2d.js";

export default class Main {
    constructor(config) {
        V3Instance.instanceId(config.app.instancedid);

        this.INITIAL_SIZE = 5;

        this.score = 0;
        this.tail = [];
        this.tail_length = this.INITIAL_SIZE;
        this.direction = {up:true, down:false, left:false, right: false};

        this.map = {x:0,y:0,w:0,h:0};
        this.pellet = {x:0,y:0};
    }

    game_loop(){ 
        console.log(`${this.tail.length} ${this.tail_length}`)
        // Add the current x/y
        this.tail.unshift({x:this.x, y:this.y})
        // Remove end of Tail if too long
        if(this.tail.length > this.tail_length){
            this.tail.pop();
        }

        // 
        // Replace background
        //
        this.ctx.clearRect(0, 0, V32D.$props.width, V32D.$props.height);
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.map.x, this.map.y, this.map.w, this.map.h);
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(this.map.x, this.map.y, this.map.w, this.map.h);

        // 
        // Update Inputs
        //
        if(this.direction.up){
            this.y--;
        } else if(this.direction.down){
            this.y++;
        } else if(this.direction.left){
            this.x--;
        }else if(this.direction.right){
            this.x++;
        }

        // 
        // Draw the snake blobs
        //
        for(let i=0;i<this.tail.length; i++){
            let blob_x = (this.tail[i].x * this.tile_size) + this.map.x;
            let blob_y = (this.tail[i].y * this.tile_size) + this.map.y;
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(blob_x, blob_y, this.tile_size, this.tile_size);
        }

        //  
        // Draw pellet
        //
        this.ctx.fillStyle = "green";
        let pellet_x = (this.pellet.x * this.tile_size) + this.map.x;
        let pellet_y = (this.pellet.y * this.tile_size) + this.map.y;
        this.ctx.fillRect(pellet_x, pellet_y, this.tile_size, this.tile_size);

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

        // Check hit of the head
        if(this.tail[0].x === this.pellet.x && this.tail[0].y === this.pellet.y){
            console.log("Hit Pellet");
            this.tail_length++;
            // Move the pellet to a new location
            this.move_pellet();
        }
    }

    move_pellet(){
        let x = Math.floor(Math.random() * this.grid_size);
        let y = Math.floor(Math.random() * this.grid_size);
        console.log(`pellet ${x} ${y}`);
        this.pellet.x = x;
        this.pellet.y = y;
    }

    clear(){
        this.direction.down = false;
        this.direction.up = false;
        this.direction.left = false;
        this.direction.right = false;
    }

    interupt_setup(){
        // Buttons
        document.getElementById("btn-left").addEventListener('click', (event) => {
            if(!this.direction.right){
                this.clear();
                this.direction.left = true;
            }
        });
        document.getElementById("btn-up").addEventListener('click', (event) => {
            if(!this.direction.down){
                this.clear();
                this.direction.up = true;
            }
        });
        document.getElementById("btn-down").addEventListener('click', (event) => {
            if(!this.direction.up){
                this.clear();
                this.direction.down = true;
            }
        });
        document.getElementById("btn-right").addEventListener('click', (event) => {
            if(!this.direction.left){
                this.clear();
                this.direction.right = true;
            }
        });
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
        this.map.y = 10;
        this.map.w = width; 
        this.map.h = height

        // Set the pellet for snake to eat
        this.move_pellet();

        ctx.fillStyle = "blue";
        ctx.fillRect(this.map.x, this.map.y, this.map.w, this.map.h);
        ctx.lineWidth = 1;
        ctx.strokeRect(this.map.x, this.map.y, this.map.w, this.map.h);
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