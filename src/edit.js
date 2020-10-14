/**
 * External dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies.
 */
import columnsTemplate from './templates/columnsTemplate';

// InnerBlocks templates.
const TEMPLATES = [
	[
		'core/group',
		{
			backgroundColor: 'pale-cyan-blue',
		},
		columnsTemplate,
	],
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
const Edit = () => {
	return (
		<div>
			<InnerBlocks
				templates={ TEMPLATES }
				allowedBlocks={ ALLOWED_BLOCKS }
				templateLock={ true }
			/>
		</div>
	);
}

export default Edit;