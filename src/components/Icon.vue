<template>
  <div class="app-icon">
    <div id="user_head">
        <a id="left_ico" href="javascript:history.go(-1);">
          <i class="icon iconfont">&#xe645;</i>
        </a>
        <span>个人头像</span>
        <a id="s_dpage" href="javascript:void(0);">
           <i class="icon iconfont">&#xe633;</i> 
        </a>
      </div>

      <a href="javascript:void(0);" class="logoBox" id="logoBox">
          <img id="bgl" :src=icon width="100%">
      </a>


      <div class="htmleaf-container">
      <div id="clipArea"></div>
      <div id="view"></div>
      </div>


      <div class="btn-1">
				<!-- <router-link to="/user" tag="button" id="uploader">确认更换<router-link>	 -->
      	<button id="uploader" @click="goback">确认更换</button>
			
      </div>

      <div id="dpage">
      <a href="javascript:void(0);">
        <input type="button" name="file" class="button" value="选取照片">
        <input id="file" type="file" onchange="javascript:setImagePreview();" accept="image/*" multiple  />
      </a>
      <a href="javascript:void(0);" class="qx"><button id="clipBtn">截取图片</button></a>
      </div>
   </div>
</template>
<script>
import * as types from '../store/types.js';

import {mapGetters} from 'vuex';
export default {
	computed:mapGetters(['icon']),
	methods:{
		goback(){
        this.$router.go(-1)
				}
	},
  mounted(){
   
var obUrl = ''
var imageData = '';
//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
var that=this;
$("#clipArea").photoClip({
	width: 280,
	height: 280,
	file: "#file",
	view: "#view",
	ok: "#clipBtn",
	loadStart: function() {
		console.log("照片读取中");
	},
	loadComplete: function() {
		console.log("照片读取完成");
	},
	clipFinish: function(dataURL) {
    //这个编码有用
    console.log(dataURL);
    // console.log(typeof dataURL);
    
    that.$store.dispatch(types.UPDATE_ICON,dataURL);
		imageData = dataURL;
	}
});

$(function(){
$("#logoBox,#s_dpage").click(function(){
$(".htmleaf-container").fadeIn(300);
$("#dpage").addClass("show");
})
	$("#clipBtn").click(function(){
		$("#logoBox").empty();
		$('#logoBox').append('<img src="' + imgsource + '" align="absmiddle" style=" width:100%;">');
		$(".htmleaf-container").hide();
		$("#dpage").removeClass("show");
	})
});

$(function(){
	jQuery.divselect = function(divselectid,inputselectid) {
		var inputselect = $(inputselectid);
		$(divselectid+" small").click(function(){
			$("#divselect ul").toggle();
			$(".mask").show();
		});
		$(divselectid+" ul li a").click(function(){
			var txt = $(this).text();
			$(divselectid+" small").html(txt);
			var value = $(this).attr("selectid");
			inputselect.val(value);
			$(divselectid+" ul").hide();
			$(".mask").hide();
			$("#divselect small").css("color","#333")
		});
	};
	$.divselect("#divselect","#inputselect");
});

$(function(){
	jQuery.divselectx = function(divselectxid,inputselectxid) {
		var inputselectx = $(inputselectxid);
		$(divselectxid+" small").click(function(){
			$("#divselectx ul").toggle();
			$(".mask").show();
		});
		$(divselectxid+" ul li a").click(function(){
			var txt = $(this).text();
			$(divselectxid+" small").html(txt);
			var value = $(this).attr("selectidx");
			inputselectx.val(value);
			$(divselectxid+" ul").hide();
			$(".mask").hide();
			$("#divselectx small").css("color","#333")
		});
	};
	$.divselectx("#divselectx","#inputselectx");
});

$(function(){
	jQuery.divselecty = function(divselectyid,inputselectyid) {
		var inputselecty = $(inputselectyid);
		$(divselectyid+" small").click(function(){
			$("#divselecty ul").toggle();
			$(".mask").show();
		});
		$(divselectyid+" ul li a").click(function(){
			var txt = $(this).text();
			$(divselectyid+" small").html(txt);
			var value = $(this).attr("selectyid");
			inputselecty.val(value);
			$(divselectyid+" ul").hide();
			$(".mask").hide();
			$("#divselecty small").css("color","#333")
		});
	};
	$.divselecty("#divselecty","#inputselecty");
});

$(function(){
   $(".mask").click(function(){
	   $(".mask").hide();
	   $(".all").hide();
   })
	$(".right input").blur(function () {
		if ($.trim($(this).val()) == '') {
			$(this).addClass("place").html();
		}
		else {
			$(this).removeClass("place");
		}
	})
});

$("#file0").change(function(){
	var objUrl = getObjectURL(this.files[0]) ;
	 obUrl = objUrl;
	console.log("objUrl = "+objUrl) ;
	if (objUrl) {
		$("#img0").attr("src", objUrl).show();
	}
	else{
		$("#img0").hide();
	}
}) ;
function qd(){
   var objUrl = getObjectURL(this.files[0]) ;
   obUrl = objUrl;
   console.log("objUrl = "+objUrl) ;
   if (objUrl) {
	   $("#img0").attr("src", objUrl).show();
   }
   else{
	   $("#img0").hide();
   }
}
function getObjectURL(file) {
	var url = null ;
	if (window.createObjectURL!=undefined) { // basic
		url = window.createObjectURL(file) ;
	} else if (window.URL!=undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file) ;
	} else if (window.webkitURL!=undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file) ;
	}
	return url ;
}

var subUrl = "";
$(function (){
	$(".file-3").bind('change',function(){
		subUrl = $(this).val()
		$(".yulan").show();
		$(".file-3").val("");
	});

	$(".file-3").each(function(){
		if($(this).val()==""){
			$(this).parents(".uploader").find(".filename").val("营业执照");
		}
	});
$(".btn-3").click(function(){
$("#img-1").attr("src", obUrl);
$(".yulan").hide();
$(".file-3").parents(".uploader").find(".filename").val(subUrl);
})
	$(".btn-2").click(function(){
		$(".yulan").hide();
	})

});

function setImagePreview() {
	var preview, img_txt, localImag, file_head = document.getElementById("file"),
			picture = file_head.value;
	if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),
			!1;
	if (preview = document.getElementById("view"), file_head.files && file_head.files[0]) preview.style.display = "block",
			preview.style.width = "100px",
			preview.style.height = "100px",
			preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);
	else {
		file_head.select(),
				file_head.blur(),
				img_txt = document.selection.createRange().text,
				localImag = document.getElementById("localImag"),
				localImag.style.width = "100px",
				localImag.style.height = "100px";
		try {
			localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",
					localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt
		} catch(f) {
			return alert("您上传的图片格式不正确，请重新选择！"),
					!1
		}
		preview.style.display = "none",
				document.selection.empty()
	}
	return document.getElementById("DivUp").style.display = "block",
			!0
}

// $("#uploader").click(
// 	function(){
// 		$.ajax({
// 			url:'uploader.php',
// 			type:'post',
// 			dataType:'json',
// 			data:{photo:imageData},
// 			async:false,
// 			success:function(data){
// 				if(data.status == 'success'){
// 					alert('图片上传成功');
// 				}
// 			}
// 		});
// 	}
// );

// mounted
  }
}
</script>

<style scoped>



@charset "utf-8";/* CSS Document*//*公共部分*/
*{font-family: "microsoft yahei", "helvetica", "heiti SC", "droid", "sans";word-spacing: 0px;letter-spacing: .02rem;font-size: 62.5%;margin: 0;padding: 0;}
body{width:100%;height:100%;}
a{text-decoration:none;}
.fl{float: left;}
.fr{float: right;}
.clear{clear: both}
.blank{margin-bottom: 4rem;}
@font-face {font-family: 'iconfont';
    src: url('../assets/font/iconfont.eot'); /* IE9*/
    src: url('../assets/font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../assets/font/iconfont.woff') format('woff'), /* chrome、firefox */
    url('../assets/font/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('../assets/font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
  font-family:"iconfont" !important;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.1px;
  -moz-osx-font-smoothing: grayscale;
}
#user_head  { background:#323436; height:50px; position:relative; width:100%; z-index:997; left:0px; top:0; width:100%; }
#user_head .user_logo { position:absolute; display:block; text-align:center; overflow:hidden; width:110px; height:50px; line-height:50px; left:0px; top:0px; }
#user_head .user_logo  i { display:inline-block; margin-top:6px; font-size:110px; width:98px; height:20px;  color:#fff; vertical-align:middle; }
#user_head .user_menu { position:absolute; width:150px; height:50px; top:0px;right:0px; }
#user_head .user_menu a { display:block; float:left; width:50px; height:50px; text-align:center; line-height:50px; color:#fff; }
#user_head #left_ico { width:50px; height:50px; position:absolute; left:0px; top:0px;  text-align:center; line-height:50px;   }
#user_head #left_ico i {  color:#fff; font-size:24px;  }
#user_head #right_ico { width:50px; height:50px; position:absolute; right:0px; top:0px; color:#999; text-align:center; line-height:50px;   }
#user_head #right_ico i {  color:#fff; margin-top:10px; font-size:24px; width:30px; height:30px; display:inline-block;  line-height:30px;   }
#user_head span { position:absolute; display:block;  height:26px; line-height:26px; font-size:16px; color:#fff; border-left:1px solid #262626; left:60px; padding-left:20px; top:12px;   }
#user_head a:active { background:#262525; }
#s_dpage { width:50px; height:50px; position:absolute; right:0px; top:0px; color:#fff; text-align:center; line-height:50px;   }
#s_dpage span { display:inline-block; width:30px; height:30px; line-height:30px; }
#s_dpage i {  color:#fff; margin-top:10px;  font-size:24px; width:30px; height:30px; display:inline-block;  line-height:30px;   }
#dpage { 
   background:#ebebeb; 
   height:143px; 
   width:100%; 
   position:fixed;
   left:0;
   bottom:-143px;
   visibility:hidden;
   z-index:999;
    -webkit-transform:translate3d(0px,0,0px);
	-moz-transform:translate3d(0px,0,0px);
	transform:translate3d(0px,0,0px);
	transition:all 0.3s; 
 } 
 #dpage.show {
	 visibility:visible;
    -webkit-transform:translate3d(0px,-143px,0px);
	-moz-transform:translate3d(0px,-143px,0px);
	transform:translate3d(0px,-143px,0px);
 }
#dpage a { display:block; width:100%; text-align:center; height:40px; background:#fff; color:#333; line-height:40px; border-bottom:1px solid #ebebeb; font-size:16px; position:relative;  }
#dpage a:nth-child(3) { margin-top:10px; margin-bottom:10px; background:none;  }

.logoBox { display:block; padding-top:10%;  }

/*图片裁剪-触屏设备*/
.clearfix:before,
.clearfix:after{content: " ";display: table;}
.clearfix:after{clear: both;}
.htmleaf-container{margin: 0 auto;text-align: center;overflow: hidden;width: 100%;height: 100%;position: fixed;top: 0;background: #383838;display: none;z-index:996;}
.htmleaf-content{font-size:150%;padding: 1em 0;}
.htmleaf-content h2{margin: 0 0 2em;opacity: 0.1;}
.htmleaf-content p{margin: 1em 0;padding: 5em 0 0 0;font-size: 0.65em;}

/* Header*/.htmleaf-header{padding: 1em 190px 1em;letter-spacing: -1px;text-align: center;background: #66677c;}
.htmleaf-header h1{color: #D5D6E2;font-weight: 600;font-size: 2em;line-height: 1;margin-bottom: 0;font-family: "Microsoft YaHei","宋体","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif, FreeSans, Arimo;}
.htmleaf-header h1 span{font-family: "Microsoft YaHei","宋体","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif, FreeSans, Arimo;display: block;font-size: 60%;font-weight: 400;padding: 0.8em 0 0.5em 0;color: #c3c8cd;}
/*nav*/.htmleaf-demo a{color: #1d7db1;text-decoration: none;}
.htmleaf-demo{width: 100%;padding-bottom: 1.2em;}
.htmleaf-demo a{display: inline-block;margin: 0.5em;padding: 0.6em 1em;border: 3px solid #1d7db1;font-weight: 700;}
.htmleaf-demo a:hover{opacity: 0.6;}
.htmleaf-demo a.current{background:#1d7db1;color: #fff;}
/* Top Navigation Style*/.htmleaf-links{position: relative;display: inline-block;white-space: nowrap;font-size: 1.5em;text-align: center;}
.htmleaf-links::after{position: absolute;top: 0;left: 50%;margin-left: -1px;width: 2px;height: 100%;background: #dbdbdb;content: '';-webkit-transform: rotate3d(0,0,1,22.5deg);transform: rotate3d(0,0,1,22.5deg);}
.htmleaf-icon{display: inline-block;margin: 0.5em;padding: 0em 0;width: 1.5em;text-decoration: none;}
.htmleaf-icon span{display: none;}
.htmleaf-icon:before{margin: 0 5px;text-transform: none;font-weight: normal;font-style: normal;font-variant: normal;font-family: 'icomoon';line-height: 1;speak: none;-webkit-font-smoothing: antialiased;}
/* footer*/.htmleaf-footer{width: 100%;padding-top: 10px;}
.htmleaf-small{font-size: 0.8em;}
.center{text-align: center;}
.related{color: #fff;background: #494A5F;text-align: center;font-size: 1.25em;padding: 0.5em 0;overflow: hidden;}
.related > a{vertical-align: top;width: calc(100% - 20px);max-width: 340px;display: inline-block;text-align: center;margin: 20px 10px;padding: 25px;font-family: "Microsoft YaHei","宋体","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif, FreeSans, Arimo;}
.related a{display: inline-block;text-align: left;margin: 20px auto;padding: 10px 20px;opacity: 0.8;-webkit-transition: opacity 0.3s;transition: opacity 0.3s;-webkit-backface-visibility: hidden;}
.related a:hover,
.related a:active{opacity: 1;}
.related a img{max-width: 100%;opacity: 0.8;border-radius: 4px;}
.related a:hover img,
.related a:active img{opacity: 1;}
.related h3{font-family: "Microsoft YaHei", sans-serif;}
.related a h3{font-weight: 300;margin-top: 0.15em;color: #fff;}
/* icomoon*/.icon-htmleaf-home-outline:before{content: "\e5000";}
.icon-htmleaf-arrow-forward-outline:before{content: "\e5001";}
@media screen and (max-width: 50em){.htmleaf-header{padding: 3em 10% 4em;}
.htmleaf-header h1{font-size:2em;}}
@media screen and (max-width: 40em){.htmleaf-header h1{font-size: 1.5em;}}
@media screen and (max-width: 30em){.htmleaf-header h1{font-size:1.2em;}}
article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary{display: block;}
audio, canvas, video{display: inline-block;}
audio:not([controls]){display: none;height: 0;}
a:focus{outline: thin dotted;}
a:active, a:hover{outline: 0;}
h1{font-size: 2em;margin: 0.67em 0;}
abbr[title]{border-bottom: 1px dotted;}
b, strong{font-weight: bold;}
dfn{font-style: italic;}
hr{-moz-box-sizing: content-box;box-sizing: content-box;height: 0;}
mark{background: #ff0;color: #000;}
code, kbd, pre, samp{font-family: monospace, serif;font-size: 1em;}
pre{white-space: pre-wrap;}
q{quotes: "\201C" "\201D" "\2018" "\2019";}
small{font-size: 80%;}
sub, sup{font-size: 75%;line-height: 0;position: relative;vertical-align: baseline;}
sup{top: -0.5em;}
sub{bottom: -0.25em;}
img{border: 0;}
svg:not(:root){overflow: hidden;}
figure{margin: 0;}
fieldset{border: 1px solid #c0c0c0;margin: 0 2px;padding: 0.35em 0.625em 0.75em;}
legend{border: 0;padding: 0;}
button, input, select, textarea{font-family: inherit;font-size: 100%;margin: 0;}
button, input{line-height: normal;}
button, select{text-transform: none;}
button, html input[type="button"], input[type="reset"], input[type="submit"]{-webkit-appearance: button;cursor: pointer;}
button[disabled], html input[disabled]{cursor: default;}
input[type="checkbox"], input[type="radio"]{box-sizing: border-box;padding: 0;}
input[type="search"]{-webkit-appearance: textfield;-moz-box-sizing: content-box;-webkit-box-sizing: content-box;box-sizing: content-box;}
input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration{-webkit-appearance: none;}
button::-moz-focus-inner, input::-moz-focus-inner{border: 0;padding: 0;}
textarea{overflow: auto;vertical-align: top;}
table{border-collapse: collapse;border-spacing: 0;}
#clipArea{height: 90%;}

/*上传图标*/
#file{float: left;height: 100%;}
#clipBtn{height: 100%; width:96%; background: #009bdb; border-radius:5px;  border: 0;outline: none; color: #fff; font-size: 16px;  z-index: 999;}
.filename{position: absolute;outline: 0 none;line-height: 1.5rem;font-size: 1.5rem;color: #999;width: 100%;margin: 0;overflow: hidden;cursor: default;text-overflow: ellipsis;white-space: nowrap;border: 0;top: 9.2rem;text-align: center;}
.button{float: left;height: 100%;display: inline-block;outline: 0 none;margin: 0;cursor: pointer;border: 0;width:100%; background:#fff; }
#dpage a input[type=file]{position: absolute;top: 0;left: 0;bottom: 0;border: 0;padding: 0;margin: 0; height:100%; width: 100%; cursor: pointer; border: solid 1px #ddd;opacity: 0;}
input[type=button]::-moz-focus-inner{padding: 0;border: 0 none;-moz-box-sizing: content-box;}
input[type=button]::-webkit-focus-inner{padding: 0;border: 0 none;-webkit-box-sizing: content-box;}
input[type=text]::-moz-focus-inner{padding: 0;border: 0 none;-moz-box-sizing: content-box;}
input[type=text]::-webkit-focus-inner{padding: 0;border: 0 none;-webkit-box-sizing: content-box;}
.blue .button{color: #fff;background: #18b4ed;height:100%;}
.btn-1{margin-top: 3rem;margin-bottom: 2rem;text-align: center}
.btn-1 button{width: 90%;outline: none;border: none; background: #009bdb;color: #fff; height:40px; display: inline-block;border-radius: 0.4rem; font-size:16px; }



</style>
