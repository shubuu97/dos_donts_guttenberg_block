/**
 * Get single column template.
 *
 * @param { string } type
 * @param { string } colClassName
 * @param { string } heading
 *
 * @returns { Array } block column
 */

const getSingleColumnTemplate = ( type, colClassName, heading ) => {
	return [
		'core/column',
		{},
		[
			//heading block
			[],
			[
				'core/list',
				{}
			]
		]
	]
};

/**
 * Columns template/
 *
 * @returns { Array } block columns
 */
const ColumnsTemplate = [
	[
		'core/columns',
		{},
		[
			getSingleColumnTemplate(),
			getSingleColumnTemplate()
		]
	]
]

export default ColumnsTemplate;