var countTarget=document.querySelector("#word-count-input");
var wordCount=document.querySelector("#word-count");
var characterCount=
document.querySelector("#character-Count");

var count=function()
{
  var characters = countTarget.value;
  var characterLength=characters.length;
  var words=
  characters.split(/[nrs]+/g).filter(function(word)
  {
   return word.length>0;
 });
 wordCount.innerHTML=words.length;
 characterCount.innerHTML=characterLength;
};
 count();
 window.addEventListener(
   "input",
   function(even){
     if(event.target.matches("#word-count-input")){
       count();
     }
   },
   false
 );
