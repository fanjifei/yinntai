    $(function(){
    // 固定栏特效
     var mask=$(".mask")
     var fixed=$(".fixed")
     for (var i = 0; i < fixed.length; i++) {
       fixed[i].index=i;
       fixed[i].onmouseover=function(){
         mask[this.index].style.opacity="1"
       }
        fixed[i].onmouseout=function(){
         mask[this.index].style.opacity="0"
       }
     }


      var gdfixed=$(".fixed-box")[0];
       document.documentElement.scrollTop=1;
       if (document.documentElement.scrollTop=1){
         var gdobj=document.documentElement;
         }else{
         var gdobj=document.body
         }
         var gdflag=true;
         var gdflag1=true;
      window.onscroll=function(){
      var gdst=gdobj.scrollTop
        if (gdst>=600){
          if (gdflag){
          gdflag=false;gdflag1=true;  
          animate(gdfixed,{width:53,height:600})
          };
        }else{
          gdflag=true;gdflag1=false;
          animate(gdfixed,{width:0,height:0})
        }
      var gdbtns=$(".fixed")
      var gdcontens=$(".zong")
      var obj=document.documentElement?document.documentElement:document.body
      var arr=[];
      for (var i = 0; i < gdcontens.length; i++) {
      arr.push(gdcontens[i].offsetTop)
        };
       for (var i = 0; i < gdbtns.length; i++){   
       if (obj.scrollTop+200>arr[i]){
       for (var j = 0; j < gdbtns.length; j++){
       mask[j].style.opacity='0'
       };
       mask[i].style.opacity="1";
          };
        };   
      }
      var gdbtn=$(".fixed")
      var gdconten=$(".zong")
      for (var i = 0; i < gdbtn.length; i++) {
        gdbtn[i].index=i;
        gdbtn[i].onclick=function(){
        var gdac=gdconten[this.index].offsetTop;
        animate(gdobj,{scrollTop:gdac})
        }
      };
      var b10=$(".b10")[0];
      var obj=document.documentElement;
      b10.onclick=function(){
      obj=document.body.scrollTop==0?document.documentElement:document.body
        animate(obj,{scrollTop:0})
      }
  // banner特效
    var kg=$(".banner-circle1");
    var dg=$(".banner-img");
    var bg=$(".banner-box")[0]
    var banbig=$(".banner-middle")[0];
    var bgcolor=["#F7ACED","#008ACB","#A1D2F2","#E93B3C"]
        for(var i = 0; i < kg.length; i++) {
        kg[i].index=i
        kg[i].onmouseover=function(){
          for (var i = 0; i <dg.length; i++) {
          dg[i].style.zIndex="1";
          kg[i].style.background="black";
          }
        dg[this.index].style.zIndex="2";
        kg[this.index].style.background="#EA0152"
        bg.style.backgroundColor=bgcolor[this.index]
         }
      } 
      //轮播
       var lunbo=setInterval(move,3000)
       var num=0;
       function move(){
       num++;
       if (num==kg.length) {
       num=0
       };
        for (var i = 0; i < kg.length; i++) {
          dg[i].style.zIndex="1"
          kg[i].style.background="black"
          }; 
          kg[num].style.background="#EA0152"
          dg[num].style.zIndex="2"
          bg.style.backgroundColor=bgcolor[num]
        }
      banbig.onmouseover=function(){
      clearInterval(lunbo)
      }; 
      banbig.onmouseout=function(){
      lunbo=setInterval(move,3000)
      }
       // banner-left
     var bannerleft=$(".banner-wenzi")
     var pin=$(".pin")
     var xiala=$(".banner-xiala");
     for (var i = 0; i < bannerleft.length; i++) {
       bannerleft[i].index=i;
       xiala[i].style.zIndex="1"
       bannerleft[i].onmouseover=function(){
        this.style.background="#E5014F"
        xiala[this.index].style.zIndex="9999"
        xiala[this.index].style.opacity="1"
       }
        bannerleft[i].onmouseout=function(){
        this.style.background=""
        xiala[this.index].style.zIndex="1"
        xiala[this.index].style.opacity="0"
       }
        xiala[i].index=i;
        xiala[i].onmouseover=function(){
        xiala[this.index].style.zIndex="9999"
        xiala[this.index].style.opacity="1"
       }
        xiala[i].onmouseout=function(){
        xiala[this.index].style.zIndex="1"
        xiala[this.index].style.opacity="0"
       }
     }
     // banner-right
     var yidong=$(".banner-right")[0];
     yidong.onmouseover=function(){
      animate(yidong,{left:980},300)
     }
      yidong.onmouseout=function(){
      animate(yidong,{left:990},300)
     }
      // 模块1特效
     var bottom=$(".shouji")
     var temai=$(".temai1")
     var img=$(".mokuai1-left2")
     for (var i = 0; i < bottom.length; i++) {
       bottom[i].index=i;
       bottom[i].onmouseover=function(){
        for (var i = 0; i < bottom.length; i++) {
         bottom[i].style.borderColor="#000"
         temai[i].style.opacity="0"
         img[i].style.display="none";
        }
       this.style.borderColor="#E5014F"
       temai[this.index].style.opacity="1"
       img[this.index].style.display="block";
       }
     }
    var mo1=$(".mo1")
   for (var i = 0; i < mo1.length; i++) {
     mo1[i].index=i;
     mo1[i].onmouseover=function(){
      this.style.opacity="0.7"
     }
       mo1[i].onmouseout=function(){
      this.style.opacity="1"
     }
   }; 
    // 模块3特效
    var border=$(".benzhou")
    var tuijie=$(".tuijie1")
    var mo3img=$(".mokuai3-img-box0")
    for (var i = 0; i < border.length; i++) {
    border[i].index=i
    border[i].onmouseover=function(){
      for (var i = 0; i < border.length; i++) {
        border[i].style.borderColor="#000"
        tuijie[i].style.opacity="0"
        mo3img[i].style.display="none";
      }
      border[this.index].style.borderColor="#E5014F"
      tuijie[this.index].style.opacity="1"
      mo3img[this.index].style.display="block";
    }
  }
   var mo3=$(".mo3")
   for (var i = 0; i < mo3.length; i++) {
     mo3[i].index=i;
     mo3[i].onmouseover=function(){
      this.style.opacity="0.7"
     }
       mo3[i].onmouseout=function(){
      this.style.opacity="1"
     }
   }; 
    //模块5特效
    //箭头按钮切换图片
          //箭头按钮控制
        var box1s=$(".a1");
        var leftbtns=$(".leftbtn");
        var rightbtns=$(".rightbtn");
        var btnboxs=$(".mokuai5circle");              
        var items=$(".middle");
            for (var i = 0; i < box1s.length; i++) {
             huantu(box1s[i],leftbtns[i],rightbtns[i],btnboxs[i],items[i])
            };
        function huantu(box1s,leftbtns,rightbtns,btnboxs,items){
            var circles=btnboxs.getElementsByTagName("div");
              var flag=true;
          box1s.onmouseover=function(){
            animate(leftbtns,{left:0},200)
            animate(rightbtns,{right:0},200)
          }
          box1s.onmouseout=function(){
            animate(leftbtns,{left:-30},200)
            animate(rightbtns,{right:-30},200)
          }
        //鼠标移入移出箭头改变颜色
          leftbtns.onmouseover=function(){
            this.style.backgroundPosition="left bottom"
          }
          rightbtns.onmouseover=function(){
           if (flag) {
           this.style.backgroundPosition="right bottom"
           }
          }
          leftbtns.onmouseout=function(){
           this.style.backgroundPosition="left top"
           }
          rightbtns.onmouseout=function(){
           this.style.backgroundPosition="right top"
          }
        //鼠标的改变引起按钮颜色样式的改变
          rightbtns.onclick=moveright;
          leftbtns.onclick=moveleft;
          circles[0].onclick=moveleft;
          circles[1].onclick=moveright;
          function moveright(){
              flag=false;
            animate(items,{marginLeft:-390})
            circles[0].style.background="grey";
            circles[1].style.background="#e5004f";
          }
          function moveleft(){
              flag=true;
            animate(items,{marginLeft:0})
            circles[1].style.background="grey";
            circles[0].style.background="#e5004f";
          }
        } 
 // 边框特效
      function c(obj,time){
      obj.style.position="relative";
      var div1=document.createElement("div")
      var div2=document.createElement("div")
      var div3=document.createElement("div")
      var div4=document.createElement("div")
      div1.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;height:1px;";
      div2.style.cssText="position:absolute;background:#000;left:-1px;top:-1px;width:1px;";
      div3.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;height:1px;";
      div4.style.cssText="position:absolute;background:#000;right:-1px;bottom:-1px;width:1px;";
      obj.appendChild(div1)
      obj.appendChild(div2)
      obj.appendChild(div3)
      obj.appendChild(div4)
     var width=parseInt(getStyle(obj,"width"))+2;
     var height=parseInt(getStyle(obj,"height"))+2;
     obj.onmouseover=function(){
      animate(div1,{width:width},time)
      animate(div2,{height:height},time)
      animate(div3,{width:width},time)
      animate(div4,{height:height},time)
     }
      obj.onmouseout=function(){
      animate(div1,{width:0},time)
      animate(div2,{height:0},time)
      animate(div3,{width:0},time)
      animate(div4,{height:0},time)
     }
  } 
    var one=$(".mokuai1-img");
      for (var i = 0; i<8; i++) { 
      c(one[i],500) 
  }
   var two=$(".mokuai5-c");
      for (var i = 0; i <two.length; i++) { 
      c(two[i],500) 
  }
   var three=$(".mokuai3-img6");
      for (var i = 0; i <three.length; i++) { 
      c(three[i],500) 
  }
  // 
    var lists=$(".wdyt-xl")[0];
    var nav2s=$(".wdyt-xl1")[0];
      hover(lists,function(){
            nav2s.style.display="block";
      },function(){
            nav2s.style.display="none";
      })
  // 无缝轮播
    var item=$(".mokuai5-b3");
    var iw=$(".mokuai5-b4")
    var lbtn=$(".leftbtn5")
    var rbtn=$(".rightbtn5")
   for (var i = 0; i < item.length; i++) {
       lunbo5(item[i],lbtn[i],rbtn[i])
    }; 
     function lunbo5(item,lbtn,rbtn){
     var flag=true;
     rbtn.onclick=function(){
      if (!flag) {return };
      flag=false;
     var first=getFirst(item)
     animate(item,{left:-161},1000,function(){
     item.appendChild(first)
     item.style.left=0;
     flag=true;
       })
     }
     var flag=true;
     lbtn.onclick=function(){
      if (!flag) {return };
      flag=false;
      item.style.left=-161+'px';
      item.insertBefore(getLast(item),getFirst(item))
      animate(item,{left:0},1000,function(){
      flag=true;
      })
    }
   }
}) 


