$( function() {

	// Quotes rotator
	if ( $('.quotes').length )
	{
		$('#cbp-qtrotator').cbpQTRotator({
				speed    : 500,
				easing   : 'ease',
				interval : 7000
		});
		
		//$( '#cbp-qtrotator' ).cbpQTRotator( 'destroy' );
	}


} );