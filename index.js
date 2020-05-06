class Formatter {
  static capitalize(str){
    let upper = str.charAt(0).toUpperCase();
    str = str.slice(1);
    return upper+str;
  }
  static sanitize(str){
    return str.replace(/\W/g, '');
  }
  static titleize(str){
    let words = str.split(" ");
    for(let i = 0; i<words.length;i++){
      console.log(words[i])
      if(i == 0){
        words[i] = Formatter.capitalize(words[i]);
      }
      if(words[i]== "a"|| words[i]=="an"|| words[i]=="the"|| words[i]=="but"|| words[i]=="of"|| words[i]=="and"|| words[i]=="for"|| words[i]=="at"|| words[i]=="by"|| words[i]=="from"){

      }
      else{
        words[i] = Formatter.capitalize(words[i]);
      }
    }
    words = words.join(" ");
    return words;
  }
}