import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import './editor.scss';
import './style.scss';

const TEMPLATE = [
    [
        'core/paragraph',
        {
            lock: { move: true, remove: true },
            metadata: { name: 'title' },
            className: 'has-small-font-size',
            fontSize: 'small',
            content: __('Quick actions', 'mellobase'),
        },
    ],
    [
        'core/buttons',
        {
            lock: { move: true, remove: true },
            metadata: { name: 'Quick actions' },
            className: 'wp-block-mellobase-quick-actions__actions',
            style: {
                spacing: {
                    blockGap: {
                        left: 'var:preset|spacing|small',
                    },
                },
            },
        },
        [
            [
                'core/button',
                {
                    metadata: { name: 'Quick action' },
                    className: 'is-style-tertiary',
                    text: __('Quick link', 'mellobase'),
                    url: '#',
                },
            ],
            [
                'core/button',
                {
                    metadata: { name: 'Quick action' },
                    className: 'is-style-tertiary',
                    text: __('Quick link', 'mellobase'),
                    url: '#',
                },
            ],
        ],
    ],
    [
        'core/buttons',
        {
            lock: { move: true, remove: true },
            metadata: { name: 'Close' },
            className: 'wp-block-mellobase-quick-action__close',
        },
        [
            [
                'core/button',
                {
                    metadata: { name: 'Close button' },
                    className: 'quick-actions_close is-style-default',
                    text: __('+', 'mellobase'),
                },
            ],
        ],
    ],
];

export default function Edit() {
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <InnerBlocks template={TEMPLATE} templateLock={false} />
        </div>
    );
}