import { ColorPalette, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	ColorIndicator,
	Dropdown,
	Flex,
	FlexItem,
	__experimentalHStack as HStack,
	PanelBody,
	SelectControl,
	ToggleControl,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalZStack as ZStack
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';
import { shapeDividers } from './theme-settings';

export default function Edit({ attributes, setAttributes }) {
	const {
		dividerPath = 'wave1',
		pathColor = '#000000',
		backgroundColor = '#ffffff',
		flipVertical = false,
		flipHorizontal = false,
	} = attributes;

	const blockProps = useBlockProps({
		className: 'mellobase-block-shape-divider',
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

	const resetAll = () => {
		setAttributes({
			pathColor: undefined,
			backgroundColor: undefined,
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Divider Settings', 'shape-divider')}>
					<SelectControl
						label={__('Divider Style', 'shape-divider')}
						value={dividerPath}
						options={shapeDividers.map(divider => ({
							label: divider.name,
							value: divider.id,
						}))}
						onChange={(value) => setAttributes({ dividerPath: value })}
					/>
				</PanelBody>

				<ToolsPanel
					label={__('Color', 'shape-divider')}
					resetAll={resetAll}
					className="color-block-support-panel"
					style={{ gap: 0 }}
				>
					<ToolsPanelItem
						hasValue={() => !!pathColor}
						label={__('Shape', 'shape-divider')}
						onDeselect={() => setAttributes({ pathColor: undefined })}
						isShownByDefault
						className="block-editor-tools-panel-color-gradient-settings__item"
					>
						<Dropdown
							className="block-editor-tools-panel-color-gradient-settings__dropdown"
							contentClassName="block-editor-panel-color-gradient-settings__dropdown-content"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									onClick={onToggle}
									aria-expanded={isOpen}
									className="block-editor-panel-color-gradient-settings__dropdown"
								>
									<HStack justify="flex-start">
										<ZStack isLayered={false} offset={-8}>
											<Flex>
												<ColorIndicator colorValue={pathColor} />
											</Flex>
										</ZStack>
										<FlexItem className="block-editor-panel-color-gradient-settings__color-name">
											{__('Shape', 'shape-divider')}
										</FlexItem>
									</HStack>
								</Button>
							)}
							renderContent={() => (
								<ColorPalette
									value={pathColor}
									onChange={(value) => setAttributes({ pathColor: value })}
								/>
							)}
						/>
					</ToolsPanelItem>

					<ToolsPanelItem
						hasValue={() => !!backgroundColor}
						label={__('Background', 'shape-divider')}
						onDeselect={() => setAttributes({ backgroundColor: undefined })}
						isShownByDefault
						className="block-editor-tools-panel-color-gradient-settings__item"
						style={{ marginTop: 0 }}
					>
						<Dropdown
							className="block-editor-tools-panel-color-gradient-settings__dropdown"
							contentClassName="block-editor-panel-color-gradient-settings__dropdown-content"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									onClick={onToggle}
									aria-expanded={isOpen}
									className="block-editor-panel-color-gradient-settings__dropdown"
								>
									<HStack justify="flex-start">
										<ZStack isLayered={false} offset={-8}>
											<Flex>
												<ColorIndicator colorValue={backgroundColor} />
											</Flex>
										</ZStack>
										<FlexItem className="block-editor-panel-color-gradient-settings__color-name">
											{__('Background', 'shape-divider')}
										</FlexItem>
									</HStack>
								</Button>
							)}
							renderContent={() => (
								<ColorPalette
									value={backgroundColor}
									onChange={(value) => setAttributes({ backgroundColor: value })}
								/>
							)}
						/>
					</ToolsPanelItem>
				</ToolsPanel>

				<PanelBody title={__('Transform', 'shape-divider')}>
					<ToggleControl
						label={__('Flip Vertical', 'shape-divider')}
						checked={flipVertical}
						onChange={(value) => setAttributes({ flipVertical: value })}
					/>

					<ToggleControl
						label={__('Flip Horizontal', 'shape-divider')}
						checked={flipHorizontal}
						onChange={(value) => setAttributes({ flipHorizontal: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps} style={{ backgroundColor }}>
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
		</>
	);
}