import {
    InspectorControls,
    useBlockProps
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    RangeControl,
    SelectControl,
    TextareaControl,
    ToggleControl
} from '@wordpress/components';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

    const {
        keywords = '',
        limit,
        viewType,
        slidesOnly,
        showImages,
        showDescription,
        showPast,
        showAll = false,
        showViewMoreButton = true,
        showRegisterButton = true
    } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Event Settings', 'ldtr-events' ) } initialOpen={ true }>

                    <TextareaControl
                        label={ __( 'Filter by Keywords', 'ldtr-events' ) }
                        help={ __( 'Enter keywords separated by commas. Shows events matching ANY keyword in the title. Leave blank to show all events. Example: "skills, girls, chicks, womens"', 'ldtr-events' ) }
                        value={ keywords }
                        onChange={ ( value ) => setAttributes( { keywords: value } ) }
                        rows={ 3 }
                        placeholder={ __( 'e.g. social, skills, junior', 'ldtr-events' ) }
                    />

                    <ToggleControl
                        label={ __( 'Show All Events', 'ldtr-events' ) }
                        help={ __( 'When enabled, shows all matching events (ignores limit below)', 'ldtr-events' ) }
                        checked={ showAll }
                        onChange={ () => setAttributes( { showAll: !showAll } ) }
                    />

                    <RangeControl
                        label={ __( 'Number of events to show', 'ldtr-events' ) }
                        help={ showAll ? __( 'Currently showing all events', 'ldtr-events' ) : '' }
                        value={ limit }
                        onChange={ ( value ) => setAttributes( { limit: value } ) }
                        min={ 1 }
                        max={ 20 }
                        disabled={ showAll }
                    />

                    <SelectControl
                        label={ __( 'View Type', 'ldtr-events' ) }
                        value={ viewType }
                        options={ [
                            { label: 'Grid', value: 'grid' },
                            { label: 'List', value: 'list' }
                        ] }
                        onChange={ ( value ) => setAttributes( { viewType: value } ) }
                    />

                    <ToggleControl
                        label={ __( 'Slides Only (for Swiper)', 'ldtr-events' ) }
                        checked={ slidesOnly }
                        onChange={ () => setAttributes( { slidesOnly: !slidesOnly } ) }
                    />

                    <ToggleControl
                        label={ __( 'Show Images', 'ldtr-events' ) }
                        checked={ showImages }
                        onChange={ () => setAttributes( { showImages: !showImages } ) }
                    />

                    <ToggleControl
                        label={ __( 'Show Description', 'ldtr-events' ) }
                        checked={ showDescription }
                        onChange={ () => setAttributes( { showDescription: !showDescription } ) }
                    />

                    <ToggleControl
                        label={ __( 'Show Past Events', 'ldtr-events' ) }
                        checked={ showPast }
                        onChange={ () => setAttributes( { showPast: !showPast } ) }
                    />

                    <ToggleControl
                        label={ __( 'Show "View More" Button', 'ldtr-events' ) }
                        help={ __( 'Links to the full event details page', 'ldtr-events' ) }
                        checked={ showViewMoreButton }
                        onChange={ () => setAttributes( { showViewMoreButton: !showViewMoreButton } ) }
                    />

                    <ToggleControl
                        label={ __( 'Show "Register" Button', 'ldtr-events' ) }
                        help={ __( 'Links directly to registration cart', 'ldtr-events' ) }
                        checked={ showRegisterButton }
                        onChange={ () => setAttributes( { showRegisterButton: !showRegisterButton } ) }
                    />

                </PanelBody>
            </InspectorControls>

            <div { ...useBlockProps() }>
                <p><strong>LDTR Events</strong></p>
                <p>{ __( 'Configure event settings in the sidebar.', 'ldtr-events' ) }</p>
                { keywords && (
                    <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                        <strong>🔍 Filtering by:</strong> { keywords }
                    </p>
                ) }
            </div>
        </>
    );
}