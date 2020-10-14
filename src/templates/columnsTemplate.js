/**
 * Get single column template.
 *
 * @param { string } type
 * @param { string } colClassName
 * @param { string } heading
 *
 * @returns { Array } block column
 */

const getSingleColumnTemplate = ( type, heading, colClassName ) => {
	return [
		'core/column',
		{},
		[
			[
				'shubham-blocks/heading-with-icon',
				{
					type,
					content: `<strong><span>${heading}</span></strong>`,
				},
			],
			[
				'core/list',
				{}
			]
		]
	]
};

/**
 * Columns template
 *
 * @returns { Array } block columns
 */
const ColumnsTemplate = [
	[
		'core/columns',
		{},
		[
			getSingleColumnTemplate( 'dos', "Do's" ),
			getSingleColumnTemplate( 'donts', "Dont's" ),
		]
	],
];

export default ColumnsTemplate;