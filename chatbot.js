
var json=[{
    "Q":"",
    "A":""
}]

var Q="";
var A="";

var key=0;

var follow=0;
var app=document.getElementById('typed');
function text(){
    var ask=document.getElementById('ask').value;
    var answer=document.getElementById('answer');
    var back=document.getElementById('back');

    if (ask=="") {
        answer.innerHTML="찍?";
    } 
    else if(ask.includes("뭐해")) { 
        answer.innerHTML="쉬고있다 찍~";
    } 

    else if(ask.includes("먹었어?")) {
        answer.innerHTML="해바라기씨 먹었다 찍찍!";
    }
    
    else if(ask.includes("놀자")||ask.includes("나랑")) {
        answer.innerHTML="나 지금 바쁘다 찍~";
    }

    else if(ask.includes("불꺼")) {
        back.style.backgroundColor="rgb(66, 61, 61)";
        answer.innerHTML="고맙다 찍! 난 원래 야행성이다 찍찍!"
        
    }

    else if(ask.includes("불켜")) {
        if(follow==0){
            answer.innerHTML="싫다 찍!";
            follow++;;
        }
        
        else if(follow==1){
            answer.innerHTML="🔥찍찍?🔥";
            follow++;
        }
        else{
            back.style.backgroundColor="white";
            answer.innerHTML="좋다 말았다 찍...";
        }
    }

    else{
        if(key==1){
        if(ask=="알겠어"){
            answer.innerHTML="어떻게 대답해야해 찍찍?";
            key=2;
        }
        else{
            answer.innerHTML="찍찍~";
            key=0;
        }
        return;
    }

    if(key == 2){
        A = ask; 
        json.push({Q:`${Q}`, A:`${A}`});
        answer.innerHTML="말을 배웠다 찍찍!";
        key=0;
        return;
    }

    for(let i=0; i<json.length;i++){
        if(ask==json[i].Q){
            answer.innerHTML=json[i].A;
            return;
        }
    }

    answer.innerHTML="모르는 질문이다! 알려주라 찍! (알겠어 or 괜찮아)";
    Q=ask;
    key=1;

    var typewriter=new Typewriter(app,{loop:true});

    typewriter
    .typeString("<strong>물음 TIP</strong> 뭐해? 나랑 놀래? 밥은? 놀자! 불꺼줘 불켜줘!")
    .pauseFor(1100)
    .deleteAll()
    .typeString("말을 가르쳐보세요!")
    .pauseFor(1100)
    .deleteAll()
    .start();
    }
}
