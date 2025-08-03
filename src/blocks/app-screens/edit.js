// mellobase/app-screens/edit.js
import { InspectorControls, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { images = [] } = attributes || {};

    const updateImage = (index, updates) => {
        const newImages = [...images];
        newImages[index] = { ...newImages[index], ...updates };
        setAttributes({ images: newImages });
    };

    const addImage = () => {
        setAttributes({ images: [...images, { id: 0, url: '', alt: '', key: '' }] });
    };

    const removeImage = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setAttributes({ images: newImages });
    };

    const blockProps = useBlockProps({
        className: 'wp-block-mellobase-app-screens',
        'data-namespace': 'mellobase/app-screens',
    });

    console.log('App Screens block rendering:', blockProps.className, blockProps['data-namespace'], 'Order:', document.querySelectorAll('.block-editor-block-list__block').length);

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('App Screens', 'app-screens')} initialOpen={true}>
                    {images.map((img, index) => (
                        <div key={index} className="app-screens-image-item" style={{ marginBottom: '1em', border: '1px solid #ddd', padding: '1em', borderRadius: '4px' }}>
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={(media) => {
                                        console.log('Selected media:', media);
                                        const url = media.url || media.sizes?.full?.url || media.source_url || '';
                                        const alt = media.alt_text || media.alt || '';
                                        const id = media.id || 0;
                                        if (!url) {
                                            console.error('No valid URL found for selected media:', media);
                                            return;
                                        }
                                        updateImage(index, { id, url, alt });
                                    }}
                                    allowedTypes={['image']}
                                    value={img.id}
                                    render={({ open }) => (
                                        <>
                                            {img.url && (
                                                <div className="app-screens-image-preview" style={{ marginBottom: '0.5em' }}>
                                                    <img src={img.url} alt={img.alt || ''} style={{ maxWidth: '100px', maxHeight: '100px', display: 'block', marginBottom: '0.5em' }} />
                                                </div>
                                            )}
                                            <Button onClick={open} variant="secondary" style={{ marginBottom: '0.5em' }}>
                                                {img.url ? __('Replace', 'app-screens') : __('Select Image', 'app-screens')}
                                            </Button>
                                        </>
                                    )}
                                />
                            </MediaUploadCheck>
                            {img.url && (
                                <Button isDestructive variant="link" onClick={() => removeImage(index)} style={{ marginBottom: '0.5em' }}>
                                    {__('Remove', 'app-screens')}
                                </Button>
                            )}
                            <TextControl
                                __next40pxDefaultSize
                                __nextHasNoMarginBottom
                                label={__('Key', 'app-screens')}
                                value={img.key || ''}
                                onChange={(val) => updateImage(index, { key: val })}
                                style={{ marginTop: '0.5em' }}
                                className="app-screens-key-input"
                            />
                        </div>
                    ))}
                    <Button variant="primary" onClick={addImage}>
                        {__('Add Image', 'app-screens')}
                    </Button>
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <div className="wp-block-mellobase-app-screens__screens-wrapper">
                    {images.map((img, index) => (
                        img.url && (
                            <img
                                key={img.key || index}
                                className="wp-block-mellobase-app-screens__screen"
                                data-key={img.key || ''}
                                src={img.url}
                                alt={img.alt || ''}
                            />
                        )
                    ))}
                </div>
            </div>
        </>
    );
}