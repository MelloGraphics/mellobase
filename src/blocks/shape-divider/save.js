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

	// Calculate container translation based on flip
	const getContainerTransform = () => {
		// If flipped vertically, the shape is at the top, translate up
		// If not flipped, the shape is at the bottom, translate down
		return flipVertical ? 'translateY(1px)' : 'translateY(-1px)';
	};

	return (
		<div {...blockProps} style={{ backgroundColor, transform: getContainerTransform() }}>
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