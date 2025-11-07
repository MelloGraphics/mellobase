import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { url, alt, x, y, widthPercent, zIndex, transformAnchorCenter, hasShadow } = attributes;

	const blockProps = useBlockProps.save({
		style: {
			'--mb-x': x + '%',
			'--mb-y': y + '%',
			'--mb-w': widthPercent ? widthPercent + '%' : undefined,
			'--mb-z': zIndex !== undefined ? String(zIndex) : undefined,
			'--mb-anchor-center': transformAnchorCenter ? 1 : 0,
		},
	});

	return (
		<div {...blockProps}>
			{url && (
				<img
					src={url}
					alt={alt || ''}
					loading="lazy"
					decoding="async"
					style={{ filter: hasShadow ? 'drop-shadow(var(--wp--preset--shadow--natural))' : undefined }}
				/>
			)}
		</div>
	);
}