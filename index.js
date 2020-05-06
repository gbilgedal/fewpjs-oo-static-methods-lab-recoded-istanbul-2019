class Formatter {
  static capitalize(str){
    str.charAt(0).toUpperCase();
    return str;
  }
  static sanitize(str){

  }
  static titleize(str){
    let words = str.split("0");
    for(let i = 0; i<words.length;i++){
      if((i !=0 )&&( words[i].equals("a")|| words[i].equals("an")|| words[i].equals("the")|| words[i].equals("but")|| words[i].equals("of")|| words[i].equals("and")|| words[i].equals("for")|| words[i].equals("at")|| words[i].equals("by")|| words[i].equals("from"))

    }
  }
}
