import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const { swiperSettings } = attributes;
    
    let formattedSwiperSettings = null;
    if (swiperSettings) {
        try {
            const parsedSettings = JSON.parse(swiperSettings);
            formattedSwiperSettings = Object.keys(parsedSettings).length > 0 ? JSON.stringify(parsedSettings) : null; // Remove empty objects
        } catch (error) {
            console.error('Invalid JSON in swiperSettings:', error);
        }
    }

    const blockProps = useBlockProps.save({
        className: 'swiper',
    });

    return (
        <div {...blockProps} {...(formattedSwiperSettings ? { 'data-swiper': formattedSwiperSettings } : {})}>
            <InnerBlocks.Content />
        </div>
    );
}