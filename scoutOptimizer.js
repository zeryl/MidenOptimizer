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
            var EFF_LEVEL= 1/100*(LEVEL+EFF+RRES);
            var T1 = (1+EFF_LEVEL)*(1+(1/KRES))*(1+(1/GRES));
            var T2 = (1+EFF_LEVEL*(Math.pow(0.67,1)))*(1+(1/KRES))*(1+(1/GRES))*2;
            var T3 = (1+EFF_LEVEL*(Math.pow(0.67,2)))*(1+(1/KRES))*(1+(1/GRES))*4;
            var T4 = (1+EFF_LEVEL*(Math.pow(0.67,3)))*(1+(1/KRES))*(1+(1/GRES))*5;
            var T5 = (1+EFF_LEVEL*(Math.pow(0.67,4)))*(1+(1/KRES))*(1+(1/GRES))*10;
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
        var VALUE_BEFORE = RINVESTED*RELICP+GINVESTED*GEMP ;
        var VALUE_AFTER = ((XP/0,2*(XP/0,2 + 1))/2)*RELICP;
        function RelicRes() {
            var EFF_LEVEL= 1/100*(LEVEL+EFF+RRES+1,5);
            var T1 = (1+EFF_LEVEL)*(1+(1/KRES))*(1+(1/GRES));
            var T2 = (1+EFF_LEVEL*(Math.pow(0.67,1)))*(1+(1/KRES))*(1+(1/GRES))*2;
            var T3 = (1+EFF_LEVEL*(Math.pow(0.67,2)))*(1+(1/KRES))*(1+(1/GRES))*4;
            var T4 = (1+EFF_LEVEL*(Math.pow(0.67,3)))*(1+(1/KRES))*(1+(1/GRES))*5;
            var T5 = (1+EFF_LEVEL*(Math.pow(0.67,4)))*(1+(1/KRES))*(1+(1/GRES))*10;
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
            var EFF_LEVEL= LEVEL+EFF+RRES;
            var T1 = (1+EFF_LEVEL)*(1+(1/KRES))*(1.01+(1/GRES));
            var T2 = (1+EFF_LEVEL*(Math.pow(0.67,1)))*(1+(1/KRES))*(1.01+(1/GRES))*2;
            var T3 = (1+EFF_LEVEL*(Math.pow(0.67,2)))*(1+(1/KRES))*(1.01+(1/GRES))*4;
            var T4 = (1+EFF_LEVEL*(Math.pow(0.67,3)))*(1+(1/KRES))*(1.01+(1/GRES))*5;
            var T5 = (1+EFF_LEVEL*(Math.pow(0.67,4)))*(1+(1/KRES))*(1.01+(1/GRES))*10;
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
            NRLUCK=RLUCK+0,3;
            var EFF_LEVEL= LEVEL+EFF+RRES;
            var T1 = (1+EFF_LEVEL)*(1+(1/KRES))*(1+(1/GRES));
            var T2 = (1+EFF_LEVEL*(Math.pow(0.67,1)))*(1+(1/KRES))*(1+(1/GRES))*2;
            var T3 = (1+EFF_LEVEL*(Math.pow(0.67,2)))*(1+(1/KRES))*(1+(1/GRES))*4;
            var T4 = (1+EFF_LEVEL*(Math.pow(0.67,3)))*(1+(1/KRES))*(1+(1/GRES))*5;
            var T5 = (1+EFF_LEVEL*(Math.pow(0.67,4)))*(1+(1/KRES))*(1+(1/GRES))*10;
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
            var CRRES = (((RRES/1,5)+1)*RELICP)/(RelicRes() -CURRENT);
            var CGRES = (((GRES/1)+1)*GEMP)/(GemRes() -CURRENT);
            var CRLUCK = (((RLUCK/3)+1)*RELICP)/(ResLuck() -CURRENT);
            var CRDROP = (((RDROP/1)+1)*RELICP)/(RelicDrop() -CURRENT);
            var CGDROP = (((GDROP/1)+1)*GEMP)/(GemDrop() -CURRENT);
            switch(Math.max(CRRES,CGRES,CRLUCK,CRDROP,CGDROP)) {
                case CRRES:
                    VALUE_AFTER = ((RRES/1,5)+1)*RELICP;
                    console.log(VALUE_AFTER);
                    RRES = RRES+1,5;
                    $("#rres").html(RRES);
                    break;
                case CGRES:
                    VALUE_AFTER = ((GRES/1)+1)*GEMP;
                    console.log(VALUE_AFTER);
                    GRES = GRES+1;
                    $("#gres").html(GRES);
                    break;
                case CRLUCK:
                    VALUE_AFTER = ((RLUCK/3)+1)*RELICP;
                    console.log(VALUE_AFTER);
                    RLUCK = RLUCK+3;
                    $("#rluck").html(RLUCK);
                    break;
                case CRDROP:
                    VALUE_AFTER = ((RDROP/1)+1)*RELICP;
                    console.log(VALUE_AFTER);
                    RDROP = RDROP+1;
                    $("#rdrop").html(RDROP);
                    break;
                case CGDROP:
                    VALUE_AFTER = ((GDROP/1)+1)*GEMP;
                    console.log(VALUE_AFTER);
                    GDROP = GDROP+1;
                    $("#gdrop").html(GDROP);
                    break;
            }
        }
});
});
