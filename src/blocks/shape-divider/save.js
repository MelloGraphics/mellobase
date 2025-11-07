import { useBlockProps } from '@wordpress/block-editor';
import { shapeDividers } from './theme-settings';

export default function save({ attributes }) {
	const {
		dividerPath = 'wave1',
		pathColor = '#ffffff',
		backgroundColor = 'transparent',
		flipVertical = false,
		flipHorizontal = false,
	} = attributes;

	const blockProps = useBlockProps.save({
		style: { backgroundColor },
	});

	// Get the selected divider SVG path
	const selectedDivider = shapeDividers.find(d => d.id === dividerPath) || shapeDividers[0];

	// Calculate transform style
	const getTransform = () => {
		const transforms = [];
		if (flipVertical) transforms.push('scaleY(-1)');
		if (flipHorizontal) transforms.push('scaleX(-1)');
		return transforms.length > 0 ? transforms.join(' ') : 'none';
	};

	return (
		<div {...blockProps}>
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox={selectedDivider.viewBox}
				preserveAspectRatio="none"
				style={{ transform: getTransform() }}
			>
				<path
					d={selectedDivider.path}
					className="shape-fill"
					fill={pathColor}
				/>
			</svg>
		</div>
	);
}