$("#gu_btn").on("click",function(){

    // 1.乱数（1～3）
    let random = Math.ceil(Math.random()*3);
    console.log(random)

    // 2.if分岐処理
    let view1 = "";
    let view2 = "";
    let view3 = "";

    if( random == 0){
        view1 = "グー";
        view2 = '#';
        view3 = "あいこ";
    }else if( random == 1){
        view1 = "チョキ";
        view2 = '#';
        view3 = "勝ち"; 
    }else if( random == 2){
        view1 = "パー";
        view2 = '#';
        view3 = "負け";
    }

    // 表示処理
    $("#pc_hands").text(view1);
    $("#judgement").html(view2).css("text-align", "center");
    $("#judge_comment").html(view3).css("text-align" , "center" , "color" , "red");
    $("#judge_comment").html(view3).css("color","red");

});

$("#cho_btn").on("click",function(){

    // 1.乱数（1～3）
    let random = Math.ceil(Math.random()*3);
    console.log(random)

    // 2.if分岐処理
    let view1 = "";
    let view2 = "";
    let view3 = "";

    if( random == 0){
        view1 = "チョキ";
        view2 = '#';
        view3 = "あいこ";
    }else if( random == 1){
        view1 = "パー";
        view2 = '#';
        view3 = "勝ち"; 
    }else if( random == 2){
        view1 = "グー";
        view2 = '#';
        view3 = "負け";
    }

    // 表示処理
    $("#pc_hands").text(view1);
    $("#judgement").html(view2).css("text-align", "center");
    $("#judge_comment").html(view3).css("text-align" , "center" , "color" , "red");
    $("#judge_comment").html(view3).css("color","red");

});

    console.log("ok")

$("#par_btn").on("click",function(){

    // 1.乱数（1～3）
    let random = Math.ceil(Math.random()*3);
    console.log(random)

    // 2.if分岐処理
    let view1 = "";
    let view2 = "";
    let view3 = "";

    if( random == 0){
        view1 = "パー";
        view2 = '#';
        view3 = "あいこ";
    }else if( random == 1){
        view1 = "グー";
        view2 = '#';
        view3 = "勝ち"; 
    }else if( random == 2){
        view1 = "チョキ";
        view2 = '#';
        view3 = "負け";
    }

    // 表示処理
    $("#pc_hands").text(view1);
    $("#judgement").html(view2).css("text-align", "center");
    $("#judge_comment").html(view3).css("text-align" , "center" , "color" , "red");
    $("#judge_comment").html(view3).css("color","red");
});
