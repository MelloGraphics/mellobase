<?php
/**
 * Setup theme
 *
 * @package MelloBase
 */

namespace MelloBase\Setup;

/**
 * Setup theme
 */
function theme_setup()
{
	/**
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on 'mellobase', use a find and replace
	 * to change 'mellobase' to the name of your theme in all the template files.
	 */
	load_theme_textdomain('mellobase', get_template_directory() . '/languages');
}
add_action('after_setup_theme', __NAMESPACE__ . '\theme_setup');

/**
 * Custom login logo
 */
function custom_login_logo()
{

	$colors = wp_get_global_styles(array('color'));
	$variables = wp_get_global_stylesheet(array('variables'));

	$background_url = get_template_directory_uri() . '/assets/images/login-background.svg';
	$background_path = get_template_directory() . '/assets/images/login-background.svg';
	?>

	<style type="text/css">
		<?php echo esc_html($variables); ?>
		body.login {
			background-color: var(--wp--preset--color--primary);
			color: var(--wp--preset--color--contrast);
			<?php if (file_exists($background_path)): ?>
				background-image: url('<?php echo esc_url($background_url); ?>');
			<?php endif; ?>
			background-size: cover;
			background-repeat: no-repeat;
			background-position: 50% 100%;
		}

		body.login #login {
			position: absolute;
			inset: 0;
			height: fit-content;
			padding: unset;
		}

		body.login #login .login-inner-wrap {
			background-color: var(--wp--preset--color--base);
			padding: 2em 0;
			border-radius: .5em;
		}

		body.login .message, body.login .notice, body.login .success {
			position: fixed;
			inset: auto 0 2em 0;
			margin: auto;
			width: 90%;
			text-align: center;
			animation: slide-in .5s cubic-bezier(0.33, 1, 0.68, 1);
		}

		@keyframes slide-in {
			from {
				opacity: 0;
				translate: 0 100%;
			}
		}

		body.login form {
			border: unset;
			box-shadow: unset;
			background-color: unset;
		}

		#login h1 a,
		.login h1 a {
			/* filter: brightness(10); */
		}

		body.login a,
		body.login #nav a,
		body.login #backtoblog a {
			color: var(--wp--preset--color--contrast);
		}

		body.login .button-primary {
			background: var(--wp--preset--color--primary);
			border-color: var(--wp--preset--color--primary-contrast);
		}

		<?php
		$custom_logo_id = get_theme_mod('custom_logo');

		// We have a logo. Logo is go.
		if ($custom_logo_id):
			$image = wp_get_attachment_image_src($custom_logo_id, 'medium');
			?>
			#login h1 a,
			.login h1 a {
				background-image: url(<?php echo esc_attr($image[0]); ?>);
				height:
					<?php echo esc_attr($image[2]); ?>
					px;
				width:
					<?php echo esc_attr($image[1]); ?>
					px;
				width: 100%;
				height: auto;
				max-width: 100%;
				background-size: contain;
				background-repeat: no-repeat;
				padding-bottom: 30px;
			}

		<?php endif; ?>
	</style>
	<script>
		document.addEventListener('DOMContentLoaded', function () {
			var login = document.getElementById('login');
			if (!login) return;
			var wrapper = document.createElement('div');
			wrapper.className = 'login-inner-wrap';
			while (login.firstChild) {
				wrapper.appendChild(login.firstChild);
			}
			login.appendChild(wrapper);
		});
	</script>
	<?php
}
add_action('login_enqueue_scripts', __NAMESPACE__ . '\custom_login_logo');


/**
 * Replace login logo link to homepage
 */
function custom_login_link()
{
	return home_url();
}
add_filter('login_headerurl', __NAMESPACE__ . '\custom_login_link');
