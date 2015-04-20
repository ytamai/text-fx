'use strict';
window.onload=function(){
 // initial countdown
 var config={
   today:new Date(),
   end:new Date(2015,4,17,23,59,0),
   word:{
     before:'あと',
     after:'日',
     final:'本日まで',
     ended:'終了'
   }
 };




 function isNumber(x){
   if(typeof(x)!='number' && typeof(x)!='string'){
     return false;
   }else{
     return (x==parseFloat(x) && isFinite(x));
   }
 }
 function getRandomWord(len){
   var rw='あと?日0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var rwLen=rw.length-1;
   function getRandomNum(l){
     return Math.floor(Math.random()*(l+1));
   }
   var result='';
   if(len>1){
     for (var i=len;i>0;i--){
       result+=String(rw.charAt(getRandomNum(rwLen)));
     }
   }
   return result;
 }

 // flash
 function atata(target,time,word){
   var defaultText=String(word);
   var len=defaultText.length;
   function setText(some,bool){
     var result='';
     for(var i =0,n=some.length;i<n;i++){
       var text=some.charAt(i);
       var isNum=isNumber(some.charAt(i));
       if(isNum===bool){
         text='<strong class="'+bool+'">'+text+'</strong>';
       }
       result+=text;
     }
     return result;
   }
   setTimeout(function(){
     clearInterval(interval);
     if(defaultText!==config.word.final && defaultText!==config.word.ended){
       target.innerHTML=setText(defaultText,true);
     }else{
       target.innerHTML=setText(defaultText,false);
     }
   },time);
   var interval=setInterval(function(){
     ulyyyyyy();
   },10);
   function ulyyyyyy(){
     var w=getRandomWord(len);
     if(w){
       target.innerHTML='<strong>'+getRandomWord(len)+'</strong>';
     }
   }
   return false;
 }

 var countdown=config.end.getDate()-config.today.getDate();

 var word;
   if(countdown===0){
     word=config.word.final;
   }else if(countdown>0){
     word=config.word.before+countdown+config.word.after;
   }else{
     word=config.word.end;
   }
 var flashBox = document.getElementById('fxbox'),
     flash    = document.getElementById('fxcontent');

 // eventlistner
 if(flashBox.addEventListener){
   flashBox.addEventListener('mouseover',function(){
     atata(flash,200,word);
   });
 }else if(flashBox.attachEvent){
   flashBox.attachEvent('onmouseover',function(){
     atata(flash,200,word);
   });
 }
 // initial event
 atata(flash,2000,word);
};