
let volume;

var mycol;


function preload(){
  // put preload code here

  giallo = loadImage("/assets/images/giallo.png")
  blu = loadImage("/assets/images/blu.png")
  arancio = loadImage("/assets/images/arancio.png")
  rosso = loadImage("/assets/images/rosso.png")
  verde = loadImage("/assets/images/verde.png")
  viola = loadImage("/assets/images/viola.png")
  sgiallo= loadSound("/assets/music/lag.mp3")
  sverde= loadSound("/assets/music/cage.mp3")
  sblu= loadSound("/assets/music/arctic.mp3")
  sviola= loadSound("/assets/music/nosu.mp3")
  srosso= loadSound("/assets/music/sweet.mp3")
  sarancio= loadSound("/assets/music/bombay.mp3")

}

function setup() {
  createCanvas(windowWidth,windowHeight)
  fft = new p5.FFT();
  imageMode(CENTER)


 }


function draw() {
  // put drawing code here
  let waveform = fft.waveform();
  background(0)
  image(giallo, windowWidth/3, 100, giallo.width/4, giallo.height/4);
  image(verde, windowWidth/3*2, 100, verde.width/4, verde.height/4);
  image(viola, windowWidth/3, 350, viola.width/4, viola.height/4);
  image(rosso, windowWidth/3*2, 350, rosso.width/4, rosso.height/4);
  image(blu, windowWidth/3, 600, blu.width/4, blu.height/4);
  image(arancio, windowWidth/3*2, 600, arancio.width/4, arancio.height/4);

  testo=''
  testo1=''
  let collone

//INIZIO IF




  if ( mouseX> windowWidth/3 - (giallo.width)/7  && mouseX < windowWidth/3 + (giallo.width)/7 && mouseY>100 - giallo.height/8 && mouseY< 100+giallo.height/8){
    testo="LA GATTA"
    testo1="GINO PAOLI"
    image(giallo, windowWidth/3, 100, giallo.width/4+50, giallo.height/4+50);
    mycol='yellow'
    apparelinea()
    createsto()
    if(sgiallo.isPlaying()==false){
    sgiallo.play()}}
    else {
    sgiallo.stop()
    testo="";
    testo1="";  }

    if ( mouseX> windowWidth/3*2 - (giallo.width)/7  && mouseX< windowWidth/3*2 + (giallo.width)/7  && mouseY>100 - giallo.height/8 && mouseY< 100+giallo.height/8){
      testo="THELESCOPE"
      testo1="CAGE THE ELEPHANT"
      image(verde, windowWidth/3*2, 100, verde.width/4+50, verde.height/4+50);
      mycol='#aaffaa'
      apparelinea()
      createsto()
      if(sverde.isPlaying()==false){
      sverde.play()
      testo="";
      testo1="";
    }}
      else {
      sverde.stop()}


      if ( mouseX> windowWidth/3 - (giallo.width)/7  && mouseX < windowWidth/3 + (giallo.width)/7 && mouseY>350 - giallo.height/8 && mouseY< 350+giallo.height/8){
        testo="NO SURPRISES"
        testo1="RADIOHEAD"
        image(viola, windowWidth/3, 350, giallo.width/4+50, giallo.height/4+50);
        mycol='#ff33cc'
        apparelinea()
        createsto()
        if(sviola.isPlaying()==false){
        sviola.play()
        testo="";
        testo1=""; }}
        else {
        sviola.stop()
     }


     if ( mouseX> windowWidth/3*2 - (giallo.width)/7  && mouseX< windowWidth/3*2 + (giallo.width)/7  && mouseY>350 - giallo.height/8 && mouseY< 350+giallo.height/8){
       testo="SWEET DISPOSITION"
       testo1="TEMPER TRAP"
       image(rosso, windowWidth/3*2, 350, verde.width/4+50, verde.height/4+50);
       mycol='#FF0000'
       apparelinea()
       createsto()
       if(srosso.isPlaying()==false){
       srosso.play()
       testo="";
       testo1="";
     }}
       else {
       srosso.stop()}

     if ( mouseX> windowWidth/3 - (giallo.width)/7  && mouseX < windowWidth/3 + (giallo.width)/7 && mouseY>600 - giallo.height/8 && mouseY< 600+giallo.height/8){
       testo="No. 1 PARTY ANTHEM"
       testo1="ARCTIC MONKEYS"
       image(blu, windowWidth/3, 600, giallo.width/4+50, giallo.height/4+50);
       mycol='#3399ff'
       apparelinea()
       createsto()
       if(sblu.isPlaying()==false){
       sblu.play()
       testo="";
       testo1=""; }}
       else {
       sblu.stop()
    }


    if ( mouseX> windowWidth/3*2 - (giallo.width)/7  && mouseX< windowWidth/3*2 + (giallo.width)/7  && mouseY>600 - giallo.height/8 && mouseY< 600+giallo.height/8){
      testo="ALWAYS LIKE THIS"
      testo1="BOMBAY BICICLE CLUB"
      image(arancio, windowWidth/3*2, 600, verde.width/4+50, verde.height/4+50);
      mycol='#FF6600'
      apparelinea()
      createsto()
      if(sarancio.isPlaying()==false){
      sarancio.play()
      testo="";
      testo1="";
    }}
      else {
      sarancio.stop()}





// TESTO
       textFont("Syne Mono");
      textSize(15)
      fill(255,255,255,80)
      textAlign(LEFT)
      text('People in the apartment finish their day with music: ', 0, 20)

function createsto(){
textAlign(CENTER)
       textSize(30)
       fill(mycol);
       text(testo, 1300,610)
       textSize(15)
       text(testo1, 1300,630)}


    //CREA LINEA
    function apparelinea(){
      push();
      let waveform = fft.waveform();
      noStroke()
      fill(mycol);
      // strokeWeight(1);
      beginShape();
      for (var i = 0; i < waveform.length; i+=15){
        let x = map(i, 0, waveform.length, 0, 300);
        let y = map(waveform[i], -2, 2, 0, 200);
        // curveVertex(x+width/6*4+50,y+350)
        ellipse(x+1150,y+450,4)
      }
      endShape();
      pop();
    }

//INFO CANZONE


}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
