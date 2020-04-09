// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	get_transcluded_in.js

	MediaWiki API Demos
	Demo of `Transcludedin` module: Get a list of pages which transclude a given page

	MIT License
*/

var params = {
		action: 'query',
		titles: 'Main Page',
		prop: 'transcludedin',
		format: 'json'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	console.log( data );
} );