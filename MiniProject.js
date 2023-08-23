let score=0;
let track=0;
let quizz=[
    q1={
        qno:"முதல்",
        ques:"ரஜினிகாந்தின் பெயர் என்ன?",
        option:["A.விஜயகாந்த்","B.சல்மான்காந்த் ","C.கமல்காந்த் ", "D.ரஜினிகாந்த்"]
    },
    q2={
        qno:"இரண்டாவது",
        ques:"அம்மாவாசை அன்னைக்கு கண்ணுக்கு நிலா தெரியுமா?",
        option:["A.திடீர்னு கேட்டா எப்டி?","B.ஒரே கொழப்பமா இருக்கு","C.தெரியாது", "D.யாருக்கு தெரியும்"]
    },
    q3={
        qno:"மூன்றாவது",
        ques:"இதில் கூட்டல் பெருக்கலுக்கு பயன்படுத்தப்படுவது எது?",
        option:["A.வாய்ப்பாடு","B.தொடப்பக்கட்டை","C.கம்ப்யூட்டர்","D.கால்குலேட்டர்"]

    },
    q4={
        qno:"நான்காவது",
        ques:"உங்க அப்பா அவர் கல்யாணத்துல தாலி கட்டுன ஆள நீங்க என்ன சொல்லி கூப்டுவீங்க? ",
        option:["A.அம்மா","B.பாட்டி","C.அத்தை","D.கல்யாணபொண்ணு"]
    },
    q5={
        qno:"ஐந்தாவது",
        ques:"திருக்குறள எழுதுனவரு யாரு?",
        option:["A.பெயின்டர் மணி","B.கணக்கு வாத்தியார்","C.திருவள்ளுவர்","D.நியூட்டன்"]

    },
    q6={
        qno:"ஆறாவது",
        ques:"திங்கட்கிழமைக்குப் பிறகு வரும் நாள் என்ன?",
        option:["A.செவ்வாய்","B.பொக்கவாய்","C.நாரவாய்","D.காவாய்"]
    },
    q7={
        qno:"ஏழாவது",
        ques:"நீல் ஆம்ஸ்ட்ராங் எங்க போனார்?",
        option:["A.ஒண்ணுக்கு போனார்","B.ரெண்டுக்கு போனார்","C. மூணுக்கு போனார்","D.நாலுக்கு போனார்"]
    },
    q8={
        qno:"எட்டாவது",
        ques:"பத்து எலைல ரெண்டு எலை வுழுந்தா இப்போ அங்க எப்படி இருக்கும்?",
        option:["A.எட்டு எலை இருக்கும்","B.குப்பை இருக்கும்","C.மரக்கம்பு இருக்கும்","D.இருட்டா இருக்கும்"]
    },
    q9={
        qno:"ஒன்பதாவது",
        ques:"மாடு எப்டி கத்தும்?",
        option:["A.அம்மா","B.பெரியம்மா","C.மனோரம்மா","D.ஐயோ அம்மா"]
    },
    q10={
        qno:"கடைசி",
        ques:"தமிழ்நாடு எந்த நாட்டில் உள்ளது?",
        option:["A.செட்டிநாடு","B.ஊர்நாடு","C.தமிழ்நாடு","D.மாநாடு"]
    }
];
var trace1;
var trace2;
var trace3;
var trace4;
let Increment=function(){
    if(track==0){        
        document.getElementById("qno").innerHTML=quizz[0].qno;
        document.getElementById("q").innerHTML=quizz[0].ques;
        document.getElementById("op1").innerHTML=quizz[0].option[0];
        document.getElementById("op2").innerHTML=quizz[0].option[1];
        document.getElementById("op3").innerHTML=quizz[0].option[2];
        document.getElementById("op4").innerHTML=quizz[0].option[3];
    }
    if(track==1){
        document.getElementById("qno").innerHTML=quizz[1].qno;
        document.getElementById("q").innerHTML=quizz[1].ques;
        document.getElementById("op1").innerHTML=quizz[1].option[0];
        document.getElementById("op2").innerHTML=quizz[1].option[1];
        document.getElementById("op3").innerHTML=quizz[1].option[2];
        document.getElementById("op4").innerHTML=quizz[1].option[3];
    }
    if(track==2){
        document.getElementById("qno").innerHTML=quizz[2].qno;
        document.getElementById("q").innerHTML=quizz[2].ques;
        document.getElementById("op1").innerHTML=quizz[2].option[0];
        document.getElementById("op2").innerHTML=quizz[2].option[1];
        document.getElementById("op3").innerHTML=quizz[2].option[2];
        document.getElementById("op4").innerHTML=quizz[2].option[3];
    }
    if(track==3){
        document.getElementById("qno").innerHTML=quizz[3].qno;
        document.getElementById("q").innerHTML=quizz[3].ques;
        document.getElementById("op1").innerHTML=quizz[3].option[0];
        document.getElementById("op2").innerHTML=quizz[3].option[1];
        document.getElementById("op3").innerHTML=quizz[3].option[2];
        document.getElementById("op4").innerHTML=quizz[3].option[3];
    }
    if(track==4){
        document.getElementById("qno").innerHTML=quizz[4].qno;
        document.getElementById("q").innerHTML=quizz[4].ques;
        document.getElementById("op1").innerHTML=quizz[4].option[0];
        document.getElementById("op2").innerHTML=quizz[4].option[1];
        document.getElementById("op3").innerHTML=quizz[4].option[2];
        document.getElementById("op4").innerHTML=quizz[4].option[3];
        
    }
    if(track==5){
        document.getElementById("qno").innerHTML=quizz[5].qno;
        document.getElementById("q").innerHTML=quizz[5].ques;
        document.getElementById("op1").innerHTML=quizz[5].option[0];
        document.getElementById("op2").innerHTML=quizz[5].option[1];
        document.getElementById("op3").innerHTML=quizz[5].option[2];
        document.getElementById("op4").innerHTML=quizz[5].option[3];
        
    }
    if(track==6){
        document.getElementById("qno").innerHTML=quizz[6].qno;
        document.getElementById("q").innerHTML=quizz[6].ques;
        document.getElementById("op1").innerHTML=quizz[6].option[0];
        document.getElementById("op2").innerHTML=quizz[6].option[1];
        document.getElementById("op3").innerHTML=quizz[6].option[2];
        document.getElementById("op4").innerHTML=quizz[6].option[3];
        
    }
    if(track==7){
        document.getElementById("qno").innerHTML=quizz[7].qno;
        document.getElementById("q").innerHTML=quizz[7].ques;
        document.getElementById("op1").innerHTML=quizz[7].option[0];
        document.getElementById("op2").innerHTML=quizz[7].option[1];
        document.getElementById("op3").innerHTML=quizz[7].option[2];
        document.getElementById("op4").innerHTML=quizz[7].option[3];
        
    }
    if(track==8){
        document.getElementById("qno").innerHTML=quizz[8].qno;
        document.getElementById("q").innerHTML=quizz[8].ques;
        document.getElementById("op1").innerHTML=quizz[8].option[0];
        document.getElementById("op2").innerHTML=quizz[8].option[1];
        document.getElementById("op3").innerHTML=quizz[8].option[2];
        document.getElementById("op4").innerHTML=quizz[8].option[3];
        
    }
    if(track==9){
        document.getElementById("qno").innerHTML=quizz[9].qno;
        document.getElementById("q").innerHTML=quizz[9].ques;
        document.getElementById("op1").innerHTML=quizz[9].option[0];
        document.getElementById("op2").innerHTML=quizz[9].option[1];
        document.getElementById("op3").innerHTML=quizz[9].option[2];
        document.getElementById("op4").innerHTML=quizz[9].option[3];
        
    }
    track+=1;
    if(track==11){
        var a=score;
        localStorage.setItem("myValue", a);
        window.location.href="MiniProjectFinal.html"
}
}
let quizzScore=function(input){
    if(input==4 && track==1){
        score+=1;
    }
    if(input==3 && track==2){
        score+=1;
    }
    if(input==2 && track==3){
        score+=1;
    }
    if(input==1 && track==4){
        score+=1;
    }
    if(input==1 && track==5){
        score+=1;    
    }
    if(input==3 && track==6){
        score+=1;    
    }
    if(input==3 && track==7){
        score+=1;    
    }
    if(input==4 && track==8){
        score+=1;    
    }
    if(input==1 && track==9){
        score+=1;    
    }
    if(input==3 && track==10){
        score+=1;    
    }
}
Increment();
trace1=document.getElementById("op1").addEventListener("click",Increment);
trace2=document.getElementById("op2").addEventListener("click",Increment);
trace3=document.getElementById("op3").addEventListener("click",Increment);
trace4=document.getElementById("op4").addEventListener("click",Increment);

if(track==5){      
Increment();
}