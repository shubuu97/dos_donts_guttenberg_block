/**
 * External dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies.
 */
import columnsTemplate from './templates/columnsTemplate';

// InnerBlocks templates.
const templates = [
	'core/group',
	{},
	columnsTemplate
];


// List of allowed blocks.
const ALLOWED_BLOCKS = [ 'core/group' ];

/**
 * Edit function.
 *
 * @param { Object } attributes.
 *
 * @returns { Object } content.
 */
const Edit =( { attributes } ) => {
	return (
		<div>
			<InnerBlocks
				templates={ templates }
				allowedBlocks={ ALLOWED_BLOCKS }
				templateLock={ true }
			/>
		</div>
	);
}

export default Edit;