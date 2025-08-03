<h1>MelloBase</h1>

<p><strong>MelloBase</strong> is a custom WordPress block theme starter designed to support modern, scalable WordPress builds. Based on the structure and foundational ideas from <a href="https://github.com/aurooba">BlockTheme by @aurooba</a> and <a href="https://github.com/bacoords">@bacoords</a>, it has been extended and customised for my own workflow, including additional build tooling, modular SCSS and JS organisation, ACF support, and custom block integration.</p>

<hr />

<h2>Theme Structure</h2>

<pre><code>
├── acf-json/               # ACF field groups synced as local JSON
├── blocks/                 # Compiled custom blocks
├── css/                    # Compiled frontend and editor styles
├── fonts/                  # Font files (including Font Awesome subsets)
├── inc/                    # PHP includes for setup, enqueues, ACF sync, etc.
├── js/                     # Compiled JS assets
├── parts/, patterns/       # Block-based parts and patterns
├── templates/              # Block-based HTML templates
├── src/                    # Source files for editing
│   ├── scss/
│   │   ├── patterns/       # Pattern SCSS (one file per pattern; outputs css/pattern--[name].css)
│   │   └── templates/      # Template SCSS (one file per template; outputs css/template--[name].css)
│   ├── js/                 # Frontend and editor JS source
│   └── blocks/             # Block source files
├── bin/                    # Custom build scripts and webpack config
├── functions.php           # Main theme functions
├── style.css               # WP theme stylesheet header
</code></pre>

<hr />

<h2>Build Process</h2>

<p>The theme uses <code>@wordpress/scripts</code> and custom Webpack configuration to handle:</p>

<ul>
  <li>SCSS compilation, including:
    <ul>
      <li>Block-specific styles</li>
      <li>Pattern-based styles (src/scss/patterns → css/pattern--[name].css)</li>
      <li>Template-based styles (src/templates → css/template--[name].css)</li>
    </ul>
  </li>
  <li>JavaScript bundling (for frontend and editor)</li>
  <li>Automatic ACF JSON sync</li>
  <li>Custom <code>zip</code> export for deployment-ready packages</li>
</ul>

<h3>NPM Commands</h3>

<pre><code>
npm install       # Install dependencies
npm run build     # Build all assets for production
npm run start     # Watch mode for active development
npm run export    # Build + zip production files into mellobase-export.zip
</code></pre>

<hr />

<h2>Features</h2>

<ul>
  <li><strong>Block-specific styles</strong>: Only loads styles when the block exists on the page.</li>
  <li><strong>Pattern-based styles</strong>: Add the class <code>pattern--[pattern-name]</code> to your wrapper element in the editor. Only the matching CSS (from <code>src/scss/patterns/[pattern-name].scss</code>) is loaded.</li>
  <li><strong>Template-based styles</strong>: Create <code>src/templates/[template-name].scss</code> files (compiled to <code>css/template--[template-name].css</code>). These are enqueued conditionally based on the active template.</li>
  <li><strong>Editor parity</strong>: Ensures consistent styles between frontend and editor.</li>
  <li><strong>ACF JSON Sync</strong>: Syncs ACF fields to/from <code>acf-json/</code> via <code>sync-acf.php</code>.</li>
  <li><strong>Custom Blocks</strong>: Easily scaffold custom blocks using <code>npm run create-block</code>.</li>
</ul>

<hr />

<h2>Custom Blocks</h2>

<p>Blocks live in <code>src/blocks/</code> and are compiled to <code>blocks/</code>. Each block includes:</p>

<ul>
  <li><code>block.json</code></li>
  <li><code>index.js</code> (main script)</li>
  <li><code>view.js</code> (frontend rendering)</li>
  <li><code>style.scss</code>, <code>editor.scss</code> (for editor/frontend styles)</li>
</ul>

<p>Compiled assets include <code>style-index.css</code>, <code>view.js</code>, and their RTL versions.</p>

<hr />

<h2>Additional Notes</h2>

<ul>
  <li>Includes support for FontAwesome subsets and variable weights.</li>
  <li>A11y and visually hidden styles included in <code>/scss/base/</code></li>
  <li>Theme exports are zipped without dev files via the <code>npm run export</code> command.</li>
</ul>

<hr />

<h2>Plugin Requirements</h2>

<p>The following plugins are required or recommended for full functionality:</p>

<ul>
  <li><strong>* Mello Block Extensions</strong> — Required for custom block extensions and theme enhancements</li>
  <li>Yoast SEO</li>
  <li>Yoast Duplicate Post</li>
  <li><strong>* ACF (Advanced Custom Fields)</strong> — Required for field groups and data integration</li>
  <li>Block Visibility</li>
  <li><strong>* SVG Support</strong> — Required to allow inline SVG rendering</li>
  <li>Enable Media Replace</li>
</ul>

<hr />

<h2>Linting</h2>

<pre><code>
composer php-lint         # Lint PHP files
composer phpcs            # Check WordPress Coding Standards
composer phpcs-fix        # Auto-fix where possible
</code></pre>

<p>Prettier config is included for SCSS/JS linting via <code>.prettierrc</code>.</p>

<hr />

<h2>Credits</h2>

<p>MelloBase was originally forked and heavily inspired by the excellent work done in:</p>

<ul>
  <li><strong>BlockTheme</strong> by <a href="https://github.com/aurooba">@aurooba</a></li>
  <li><a href="https://wordpress.org/themes/twentytwentythree/">WordPress TwentyTwentyThree</a></li>
  <li><a href="https://wordpress.org/themes/twentytwentyfour/">WordPress TwentyTwentyFour</a></li>
  <li><a href="https://developer.wordpress.org/block-editor/packages/packages-scripts/">@wordpress/scripts</a></li>
</ul>
