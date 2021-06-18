const taka=document.getElementById("tk");
const usdolar=document.getElementById("dolar");
const indianrupi=document.getElementById("indianRs");
const lankanrupi=document.getElementById("lankaRs");


taka.addEventListener("input",bdTktoOthers);
function bdTktoOthers(){
    const bdtk = parseFloat(taka.value);
    const usd=bdtk*0.012;
    const ir = bdtk*0.86;
    const lr = bdtk*2.33;
    
    usdolar.value = usd;
    indianrupi.value=ir;
    lankanrupi.value=lr;
}



usdolar.addEventListener("input",usdTktoOthers);
function usdTktoOthers(){
    const usd = parseFloat(usdolar.value);
    const bdtk=usd*84.73;
    const ir = usd*73.23;
    const lr = usd*197.87;
    
    taka.value = bdtk;
    indianrupi.value=ir;
    lankanrupi.value=lr;
}

indianrupi.addEventListener("input",inrTOothers);
function  inrTOothers(){
    const ir= parseFloat(indianrupi.value);
    const bdtk = ir*1.15;
    const usd = ir*0.013;
    const lr=ir*2.70;
    taka.value = bdtk;
    usdolar.value = usd;
    lankanrupi.value=lr;

}

lankanrupi.addEventListener("input",lankaRtoother);
function lankaRtoother(){

    const lr = parseFloat(lankanrupi.value);
    const bdtk = lr*0.428;
    const usd  = lr*0.0051;
    const ir  = lr*0.37;
    taka.value = bdtk;
    usdolar.value = usd;
    indianrupi.value=ir;

}


function main(){
    bdTktoOthers();
    usdTktoOthers();
    inrTOothers();
    lankaRtoother();
}
main();