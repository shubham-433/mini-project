console.log("Welcome")
const TypeWriter=function(txtElement,words,wait=3000){
    this.txtElement=txtElement;
    this.words=words;
    this.txt='';
    this.wordIndex=0;
    this.wait=parseInt(wait,10);
    this.type();
    this.isDeleting =false;
}
// type method
TypeWriter.prototype.type=function(){
    // console.log("hello")
    // current index of world 
    const current=this.wordIndex % this.words.length;
    // console.log(current)
    // get full text of currnt world
 const fulltxt=this.words[current]
 
//  to check if deleting
if(this.isDeleting){
    // Remvoe a character 
    this.txt=fulltxt.substring(0,this.txt.length- 1);
}else{
    // add character 
    this.txt=fulltxt.substring(0,this.txt.length+1);
}
// insert txt into element 
this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`;
// initial typeSpeed
let typeSpeed=100;
if(this.isDeleting){
    typeSpeed /=2;

}
if(!this.isDeleting && this.txt==fulltxt){
    // pause after word completee 
    typeSpeed=this.wait;
    this.isDeleting=true;
}else if(this.isDeleting && this.txt==''){
    this.isDeleting=false;
    // maove next word 
    this.wordIndex++;
    // paure before start typeing 
    typeSpeed=1000
}


//  console.log(fulltxt)
    setTimeout(()=>this.type(),typeSpeed);
}

// init on dom load
document.addEventListener('DOMContentLoaded',init);

// init app 
function init(){
    const txtElement=document.querySelector('.txt-type');
    const words=JSON.parse(txtElement.getAttribute('data-words'));
    const wait= txtElement.getAttribute('data-wait');
    
    // Init TypeWriter
    new TypeWriter(txtElement,words,wait);
}

