/* VWO switcher 2013 */
// Check of jQuery wel wordt geladen
if(typeof jQuery == 'undefined'){
    // jQuery kan niet geladen worden
	alert('Let op: jQuery kan niet geladen worden.\nControleer de implementatie van jQuery.');
}else{
	t4u_$=jQuery||vwo_$||$;
    // jQuery wordt wel geladen 
	// Check of VWO wordt geladen
	if(typeof _vwo_code == 'undefined'){
		// VWO kan niet geladen worden
		var version = t4u_$().jquery;
		alert('jQuery ('+version+') succesvol geladen.\n\nLet op: Visual Website Optimizer kan niet worden geladen.\nControleer de implementatie van Visual Website Optimizer.');
	} else {
	// VWO wordt wel geladen
	
/*Stylesheet*/
t4u_$('<style id="switch_style">\
body{\
}\
#t4u_vwo_switch_overlayBG{\
background:#000;\
opacity:0.65;\
filter:alpha(opacity=65);\
z-index:2147483628;\
position:absolute;\
top:0;\
}\
#t4u_vwo_switch_overlay{\
width:380px;\
min-height:250px;\
left:-205px;\
padding:10px;\
background:#fff;\
border-radius:3px;\
z-index:2147483629;\
position:fixed;\
margin:auto 50%;\
top:30px;\
opacity:1;\
display:none;\
color: #4C668C;\
font: 12px/1.5 Arial,Helvetica,sans-serif;\
}\
#t4u_switch_head{\
height:30px;\
}\
#t4u_switch_head_choose{\
width:300px;\
height:25px;\
float:left;\
}\
#t4u_switch_close{\
width:35px;\
height:30px;\
background:url("//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/close.png") 7px 5px no-repeat #EAEAEA;\
border-radius:5px 5px 0px 0px;\
float:right;\
cursor:pointer;\
}\
#t4u_switch_close:hover{\
background:url("//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/close.png") 7px -29px no-repeat #EAEAEA;\
}\
#t4u_formDiv{\
width:370px;\
padding:5px;\
background:#EAEAEA;\
border-radius:5px 0px 5px 5px;\
}\
#submit_var_change{\
width:250px;\
padding:5px 10px;\
height:20px;\
border-radius:2px;\
background: #00be36;\
background: -moz-linear-gradient(top,  #00be36 0%, #029a2d 100%);\
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#00be36), color-stop(100%,#029a2d));\
background: -webkit-linear-gradient(top,  #00be36 0%,#029a2d 100%);\
background: -o-linear-gradient(top,  #00be36 0%,#029a2d 100%);\
background: -ms-linear-gradient(top,  #00be36 0%,#029a2d 100%);\
background: linear-gradient(to bottom,  #00be36 0%,#029a2d 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#00be36\', endColorstr=\'#029a2d\',GradientType=0 );\
vertical-align:middle;\
text-align:center;\
color:#fff;\
cursor:pointer;\
transition:width 0.15s linear 0s;\
-webkit-transition:width 0.15s linear 0s;\
margin:15px auto 10px;\
}\
#submit_var_change:hover{\
width:270px;\
}\
#testDetails{\
width:340px;\
height:75px;\
border-radius:5px;\
background:#fff;\
margin:5px auto auto;\
line-height:24px;\
padding:5px 10px;\
}\
#testVariants{\
width:360px;\
min-height:150px;\
border-radius:5px;\
background:#fff;\
padding-bottom:10px;\
margin:5px auto;\
}\
#variant_div{\
padding:5px;\
height:20px;\
border-bottom:1px solid #EAEAEA;\
cursor:pointer;\
width:302px;\
float:left;\
}\
#variant_div label{\
cursor:pointer;\
}\
form#vwo_switch_form{\
margin:0px;\
padding:0px;\
}\
#traffic_percentage{\
width:48px;\
height:29px;\
border-top:1px solid #FFFFFF;\
border-bottom:1px solid #EAEAEA;\
font-weight:bold;\
text-align:center;\
background:url("//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/traffic_bg.png") no-repeat #ffffff;\
float:right;\
line-height:27px;\
color:#4D4D4D;\
}\
#traffic_percentage.hover{\
background:url("//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/traffic_bg.png") no-repeat #f2f4ff;\
}\
</style>').appendTo('head');
/*Einde stylesheet*/
		t4u_$(function(){
			function readCookie(name) {
				var nameEQ = name + "=";
				var ca = document.cookie.split(';');
				for (var i = 0; i < ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0) == ' ') c = c.substring(1, c.length);
					if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
				};
				return null;
			};

			/* Switch overlay toevoegen aan de pagina*/
			var dWidth = t4u_$(document).width();
			var dHeight = t4u_$(document).height();

			var overlayBG = '<div id="t4u_vwo_switch_overlayBG" style="height:'+dHeight+'px; width:'+dWidth+'px;"></div>';
			var overlay = '<div id="t4u_vwo_switch_overlay"></div>';
			
			t4u_$(overlayBG).appendTo('body');
			t4u_$(overlay).insertAfter('#t4u_vwo_switch_overlayBG').fadeIn(400);
			/*Einde switch overlay toevoegen aan de pagina */
			/* Switch header */
			t4u_$('<div id="t4u_switch_head"><div id="t4u_switch_head_choose"></div><div id="t4u_switch_close"></div></div>').appendTo('#t4u_vwo_switch_overlay');
			/* Einde switch header */

			if (typeof _vis_opt_experiment_id != "undefined") {
			// VWO test actief	
			// check op meerdere tests
				t4u_$('<select class="multipleTests"></select>').appendTo('#t4u_switch_head_choose').hide();
				t4u_$(_vwo_exp_ids).each(function(index){
					t4u_$('<option value="'+_vwo_exp_ids[index]+'" label="'+index+'">Test # '+_vwo_exp_ids[index]+'</option>').appendTo('.multipleTests');
					
					for(a in _vwo_exp[_vwo_exp_ids[index]].comb_n) {
							vNaam =  _vwo_exp[_vwo_exp_ids[index]].comb_n[a];
						};
						testN = index;
				});
				
				var meestRecenteTest = Math.max.apply(null, _vwo_exp_ids);
				var testID = meestRecenteTest;
				t4u_$('.multipleTests option').each(function(){
					if(testID == t4u_$(this).val()){
						t4u_$(this).attr('selected', 'selected');
					}
				});

			/* CHECK OP EXCLUDE COOKIE */
				if(unescape(readCookie("_vis_opt_exp_" + testID + "_exclude")) == true){
					// Exclude cookie gevonden voor de meest recente test
					t4u_$('<div id="t4u_formDiv" class="cookieCheck">'+
						'<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/vwo_ico_exclude.png" border="0" style="width:25px;">&nbsp;&nbsp;<strong style="font-size:16px;">Exclude cookie gevonden voor test #'+testID+'</strong><br />'+
						'<a href="#" class="delExclude">Variant activeren (en exclude cookie verwijderen)</a>'+
					'</div>').insertAfter('#t4u_switch_head');
					
					t4u_$('.delExclude').click(function(){
						
						t4u_$('.cookieCheck').remove();
						
						var activeVariant = unescape(readCookie("_vis_opt_exp_" + testID + "_combi"));

						if (_vwo_exp[testID].type == "VISUAL_AB"){
							var testType = "A/B Test";
						}else if(_vwo_exp[testID].type == "VISUAL"){
							var testType = "Multivariate test";
						}
						t4u_$('<strong style="font-size:16px;">Test # '+testID+'</strong>').appendTo('.t4u_switch_head_choose');
						t4u_$('<div id="t4u_formDiv"><div id="testDetails">'+
								'Test type: <strong>'+testType+'</strong><br />'+
								'Test page patern: <strong>'+_vwo_exp[testID].url_pattern+'</strong><br />'+
								'Percentage traffic: <strong>'+_vwo_exp[testID].pc_traffic+'%</strong>'+
							'</div>'+
							'<div id="testVariants">'+
								'<form id="vwo_switch_form">'+
									'<div id="submit_var_change_wrap" style="float:left; width:100%;"><div id="submit_var_change">Toon Variant</div><small>(verwijder exclude cookie)</small></div>'+
								'</form>'+
							'</div>'+
						'</div>').insertAfter('#t4u_switch_head');

						for (a in _vwo_exp[_vwo_exp_ids[testN]].comb_n) {
							variantNaam =  _vwo_exp[_vwo_exp_ids[testN]].comb_n[a];
							variantTraffic =  _vwo_exp[_vwo_exp_ids[testN]].combs[a]*100;
							variantTraffic = Math.round(variantTraffic);
							t4u_$('<div id="variant_div"><input type="radio" name="vwo_exp_'+_vwo_exp_ids[testN]+'" id="'+_vwo_exp_ids[testN]+'_'+variantNaam+'" value="'+a+'"> <label for="'+_vwo_exp_ids[testN]+'_'+variantNaam+'" id="'+_vwo_exp_ids[testN]+'_'+variantNaam+'_label" style="display:inline;">'+variantNaam.replace('---',' ')+'</label></div><div id="traffic_percentage">'+variantTraffic+'%</div>').insertBefore('#submit_var_change_wrap');
							t4u_$('#'+_vwo_exp_ids[testN]+'_'+variantNaam+'[value="'+activeVariant+'"]').attr('checked', 'checked');
						};
						
						h = (t4u_$('#submit_var_change_wrap').height()+(30*a));
						t4u_$('#testVariants').css('height', h+'px')
							
						t4u_$('#submit_var_change').click(function(){
							var cookieVal = t4u_$('#vwo_switch_form input:checked').val();
							 _vis_opt_createCookie('_vis_opt_exp_'+ testID +'_exclude', '1', -1);
							 _vis_opt_createCookie('_vis_opt_exp_'+ testID +'_combi', cookieVal, 30);
							 location.reload();
						});		
					
					});
					
				}else{
					// Geen exclude cookie gevonden voor de meest recente test, gewoon doorgaan
					var activeVariant = unescape(readCookie("_vis_opt_exp_" + testID + "_combi"));

					if (_vwo_exp[testID].type == "VISUAL_AB"){
						var testType = "A/B Test";
					}else if(_vwo_exp[testID].type == "VISUAL"){
						var testType = "Multivariate test";
					}
					t4u_$('<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/vwo_ico.png" border="0" style="width:15px;">&nbsp;<strong style="font-size:16px;" class="testTitle"></strong><br />').appendTo('#t4u_switch_head_choose');
					t4u_$('<div id="t4u_formDiv" class="form_ID'+testID+'"><div id="testDetails">'+
							'Test type: <strong>'+testType+'</strong><br />'+
							'Test page patern: <strong>'+_vwo_exp[testID].url_pattern+'</strong><br />'+
							'Percentage traffic: <strong>'+_vwo_exp[testID].pc_traffic+'%</strong>'+
						'</div>'+
						'<div id="testVariants">'+
							'<form id="vwo_switch_form">'+
								'<div id="submit_var_change_wrap" style="float:left; width:100%;"><div id="submit_var_change">Toon pagina</div></div>'+
							'</form>'+
						'</div>'+
					'</div>').appendTo('#t4u_vwo_switch_overlay');

					for (a in _vwo_exp[_vwo_exp_ids[testN]].comb_n) {
						variantNaam =  _vwo_exp[_vwo_exp_ids[testN]].comb_n[a];
						variantTraffic =  _vwo_exp[_vwo_exp_ids[testN]].combs[a]*100;
						variantTraffic = Math.round(variantTraffic);
						t4u_$('<div id="variant_div"><input type="radio" name="vwo_exp_'+_vwo_exp_ids[testN]+'" id="'+_vwo_exp_ids[testN]+'_'+variantNaam+'" value="'+a+'" style="vertical-align:middle; margin-right:5px;"> <label for="'+_vwo_exp_ids[testN]+'_'+variantNaam+'" id="'+_vwo_exp_ids[testN]+'_'+variantNaam+'_label" style="cursor:pointer; display:inline;">'+variantNaam.replace('---',' ')+'</label></div><div id="traffic_percentage">'+variantTraffic+'%</div>').insertBefore('#submit_var_change_wrap');
						t4u_$('#'+_vwo_exp_ids[testN]+'_'+variantNaam+'[value="'+activeVariant+'"]').attr('checked', 'checked');
					};
					
					h = (t4u_$('#submit_var_change_wrap').height()+(30*a));
					t4u_$('#testVariants').css('height', h+'px')
					
					// Meerdere live testen switchen
					if(testN > 0){
						t4u_$('.multipleTests').show().appendTo('.testTitle');
						t4u_$('.multipleTests').css({
							'font-size':'14px',
							'font-weight':'bold',
							'color':'#4C668C',
							'border':'1px solid #4C668C',
						});
						
						t4u_$('.multipleTests').change(function(){
							var selectedTest = t4u_$(this).val();
							var selectedTestIndex = t4u_$('option[value='+selectedTest+']').attr('label');
						
							function changeLiveVariant(){
								var liveForm = '.'+t4u_$('#t4u_formDiv').attr('class');
								var activeVariant = unescape(readCookie("_vis_opt_exp_" + selectedTest + "_combi"));
								if (_vwo_exp[selectedTest].type == "VISUAL_AB"){
									var testType = "A/B Test";
								}else if(_vwo_exp[selectedTest].type == "VISUAL"){
									var testType = "Multivariate test";
								}
								
								t4u_$(liveForm).fadeOut(250, function(){
									t4u_$('<div id="t4u_formDiv" class="form_ID'+selectedTest+'">'+
										'<div id="testDetails">'+
											'Test type: <strong>'+testType+'</strong><br />'+
											'Test page patern: <strong>'+_vwo_exp[selectedTest].url_pattern+'</strong><br />'+
											'Percentage traffic: <strong>'+_vwo_exp[selectedTest].pc_traffic+'%</strong>'+
										'</div>'+
										'<div id="testVariants">'+
											'<form id="vwo_switch_form">'+
												'<div id="submit_var_change_wrap" style="float:left; width:100%;"><div id="submit_var_change">Toon pagina</div></div>'+
											'</form>'+
										'</div>'+
									'</div>').hide().insertAfter('#t4u_switch_head').fadeIn(500);
																	
									for (a in _vwo_exp[selectedTest].comb_n) {
										variantNaam =  escape(_vwo_exp[selectedTest].comb_n[a]);
										variantTraffic =  _vwo_exp[selectedTest].combs[a]*100;
										variantTraffic = Math.round(variantTraffic);
										t4u_$('<div id="variant_div"><input type="radio" name="vwo_exp_'+_vwo_exp_ids[selectedTestIndex]+'" id="'+_vwo_exp_ids[selectedTestIndex]+'_'+variantNaam+'" value="'+a+'"> <label for="'+_vwo_exp_ids[selectedTestIndex]+'_'+variantNaam+'" id="'+_vwo_exp_ids[selectedTestIndex]+'_'+variantNaam+'_label" style="display:inline;">'+unescape(variantNaam).replace('---',' ')+'</label></div><div id="traffic_percentage">'+variantTraffic+'%</div>').insertBefore('#submit_var_change_wrap');
									};
									
									h = (t4u_$('#submit_var_change_wrap').height()+(30*a));
									t4u_$('#testVariants').css('height', h+'px')

									t4u_$('.multipleTests').show().appendTo('.testTitle');
									t4u_$('.multipleTests').css({
										'font-size':'14px',
										'font-weight':'bold',
										'color':'#4C668C',
										'border':'1px solid #4C668C',						
									});
									
									t4u_$('#vwo_switch_form div#variant_div').hover(function(){
										t4u_$(this).css({'background':'#f2f4ff'});
										t4u_$(this).next().addClass('hover');
									}, function(){
										t4u_$(this).css({'background':'#ffffff'});
										t4u_$(this).next().removeClass('hover');
									});
									
									t4u_$('#vwo_switch_form input[value="'+activeVariant+'"]').attr('checked', 'checked');
									
									t4u_$('#vwo_switch_form #variant_div').click(function(){
										t4u_$('input', this).attr('checked', 'checked');
									});
									
									t4u_$('#vwo_switch_form div#variant_div input').change(function(){
										t4u_$('#vwo_switch_form div#variant_div').css('background', '#ffffff');
										t4u_$('#submit_var_change').html('Toon '+t4u_$(this).next().html());
										t4u_$(this).parent().animate({
											backgroundColor: "#ffffff"
										}, 0, function(){
										t4u_$(this).animate({
											backgroundColor: "#f2f4ff" 
										}, 350)}).css('background','#f2f4ff');
									});
									
									t4u_$('#submit_var_change').click(function(){
										var cookieVal = t4u_$('#vwo_switch_form input:checked').val();
										 _vis_opt_createCookie('_vis_opt_exp_'+ selectedTest +'_combi', cookieVal, 30);
										 location.reload();
									});			
									
									t4u_$(this).remove();
								});
							}
							
							t4u_$('.multipleTests').change(changeLiveVariant());
							
						});
					}else{ t4u_$('.testTitle').text('Test # '+testID); }

					// Geen meerdere testen, normale switcher
					t4u_$('#vwo_switch_form div#variant_div').hover(function(){
						t4u_$(this).css({'background':'#f2f4ff'});
						t4u_$(this).next().addClass('hover');
					}, function(){
						t4u_$(this).css({'background':'#ffffff'});
						t4u_$(this).next().removeClass('hover');
					});
					
					t4u_$('#vwo_switch_form input[value="'+activeVariant+'"]').attr('checked', 'checked');
					
					t4u_$('#vwo_switch_form #variant_div').click(function(){
						t4u_$('input', this).attr('checked', 'checked');
					});
					
					t4u_$('#vwo_switch_form div#variant_div input').change(function(){
						t4u_$('#vwo_switch_form div#variant_div').css('background', '#ffffff');
						t4u_$('#submit_var_change').html('Toon '+t4u_$(this).next().html());
						t4u_$(this).parent().animate({
							backgroundColor: "#ffffff"
						}, 0, function(){
						t4u_$(this).animate({
							backgroundColor: "#f2f4ff" 
						}, 350)}).css('background','#f2f4ff');
					});
						
					t4u_$('#submit_var_change').click(function(){
						var cookieVal = t4u_$('#vwo_switch_form input:checked').val();
						 _vis_opt_createCookie('_vis_opt_exp_'+ testID +'_combi', cookieVal, 30);
						 location.reload();
					});			
				}
			
			}else{
			// Geen VWO test actief
				t4u_$('#t4u_vwo_switch_overlay').css('min-height','210px');
				t4u_$('<div id="t4u_formDiv"><div id="testVariants">'+
					'<p style="padding:10px; text-align:center;">'+
						'<strong style="font-size:16px;">Geen test actief</strong><br />'+location.href+'<br /><br />'+
					'</p>'+
				'</div></div>').insertAfter('#t4u_switch_head');
			}
			
			/* Switcher sluiten */
			t4u_$('#t4u_vwo_switch_overlayBG, #t4u_switch_close').click(function(){
				t4u_$('#t4u_vwo_switch_overlayBG, #t4u_vwo_switch_overlay').fadeOut(350, function(){
					t4u_$('#t4u_vwo_switch_overlayBG, #t4u_vwo_switch_overlay').remove();
					t4u_$('head #switch_style').remove();
				});
			});
			/* Einde switcher sluiten*/
		});
	}
}
