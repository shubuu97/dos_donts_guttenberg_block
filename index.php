<?php
/**
 * Plugin Name: Dos and Donts Block
 * Version: 1.0.0
 * Description: List of dos and donts
 * Author: Shubham Chitransh
 *
 * @package dos-and-donts-block
 */

function dos_donts_block() {
	wp_register_script(
		'dos-and-donts-block-script',
		plugins_url( 'build/index.js', __FILE__),
		array( 'wp-blocks', 'wp-block-editor', 'wp-i18n'),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	register_block_type( 'shubham-blocks/dos-and-donts', array (
		'editor_script' => 'dos-and-donts-block-script'
	) );
 }

 add_action( 'init', 'dos_donts_block');

