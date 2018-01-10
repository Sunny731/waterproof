
/**
 * Created by Administrator on 2017/1/7 0007.
 */
$(document).ready(function(){
    // prefect-case-detail  tab change
    $(".btn-top div").click(function(event){
        $(this).addClass("current").siblings().removeClass("current");
        $(".case-detail").eq($(this).index()).addClass("active").siblings().removeClass("active");
    });
    // coupon-get
   $(".coupon-right").each(function(){
       $(this).click(function(){
           $(this).parents("li").addClass("done")
       })
   })
    // coupon-my
   $(".btn-change li").click(function(){
       $(this).addClass("on").siblings().removeClass("on");
       $(".table-box .coupon-list").eq($(this).index()).addClass("current-list").siblings().removeClass("current-list");
   })
    // order-pay
    $("label").click(function(){
       if($(this).hasClass("pay-selected")){
           $(this).removeClass("pay-selected");
       }
      else{
           $(this).addClass("pay-selected");
       }
    })
    // order-prise
    $(".rating-value i").click(function(){
        var _val = parseInt($(this).attr("value"))+"%";
        $(this).parent().css("width",_val);
    })
    //waterproof-tips
    var circleHeight = $(".flow-step-list").height() +20;
    console.log(circleHeight);
    // console.log( $(".flow-box .flow-sign li .circle"))
    $(".flow-box .flow-sign li .circle").css("height",circleHeight)
});
