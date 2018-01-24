/*
* jQuery Milestone Plugin 1.0.0 (works with jQuery 1.10+)
*
* This is a jQuery plugin that uses the bootstrap progress bar plugin to
* display a horizontal timeline with milestones.
*
*/
;(function ( $ ) {
	"use strict",

	$.fn.milestones = function( options ) {

		/*--------------------------
		Default settings
		--------------------------*/
		var settings = $.extend({
			labels        : ["Step1","Step2","Step3","Step4"],  // Array of labels for each milestone
			position      : 2,                                  // Position of the progress bar
			checks        : 2,                                  // Number of checkmarks
			checkclass    : 'ms-checkmark',                     // Class for the checkmark
			msclass       : 'ms-tick-checked',                  // Class for the finished milestones
		}, options );

		return this.each( function() {

			/*--------------------------
			Establish global variables
			--------------------------*/
			var id = $(this).attr('id');
			var labels = ($(this).data('labels') != undefined ? $(this).data('labels') : settings.labels);
			var position = ($(this).data('position') != undefined ? $(this).data('position')-1 : settings.position-1);
			var checks = ($(this).data('checks') != undefined ? $(this).data('checks')-1 : settings.checks-1);
			var checkclass = ($(this).data('checkclass') != undefined ? $(this).data('checkclass') : settings.checkclass);
			var msclass = ($(this).data('msclass') != undefined ? $(this).data('msclass') : settings.msclass);

			/*--------------------------
			Set variables based on globals
			--------------------------*/
			var ticks = labels.length;
			var div = ticks-1;
			var per = 100 / div;
			var len = position * per;

			/*-----------------------------
			Insert the Milestone components
			------------------------------*/
			$(this).addClass('milestones');
			$(this).html('<div class="progress"><div class="progress-bar" role="progressbar" style="width:'+len+'%"> </div></div><div class="stage"></div><div class="labels"></div><div class="ms-alt-label">Next Action: <span>'+labels[position]+'</span></div>');

			/*-----------------------------
			Iterate to define the tickmarks
			and checkmarks
			------------------------------*/
			for (x = 0;x <= div;x++){
				var lft = (per*x)-.4;
				if (x <= checks){
					var icon = '<i class="fa fa-check '+checkclass+'"></i>';
					var cls = ' '+msclass;
				}else{
					var icon = '';
					var cls = ' ms-tick-empty';
				}
				if (x == 0){
					$("#"+id+" .stage").append('<span class="ms-tick first'+cls+'">'+icon+'</span>');
					$("#"+id+" .labels").append('<label class="ms-tick-label first"><span>'+labels[x]+'</span></label>');
				}else if (x == div){
					$("#"+id+" .stage").append('<span class="ms-tick last'+cls+'">'+icon+'</span>');
					$("#"+id+" .labels").append('<label class="ms-tick-label last"><span>'+labels[x]+'</span></label>');
				}else{
					var n = labels[x].length/5;
					var llft = (per*x)-n;
					$("#"+id+" .stage").append('<span class="ms-tick'+cls+'" style="left:'+lft+'%">'+icon+'</span>');
					$("#"+id+" .labels").append('<label class="ms-tick-label" style="left:'+llft+'%"><span>'+labels[x]+'</span></label>');
				}
			}
		});

	};
}( jQuery ));