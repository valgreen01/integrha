$( function()
{

	// Quotes rotator
	if ( $( '.quotes' ).length )
	{
		$( '#cbp-qtrotator' ).cbpQTRotator({
				speed    : 800,
				easing   : 'ease',
				interval : 7000
		});
		//$( '#cbp-qtrotator' ).cbpQTRotator( 'destroy' );
	}

	// Info Selected Square
	if ( $( '.square-container' ).length)
	{
		$( '.tabbed-elems > ul > li' ).each( function()
		{
			$(this).click( function()
	        {
	        	if ( $( this ).hasClass( 'active' ) )
	        	{
					$( this ).siblings().removeClass( 'active' );
				}
				else
				{
					$( this ).addClass( 'active' ).siblings().removeClass( 'active' );
				}
	            $( '.tabbed-elems > div' ).hide().removeClass( 'animated fadeInLeft' ).eq( $( this ).index() ).show().addClass( 'animated fadeInLeft' );
	        });
		}).eq( 0 ).click();
	}

});