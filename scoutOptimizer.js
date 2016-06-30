$(document).ready(function() {
    $("#scout").click(function() {
        var GLEVEL = parseInt($('#glevel').val());
        var LEVEL = parseInt($('#level').val());
        var XP = parseInt($('#xp').val());
        var EFF = parseInt($('#eff').val());
        var KRES = parseInt($('#kres').val());
        var KLUCK = parseInt($('#kluck').val());
        var RELIC = parseInt($('#relic').val());
        var RINVESTED = parseInt($('#rinvested').val());
        var GINVESTED = parseInt($('#ginvested').val());
        var RELICP = parseInt($('#relicp').val());
        var GEMP = parseInt($('#gemp').val());
        var RRES = 0;
        var GRES = 0;
        var RLUCK = 0;
        var RDROP = 0;
        var GDROP = 0;
        var VALUE_BEFORE = RINVESTED*RELICP+GINVESTED*GEMP ;
        var VALUE_AFTER = (((XP/0.2)*(XP/0.2 + 1))/2)*RELICP;
        function Current() {
            var EFF_LEVEL= (LEVEL+EFF+RRES)/100;
            var T1 = (1+EFF_LEVEL)*(1+(KRES/100))*(1+(GRES/100));
            var T2 = (1+EFF_LEVEL*(Math.pow(0.67,1)))*(1+(KRES/100))*(1+(GRES/100))*2;
            var T3 = (1+EFF_LEVEL*(Math.pow(0.67,2)))*(1+(KRES/100))*(1+(GRES/100))*4;
            var T4 = (1+EFF_LEVEL*(Math.pow(0.67,3)))*(1+(KRES/100))*(1+(GRES/100))*5;
            var T5 = (1+EFF_LEVEL*(Math.pow(0.67,4)))*(1+(KRES/100))*(1+(GRES/100))*10;
            var CT1 = (0.90+KLUCK/100+RLUCK/100);
            if(CT1>1){CT1=1;}
            var CT2 = (0.60+(KLUCK/100+RLUCK/100)*(Math.pow(0.67,1)));
            if(CT2>1){CT2=1;}
            var CT3 = (0.30+(KLUCK/100+RLUCK/100)*(Math.pow(0.67,2)));
            if(CT3>1){CT3=1;}
            var CT4 = (0.15+(KLUCK/100+RLUCK/100)*(Math.pow(0.67,3)));
            if(CT4>1){CT4=1;}
            var CT5 = (0.05+(KLUCK/100+RLUCK/100)*(Math.pow(0.67,4)));
            if(CT5>1){CT5=1;}
            console.log("T5");
            console.log(T5);
            console.log("CT5");
            console.log(CT5);
            console.log("CT5*T5");
            console.log(T5*CT5);
            return (T1*CT1+T2*CT2+T3*CT3+T4*CT4+T5*CT5);
        }
        function RelicRes() {
            var EFF_LEVEL= (LEVEL+EFF+RRES+1.5)/100;
            var T1 = (1+EFF_LEVEL)*(1+(KRES/100))*(1+(GRES/100));
            var T2 = (1+EFF_LEVEL*(Math.pow(0.67,1)))*(1+(KRES/100))*(1+(GRES/100))*2;
            var T3 = (1+EFF_LEVEL*(Math.pow(0.67,2)))*(1+(KRES/100))*(1+(GRES/100))*4;
            var T4 = (1+EFF_LEVEL*(Math.pow(0.67,3)))*(1+(KRES/100))*(1+(GRES/100))*5;
            var T5 = (1+EFF_LEVEL*(Math.pow(0.67,4)))*(1+(KRES/100))*(1+(GRES/100))*10;
            var CT1 = (0.90+KLUCK/100+RLUCK/100);
            if(CT1>1){CT1=1;}
            var CT2 = (0.60+(KLUCK/100+RLUCK/100)*(Math.pow(0.67,1)));
            if(CT2>1){CT2=1;}
            var CT3 = (0.30+(KLUCK/100+RLUCK/100)*(Math.pow(0.67,2)));
            if(CT3>1){CT3=1;}
            var CT4 = (0.15+(KLUCK/100+RLUCK/100)*(Math.pow(0.67,3)));
            if(CT4>1){CT4=1;}
            var CT5 = (0.05+(KLUCK/100+RLUCK/100)*(Math.pow(0.67,4)));
            if(CT5>1){CT5=1;}
            return (T1*CT1+T2*CT2+T3*CT3+T4*CT4+T5*CT5);
        }
        function GemRes() {
            var EFF_LEVEL= (LEVEL+EFF+RRES)/100;
            var T1 = (1+EFF_LEVEL)*(1+(KRES/100))*(1+(GRES/100));
            var T2 = (1+EFF_LEVEL*(Math.pow(0.67,1)))*(1+(KRES/100))*(1.01+(GRES/100))*2;
            var T3 = (1+EFF_LEVEL*(Math.pow(0.67,2)))*(1+(KRES/100))*(1,01+(GRES/100))*4;
            var T4 = (1+EFF_LEVEL*(Math.pow(0.67,3)))*(1+(KRES/100))*(1.01+(GRES/100))*5;
            var T5 = (1+EFF_LEVEL*(Math.pow(0.67,4)))*(1+(KRES/100))*(1.01+(GRES/100))*10;
            var CT1 = (0.90+KLUCK/100+RLUCK/100);
            if(CT1>1){CT1=1;}
            var CT2 = (0.60+(KLUCK/100+RLUCK/100)*(Math.pow(0.67,1)));
            if(CT2>1){CT2=1;}
            var CT3 = (0.30+(KLUCK/100+RLUCK/100)*(Math.pow(0.67,2)));
            if(CT3>1){CT3=1;}
            var CT4 = (0.15+(KLUCK/100+RLUCK/100)*(Math.pow(0.67,3)));
            if(CT4>1){CT4=1;}
            var CT5 = (0.05+(KLUCK/100+RLUCK/100)*(Math.pow(0.67,4)));
            if(CT5>1){CT5=1;}
            return (T1*CT1+T2*CT2+T3*CT3+T4*CT4+T5*CT5);
        }
        function ResLuck() {
            NRLUCK=RLUCK+0.3;
            var EFF_LEVEL= (LEVEL+EFF+RRES)/100;
            var T1 = (1+EFF_LEVEL)*(1+(KRES/100))*(1+(GRES/100));
            var T2 = (1+EFF_LEVEL*(Math.pow(0.67,1)))*(1+(KRES/100))*(1+(GRES/100))*2;
            var T3 = (1+EFF_LEVEL*(Math.pow(0.67,2)))*(1+(KRES/100))*(1+(GRES/100))*4;
            var T4 = (1+EFF_LEVEL*(Math.pow(0.67,3)))*(1+(KRES/100))*(1+(GRES/100))*5;
            var T5 = (1+EFF_LEVEL*(Math.pow(0.67,4)))*(1+(KRES/100))*(1+(GRES/100))*10;
            var CT1 = (0.90+KLUCK/100+NRLUCK/100);
            if(CT1>1){CT1=1;}
            var CT2 = (0.60+(KLUCK/100+NRLUCK/100)*(Math.pow(0.67,1)));
            if(CT2>1){CT2=1;}
            var CT3 = (0.30+(KLUCK/100+NRLUCK/100)*(Math.pow(0.67,2)));
            if(CT3>1){CT3=1;}
            var CT4 = (0.15+(KLUCK/100+NRLUCK/100)*(Math.pow(0.67,3)));
            if(CT4>1){CT4=1;}
            var CT5 = (0.05+(KLUCK/100+NRLUCK/100)*(Math.pow(0.67,4)));
            if(CT5>1){CT5=1;}
            return (T1*CT1+T2*CT2+T3*CT3+T4*CT4+T5*CT5);
        }
        function RelicDrop() {
            //placeholder
        }
        function GemDrop() {
            //placeholder
        }
        while(VALUE_BEFORE>VALUE_AFTER){
            var CURRENT = Current();
            console.log("CURRENT");
            console.log(CURRENT);
            var CRRES = (((RRES/1.5)+1)*RELICP)/(RelicRes() -CURRENT);
            console.log("CRRES");
            console.log(CRRES);
            var CGRES = (((GRES/1)+5)*GEMP)/(GemRes() -CURRENT);
            var CRLUCK = (((RLUCK/3)+1)*RELICP)/(ResLuck() -CURRENT);
            //var CRDROP = (((RDROP/1)+1)*RELICP)/(RelicDrop() -CURRENT);
            //var CGDROP = (((GDROP/1)+5)*GEMP)/(GemDrop() -CURRENT);
            console.log("MAX");
            console.log(Math.min(CRRES,CGRES,CRLUCK));
            switch(Math.min(CRRES,CGRES,CRLUCK,CRDROP,CGDROP)) {
                case CRRES:
                    VALUE_AFTER = ((RRES/1.5)+1)*RELICP;
                    RRES = RRES+1.,5;
                    $("#rres").html(RRES);
                    break;
                case CGRES:
                    VALUE_AFTER = ((GRES/1)+1)*GEMP;
                    GRES = GRES+1;
                    $("#gres").html(GRES);
                    break;
                case CRLUCK:
                    VALUE_AFTER = ((RLUCK/3)+1)*RELICP;
                    RLUCK = RLUCK+3;
                    $("#rluck").html(RLUCK);
                    break;
                /*case CRDROP:
                    VALUE_AFTER = ((RDROP/1)+1)*RELICP;
                    RDROP = RDROP+1;
                    $("#rdrop").html(RDROP);
                    break;
                case CGDROP:
                    VALUE_AFTER = ((GDROP/1)+1)*GEMP;
                    GDROP = GDROP+1;
                    $("#gdrop").html(GDROP);
                    break;*/
                default:
                    console.log("ERROR");
            };
        };
});
});
