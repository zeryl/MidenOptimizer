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
    var GEMB = parseInt($('gemb').val());
    var RELICB = parseInt($('relicb').val());
    var KEYB = parseInt($('keyb').val());
    var ORBB = parseInt($('orbb').val());
    var SCROLLB = parseInt($('scrollb').val());
    var TIMEB = parseInt($('timeb').val());
    //Prices
    var GEMP = parseInt($('gemp').val());
    var RELICP = parseInt($('relicp').val());
    var KEYP = 0.0081*GEMP + 1.164*RELICP + 17.625*45 + 1120.587675;
    //Buildings
    var INN = parseInt($('inn').val()); // 3% per inn MULTIPLIED!
    var ADVGUILD = parseInt($('advguild').val());
  });
});
