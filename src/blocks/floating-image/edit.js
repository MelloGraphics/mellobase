import {
    BlockControls,
    InspectorControls,
    MediaReplaceFlow,
    MediaUpload,
    useBlockProps,
} from '@wordpress/block-editor';
import {
    Button,
    __experimentalNumberControl as NumberControl,
    PanelBody,
    RangeControl,
    Spinner,
    ToggleControl,
    ToolbarGroup,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
	const { url, id, alt, x, y, widthPercent, zIndex, transformAnchorCenter, hasShadow } = attributes;

	const blockProps = useBlockProps({
		className: 'mello-floating-image',
		style: {
			'--mb-x': x + '%',
			'--mb-y': y + '%',
			'--mb-w': widthPercent ? widthPercent + '%' : undefined,
			'--mb-z': zIndex,
			'--mb-anchor-center': transformAnchorCenter ? 1 : 0,
		},
	});

	return (
		<>
			<BlockControls group="other">
				{ url && (
					<ToolbarGroup>
						<MediaReplaceFlow
							mediaId={ id }
							mediaURL={ url }
							allowedTypes={ [ 'image' ] }
							accept="image/*"
							onSelect={ (m) => setAttributes({ url: m.url, id: m.id, alt: m.alt }) }
							onSelectURL={ (newURL) => setAttributes({ url: newURL, id: 0 }) }
						/>
					</ToolbarGroup>
				) }
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__('Position', 'mello')} initialOpen={true}>
					<RangeControl
						label={__('Horizontal (X%)', 'mello')}
						value={x}
						onChange={(v) => setAttributes({ x: Number(v) })}
						min={-20} max={100} step={0.1}
					/>
					<RangeControl
						label={__('Vertical (Y%)', 'mello')}
						value={y}
						onChange={(v) => setAttributes({ y: Number(v) })}
						min={-20} max={100} step={0.1}
					/>
					<ToggleControl
						label={__('Anchor from centre', 'mello')}
						checked={transformAnchorCenter}
						onChange={(v) => setAttributes({ transformAnchorCenter: v })}
						help="When on, the image is centred on the X/Y point. When off, the top-left corner sits on the X/Y point."
					/>
					<ToggleControl
						label={__('Has Shadow', 'mello')}
						checked={hasShadow}
						onChange={(v) => setAttributes({ hasShadow: v })}
						help="Toggle to apply a drop shadow to the image."
					/>
				</PanelBody>
				<PanelBody title={__('Size & layer', 'mello')} initialOpen={false}>
					<RangeControl
						label={__('Width (%)', 'mello')}
						value={widthPercent}
						onChange={(v) => setAttributes({ widthPercent: Number(v) })}
						min={1} max={100}
					/>
					<NumberControl
						label={__('Z-index', 'mello')}
						value={zIndex}
						onChange={(v) => setAttributes({ zIndex: Number(v) || 0 })}
						min={0} max={99}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				{url ? (
					<>
						<img
							src={url}
							alt={alt || ''}
							style={{ filter: hasShadow ? 'drop-shadow(var(--wp--preset--shadow--natural))' : undefined }}
						/>
					</>
				) : (
					<MediaUpload
						onSelect={(m) => setAttributes({ url: m.url, id: m.id, alt: m.alt })}
						allowedTypes={['image']}
						render={({ open, isUploading }) => (
							<Button variant="primary" onClick={open} disabled={isUploading}>
								{isUploading ? <Spinner /> : __('Select image', 'mello')}
							</Button>
						)}
					/>
				)}
				{!url && <p className="mello-floating-image__hint">This image will float over the nearest positioned Group.</p>}
			</div>
		</>
	);
}