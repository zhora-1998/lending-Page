let index=2;

function scrol(direction){
    var test1=document.getElementById("test1");
    var test2=document.getElementById("test2");
    var test3=document.getElementById("test3");

    if(direction==='right'&&index==1){
        test1.style.transform='translateX(-100%)';
        test2.style.transform='translateX(-100%)';
        test3.style.transform='translateX(-100%)';

        test1.style.opacity=0;
        test2.style.opacity=1;
        test3.style.opacity=0;

        index=2;
    }else if(direction==='right'&&index==2){
        test1.style.transform='translateX(-200%)';
        test2.style.transform='translateX(-200%)';
        test3.style.transform='translateX(-200%)';

        test1.style.opacity=0;
        test2.style.opacity=0;
        test3.style.opacity=1;

        index=3;
    }else if(direction==='left'&&index==3){
        test1.style.transform='translateX(-100%)';
        test2.style.transform='translateX(-100%)';
        test3.style.transform='translateX(-100%)';

        test1.style.opacity=0;
        test2.style.opacity=1;
        test3.style.opacity=0;

        index=2;
    }else if(direction==='left'&&index==2){
        test1.style.transform='translateX(0)';
        test2.style.transform='translateX(0)';
        test3.style.transform='translateX(0)';

        test1.style.opacity=1;
        test2.style.opacity=0;
        test3.style.opacity=0;

        index=1;
    }
};

function clik(){
    let name=document.getElementById("we").value;
    let mail=document.getElementById("mail").value;
    let msg=document.getElementById("msg").value;

    console.log(name+mail+msg);

    document.getElementById("we").value='';
    document.getElementById("mail").value='';
    document.getElementById("msg").value='';
}