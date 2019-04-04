window.onload = function() {
					var content = document.querySelectorAll(".two_text");
					var img = document.querySelectorAll(".two_img img")
					content[0].onmouseover = function() {
						img[0].src = "img/1.2.png"
					}
					content[0].onmouseleave = function() {
						img[0].src = "img/1.1.png"
					}
					content[1].onmouseover = function() {
						img[1].src = "img/2.2.png"
					}
					content[1].onmouseleave = function() {
						img[1].src = "img/2.1.png"
					}
					content[2].onmouseover = function() {
						img[2].src = "img/3.2.png"
					}
					content[2].onmouseleave = function() {
						img[2].src = "img/3.1.png"
					}
					content[3].onmouseover = function() {
						img[3].src = "img/4.2.png"
					}
					content[3].onmouseleave = function() {
						img[3].src = "img/4.1.png"
					}
					content[4].onmouseover = function() {
						img[4].src = "img/5.2.png"
					}
					content[4].onmouseleave = function() {
						img[4].src = "img/5.1.png"
					}
					content[5].onmouseover = function() {
						img[5].src = "img/6.2.png"
					}
					content[5].onmouseleave = function() {
						img[5].src = "img/6.1.png"
					}
					var d = new Date();
					var g = document.querySelectorAll(".five_span1")
					var f = document.querySelectorAll(".five_span2")
					var y = d.getYear();
					var m = d.getMonth() + 1;
					var da = d.getDate();
					var text = Array();
					var text_one = Array();
					for (i = 0; i < g.length; i++) {
						text[i] = document.createTextNode(y + 1900 + "-" + m + "-" + da);
						g[i].appendChild(text[i]);
					}
					for (k = 0; k < f.length; k++) {
						text_one[k] = document.createTextNode(y + 1900 + "-" + m + "-" + da);
						f[k].appendChild(text_one[k]);
					}
					var more = document.getElementById("five_more");
					more.onmouseover = function() {
						more.innerHTML = '<span>敬请期待</span>';
					}
					more.onmouseleave = function() {
						more.innerHTML = '<span>更多</span>';
					}
					var placeholder = document.querySelectorAll(".placeholder");
					placeholder[0].onfocus = function(){
						if (this.value == '输入邮箱') {this.value='';}
						this.style.color="white";
					}
					placeholder[0].onblur= function(){
						if(this.value==''){this.value='输入邮箱';
						this.style.color="#cccccc";}
					}
					placeholder[1].onfocus = function(){
						if (this.value == '输入手机') {this.value='';}
						this.style.color="white";
					}
					placeholder[1].onblur= function(){
						if(this.value==''){this.value='输入手机';
						this.style.color="#cccccc";}
					}
					placeholder[2].onfocus = function(){
						if (this.value == '输入姓名') {this.value='';}
						this.style.color="white";
					}
					placeholder[2].onblur= function(){
						if(this.value==''){this.value='输入姓名';
						this.style.color="#cccccc";}
					}
					var Textarea=document.querySelector("textarea")
					Textarea.onfocus = function(){
						if (this.value == '输入留言') {this.value='';}
						this.style.color="white";
					}
					Textarea.onblur= function(){
						if(this.value==''){this.value='输入留言';
						this.style.color="#cccccc";}
					}
				}
