/* VWO switcher 2012 */
// Check of jQuery wel wordt geladen
if(typeof jQuery == 'undefined'){
    // jQuery kan niet geladen worden
  alert('Let op: jQuery kan niet geladen worden.\nControleer de implementatie van jQuery.');
}else{
    // jQuery wordt wel geladen 
	// Check of VWO wordt geladen
	if(typeof _vwo_code == 'undefined'){
		// VWO kan niet geladen worden
		var version = $().jquery;
		alert('jQuery ('+version+') succesvol geladen.\n\nLet op: Visual Website Optimizer kan niet worden geladen.\nControleer de implementatie van Visual Website Optimizer.');
	} else {
		// VWO wordt wel geladen
		$=jQuery||vwo_$||$;
		$(function(){
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

			var dWidth = $(document).width();
			var dHeight = $(document).height();
			
			var overlayBG = '<div id="t4u_vwo_switch_overlayBG" class="t4u_switch_close" style="height:'+dHeight+'px; width:'+dWidth+'px; background:#000; opacity:0.65; filter:alpha(opacity=65); z-index:2147483628; position:absolute; top:0;"></div>';
			var overlay = '<div id="t4u_vwo_switch_overlay" style="width:400px; left:-150px; padding:0px; background:#fff; border-radius:5px; border:1px solid #333; z-index:2147483629; position:fixed; margin:auto 50%; top:30px; opacity:1; box-shadow:0px 0px 20px 3px #333;"></div>';
			var vwoBar = '<div id="t4u_vwo_bar" style="width:100%; height:89px; border-bottom:1px solid #9cb7c7; border-radius:5px 5px 0 0; top:0; background:url(//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/t4u_header.jpg) no-repeat top left #ddf5fe;"></div>';
			var betaBadge = '<div style="background:url(//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/beta-2.png) no-repeat; z-index:2147483638; position:absolute; width:75px; height:75px; top:0; right:0;"></div>';
			var closeOverlay = '<a href="#" id="t4u_switch_close" style="font-family:tahoma, verdana, sans-serif; color:#fff; width:25px; height:25px; background:#000000; position:absolute; top:-15px; left:385px; border:2px solid #fff; border-radius:25px; z-index:2147483638; font-size:15px; text-align:center; text-decoration:none; line-height:24px; font-weight:bold;">X</a>';
			var footer = '<div style="background:url(//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/footer_bg.png) repeat-x top left #f2f2f2; width:100%; height:65px; bottom:0px; text-align:center; padding:10px 0 5px 0; display:none;"><p>Visual Website Optimizer Variant Switcher</p>'+
							'<a href="http://www.traffic4u.nl"><img src="//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/logo_t4u.png" border="0" alt="Traffic4u" style="height:25px;"></a>&nbsp;&nbsp;&nbsp;&nbsp;'+
							'<a href="http://www.visualwebsiteoptimizer.com"><img src="//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/logo_vwo.png" border="0" alt="Visual Website Optimizer" style="height:25px;"></a>'+
						'</div>';
			
			$(overlayBG).appendTo('body');
			$(overlay).insertAfter('#t4u_vwo_switch_overlayBG');
			$(closeOverlay).appendTo('#t4u_vwo_switch_overlay');
			$(betaBadge).appendTo('#t4u_vwo_switch_overlay');
			$(vwoBar).appendTo('#t4u_vwo_switch_overlay');

			if (typeof _vis_opt_experiment_id != "undefined") {
			// VWO test actief	

			// check op meerdere tests
				$('<select class="multipleTests"></select>').insertAfter('#t4u_vwo_bar').hide();
				$(_vwo_exp_ids).each(function(index){
					$('<option value="'+_vwo_exp_ids[index]+'" label="'+index+'">test ID: '+_vwo_exp_ids[index]+'</option>').appendTo('.multipleTests');
					
					for(a in _vwo_exp[_vwo_exp_ids[index]].comb_n) {
							vNaam =  _vwo_exp[_vwo_exp_ids[index]].comb_n[a];
						};
						testN = index;
				});
				
				var meestRecenteTest = Math.max.apply(null, _vwo_exp_ids);
				var testID = meestRecenteTest;
				$('.multipleTests option').each(function(){
					if(testID == $(this).val()){
						$(this).attr('selected', 'selected');
					}
				});

			/* CHECK OP EXCLUDE COOKIE */
				if(unescape(readCookie("_vis_opt_exp_" + testID + "_exclude")) == true){
					// Exclude cookie gevonden voor de meest recente test
					$('<div id="t4u_formDiv" class="cookieCheck" style="padding:20px; width:100%; font-size:11px; font-family:tahoma, verdana, sans-serif; color:#333; line-height:20px;">'+
						'<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/vwo_ico_exclude.png" border="0" style="width:25px;">&nbsp;&nbsp;<strong style="font-size:16px;">Exclude cookie gevonden voor test #'+testID+'</strong><br />'+
						'<a href="#" class="delExclude">Variant activeren (en exclude cookie verwijderen)</a>'+
					'</div>').slideDown(350).insertAfter('#t4u_vwo_switch_overlay #t4u_vwo_bar');
					
					$('.delExclude').click(function(){
						
						$('.cookieCheck').hide();
						$('#t4u_vwo_switch_overlay').css('position', 'absolute');
						
						var activeVariant = unescape(readCookie("_vis_opt_exp_" + testID + "_combi"));

						if (_vwo_exp[testID].type == "VISUAL_AB"){
							var testType = "A/B Test";
						}else if(_vwo_exp[testID].type == "VISUAL"){
							var testType = "Multivariate test";
						}
						$('<div id="t4u_formDiv" style="padding:20px; width:100%; font-size:11px; font-family:tahoma, verdana, sans-serif; color:#333; line-height:20px;">'+
							'<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/vwo_ico.png" border="0" style="width:25px;">&nbsp;<strong style="font-size:16px;">VWO test ID: '+testID+'</strong><br />'+
							testType+' | '+_vwo_exp[testID].url_pattern+' | '+_vwo_exp[testID].pc_traffic+'%<br /><br />'+
							'<form id="vwo_switch_form">'+
								'<div id="submit_var_change" style="width:110px; padding:5px 10px; height:20px; border-radius:2px; background: #00be36; background: -moz-linear-gradient(top,  #00be36 0%, #029a2d 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#00be36), color-stop(100%,#029a2d)); background: -webkit-linear-gradient(top,  #00be36 0%,#029a2d 100%); background: -o-linear-gradient(top,  #00be36 0%,#029a2d 100%); background: -ms-linear-gradient(top,  #00be36 0%,#029a2d 100%); background: linear-gradient(to bottom,  #00be36 0%,#029a2d 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#00be36\', endColorstr=\'#029a2d\',GradientType=0 );  vertical-align:middle; text-align:center; color:#fff; margin-top:15px; cursor:pointer;">Toon Variant</div><small>(verwijder exclude cookie)</small>'+
							'</form>'+
						'</div>').slideDown(350).insertAfter('#t4u_vwo_switch_overlay #t4u_vwo_bar');

						for (a in _vwo_exp[_vwo_exp_ids[testN]].comb_n) {
							variantNaam =  _vwo_exp[_vwo_exp_ids[testN]].comb_n[a];
							$('<div style="height:20px; padding:5px; width:250px;" id="variant_div"><input type="radio" name="vwo_exp_'+_vwo_exp_ids[testN]+'" id="'+_vwo_exp_ids[testN]+'_'+variantNaam+'" value="'+a+'"> <label for="'+_vwo_exp_ids[testN]+'_'+variantNaam+'" id="'+_vwo_exp_ids[testN]+'_'+variantNaam+'_label" style="display:inline;">'+variantNaam.replace('---',' - ')+'</label></div>').insertBefore('#submit_var_change');
							$('#'+_vwo_exp_ids[testN]+'_'+variantNaam+'[value="'+activeVariant+'"]').attr('checked', 'checked');
						};
						
						$('#vwo_switch_form div#variant_div').hover(function(){
							$(this).css({'background':'url("//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/hover_bg.png") top right repeat-y #fff9c6', 'cursor':'pointer'});
						}, function(){
							$(this).css({'background':'white', 'cursor':'pointer'});
						});
							
						$('#submit_var_change').click(function(){
							var cookieVal = $('#vwo_switch_form input:checked').val();
							 _vis_opt_createCookie('_vis_opt_exp_'+ testID +'_exclude', '1', -1);
							 _vis_opt_createCookie('_vis_opt_exp_'+ testID +'_combi', cookieVal, 30);
							 location.reload();
						});		
					
					});
					
				} else {
					// Geen exclude cookie gevonden voor de meest recente test, gewoon doorgaan
					var activeVariant = unescape(readCookie("_vis_opt_exp_" + testID + "_combi"));

					if (_vwo_exp[testID].type == "VISUAL_AB"){
						var testType = "A/B Test";
					}else if(_vwo_exp[testID].type == "VISUAL"){
						var testType = "Multivariate test";
					}
				
					$('<div id="t4u_formDiv" class="form_ID'+testID+'" style="padding:20px; width:100%; font-size:11px; font-family:tahoma, verdana, sans-serif; color:#333; line-height:20px;">'+
						'<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/vwo_ico.png" border="0" style="width:25px;">&nbsp;<strong style="font-size:16px;" class="testTitle"></strong><br />'+
						testType+' | '+_vwo_exp[testID].url_pattern+' | '+_vwo_exp[testID].pc_traffic+'%<br /><br />'+
						'<form id="vwo_switch_form">'+
							'<div id="submit_var_change" style="width:110px; padding:5px 10px; height:20px; border-radius:2px; background: #00be36; background: -moz-linear-gradient(top,  #00be36 0%, #029a2d 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#00be36), color-stop(100%,#029a2d)); background: -webkit-linear-gradient(top,  #00be36 0%,#029a2d 100%); background: -o-linear-gradient(top,  #00be36 0%,#029a2d 100%); background: -ms-linear-gradient(top,  #00be36 0%,#029a2d 100%); background: linear-gradient(to bottom,  #00be36 0%,#029a2d 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#00be36\', endColorstr=\'#029a2d\',GradientType=0 );  vertical-align:middle; text-align:center; color:#fff; margin-top:15px; cursor:pointer;">Toon pagina</div>'+
						'</form>'+
					'</div>').slideDown(250, function(){
						$(footer).insertAfter('#t4u_formDiv').fadeIn(0, function(){
							// position van overlay div aanpassen a.h.v. browserhoogte
							if($('#t4u_vwo_switch_overlay').height() >= ($(window).height()*0.75)){
								$('#t4u_vwo_switch_overlay').css('position', 'absolute');
							}
						});
					}).appendTo('#t4u_vwo_switch_overlay');

					for (a in _vwo_exp[_vwo_exp_ids[testN]].comb_n) {
						variantNaam =  _vwo_exp[_vwo_exp_ids[testN]].comb_n[a];
						$('<div style="height:20px; padding:5px; width:250px; border:1px solid #ffffff; cursor:pointer;" id="variant_div"><input type="radio" name="vwo_exp_'+_vwo_exp_ids[testN]+'" id="'+_vwo_exp_ids[testN]+'_'+variantNaam+'" value="'+a+'" style="vertical-align:middle; margin-right:5px;"> <label for="'+_vwo_exp_ids[testN]+'_'+variantNaam+'" id="'+_vwo_exp_ids[testN]+'_'+variantNaam+'_label" style="cursor:pointer; display:inline;">'+variantNaam.replace('---',' - ')+'</label></div>').insertBefore('#submit_var_change');
						$('#'+_vwo_exp_ids[testN]+'_'+variantNaam+'[value="'+activeVariant+'"]').attr('checked', 'checked');
					};

					// Meerdere live testen switchen
					if(testN > 0){
						$('.multipleTests').show().appendTo('.testTitle');
						$('.multipleTests').css({
							'font-size':'16px',
							'font-weight':'bold',
							'font-family':'Tahoma, sans-serif',
							'color':'#333333',							
						});
						
						$('.multipleTests').change(function(){
							var selectedTest = $(this).val();
							var selectedTestIndex = $('option[value='+selectedTest+']').attr('label');
							
							function changeLiveVariant(){
								var liveForm = '.'+$('#t4u_formDiv').attr('class');
								var activeVariant = unescape(readCookie("_vis_opt_exp_" + selectedTest + "_combi"));
								
								$(liveForm).fadeOut(250, function(){
									$('<div id="t4u_formDiv" class="form_ID'+selectedTest+'" style="padding:20px; width:100%; font-size:11px; font-family:tahoma, verdana, sans-serif; color:#333; line-height:20px;">'+
										'<img src="//useruploads.visualwebsiteoptimizer.com/useruploads/917/images/vwo_ico.png" border="0" style="width:25px;">&nbsp;<strong style="font-size:16px;" class="testTitle"></strong><br />'+
										testType+' | '+_vwo_exp[selectedTest].url_pattern+' | '+_vwo_exp[selectedTest].pc_traffic+'%<br /><br />'+
										'<form id="vwo_switch_form">'+
											'<div id="submit_var_change" style="width:110px; padding:5px 10px; height:20px; border-radius:2px; background: #00be36; background: -moz-linear-gradient(top,  #00be36 0%, #029a2d 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#00be36), color-stop(100%,#029a2d)); background: -webkit-linear-gradient(top,  #00be36 0%,#029a2d 100%); background: -o-linear-gradient(top,  #00be36 0%,#029a2d 100%); background: -ms-linear-gradient(top,  #00be36 0%,#029a2d 100%); background: linear-gradient(to bottom,  #00be36 0%,#029a2d 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#00be36\', endColorstr=\'#029a2d\',GradientType=0 );  vertical-align:middle; text-align:center; color:#fff; margin-top:15px; cursor:pointer;">Toon pagina</div>'+
										'</form>'+
									'</div>').hide().insertAfter('#t4u_vwo_bar').fadeIn(500);

									for (a in _vwo_exp[_vwo_exp_ids[selectedTestIndex]].comb_n) {
										variantNaam =  _vwo_exp[_vwo_exp_ids[selectedTestIndex]].comb_n[a];
										$('<div style="height:20px; padding:5px; width:250px;" id="variant_div"><input type="radio" name="vwo_exp_'+_vwo_exp_ids[selectedTestIndex]+'" id="'+_vwo_exp_ids[selectedTestIndex]+'_'+variantNaam+'" value="'+a+'"> <label for="'+_vwo_exp_ids[selectedTestIndex]+'_'+variantNaam+'" id="'+_vwo_exp_ids[selectedTestIndex]+'_'+variantNaam+'_label" style="display:inline;">'+variantNaam.replace('---',' - ')+'</label></div>').insertBefore('#submit_var_change');
										$('#'+_vwo_exp_ids[selectedTestIndex]+'_'+variantNaam+'[value="'+activeVariant+'"]').attr('checked', 'checked');
									};

									$('.multipleTests').show().appendTo('.testTitle');
									$('.multipleTests').css({
										'font-size':'16px',
										'font-weight':'bold',
										'font-family':'Tahoma, sans-serif',
										'color':'#333333',							
									});
									
									//todo: Hovers stylen, bij definitieve variant in functie stoppen
									$('#vwo_switch_form div#variant_div').hover(function(){
										$(this).css({'background':'#f2f4ff'});
									}, function(){
										$(this).css({'background':'#ffffff'});
									});
									
									$('#vwo_switch_form input:checked').parent().css('border','1px solid #f2f4ff');
									
									$('#vwo_switch_form div#variant_div input').change(function(){
										$('#vwo_switch_form div#variant_div').css('border', '1px solid #ffffff');
										$(this).parent().animate({
											backgroundColor: "#ffffff"
										}, 0, function(){
										$(this).animate({
											backgroundColor: "#f2f4ff" 
										}, 350)}).css('border','1px solid #f2f4ff');
									});
									// /todo.
									
									$('#submit_var_change').click(function(){
										var cookieVal = $('#vwo_switch_form input:checked').val();
										 _vis_opt_createCookie('_vis_opt_exp_'+ selectedTest +'_combi', cookieVal, 30);
										 location.reload();
									});			
									
									$(this).remove();
								});
							}
							
							$('.multipleTests').change(changeLiveVariant());
							
						});
					}else{
						$('.testTitle').text('VWO test ID: '+testID);
					}

					// Geen meerdere testen, normale switcher
					$('#vwo_switch_form div#variant_div').hover(function(){
						$(this).css({'background':'#f2f4ff'});
					}, function(){
						$(this).css({'background':'#ffffff'});
					});
					
					$('#vwo_switch_form input:checked').parent().css('border','1px solid #f2f4ff');
					
					$('#vwo_switch_form div#variant_div input').change(function(){
						$('#vwo_switch_form div#variant_div').css('border', '1px solid #ffffff');
						$(this).parent().animate({
							backgroundColor: "#ffffff"
						}, 0, function(){
						$(this).animate({
							backgroundColor: "#f2f4ff" 
						}, 350)}).css('border','1px solid #f2f4ff');
					});
						
					$('#submit_var_change').click(function(){
						var cookieVal = $('#vwo_switch_form input:checked').val();
						 _vis_opt_createCookie('_vis_opt_exp_'+ testID +'_combi', cookieVal, 30);
						 location.reload();
					});			
				}
				
			} else {
			// Geen VWO test actief
				$('<div id="t4u_formDiv" style="padding:20px; width:100%; height:100%; font-size:11px; font-family:tahoma, verdana, sans-serif; color:#333;">'+
					'<strong style="font-size:16px;">Geen test actief</strong><br /> op '+location.href+'<br /><br />'+
					'<a href="#" id="t4u_switch_close" style="color:#333; font-size:12px;">Sluit de switcher</a>'+
				'</div>').slideDown(350).appendTo('#t4u_vwo_switch_overlay');
			
				$(footer).insertAfter('#t4u_formDiv').fadeIn(350, function(){
					// position van overlay div aanpassen a.h.v. browserhoogte
					if($('#t4u_vwo_switch_overlay').height() >= ($(window).height()*0.75)){
						$('#t4u_vwo_switch_overlay').css('position', 'absolute');
					}
				});
			}
			
			$('#t4u_vwo_switch_overlayBG, #t4u_switch_close').click(function(){
				$('#t4u_vwo_switch_overlayBG, #t4u_vwo_switch_overlay').fadeOut(350, function(){
					$('#t4u_vwo_switch_overlayBG, #t4u_vwo_switch_overlay').remove();
				});
			});
		});
	}
}
