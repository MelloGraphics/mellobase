import { InnerBlocks, InspectorAdvancedControls, useBlockProps } from '@wordpress/block-editor';
import { TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';
import './style.scss';

const TEMPLATE = [
    [
        'core/group',
        {
            lock: { move: true, remove: true },
            metadata: { name: 'Swiper Wrapper' },
            className: 'swiper-wrapper',
            layout: { type: 'flex', flexWrap: 'nowrap' },
            style: { spacing: {blockGap: 'var:preset|spacing|none'} }
        },
        [
            [
                'core/group',
                {
                    metadata: { name: 'Swiper Slide' },
                    layout: { type: 'constrained' },
                },
                [
                    [
                        'core/paragraph',
                        {
                            placeholder: __(
                                'Add a new group within the "Swiper Wrapper" group for each slide you require.',
                                'mellobase'
                            ),
                            style: {
                                spacing: {
                                    padding: {
                                        top: 'var:preset|spacing|x-large',
                                        bottom: 'var:preset|spacing|x-large',
                                        left: 'var:preset|spacing|x-large',
                                        right: 'var:preset|spacing|x-large',
                                    },
                                },
                                border: { width: '1px' },
                            },
                        },
                    ],
                ],
            ],
            [
                'core/group',
                {
                    metadata: { name: 'Swiper Slide' },
                    layout: { type: 'constrained' },
                },
                [
                    [
                        'core/paragraph',
                        {
                            placeholder: __(
                                'Add a new group within the "Swiper Wrapper" group for each slide you require.',
                                'mellobase'
                            ),
                            style: {
                                spacing: {
                                    padding: {
                                        top: 'var:preset|spacing|x-large',
                                        bottom: 'var:preset|spacing|x-large',
                                        left: 'var:preset|spacing|x-large',
                                        right: 'var:preset|spacing|x-large',
                                    },
                                },
                                border: { width: '1px' },
                            },
                        },
                    ],
                ],
            ],
            [
                'core/group',
                {
                    metadata: { name: 'Swiper Slide' },
                    layout: { type: 'constrained' },
                },
                [
                    [
                        'core/paragraph',
                        {
                            placeholder: __(
                                'Add a new group within the "Swiper Wrapper" group for each slide you require.',
                                'mellobase'
                            ),
                            style: {
                                spacing: {
                                    padding: {
                                        top: 'var:preset|spacing|x-large',
                                        bottom: 'var:preset|spacing|x-large',
                                        left: 'var:preset|spacing|x-large',
                                        right: 'var:preset|spacing|x-large',
                                    },
                                },
                                border: { width: '1px' },
                            },
                        },
                    ],
                ],
            ],
        ],
    ],
    [
        'core/group',
        {
            metadata: { name: 'Swiper Pagination' },
            className: 'swiper-pagination',
            layout: { type: 'constrained' },
        },
    ],
    [
        'core/group',
        {
            metadata: { name: 'Swiper Scrollbar' },
            className: 'swiper-scrollbar',
            layout: { type: 'constrained' },
        },
    ],
    [
        'core/buttons',
        {
            metadata: { name: 'Prev / Next buttons' },
            style: { spacing: { blockGap: { left: 'var:preset|spacing|small' } } },
        },
        [
            ['core/button', { className: 'swiper-button-prev', text: __('Prev', 'mellobase') }],
            ['core/button', { className: 'swiper-button-next', text: __('Next', 'mellobase') }],
        ],
    ],
];

export default function Edit(props) {
    const { attributes, setAttributes } = props;
    const { swiperSettings } = attributes;
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <InspectorAdvancedControls>
                <TextareaControl
                    label={__('Swiper Additional Settings', 'mellobase')}
                    value={swiperSettings || ''} // Ensure empty string if no settings
                    onChange={(value) => {
                        try {
                            const parsed = JSON.parse(value);
                            setAttributes({ swiperSettings: value.trim() ? JSON.stringify(parsed, null, 2) : null }); // Remove if empty
                        } catch (e) {
                            setAttributes({ swiperSettings: value.trim() ? value : null });
                        }
                    }}
                    help={__('Enter Swiper settings as JSON, e.g., {"loop": true, "speed": 800}', 'mellobase')}
                />
            </InspectorAdvancedControls>
            <InnerBlocks template={TEMPLATE} templateLock={false} />
        </div>
    );
}