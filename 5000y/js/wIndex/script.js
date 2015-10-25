/**
 * @version		$Id:  $Revision
 * @package		mootool
 * @subpackage	lofmCordion.
 * @copyright	Copyright (C) JAN 2010 LandOfCoder.com <@emai:landofcoder@gmail.com>. All rights reserved.
 * @website     http://landofcoder.com
 * @license		This plugin is dual-licensed under the GNU General Public License and the MIT License 
 */

 ////
if( typeof(LofmCordion) == 'undefined' ){
	var LofmCordion = new Class( {
		initialize:function( options ){
			this.setting = Object.extend({
				wapperSelector:$E('#lof-cordion-1 .lof-cordion-wapper'),
				startItem:3,
				isAuto:true,
				align:'center',
				eventHanlder:'click', // hover|click
				isPreload:true,
				widthDisplaying:70,
				maxWidth:700,
				minWidth:70,
				maxItem:4
			}, options || {} );
			this.lastNo = 0;
			var mapEvents = {hover:['mouseover'], click:['click']};
			this.panelPositioning = 1;
			this.fx = [];
			this.fxShadowItems = [];
			this.fxDescriptions = [];
			if( !$defined(this.setting.wapperSelector) ){ return ;	}
			this.sliders = $(this.setting.wapperSelector).getElements('ul li');
			if( this.sliders.length <= 0 ){ return }	
			
			this.sliders.each( function(item, index){
				var seft = this;
				item.addEvent(  mapEvents[this.setting.eventHanlder][0] , function(e) {
					
					e = new Event(e);
						this.makeAnimation( index );
					e.stop();
				}.bind(this) );
				item.setStyles( {display:'block', 'z-index':index+1, 'left':index*(this.setting.widthDisplaying)} );
				this.fx[index] = new Fx.Styles( item, {duration:500, transition:Fx.Transitions.Circ.easeInOut} ); 	
				this.fxShadowItems[index] = new Fx.Styles( item.getElement( '.lof-shadow' ), {duration:500, transition:Fx.Transitions.Circ.easeInOut} ); 	
				this.fxDescriptions[index] = new Fx.Styles( item.getElement( '.lof-description' ), {duration:700, transition:Fx.Transitions.linear} ).start({height:[0,0]}); 	
			}.bind(this) );
			/// preload iamges
			$image = this.setting.wapperSelector.getElements('img');
				$image.setStyles( {opacity:0, visibility:'hidden'} );
				$image.each( function( image, index ){
					//	if( image.complete ){
							setTimeout( function(){
								var fx = new Fx.Style( image, 'opacity', { duration:1000} );				 
								fx.start(0,1);
							}, 500 + 100*index )
					//	} else {
								
					//	}
				});
				
			///
			
			this.fxShadowItems[this.setting.startItem].start({opacity:0}); 
			this.fxDescriptions[this.setting.startItem].stop().start({height:[90]});		
		},
		animateDescription:function(){
			
		},
		makeAnimation:function( activeIndex ) {  ///alert(activeIndex)
			
	//		this.fxShadowItems.start();
			this.fx.each( function(fx, currentIndex) { 
				var panelLeft = this.setting.minWidth * currentIndex;
				if ( (currentIndex * this.panelPositioning) > ( activeIndex * this.panelPositioning)){
					panelLeft = panelLeft + (this.setting.maxWidth - this.setting.minWidth) * this.panelPositioning;
				}
				fx.start( {left:[panelLeft]} );
				
				if( activeIndex != currentIndex ){
					this.fxDescriptions[currentIndex].start({height:0})
					this.fxShadowItems[currentIndex].start( {opacity:1});
				}
	
			}.bind(this) );
			

			this.fxShadowItems[activeIndex].start({opacity:0});
			this.lastNo = activeIndex;
			this.fxDescriptions[activeIndex].start({height:90});		
		}
	} );
}
