class Login{
    constructor(){
        this.title = createElement('h2',"UNHOLY MARIO");
        //this.title.setAttribute("background-color", "green");
        this.input = createInput();
        this.button = createButton("PLAY");
       // this.checkbox = createCheckbox("I agree to all Terms & Conditions", false);
        //this.resetbutton = createButton("RESET");
        this.image = loadImage("images/login.jpg");
        }
    hide(){
        this.title.hide();
        
        
    }
    display(){
        image(this.image, 0,0, displayWidth ,displayHeight  );
        this.title.position(displayWidth/2 + 300, 100);
        this.input.position(displayWidth/2 + 310,210);
        this.button.position(displayWidth/2 + 360,280);
        //this.checkbox.position(displayWidth/2 - 135,400);
        //this.resetbutton.position(displayWidth - 100, 50);

            this.button.mousePressed(()=>{
                console.log("mouse pressed");
                this.input.hide();
                this.button.hide();
                this.title.hide();
                player = new Player();
                enemy = new Enemy();
                screennumber =1;
            });


        
    }


}
