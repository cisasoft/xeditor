/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.width = '75%';   // CSS unit (percent).
	// config.height = '25em';  // CSS unit (em).
	config.uiColor = '#6A6AFF';
	config.width = 1000;     // 500 pixels wide.
	config.height = 400;     // 500 pixels high.
	
	config.extraPlugins = 'clipboard';
	config.extraPlugins = 'lineutils';
	config.extraPlugins = 'widget';
	
	/* google map
	config.extraPlugins = 'locationmap';
	config.locationMapPath = './';
	config.ckfinder = true;
	*/
};
