$(document).ready(function() {
  $("#expedition").click(function() {
  //Mining
    var T1M = parseInt($('#t1m').val());
    var T2M = parseInt($('#t2m').val());
    var T3M = parseInt($('#t3m').val());
    var T4M = parseInt($('#t4m').val());
    var T5M = parseInt($('#t5m').val());
    //Gathering
    var T1G = parseInt($('#t1g').val());
    var T2G = parseInt($('#t2g').val());
    var T3G = parseInt($('#t3g').val());
    var T4G = parseInt($('#t4g').val());
    var T5G = parseInt($('#t5g').val());
    //Woodcutting
    var T1W = parseInt($('#t1w').val());
    var T2W = parseInt($('#t2w').val());
    var T3W = parseInt($('#t3w').val());
    var T4W = parseInt($('#t4w').val());
    var T5W = parseInt($('#t5w').val());
    //Fishing
    var T1F = parseInt($('#t1f').val());
    var T2F = parseInt($('#t2f').val());
    var T3F = parseInt($('#t3f').val());
    var T4F = parseInt($('#t4f').val());
    var T5F = parseInt($('#t5f').val());
    //Boosts
    var GEMB = parseInt($('#gemb').val());
    var RELICB = parseInt($('#relicb').val());
    var KEYB = parseInt($('#keyb').val());
    var ORBB = parseInt($('#orbb').val());
    var SCROLLB = parseInt($('#scrollb').val());
    var TIMEB = parseInt($('#timeb').val());
    //Prices
    var GEMP = parseInt($('#gemp').val());
    var RELICP = parseInt($('#relicp').val());
    //var ORBP = parseInt($('#orbp').val());
    //var SCROLLB = parseInt($('#scrollb').val());
    var KEYP = 0.0081*GEMP + 1.164*RELICP + 17.625*45 + 1120.587675;
    //Buildings
    var INN = parseInt($('#inn').val()); // 3% per inn MULTIPLIED!
    var ADVGUILD = parseInt($('#advguild').val());
    //Heroes
    var WARRIOR = parseInt($('#warrior').val());
    var HUNTER = parseInt($('#hunter').val());
    var MAGE = parseInt($('#mage').val());
    var HEALER = parseInt($('#healer').val());
    var OUTPUT = [];
    var HEROES = [];
    HEROES[1] = WARRIOR;
    HEROES[2] = HUNTER;
    HEROES[3] = MAGE;
    HEROES[4] = HEALER;
    var GEMMIN = 0;
    var GEMMAX = 0;
    var RELICMIN = 0;
    var RELICMAX = 2;
    var KEYMIN = 0;
    var KEYMAX = 0;
    var ORBMIN = 0;
    var ORBMAX = 0;
    var SCROLLMIN = 0;
    var SCROLLMAX = 0;
    function Resources(i){
      switch(HEROES[i]){
        case 1:
          HEROES[i]=Math.min(T1M,T1G,T1W,T1F);
          switch(Math.min(T1M,T1G,T1W,T1F)){
            case T1M:
              $("#t1m").css("color", "green");
              break;
            case T1G:
              $("#t1g").css("color", "green");
              break;
            case T1W:
              $("#t1w").css("color", "green");
              break;
            case T1F:
              $("#t1f").css("color", "green");
              break;
          }
          break;
        case 2:
          HEROES[i]=Math.min(T2M,T2G,T2W,T2F);
          switch(Math.min(T2M,T2G,T2W,T2F)){
            case T2M:
              $("#t2m").css("color", "green");
              break;
            case T2G:
              $("#t2g").css("color", "green");
              break;
            case T2W:
              $("#t2w").css("color", "green");
              break;
            case T2F:
              $("#t2f").css("color", "green");
              break;
          }
          break;
        case 3:
          HEROES[i]=Math.min(T3M,T3G,T3W,T3F);
          switch(Math.min(T3M,T3G,T3W,T3F)){
            case T3M:
              $("#t3m").css("color", "green");
              break;
            case T3G:
              $("#t3g").css("color", "green");
              break;
            case T3W:
              $("#t3w").css("color", "green");
              break;
            case T3F:
              $("#t3f").css("color", "green");
              break;
          }
          break;
        case 4:
          HEROES[i]=Math.min(T4M,T4G,T4W,T4F);
          switch(Math.min(T4M,T4G,T4W,T4F)){
            case T4M:
              $("#t4m").css("color", "green");
              break;
            case T4G:
              $("#t4g").css("color", "green");
              break;
            case T3W:
              $("#t4w").css("color", "green");
              break;
            case T4F:
              $("#t4f").css("color", "green");
              break;
          }
          break;
        case 5:
          HEROES[i]=Math.min(T5M,T5G,T5W,T5F);
          switch(Math.min(T5M,T5G,T5W,T5F)){
            case T5M:
              $("#t5m").css("color", "green");
              break;
            case T5G:
              $("#t5g").css("color", "green");
              break;
            case T5W:
              $("#t5w").css("color", "green");
              break;
            case T5F:
              $("#t5f").css("color", "green");
              break;
          }
          break;
      }
      switch()
    }
    function Warrior(){
      
    }
    function Hunter(){
      
    }
    function Mage(){
      
    }
    function Healer(){
      
    }
    for(i=1;i<=5;i++){
      Resources(i);
    }
    for(i=1;i<=ADVGUILD;i++){
      var CWARRIOR = Warrior();
      var CHUNTER = Hunter();
      var CMAGE = Mage();
      var CHEALER = Healer();
    }
    
  });
});
