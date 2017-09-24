//搜索框的淡入淡出
$(document).ready(function () {
    $(".icon-search").mouseover(function () {
        $(".nav-search").fadeIn(800);
    });
    $(".search-icon").mouseover(function () {
        $(".nav-search").fadeIn(800);
    });
    $(".top-style1").mouseleave(function () {
        $(".nav-search").fadeOut(500);
    });


function showuserdata(){
    $.get("index.php?c=main&a=getuser",res=>{
        console.log(res)
        var user = res.body.user;
        $('.top-name').html(user.u_name);
        $('.login').html(user.u_name+" / 退出");
    },"json");
    }
showuserdata();
var t_id = getQueryString("t_id");
$.get("index.php?c=main&a=getw_gotid",res=>{
	console.log(res)
	let t_idlist = res.body.t_idlist;
	for(let t of t_idlist){
		if(t.t_id == t_id){
			$(".webfont").eq(0).attr("class","webfont icon-gift-h");
			return;
		}
	} 
},"json");

$.get("index.php?c=main&a=geth_gotid",res=>{
	console.log(res)
	let t_idlist = res.body.t_idlist;
	for(let t of t_idlist){
		if(t.t_id == t_id){
			$(".webfont").eq(1).attr("class","webfont icon-spinner5-h");
			return;
		}
	} 
},"json");

$(".webfont").eq(0).click(function(){
	$(this).toggleClass('icon-gift');
	$(this).toggleClass('icon-gift-h');
	// console.log($(this).attr("class"))
	if($(this).attr("class") === "webfont icon-gift-h"){
		// console.log("111")
		$.get("index.php?c=main&a=addw_go",{"t_id":t_id},res=>{
          console.log(res)
		});
	}else{
		$.get("index.php?c=main&a=removew_gotourist",{"t_id":t_id},res=>{
			console.log(res);
		})
	}
    
});

$(".webfont").eq(1).click(function(){
	$(this).toggleClass('icon-spinner5');
	$(this).toggleClass('icon-spinner5-h');
	if($(this).attr("class") === "webfont icon-spinner5-h"){
		$.get("index.php?c=main&a=addh_go",{"t_id":t_id},res=>{
          console.log(res)
		});
	}else{
		$.get("index.php?c=main&a=removeh_gotourist",{"t_id":t_id},res=>{
			console.log(res);
		})
	}
    
});

/**
 * 得到url中的参数
 */

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
console.log($(".webfont").eq(0))

/**
 * 
 * 添加链接
 */
console.log("111111")
console.log($("#m-culture"));
$("#m-culture a").attr("href","culture.html?t_id="+t_id+"&type=humanities");
$("#m-food a").attr("href", "food.html?t_id="+t_id+"&type=diet");
$("#m-buiding a").attr("href", "building.html?t_id="+t_id+"&type=building");
$("#m-note a").attr("href", "notes.html?t_id="+t_id);

	

// 小菜单
var changeContent = function(index) {
	var menuArray = new Array('人文','饮食','建筑','游记','顶部');
	
	$('.center-i span').removeClass();
	$('.center-i').css({'font-size':'15px','font-weight':'bold'});
	$('.center-i span').text(menuArray[index]);
		
}
$('.center-i').click(function(){
	$('.menu2 ul li').toggle();
})

$('.menu2 ul li').mouseover(function() {
	var int = $(this).index();
	changeContent(int);
})
$('.menu2').mouseleave(function() {
	$('.center-i span').text(' ');
	$('.center-i span').addClass('icon-smile2');
	$('.center-i').css({'font-size':'48px','display':'inline-block', 'margin-top':'1px'});
})
});
// 登录注册框
// $('.top-name').click(function() {
// 	$('.SignIn').toggle();
// });
$('.goSignUp').click(function() {
	$('.SignIn').hide();
	$('.SignUp').show();
});
$('.goSignIn').click(function() {
	$('.SignIn').show();
	$('.SignUp').hide();
});

$(function() {   
    $('.top-name').click(function(e) {
    	if($('.SignIn').is(':hidden')) {
          	$('.SignIn').fadeIn();
            e ? e.stopPropagation() : event.cancelBubble = true;
        }
    });
    $('.SignIn').click(function(e) {
         e ? e.stopPropagation() : event.cancelBubble = true;
    });
    $(document).click(function() {
        $('.SignIn').fadeOut();
    });
})
$(function() {   
    $('.top-name').click(function(e) {
    	if($('.SignUp').is(':hidden')) {
          	$('.SignUp').fadeIn();
            e ? e.stopPropagation() : event.cancelBubble = true;
        }
    });
    $('.SignUp').click(function(e) {
         e ? e.stopPropagation() : event.cancelBubble = true;
    });
    $(document).click(function() {
        $('.SignUp').fadeOut();
    });
})