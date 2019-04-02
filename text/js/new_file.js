				window.onload=function()
			{
			var content=document.querySelectorAll(".text");
			var img=document.querySelectorAll(".text img")
			var p1=document.querySelectorAll(".p1")
			var p2=document.querySelectorAll(".p2")
			var p3=document.querySelectorAll(".p3")
			var p4=document.querySelectorAll(".p4")
			content[0].onmouseover=function()
			{
				p1[0].style.color="white";
				p2[0].style.color="white"
			    p3[0].style.backgroundColor="white"
				p4[0].style.color="white"
				img[0].src="img/1.2.png"
			}
			content[0].onmouseleave=function()
			{
				p1[0].style.color="black";
				p2[0].style.color="gray"
			    p3[0].style.backgroundColor="#808080"
				p4[0].style.color="gray"
				img[0].src="img/1.1.png"
			}
			content[1].onmouseover=function()
			{
				p1[1].style.color="white";
				p2[1].style.color="white"
			    p3[1].style.backgroundColor="white"
				p4[1].style.color="white"
				img[1].src="img/2.2.png"
			}
			content[1].onmouseleave=function()
			{
				p1[1].style.color="black";
				p2[1].style.color="gray"
			    p3[1].style.backgroundColor="#808080"
				p4[1].style.color="gray"
				img[1].src="img/2.1.png"
			}
			content[2].onmouseover=function()
			{
				p1[2].style.color="white";
				p2[2].style.color="white"
			    p3[2].style.backgroundColor="white"
				p4[2].style.color="white"
				img[2].src="img/3.2.png"
			}
			content[2].onmouseleave=function()
			{
				p1[2].style.color="black";
				p2[2].style.color="gray"
			    p3[2].style.backgroundColor="#808080"
				p4[2].style.color="gray"
				img[2].src="img/3.1.png"
			}
			content[3].onmouseover=function()
			{
				p1[3].style.color="white";
				p2[3].style.color="white"
			    p3[3].style.backgroundColor="white"
				p4[3].style.color="white"
				img[3].src="img/4.2.png"
			}
			content[3].onmouseleave=function()
			{
				p1[3].style.color="black";
				p2[3].style.color="gray"
			    p3[3].style.backgroundColor="#808080"
				p4[3].style.color="gray"
				img[3].src="img/4.1.png"
			}
			content[4].onmouseover=function()
			{
				p1[4].style.color="white";
				p2[4].style.color="white"
			    p3[4].style.backgroundColor="white"
				p4[4].style.color="white"
				img[4].src="img/5.2.png"
			}
			content[4].onmouseleave=function()
			{
				p1[4].style.color="black";
				p2[4].style.color="gray"
			    p3[4].style.backgroundColor="#808080"
				p4[4].style.color="gray"
				img[4].src="img/5.1.png"
			}
			content[5].onmouseover=function()
			{
				p1[5].style.color="white";
				p2[5].style.color="white"
			    p3[5].style.backgroundColor="white"
				p4[5].style.color="white"
				img[5].src="img/6.2.png"
			}
			content[5].onmouseleave=function()
			{
				p1[5].style.color="black";
				p2[5].style.color="gray"
			    p3[5].style.backgroundColor="#808080"
				p4[5].style.color="gray"
				img[5].src="img/6.1.png"
			}
			var d=new Date();
			var g=document.querySelectorAll(".five_span1")
			var f=document.querySelectorAll(".five_span2")
			var y=d.getYear();
			var m=d.getMonth()+1;
			var da=d.getDate();
			var text=Array();
			var text_one=Array();
			for(i=0;i<g.length;i++)
			{
				text[i]=document.createTextNode(y+1900+"-"+m+"-"+da);
				g[i].appendChild(text[i]);
			}
			for(k=0;k<f.length;k++)
			{
				text_one[k]=document.createTextNode(y+1900+"-"+m+"-"+da);
				f[k].appendChild(text_one[k]);
			}
			var more=document.getElementById("five_more");
			more.onmouseover=function()
			{
				more.innerHTML='<span>敬请期待</span>';
			}
			more.onmouseleave=function()
			{
				more.innerHTML='<span>更多</span>';
			}
			
		}