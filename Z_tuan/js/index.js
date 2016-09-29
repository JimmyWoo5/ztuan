$(function(){
	var top={
		init:function(){
			this.li1=$('.li1')
			this.erweima=$('.erweima').eq(0)
			this.li2=$('.li2')
			this.email=$('.email')
			this.tGou()
			this.rServe()
		},
		tGou:function(){
			var zhe=this;
			this.li1.hover(function(){
				zhe.erweima.show()	
			},function(){
				zhe.erweima.hide()
			});
		},
		rServe:function(){
			var zhe=this;
			this.li2.hover(function(){
				zhe.email.show()	
			},function(){
				zhe.email.hide()
			})
		}
	
	}
	top.init()
	
	var lunbo={
		init:function(){
			this.center=$('.fenlei .center')
			this.box=this.center.find('.box')
			this.img=this.box.find('img')
			this.last=this.img.first().clone(true)
			this.box.append(this.last)
			this.btn=this.center.find('.zuo,.you')
			this.circle=this.center.find('p span')
			this.circle.first().css({background:'#b1191a'})
			this.interv=''
			this.index=0
			this.interval()
			this.hover()
			this.btnClick()
			this.circleClick()
		
		},
		interval:function(){
			var zhe=this
			this.interv=setInterval(function(){
				zhe.index++
				if(zhe.index>3){
					zhe.box.css({right:0})
					zhe.index=1
				}
				zhe.box.animate({right:700*zhe.index})
				zhe.changeColor()
			},1500)
		},
		hover:function(){
			var zhe=this
			this.center.hover(function(){
				zhe.btn.show()
				clearInterval(zhe.interv)
			},function(){
				zhe.btn.hide()
				zhe.interval()
			})
		},
		btnClick:function(){
			var zhe=this
			this.btn.eq(0).click(function(){
				zhe.index--
				zhe.index=zhe.index<0?2:zhe.index
				zhe.box.animate({right:700*zhe.index})
				zhe.changeColor()
			})
			this.btn.eq(1).click(function(){
				zhe.index++
				zhe.index=zhe.index>2?0:zhe.index
				zhe.box.animate({right:700*zhe.index})
				zhe.changeColor()
			})
			
		},
		changeColor:function(){
			var zhe=this
			zhe.circle.css({background:''})
			var num=zhe.index>2?0:zhe.index
			zhe.circle.eq(num).css({background:'#b1191a'})
		},
		circleClick:function(){
			var zhe=this
			this.circle.click(function(){
				zhe.index=$(this).index()
				zhe.box.animate({right:700*zhe.index})
				zhe.changeColor()
			})
		}
		
	}
	lunbo.init()
	
	var goodbox=$('.goods li .goodbox')
	goodbox.hover(function(){
		goodbox.css({border:''})
		$(this).css({border:'1px solid #CE1A1B'})
	})
	
	
	var fixed={
		init:function(){
			this.document=$(document)
			this.login=$('.login')
			this.fixed=$('.fixed')
			this.scroll()
		},
		scroll:function(){
			var zhe=this
			this.document.scroll(function(){
				var num=zhe.document.scrollTop()
				if(zhe.login.css('display')=='none'){
					if(num>800&&num<2034){			
						zhe.fixed.addClass('fixedClass')
					}else{
						zhe.fixed.removeClass('fixedClass')
					}
				}
			})
		}
	}
	fixed.init()

	var span=$('.goods li .goodbox .lefttime span')
	var sec=370400
	setInterval(function(){
		sec--
		var day=Math.floor(sec/60/60/24)
		var hour=Math.floor(sec/60/60%24)
		var fen=Math.floor(sec/60%60)
		var miao=Math.floor(sec%60)
		span.html('剩余：'+day+'天'+hour+'时'+fen+'分'+miao+'秒')
	},1000)
	
	var rightCode={
		init:function(){
			this.zixun=$('.zixun')
			this.kefu=$('.rightCode .kefu')
			this.ewm=this.zixun.find('.ewm')
			this.gotop=$('.gotop')
			this.body=$('body')
			this.document=$(document)
			this.hover()
			this.click()
			this.show()
		},
		show:function(){
			var zhe=this
			this.document.scroll(function(){
				if(zhe.document.scrollTop()>window.innerHeight){
					zhe.zixun.show()
				}else{
					zhe.zixun.hide()
				}
			})
			
		},
		hover:function(){
			var zhe=this
			this.kefu.hover(function(){
				zhe.ewm.show()
			},function(){
				zhe.ewm.hide()
			})
		},
		click:function(){
			var zhe=this
			this.gotop.click(function(){
				$('body').animate({scrollTop:0})
			})
		}
	}
	rightCode.init()
	


	
	var loginBox={
		init:function(){
			this.denglu=$('.topCon .right .first')
			this.login=$('.login')
			this.overlay=$('.overlay')
			this.exit=$('.exit')
			this.input=$('.psw,.user')
			this.loginBtn=$('.loginBtn')
			this.psw=$('.psw')
			this.user=$('.user')
			this.remind=$('.remind span')
			this.confirm=$('#confirm')
			this.zhanghao=$('.zhanghao')
			this.loginclick()
			this.show()
			this.disappear()
			this.inputClick()
			this.userClick()
		},
		show:function(){
			var zhe=this
			this.denglu.click(function(){
				zhe.login.show()
				zhe.overlay.show()
				
			})
		},
		disappear:function(){
			var zhe=this
			this.exit.hover(function(){
				zhe.exit.addClass('exithover')
			},function(){
				zhe.exit.removeClass('exithover')
			})
			this.exit.click(function(){
				zhe.remind.parent().hide()
				zhe.user.val('')
				zhe.psw.val('')
				zhe.loginBtn.html("登录")
				zhe.login.hide()
				zhe.overlay.hide()
				zhe.confirm.attr({checked:false})
			})
		},
		inputClick:function(){
			this.input.focus(function(){
				$(this).addClass('inputFocus')
			})
			this.input.blur(function(){
				$(this).removeClass('inputFocus')
			})
		},
		loginclick:function(){
			var zhe=this
			this.loginBtn.click(function(){
				zhe.remind.parent().show()
				var user=zhe.user.val()
				var psw=zhe.psw.val()
				var str=''
				if(user==''){
					str='请填写手机号/邮箱/用户名'
				}else if(psw==''){
					str='请填写正确的密码'
				}else{
					$.ajax({
						url:"js/denglu.json",
						success:function(data){
							var flag=false
							for(var a=0;a<data.length;a++){
								if(data[a].user==user&&data[a].psw==psw){
									flag=true
									zhe.remind.parent().hide()
									zhe.loginBtn.html('登录中')
									if(zhe.confirm.is(':checked')){
										zhe.setCookie()		
									}
									break
								}
							}
							if(flag==false){
								zhe.remind.html('登录失败，用户名或密码错误')
								zhe.loginBtn.html('登录')
							}
						}
					})
										
					
				}
				zhe.remind.html(str)
				
			})
			
		},
		setCookie:function(){
			var zhe=this
			var user=zhe.user.val()
			var psw=zhe.psw.val()
			var uif=$.cookie('userinfo')||'[]'
			uif=JSON.parse(uif)
			var xinxi={
				user:user,
				psw:psw,
				status:'on'
			}
			var uif=$.cookie('userinfo')||'[]'
			uif=JSON.parse(uif)
			var flag=true
			for(var a=0;a<uif.length;a++){
				if(xinxi.user==uif[a].user){
					flag=false
				}
			}
			if(flag==true){
				uif.push(xinxi)
			}
			
			$.cookie('userinfo',JSON.stringify(uif),{expires:7})
		},
		userClick:function(){
			var zhe=this
			this.user.focus(function(){
				zhe.getCookie()
				zhe.zhanghao.show()
			})
			this.user.blur(function(){
				zhe.zhanghao.hide()
			})
		},
		getCookie:function(){
			var zhe=this
			var uif=$.cookie('userinfo')||'[]'
			uif=JSON.parse(uif)
			var str=''
			for(var a=0;a<uif.length;a++){
				str+='<li>'+uif[a].user+'</li>'
			}
			this.zhanghao.html(str)
			var zhli=$('.zhanghao li')
			zhli.hover(function(){
				$(this).css({background:'#666'})
				zhe.user.val($(this).html())
				zhe.psw.val(uif[$(this).index()].psw)
			},function(){
				$(this).css({background:''})
			})

		},
		

	}
	loginBox.init()



})