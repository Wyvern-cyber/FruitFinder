var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,bgImg,bgImg1,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var fruitbgImg;
var welcomeimage,welcomeanim;
var playbutton,playbuttonimg;
var boat,boatimg;
var one,two,three;
var oneImg,twoImg,threeImg;
var chef,chefImg,chefImg1,bowl,bowlImg,bowl1,bowlImg1;
var chat, chatImg,go,goImg;
var fruits1,fruits2,fruits1Img,fruits2Img;
var fruit,fruitGroup,fruitImg,fruitImg1,fruitImg2,fruitImg3,fruitImg4,fruitImg5;
var food,foodGroup,foodImg,foodImg1,foodImg2,foodImg3,foodImg4,foodImg5;
var counter =0;
var monkey,monkeyImg,starboard,starboardImg;
var w_star1,w_star2,w_star3,g_star,w_starImg,g_starImg;
var b_startImg,levelup,levelupImg,levelupImg1;
var boy,boyImg1,boyImg2,boyImg3,boyImg4,boyImg5;
var invisibleground,statusboard,statusboardImg;
var clock,clockImg1,clockImg2,gameover,gameoverImg;
var timeup,timeupImg,replay,replayImg,home,homeImg;
var wintext,winplay,wintextImg,winplayImg;
var apple,melon,cherry,tomato,grape,strawberry,carrot,banana,mixed;
var juicer,juicerImg,juicemessage,juicemessageImg;
var redjuicerImg,pinkjuicerImg,bluejuicerImg,yellowjuicerImg,orangejuicerImg,purplejuicerImg,mixedjuicerImg;
var appleImg,bananaImg,blueberryImg,strawberryImg,melonImg,grapesImg,tomatoImg,carrotImg,mixedImg;
var carrotslices,carrotslicesImg,fullcarrot,fullcarrotImg,mixedslices,mixedslicesImg,fullmixedImg,melonslices,melonslicesImg,fullmelonImg;
var cherryslicesImg,fullcherryImg,bananaslicesImg,fullbananaImg,tomatoslicesImg,fulltomatoImg;
var strawberryslicesImg,fullstrawberryImg,appleslicesImg,fullappleImg,grapeslicesImg,fullgrapeImg;
var knife,knifeImg1,knifeImg2;
var apple1=false,melon1=false,cherry1=false,tomato1=false,grape1=false,strawberry1=false,carrot1=false,banana1=false,mixed1=false;

var on,onImg,off,offImg,finaljuice,carrotjuiceImg,mixedjuiceImg;
var melonjuiceImg,cherryjuiceImg,bananajuiceImg,tomatojuiceImg;
var strawberryjuiceImg,applejuiceImg,grapejuiceImg;

//Game States
var SERVE = 2;
var PLAY=1;
var END=0;
var Level1=3;
var Level2=4;
var Level3 = 5;
var JUICE = 6;
var gameState=2;
var fruitcount;
var score =0;
var timer =0,secondtimer=0;
var sound1,sound2,soundon,soundoff;
var soundonImg,soundoffImg,soundstatus="on";


function preload(){
 
  pathImg = loadImage("bg1.png");
  bgImg = loadImage("bg2.jpg");
  bgImg1 = loadImage("bg5.jpg");
  //bgImg2 = loadImage("fruitbg.jpg");
  welcomeanim = loadImage("Fruit Finder.png");
  playbuttonimg = loadImage("play-1.gif");
  boatimg = loadImage("chef1.png");
  oneImg = loadImage("fruits-removebg-preview.png");
  twoImg = loadImage("juice1-removebg-preview.png");
  threeImg = loadImage("juice1-removebg-preview.png");
  chefImg = loadAnimation("chef-hi-unscreen.gif");
  chefImg1 = loadAnimation("chefwin.gif");
  bowlImg = loadImage("bowl-removebg-preview.png");
  bowlImg1 = loadImage("bowl-removebg-preview.png");
  chatImg = loadImage("Invited_-removebg-preview.png");
  goImg = loadImage("go-removebg-preview.png");
  fruitImg = loadImage("f1-removebg-preview.png");
  fruitImg1 = loadImage("f2-removebg-preview.png");
  fruitImg2 = loadImage("fruit3-unscreen.gif");
  fruitImg3 = loadImage("f4-unscreen.gif");
  fruitImg4 = loadImage("f5-removebg-preview.png");
  fruitImg5 = loadImage("f6.gif");
  monkeyImg = loadImage("monkey-unscreen.gif");
  foodImg = loadImage("cupcake.png");
  foodImg1 = loadImage("sanwich.png");
  foodImg2 = loadImage("burger.png");
  foodImg3 = loadImage("doughnuts.png");
  foodImg4 = loadImage("sanwich.png");
  foodImg5 = loadImage("frenchfries.png");
  starboardImg=loadAnimation("wooden_board__2_-removebg-preview.png");
  w_starImg=loadAnimation("star__2_-removebg-preview.png");
  g_starImg=loadAnimation("golden_star.png");
  boyImg1=loadAnimation("boy__2_-removebg-preview.png");
  boyImg2=loadAnimation("boy__3_-removebg-preview.png");
  boyImg3=loadAnimation("boy__4_-removebg-preview.png");
  b_startImg=loadAnimation("golden_star.png");
  levelupImg=loadImage("next.png");
  levelupImg1=loadAnimation("Completed.png");
  clockImg1=loadAnimation("clock1.png");
  clockImg2=loadAnimation("sad_clock.png");
  statusboardImg=loadImage("status.png");
  gameoverImg=loadImage("—Pngtree—game over text cartoon style_5986376.png");
  timeupImg=loadImage("Timeup.png");
  replayImg=loadImage("restart.png");
  homeImg=loadImage("exit.png");
  fruits1Img=loadImage("fruits-removebg-preview.png");
  fruits2Img=loadImage("fruits-removebg-preview.png");
  wintextImg=loadImage("winjuiceicon.png");
  winplayImg=loadImage("winjuiceicon.png");
  fruitbgImg=loadImage("fruitbg.jpg");
  juicerImg=loadImage("emptyjuicer.png");
  juicemessageImg=loadImage("juice_message.png");
  redjuicerImg=loadImage("mixed.png");
  pinkjuicerImg=loadImage("pinkjuicer.png");
  orangejuicerImg=loadImage("orangejuicer.png");
  yellowjuicerImg=loadImage("yellowjuicer.png");
  bluejuicerImg=loadImage("bluejuicer.png");
  purplejuicerImg=loadImage("purplejuicer.png");
  mixedjuicerImg=loadImage("mixed.png");
  appleImg=loadImage("applebasket.png");
  bananaImg=loadImage("bananabasket.png");
  cherryImg=loadImage("cherrybasket.png");
  tomatoImg=loadImage("tomatobasket.png");
  starwberryImg=loadImage("strawberrybasket.png");
  mixedImg=loadImage("mixedbasket.png");
  melonImg=loadImage("melonbasket.png");
  carrotImg=loadImage("carrotbasket.png");
  grapesImg=loadImage("grapebasket.png");
  carrotslicesImg=loadImage("carrotslices.png");
  mixedslicesImg=loadImage("mixedslices.png");
  melonslicesImg=loadImage("melon_slices.png");
  cherryslicesImg=loadImage("cherry_slices.png");
  bananaslicesImg=loadImage("banana_slices.png");
  tomatoslicesImg=loadImage("tomato_slices.png");
  strawberryslicesImg=loadImage("strawberry_slices.png");
  appleslicesImg=loadImage("apple_slices.png");
  grapeslicesImg=loadImage("grape_slices.png");
  fullmelonImg=loadImage("f5-removebg-preview.png");
  fullcherryImg=loadImage("cherry.png");
  fullbananaImg=loadImage("banana.png");
  fulltomatoImg=loadImage("tomato.png");
  fullstrawberryImg=loadImage("strawberry.png");
  fullappleImg=loadImage("apple.png");
  fullcarrotImg=loadImage("fullcarrot.png");
  fullmixedImg=loadImage("mixedfruits.png");
  fullgrapeImg=loadImage("grapes.png");
  knifeImg1=loadImage("knife1.png");
  knifeImg2=loadImage("knife2.gif");
  onImg=loadImage("on.png");
  offImg=loadImage("off.png");
  carrotjuiceImg=loadImage("carrot_juice.png");
  mixedjuiceImg=loadImage("mixedjuice.png");
  melonjuiceImg=loadImage("melon_juice.png");
  cherryjuiceImg=loadImage("cherry_juice.png");
  bananajuiceImg=loadImage("banana_juice.png");
  tomatojuiceImg=loadImage("tomato_juice.png");
  strawberryjuiceImg=loadImage("strawberry_juice.png");
  applejuiceImg=loadImage("apple_juice.png");
  grapejuiceImg=loadImage("grape_juice.png");
   sound1 = loadSound("Looping.mp3");
  sound2 = loadSound("sound2.wav");
  soundonImg = loadImage("soundon.png");
  soundoffImg = loadImage("soundoff.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);


  welcomeimage = createSprite(width/2,height/5,200,200);
  welcomeimage.addImage(welcomeanim);
  welcomeimage.scale=1.25; 
  welcomeimage.visible =false;
  
  invisibleground = createSprite(width/2,height,width,20);
  invisibleground.visible = false;
  
  boat = createSprite(200,height-200,200,200);
  boat.addImage(boatimg);
  boat.scale=2; 
  boat.visible =false;  


  playbutton = createSprite(width-250,height-160,200,200);
  playbutton.addImage(playbuttonimg);
  playbutton.scale=1.5; 
  playbutton.visible =false;  

  one = createSprite(width/3+80,height-210,200,200);
  one.addImage(oneImg);
  one.scale=0.5; 
  one.visible =false;  

  two = createSprite(width/2+150,height-200,200,200);
  two.addImage(twoImg);
  two.scale=0.5; 
  two.visible =false;  

  three = createSprite(width/2+280,height-250,200,200);
  three.addImage(threeImg);
  three.scale=0.35; 
  three.visible =false;  

  chef = createSprite(width/2,height-335,200,200);
  chef.addAnimation("start",chefImg);
  chef.addAnimation("win",chefImg1);
  chef.scale=2.2; 
  chef.visible =false;  

  chat = createSprite(width/2+220,height-560,200,200);
  chat.addImage(chatImg);
  chat.scale=0.7; 
  chat.visible =false;   

  bowl = createSprite(width/2,height-110,200,200);
  bowl.addImage(bowlImg);
  bowl.scale=0.5; 
  bowl.visible =false;    

  bowl1 = createSprite(width/2-70,height-100,200,200);
  bowl1.addImage(bowlImg1);
  bowl1.scale=0.3; 
  bowl1.visible =false; 

  go = createSprite(width-170,height-120,200,200);
  go.addImage(goImg);
  go.scale=0.75; 
  go.visible =false;

  monkey = createSprite(80,100,200,200);
  monkey.addImage(monkeyImg);
  monkey.scale=0.75; 
  monkey.visible =false;

  starboard = createSprite(width-150,120,200,200);
  starboard.addAnimation("simple",starboardImg);
  starboard.addAnimation("win",levelupImg1);
  starboard.scale=1; 
  starboard.visible =false;  

  w_star1 = createSprite(width-210,120,200,200);
  w_star1.addAnimation("blank",w_starImg);
  w_star1.addAnimation("bright",b_startImg);
  w_star1.scale=0.2; 
  w_star1.visible =false; 

  w_star2 = createSprite(width-150,80,200,200);
  w_star2.addAnimation("blank",w_starImg);
  w_star2.addAnimation("bright",b_startImg);
  w_star2.scale=0.2; 
  w_star2.visible =false; 

  w_star3 = createSprite(width-100,120,200,200);
  w_star3.addAnimation("blank",w_starImg);
  w_star3.addAnimation("bright",b_startImg);
  w_star3.scale=0.2; 
  w_star3.visible =false; 

  levelup = createSprite(width/2,height/2+40,200,200);
  levelup.addImage(levelupImg);
  levelup.scale=0.25; 
  levelup.visible =false; 
  
  clock = createSprite(width-200,180,200,200);
  clock.addAnimation("levelon",clockImg1);
  clock.addAnimation("levelup",clockImg2);
  clock.scale=0.25; 
  clock.visible =false;
  
  statusboard = createSprite(350,50,300,200);
  statusboard.addImage(statusboardImg);
  statusboard.scale=0.4; 
  statusboard.visible =false;
  
  gameover = createSprite(width/2,height/2,300,200);
  gameover.addImage(gameoverImg);
  gameover.scale=0.55; 
  gameover.visible =false;
  
  timeup = createSprite(200,height-250,300,200);
  timeup.addImage(timeupImg);
  timeup.scale=0.25; 
  timeup.visible =false;
  
  replay = createSprite(200,height-330,300,200);
  replay.addImage(replayImg);
  replay.scale=0.42; 
  replay.visible =false;
  
  home = createSprite(200,height-250,300,200);
  home.addImage(homeImg);
  home.scale=0.42; 
  home.visible =false;
  
  fruits1 = createSprite(width/2,height-150,300,200);
  fruits1.addImage(fruits1Img);
  fruits1.scale=0.42; 
  fruits1.visible =false;
  
  fruits2 = createSprite(width/3,height-150,300,200);
  fruits2.addImage(fruits2Img);
  fruits2.scale=0.42; 
  fruits2.visible =false;
  
  wintext = createSprite(width/3,height/2,300,200);
  wintext.addImage(wintextImg);
  wintext.scale=0.62; 
  wintext.visible =false;
  
  winplay = createSprite(width/1.5,height/1.8,300,200);
  winplay.addImage(winplayImg);
  winplay.scale=0.2; 
  winplay.visible =false;
  
  juicer = createSprite(180,height/1.45,300,200);
  juicer.addAnimation("empty",juicerImg);
  juicer.addAnimation("red",redjuicerImg);
  juicer.addAnimation("blue",bluejuicerImg);
  juicer.addAnimation("pink",pinkjuicerImg);
  juicer.addAnimation("yellow",yellowjuicerImg);
  juicer.addAnimation("orange",orangejuicerImg);
  juicer.addAnimation("purple",purplejuicerImg);
  juicer.addAnimation("mixed",mixedjuicerImg);
  juicer.scale=0.2; 
  juicer.visible =false;
  
  on = createSprite(140,height-85,300,200);
  on.addImage(onImg);
  on.scale=0.12; 
  on.visible =false;
  
  off = createSprite(190,height-85,300,200);
  off.addImage(offImg);
  off.scale=0.12; 
  off.visible =false;
  
  apple = createSprite(width-80,height/1.4,300,200);
  apple.addImage(appleImg);
  apple.scale=0.15; 
  apple.visible =false;
  
  tomato = createSprite(width-220,height/1.3,300,200);
  tomato.addImage(tomatoImg);
  tomato.scale=0.15; 
  tomato.visible =false;

  starwberry = createSprite(width-80,height/1.12,300,200);
  starwberry.addImage(starwberryImg);
  starwberry.scale=0.15; 
  starwberry.visible =false;

  melon = createSprite(width-370,height/1.3,300,200);
  melon.addImage(melonImg);
  melon.scale=0.25; 
  melon.visible =false;

  cherry = createSprite(width-250,height/1.1,300,200);
  cherry.addImage(cherryImg);
  cherry.scale=0.17; 
  cherry.visible =false;

  grapes = createSprite(width-450,height/1.12,300,200);
  grapes.addImage(grapesImg);
  grapes.scale=0.15; 
  grapes.visible =false;

  banana = createSprite(width-580,height/1.3,300,200);
  banana.addImage(bananaImg);
  banana.scale=0.15; 
  banana.visible =false;

  carrot = createSprite(width-600,height/1.15,300,200);
  carrot.addImage(carrotImg);
  carrot.scale=0.22; 
  carrot.visible =false;

  mixed = createSprite(width/2,height/1.23,300,200);
  mixed.addImage(mixedImg);
  mixed.scale=0.25; 
  mixed.visible =false;

  juicemessage = createSprite(width/1.4,160,300,200);
  juicemessage.addImage(juicemessageImg);
  juicemessage.scale=0.23; 
  juicemessage.visible =false;

  fullcarrot = createSprite(420,height-70,300,200);
  fullcarrot.addAnimation("carrots",fullcarrotImg);
  fullcarrot.addAnimation("carrotslices",carrotslicesImg);
  fullcarrot.addAnimation("mixed",fullmixedImg);
  fullcarrot.addAnimation("mixedslices",mixedslicesImg);
  fullcarrot.addAnimation("melon",fullmelonImg);
  fullcarrot.addAnimation("melonslices",melonslicesImg);
  fullcarrot.addAnimation("cherry",fullcherryImg);
  fullcarrot.addAnimation("cherryslices",cherryslicesImg);
  fullcarrot.addAnimation("banana",fullbananaImg);
  fullcarrot.addAnimation("bananaslices",bananaslicesImg);
  fullcarrot.addAnimation("tomato",fulltomatoImg);
  fullcarrot.addAnimation("tomatoslices",tomatoslicesImg);
  fullcarrot.addAnimation("banana",fullbananaImg);
  fullcarrot.addAnimation("bananaslices",bananaslicesImg);
  fullcarrot.addAnimation("tomato",fulltomatoImg);
  fullcarrot.addAnimation("tomatoslices",tomatoslicesImg);
  fullcarrot.addAnimation("strawberry",fullstrawberryImg);
  fullcarrot.addAnimation("strawberryslices",strawberryslicesImg);
  fullcarrot.addAnimation("apple",fullappleImg);
  fullcarrot.addAnimation("appleslices",appleslicesImg);
  fullcarrot.addAnimation("grape",fullgrapeImg);
  fullcarrot.addAnimation("grapeslices",grapeslicesImg);
  fullcarrot.scale=0.5; 
  fullcarrot.visible =false;
  
  knife = createSprite(350,height-100,300,200);
  knife.addAnimation("static",knifeImg1);
  knife.addAnimation("moving",knifeImg2);
  knife.scale=0.25; 
  knife.visible =false;
  
  finaljuice = createSprite(420,height-210,300,200);
  finaljuice.addAnimation("carrot",carrotjuiceImg);
  finaljuice.addAnimation("mixed",mixedjuiceImg);
  finaljuice.addAnimation("melon",melonjuiceImg);
  finaljuice.addAnimation("cherry",cherryjuiceImg);
  finaljuice.addAnimation("tomato",tomatojuiceImg);
  finaljuice.addAnimation("grapes",grapejuiceImg);
  finaljuice.addAnimation("strawberry",strawberryjuiceImg);
  finaljuice.addAnimation("apple",applejuiceImg);
  finaljuice.addAnimation("banana",bananajuiceImg);
  finaljuice.scale=0.2; 
  finaljuice.visible =false;
  
  soundon = createSprite(width-100,50,200,200);
  soundon.addImage(soundonImg);
  soundon.scale=0.18; 
  
  
  soundoff = createSprite(width-100,150,200,200);
  soundoff.addImage(soundoffImg);
  soundoff.scale=0.18; 
  soundoff.visible = false;
  
  boy = createSprite(width/2,height-150,200,200);
  boy.addAnimation("standing",boyImg1);
  boy.addAnimation("laughing",boyImg2);
  boy.addAnimation("jumping",boyImg3);

  boy.scale=0.75; 
  boy.visible =false; 

  fruitGroup = new Group();  
  foodGroup = new Group(); 
  
  carrot.setCollider("rectangle",100,20,500,800)
  banana.setCollider("rectangle",0,-300,1400,300)
  mixed.setCollider("rectangle",-10,100,800,800)
  grapes.setCollider("rectangle",0,20,900,800)
  cherry.setCollider("rectangle",0,20,900,800)
  melon.setCollider("rectangle",10,-100,600,400)
  starwberry.setCollider("rectangle",-20,-100,700,900)
  tomato.setCollider("rectangle",-10,-100,750,600)
  apple.setCollider("rectangle",-10,-100,750,600)


}

function draw() {
      soundon.x = width-100;
  soundon.y = 50;
  soundoff.x = width-100;
  soundoff.y = 150;
 if(mousePressedOver(soundon))
  {
    soundstatus = "off";
    soundoff.visible = true;
    soundon.visible = false;
    sound1.stop();
    sound2.stop();
  }
 
  if(mousePressedOver(soundoff))
  {
    soundstatus = "on";
    soundoff.visible = false;
    soundon.visible = true;
  
  }
  
  if(gameState === SERVE)
    {
      background(pathImg);
      welcomeimage.visible =true;
      boat.visible =true;  
      playbutton.visible =true;  
      one.visible =true;  
      two.visible =true;  
      three.visible =true; 
       if(soundstatus==="on")
        {
          sound1.play();

        }
      if(mousePressedOver(playbutton)&&gameState===SERVE)
        {
          gameState = PLAY;
        }

    }
  
  
  if(gameState===PLAY)
  {
    background(bgImg);
    game2();
     if(soundstatus==="on")
        {
          sound2.play();

        }
    fullcarrot.visible = false;
    knife.visible = false;
    edges= createEdgeSprites();
    chef.visible =true;  
    bowl.visible =true;    
    bowl1.visible =true;    
    chat.visible =true;    
    go.visible =true;    
    if(mousePressedOver(go)&&gameState===PLAY)
          {
            gameState = Level1;
              w_star1.changeAnimation("blank",w_starImg);
      w_star2.changeAnimation("blank",w_starImg);
      w_star3.changeAnimation("blank",w_starImg);
          }
  
  }
  
  if(gameState === Level1)
    {
      background(bgImg1);
      secondtimer = secondtimer + 1;
      if(secondtimer>0&&secondtimer%60===0)
        {
                timer = timer +1;
        }
       if(soundstatus==="on")
        {
          sound1.play();

        }
      soundon.x = 100;
  soundon.y = height-50;
  soundoff.x = 100;
  soundoff.y = height-150;
      chef.visible =false;  
      bowl.visible =false;    
      bowl1.visible =false;    
      chat.visible =false;    
      go.visible =false;
      createfruits();
      createfood();
      monkey.visible =true;
      starboard.visible =true;  
      w_star1.visible =true; 
      w_star2.visible =true; 
      w_star3.visible =true; 
      boy.visible =true; 
      boy.x = World.mouseX;
     // clock.visible =true;
      starboard.changeAnimation("simple",starboardImg);
      statusboard.visible =true;
      starboard.scale = 1;
      starboard.x = width-150;
      starboard.y = 120;
      w_star1.scale = 0.2;
      w_star1.x = width-210;
      w_star1.y = 120;
      w_star2.scale = 0.2;
      w_star2.x = width-150;
      w_star2.y = 80;
      w_star3.scale = 0.2;
      w_star3.x = width-100;
      w_star3.y = 120;
      clock.changeAnimation("levelon",clockImg1);
      clock.visible =true;
      clock.x = width-200;
      clock.y = 180;
      clock.scale = 0.25;
      if(keyDown("space")&&boy.y>=height/2 )
        {
          boy.velocityY = -10;
         boy.changeAnimation("jumping",boyImg3);

        }
      if(boy.y >height-200&&boy.y<height)
        {
         boy.changeAnimation("standing",boyImg2);
        }
      boy.velocityY = boy.velocityY +1;

       for (var j = 0; j < fruitGroup.length; j++) 
       {                    
         if(fruitGroup.get(j).isTouching(boy)) 
         {
        fruitGroup.get(j).destroy();
        score = score +1;
         }     
        }
       for (var j = 0; j < foodGroup.length; j++) 
       {                    
         if(foodGroup.get(j).isTouching(boy)&&score>0) 
         {
        foodGroup.get(j).destroy();
                   score = score - 1;
         }     
        }
      if(score===10)
        {
          
  w_star1.changeAnimation("bright",b_startImg);

        }
      else if(score ===20)
        {
           w_star2.changeAnimation("bright",b_startImg);
 
        }
       else if(score ===30&&timer<=60)
        {
           w_star3.changeAnimation("bright",b_startImg);
           gameState = Level2;
        }
      if(timer === 60)
        {
                     gameState = END;

        }
    }
  
  else if(gameState === Level2)
    {
      background(bgImg1);
      game3();
       if(soundstatus==="on")
        {
          sound2.play();

        }
      fruitGroup.destroyEach();
      foodGroup.destroyEach();
      starboard.changeAnimation("win",levelupImg1);
      starboard.scale = 0.4;
      starboard.x = width/2;
      starboard.y = height/2;
      boy.changeAnimation("laughing",boyImg2);
      boy.x = width/1.5;
      w_star1.scale = 0.21;
      w_star1.x = width/2-120;
      w_star1.y = height/2-50;
      w_star2.scale = 0.28;
      w_star2.x = width/2;
      w_star2.y = height/2-100;
      w_star3.scale = 0.21;
      w_star3.x = width/2+120;
      w_star3.y = height/2-50;
      levelup.visible =true; 
      boy.velocityY = boy.velocityY +1;
      if(mousePressedOver(levelup)&&gameState===Level2)
        {
          gameState = Level3;
        }

    }
  
  else if(gameState === Level3)
    {
          background(bgImg);
      levelup.visible = false;
      w_star1.visible = false;
      w_star2.visible = false;
      w_star3.visible = false;
      starboard.visible = false;
      boy.visible = false;
      chef.visible = true;
      chef.x = 100;
      chef.scale = 2;
      chef.changeAnimation("win",chefImg1);
      fruits1.visible =true;
      fruits2.visible =true;
      winplay.visible = true;
       if(soundstatus==="on")
        {
          sound1.play();

        }
      if(mousePressedOver(winplay)&&gameState ===Level3)
        {
          gameState = JUICE;
          knife.visible = false;
          fullcarrot.visible = false;
        }

    }
  
   else if(gameState === END)
    {
      background(bgImg1);
 chef.visible =false; 
       if(soundstatus==="on")
          {
            sound2.play();

          }
      bowl.visible =false;    
      bowl1.visible =false;    
      chat.visible =false;    
      go.visible =false;
      monkey.visible =false;
      statusboard.visible =false;
      fruitGroup.destroyEach();
      foodGroup.destroyEach();
      starboard.visible =false;
     // boy.changeAnimation("laughing",boyImg2);
      boy.x = width/1.45;
      w_star1.visible = false;
      w_star2.visible = false;
      w_star3.visible =false;
      levelup.visible =false; 
      boy.velocityY = boy.velocityY +1;
      gameover.visible =true;
      clock.visible =true;
      clock.scale = 0.4;
      clock.y = height/3.2;
      clock.x =  350;
      clock.changeAnimation("levelup",clockImg2);
      clock.visible =true;
      timeup.visible =true;
      replay.visible =true;
      home.visible =true;
      if(mousePressedOver(replay)&&gameState===END)
        {
          gameState = Level1;
          score =0;
          timer =0;
          secondtimer=0;
          timeup.visible =false;
      replay.visible =false;
      home.visible =false;
          gameover.visible =false;
      clock.visible =false;
           w_star1.changeAnimation("blank",w_starImg);
      w_star2.changeAnimation("blank",w_starImg);
      w_star3.changeAnimation("blank",w_starImg);
        }
      if(mousePressedOver(home)&&gameState===END)
        {
          gameState = SERVE;
          score =0;
          timer =0;
          secondtimer=0;
          timeup.visible =false;
          replay.visible =false;
          home.visible =false;
          gameover.visible =false;
          clock.visible =false;
          boy.visible = false;
           w_star1.changeAnimation("blank",w_starImg);
      w_star2.changeAnimation("blank",w_starImg);
      w_star3.changeAnimation("blank",w_starImg);
        }

    }
  else if(gameState === JUICE)
    {
      background(fruitbgImg);
      fruits1.visible =false;
      fruits2.visible =false;
      winplay.visible = false;
      chef.visible = false;
      juicer.visible =true;
       if(soundstatus==="on")
          {
            sound1.play();

          }
       if(strawberry1=== false)
        {
        starwberry.visible =true;
        }
       if(cherry1=== false)
        {
      cherry.visible =true;
        }
      if(tomato1=== false)
        {
        tomato.visible =true;
        }
       if(apple1=== false)
        {
      apple.visible =true;
        }
       if(grape1=== false)
        {
        grapes.visible =true;
        }
       if(banana1=== false)
        {
      banana.visible =true;
        }
      if(carrot1=== false)
        {
        carrot.visible =true;
        }
       if(mixed1=== false)
        {
      mixed.visible =true;
        }
       if(melon1=== false)
        {
      melon.visible =true;
        }
      chef.visible = true;
      chef.changeAnimation("start",chefImg);
       chef.x = width/2;
       chef.scale = 2.2;
      chef.y = height-370;
      juicemessage.visible =true;
        on.visible =true;
        off.visible =true;

       if(mousePressedOver(carrot)&&carrot1===false)
        { 
            fullcarrot.visible =true;
            knife.visible =true; 
            carrot1 = true;
            carrot.visible =false;
           finaljuice.visible =false;                    fullcarrot.changeAnimation("carrots",fullcarrotImg);
            knife.changeAnimation("static",knifeImg1);
            fullcarrot.scale = 0.5;
            knife.scale=0.25; 

        }
      //carrot
       if(mousePressedOver(knife)&&carrot1===true)
        {
          
        fullcarrot.changeAnimation("carrotslices",carrotslicesImg);
        knife.changeAnimation("moving",knifeImg2);
        knife.scale=0.55;
        fullcarrot.scale = 0.5;
        } 
      
       if(mousePressedOver(on)&&carrot1===true)
            {
      fullcarrot.visible = false;
      knife.visible = false;
      juicer.changeAnimation("orange",orangejuicerImg);
            } 
       if(mousePressedOver(off)&&carrot1===true)
            {
        juicer.changeAnimation("empty",juicerImg);
        finaljuice.visible =true;
        finaljuice.changeAnimation("carrot",carrotjuiceImg);
        carrot1= "empty";
            } 
      if(mousePressedOver(finaljuice))
        {
                 finaljuice.visible =false; 
        }

      
      //mixed fruits
        if(mousePressedOver(mixed)&&mixed1===false)
        { 
            fullcarrot.visible =true;
            knife.visible =true; 
            mixed1 = true;
            mixed.visible =false;
            finaljuice.visible =false;
            fullcarrot.changeAnimation("mixed",fullmixedImg);
            fullcarrot.scale = 0.2;
             knife.scale=0.25; 
             knife.changeAnimation("static",knifeImg1);

        }
      
       if(mousePressedOver(knife)&&mixed1===true)
        {                        fullcarrot.changeAnimation("mixedslices",mixedslicesImg);
        knife.changeAnimation("moving",knifeImg2);
        knife.scale=0.55; 
        } 
      
       if(mousePressedOver(on)&&mixed1===true)
            {
      fullcarrot.visible = false;
      knife.visible = false;
      juicer.changeAnimation("red",redjuicerImg);
            } 
       if(mousePressedOver(off)&&mixed1===true)
            {
        juicer.changeAnimation("empty",juicerImg);
        finaljuice.visible =true;
        finaljuice.changeAnimation("mixed",mixedjuiceImg);
        mixed1= "empty";
            } 
      if(mousePressedOver(finaljuice))
        {
                 finaljuice.visible =false; 
        }
      
      //water melon
        if(mousePressedOver(melon)&&melon1===false)
        { 
            fullcarrot.visible =true;
            knife.visible =true; 
            melon1 = true;
            melon.visible =false;
            finaljuice.visible =false;
            fullcarrot.changeAnimation("melon",fullmelonImg);
            fullcarrot.scale = 0.2;
             knife.scale=0.25; 
             knife.changeAnimation("static",knifeImg1);

        }
      
       if(mousePressedOver(knife)&&melon1===true)
        {                          fullcarrot.changeAnimation("melonslices",melonslicesImg);
        knife.changeAnimation("moving",knifeImg2);
        knife.scale=0.55; 
        } 
      
       if(mousePressedOver(on)&&melon1===true)
            {
      fullcarrot.visible = false;
      knife.visible = false;
      juicer.changeAnimation("pink",pinkjuicerImg);
            } 
       if(mousePressedOver(off)&&melon1===true)
            {
        juicer.changeAnimation("empty",juicerImg);
        finaljuice.visible =true;
        finaljuice.changeAnimation("melon",melonjuiceImg);
        melon1= "empty";
            } 
      if(mousePressedOver(finaljuice))
        {
                 finaljuice.visible =false; 
        }

      //banana
        if(mousePressedOver(banana)&&banana1===false)
        { 
            fullcarrot.visible =true;
            knife.visible =true; 
            banana1 = true;
            banana.visible =false;
            finaljuice.visible =false;
            fullcarrot.changeAnimation("banana",fullbananaImg);
            fullcarrot.scale = 0.2;
             knife.scale=0.25; 
             knife.changeAnimation("static",knifeImg1);

        }
      
       if(mousePressedOver(knife)&&banana1===true)
        {                          fullcarrot.changeAnimation("bananaslices",bananaslicesImg);
        knife.changeAnimation("moving",knifeImg2);
        knife.scale=0.55; 
        } 
      
       if(mousePressedOver(on)&&banana1===true)
            {
      fullcarrot.visible = false;
      knife.visible = false;
      juicer.changeAnimation("yellow",yellowjuicerImg);
            } 
       if(mousePressedOver(off)&&banana1===true)
            {
        juicer.changeAnimation("empty",juicerImg);
        finaljuice.visible =true;
        finaljuice.changeAnimation("banana",bananajuiceImg);
        banana1= "empty";
            } 
      if(mousePressedOver(finaljuice))
        {
                 finaljuice.visible =false; 
        }
      
      
      //cherry
        if(mousePressedOver(cherry)&&cherry1===false)
        { 
            fullcarrot.visible =true;
            knife.visible =true; 
            cherry1 = true;
            cherry.visible =false;
            finaljuice.visible =false;
            fullcarrot.changeAnimation("cherry",fullcherryImg);
            fullcarrot.scale = 0.2;
             knife.scale=0.25; 
             knife.changeAnimation("static",knifeImg1);

        }
      
       if(mousePressedOver(knife)&&cherry1===true)
        {                          fullcarrot.changeAnimation("cherryslices",cherryslicesImg);
        knife.changeAnimation("moving",knifeImg2);
        knife.scale=0.55; 
        } 
      
       if(mousePressedOver(on)&&cherry1===true)
            {
      fullcarrot.visible = false;
      knife.visible = false;
      juicer.changeAnimation("red",redjuicerImg);
            } 
       if(mousePressedOver(off)&&cherry1===true)
            {
        juicer.changeAnimation("empty",juicerImg);
        finaljuice.visible =true;
        finaljuice.changeAnimation("cherry",cherryjuiceImg);
        cherry1= "empty";
            } 
      if(mousePressedOver(finaljuice))
        {
                 finaljuice.visible =false; 
        }

      //apple
        if(mousePressedOver(apple)&&apple1===false)
        { 
            fullcarrot.visible =true;
            knife.visible =true; 
            apple1 = true;
            apple.visible =false;
            finaljuice.visible =false;
            fullcarrot.changeAnimation("apple",fullappleImg);
            fullcarrot.scale = 0.2;
             knife.scale=0.25; 
             knife.changeAnimation("static",knifeImg1);

        }
      
       if(mousePressedOver(knife)&&apple1===true)
        {                          fullcarrot.changeAnimation("appleslices",appleslicesImg);
        knife.changeAnimation("moving",knifeImg2);
        knife.scale=0.55; 
        } 
      
       if(mousePressedOver(on)&&apple1===true)
            {
      fullcarrot.visible = false;
      knife.visible = false;
      juicer.changeAnimation("red",redjuicerImg);
            } 
       if(mousePressedOver(off)&&apple1===true)
            {
        juicer.changeAnimation("empty",juicerImg);
        finaljuice.visible =true;
        finaljuice.changeAnimation("apple",applejuiceImg);
        apple1= "empty";
            } 
      if(mousePressedOver(finaljuice))
        {
                 finaljuice.visible =false; 
        }
      //tomato
        if(mousePressedOver(tomato)&&tomato1===false)
        { 
            fullcarrot.visible =true;
            knife.visible =true; 
            tomato1 = true;
            tomato.visible =false;
            finaljuice.visible =false;
            fullcarrot.changeAnimation("tomato",fulltomatoImg);
            fullcarrot.scale = 0.2;
             knife.scale=0.25; 
             knife.changeAnimation("static",knifeImg1);

        }
      
       if(mousePressedOver(knife)&&tomato1===true)
        {                          fullcarrot.changeAnimation("tomatoslices",tomatoslicesImg);
        knife.changeAnimation("moving",knifeImg2);
        knife.scale=0.55; 
        } 
      
       if(mousePressedOver(on)&&tomato1===true)
            {
      fullcarrot.visible = false;
      knife.visible = false;
      juicer.changeAnimation("orange",orangejuicerImg);
            } 
       if(mousePressedOver(off)&&tomato1===true)
            {
        juicer.changeAnimation("empty",juicerImg);
        finaljuice.visible =true;
        finaljuice.changeAnimation("tomato",tomatojuiceImg);
        tomato1= "empty";
            } 
      if(mousePressedOver(finaljuice))
        {
                 finaljuice.visible =false; 
        }

     //strawberry
        if(mousePressedOver(starwberry)&&strawberry1===false)
        { 
            fullcarrot.visible =true;
            knife.visible =true; 
            strawberry1 = true;
            starwberry.visible =false;
            finaljuice.visible =false;
            fullcarrot.changeAnimation("strawberry",fullstrawberryImg);
            fullcarrot.scale = 0.2;
             knife.scale=0.25; 
             knife.changeAnimation("static",knifeImg1);

        }
      
       if(mousePressedOver(knife)&&strawberry1===true)
        {                          fullcarrot.changeAnimation("strawberryslices",strawberryslicesImg);
        knife.changeAnimation("moving",knifeImg2);
        knife.scale=0.55,
          strawberryslices.scale=0.35;
        } 
      
       if(mousePressedOver(on)&&strawberry1===true)
            {
      fullcarrot.visible = false;
      knife.visible = false;
      juicer.changeAnimation("red",redjuicerImg);
            } 
       if(mousePressedOver(off)&&strawberry1===true)
            {
        juicer.changeAnimation("empty",juicerImg);
        finaljuice.visible =true;
        finaljuice.changeAnimation("strawberry",strawberryjuiceImg);
        strawberry1= "empty";
            } 
      if(mousePressedOver(finaljuice))
        {
                 finaljuice.visible =false; 
        }
         //grapes
        if(mousePressedOver(grapes)&&grape1===false)
        { 
            fullcarrot.visible =true;
            knife.visible =true; 
            grape1 = true;
            grapes.visible =false;
            finaljuice.visible =false;
            fullcarrot.changeAnimation("grape",fullgrapeImg);
            fullcarrot.scale = 0.2;
             knife.scale=0.25; 
             knife.changeAnimation("static",knifeImg1);

        }
      
       if(mousePressedOver(knife)&&grape1===true)
        {                          fullcarrot.changeAnimation("grapeslices",grapeslicesImg);
        knife.changeAnimation("moving",knifeImg2);
        knife.scale=0.55; 
        } 
      
       if(mousePressedOver(on)&&grape1===true)
            {
      fullcarrot.visible = false;
      knife.visible = false;
      juicer.changeAnimation("purple",purplejuicerImg);
            } 
       if(mousePressedOver(off)&&grape1===true)
            {
        juicer.changeAnimation("empty",juicerImg);
        finaljuice.visible =true;
        finaljuice.changeAnimation("grapes",grapejuiceImg);
        grape1= "empty";
            } 
      if(mousePressedOver(finaljuice))
        {
                 finaljuice.visible =false; 
        }
      
      if(carrot1==="empty"&&mixed1==="empty"&&melon1==="empty"&&apple1==="empty"&&cherry1==="empty"&&grape1==="empty"&&tomato1==="empty"&&banana1==="empty"&&strawberry1==="empty")
        {
         gameState=PLAY ;
          finaljuice.visible =false;
          juicer.visible =false; 
          on.visible =false;
          off.visible =false;
          juicemessage.visible =false;
          score =0;
          timer =0;
          secondtimer=0;
          carrot1 = false;
          mixed1 = false;
          melon1 = false;
          apple1 = false;
          grape1 = false;
          tomato1 = false;
          banana1 = false;
          strawberry1 = false;

        }
    }
    
    
boy.collide(invisibleground); 

drawSprites();
 if(gameState ===Level1)
          {
  textSize(46)
  fill("orange")
  textStyle(BOLDITALIC);
  textFont('Helvetica');
  text(score+" / 30 ",330,75);
  textSize(36)
  fill("purple")
  text(timer+" / 60 ",width-150,195);

          }
}



function game2()
{
welcomeimage.visible =false;
boat.visible =false;  
playbutton.visible =false;  
one.visible =false;  
two.visible =false;  
three.visible =false; 
}

function game3()
{
      chef.visible =false;  
      bowl.visible =false;    
      bowl1.visible =false;    
      chat.visible =false;    
      go.visible =false;
      monkey.visible =false;
      statusboard.visible =false;
      clock.visible =false;

}

function createfruits() {
  if (World.frameCount % 60 == 0) 
  {
  fruit = createSprite(Math.round(random(150, width-150),100, 10,10));
  fruitcount = Math.round(random(1,6));
    switch(fruitcount) 
    {
      case 1: fruit.addImage(fruitImg);
      var rand5 = Math.round(random(1,3));
        switch(rand5)
          {
            case 1:fruit.scale=0.3;
              break;
            case 2:fruit.scale=0.2;
              break;
            case 3:fruit.scale=0.14;
              break;
      default: break;
          }
              break;
      case 2: fruit.addImage(fruitImg1);
 var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
            case 1:fruit.scale=0.3;
              break;
            case 2:fruit.scale=0.2;
              break;
            case 3:fruit.scale=0.17;
              break;
      default: break;

          }
              break;
      case 3: fruit.addImage(fruitImg2);
 var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
            case 1:fruit.scale=0.3;
              break;
            case 2:fruit.scale=0.2;
              break;
            case 3:fruit.scale=0.12;
              break;
      default: break;

          }
              break;
      case 4: fruit.addImage(fruitImg3);
 var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
            case 1:fruit.scale=0.3;
              break;
            case 2:fruit.scale=0.2;
              break;
            case 3:fruit.scale=0.15;
              break;
      default: break;

          }
              break;
      case 5: fruit.addImage(fruitImg4);
        var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
            case 1:fruit.scale=0.1;
              break;
            case 2:fruit.scale=0.2;
              break;
            case 3:fruit.scale=0.15;
              break;
      default: break;

          }

              break;
      case 6: fruit.addImage(fruitImg5);
        var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
            case 1:fruit.scale=0.3;
              break;
            case 2:fruit.scale=0.5;
              break;
            case 3:fruit.scale=0.2;
              break;
            default: break;

          }
              break;
    default: break;
    }
  fruit.velocityY = 2;
  fruit.lifetime = 250;
    fruit.depth = 1;
  fruitGroup.add(fruit);
  }
}

function createfood() {
  if (World.frameCount % 60 == 0) 
  {
  food = createSprite(Math.round(random(0, width),100, 10,10));
  var foodcount = Math.round(random(1,6));
    console.log(foodcount);
    switch(foodcount) 
    {
      case 1: food.addImage(foodImg);
      var rand5 = Math.round(random(1,3));
        switch(rand5)
          {
            case 1:food.scale=0.3;
              break;
            case 2:food.scale=0.2;
              break;
            case 3:food.scale=0.14;
              break;
      default: break;
          }
              break;
      case 2: food.addImage(foodImg1);
 var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
            case 1:food.scale=0.3;
              break;
            case 2:food.scale=0.2;
              break;
            case 3:food.scale=0.17;
              break;
      default: break;

          }
              break;
      case 3: food.addImage(foodImg2);
 var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
            case 1:food.scale=0.3;
              break;
            case 2:food.scale=0.2;
              break;
            case 3:food.scale=0.12;
              break;
      default: break;

          }
              break;
      case 4: food.addImage(foodImg3);
 var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
            case 1:food.scale=0.3;
              break;
            case 2:food.scale=0.2;
              break;
            case 3:food.scale=0.15;
              break;
      default: break;

          }
              break;
      case 5: food.addImage(foodImg4);
        var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
            case 1:food.scale=0.1;
              break;
            case 2:food.scale=0.2;
              break;
            case 3:food.scale=0.15;
              break;
      default: break;

          }

              break;
      case 6: food.addImage(foodImg5);
        var rand5 = Math.round(random(1,3));

        switch(rand5)
          {
            case 1:food.scale=0.2;
              break;
            case 2:food.scale=0.1;
              break;
            case 3:food.scale=0.05;
              break;
            default: break;

          }
              break;
    default: break;
    }
  food.velocityY = 2;
  food.lifetime = 250;
  food.depth = 1;
  foodGroup.add(food);
  }
}