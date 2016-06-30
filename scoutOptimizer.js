var GLEVEL = document.getElementById('glevel');
var LEVEL = document.getElementById('level');
var XP = document.getElementById('xp');
var EFF = document.getElementById('eff');
var KRES = document.getElementById('kres');
var KLUCK = document.getElementById('kluck');
var RELIC = document.getElementById('relic');
var RINVESTED = document.getElementById('rinvested');
var GINVESTED = document.getElementById('ginvested');
var RELICP = document.getElementById('relicp');
var GEMP = document.getElementById('gemp');

$(document).ready(function() {
    $("#scout").click(function() {
        var GLEVEL = $('#glevel').val();
        var LEVEL = $('#level').val();
        var XP = $('#xp').val();
        var EFF = $('#eff').val();
        var KRES = $('#kres').val();
        var KLUCK = $('#kluck').val();
        var RELIC = $('#relic').val();
        var RINVESTED = $('#rinvested').val();
        var GINVESTED = $('#ginvested').val();
        var RELICP = $('#relicp').val();
        var GEMP = $('#gemp').val();
        $("#rres").html(GLEVEL);
        $("#gres").html('0');
        $("#rluck").html('0');
        $("#rdrop").html('0');
        $("#gdrop").html('0');
});
});
