/**
 * Dos and Donts block.
 *
 * @package
 */

/**
 * External dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import Edit from './edit';

/**
 * List of blocks that we
 */

/**
 * Register block type.
 */
registerBlockType('shubham-blocks/dos-and-donts', {
  /**
   * Block title.
   *
   * @type { string }
   */
  title: __('Dos and Donts Block'),

  /**
   * Block icon.
   *
   * @type { string }
   */
  description: __('List of dos and donts'),

  /**
   * Block description.
   *
   * @type { string }
   */
  icon: 'universal-access',

  /**
   * Block category.
   *
   * @type { string }
   */
  category: 'layout',

  /**
   * Edit function
   */
  edit: Edit,

  /**
   * Save function
   *
   * @returns { Object } Save content.
   */
  save: ( { attributes } ) => {
	  return (
		  <InnerBlocks.Content />
	  )
  },
});
