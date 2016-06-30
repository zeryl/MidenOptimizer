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
        var RRES = 0;
        var GRES = 0;
        var RLUCK = 0;
        var RDROP = 0;
        var GDROP = 0;
        function Current() {
            var EFF_LEVEL= LEVEL+EFF+RRES;
            var T1 = (1+EFF_LEVEL)*(1+(1/KRES))*(1+(1/GRES));
            var T2 = (1+EFF_LEVEL*(Math.pow(0.67,1)))*(1+(1/KRES))*(1+(1/GRES))*2;
            var T3 = (1+EFF_LEVEL*(Math.pow(0.67,2)))*(1+(1/KRES))*(1+(1/GRES))*4;
            var T4 = (1+EFF_LEVEL*(Math.pow(0.67,3)))*(1+(1/KRES))*(1+(1/GRES))*5;
            var T5 = (1+EFF_LEVEL*(Math.pow(0.67,4)))*(1+(1/KRES))*(1+(1/GRES))*10;
            var CT1 = (0.90+KLUCK+RLUCK);
            if(CT1>1){CT1=1;}
            var CT2 = (0.60+(KLUCK+RLUCK)*(Math.pow(0.67,1)));
            if(CT1>1){CT1=1;}
            var CT1 = (0.30+(KLUCK+RLUCK)*(Math.pow(0.67,2)));
            if(CT1>1){CT1=1;}
            var CT1 = (0.15+(KLUCK+RLUCK)*(Math.pow(0.67,3)));
            if(CT1>1){CT1=1;}
            var CT1 = (0.05+(KLUCK+RLUCK)*(Math.pow(0.67,4)));
            if(CT1>1){CT1=1;}
        }
        var VALUE_BEFORE = RINVESTED*RELICP+GINVESTED*GEMP ;
        var VALUE_AFTER = 0;
        function RelicRes() {
            
        }
        function Optimize() {
            var RRES = RelicRes();
            var GRES = GemRes();
            var RLUCK = ResLuck();
            var RDROP = RelicDrop();
            var GDROP = GemDrop();
        }
        while(VALUE_BEFORE<VALUE_AFTER){
            var CURRENT = Current();
            Optimize();
        }
        $("#rres").html(GLEVEL);
        $("#gres").html('0');
        $("#rluck").html('0');
        $("#rdrop").html('0');
        $("#gdrop").html('0');
});
});
