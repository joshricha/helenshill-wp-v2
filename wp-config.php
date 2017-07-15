<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'helenshilldb45');

/** MySQL database username */
define('DB_USER', 'helenshillusr234');

/** MySQL database password */
define('DB_PASSWORD', 'dfgj4342@$#%$^');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'FTLiU48I[kZ!Yvk#L)F#O[whT0uG{MC:yv)FIoG{3^#Q7} 33H=JW[dTiMQNl8{]');
define('SECURE_AUTH_KEY',  'v;ukaZmr=0^:U#_S<AAwC)lk!=_rcaeS@q7]0/|da`5*:((tDmN$ed:yIdfCYMuj');
define('LOGGED_IN_KEY',    '$^0[?xCl|sv$j_saYL0-cQt9,@mS88gw`PGa)aa0],Ml}kdBA9^1sk~B[o98q-W4');
define('NONCE_KEY',        '|zj!H OKM<4,HOSY9vl$7Ot~p&o]0~M2+ GvQKUZ:xUN)kdOoe$Uerr_&!yl5W#?');
define('AUTH_SALT',        'y:;NF.EK@(@98^a^DDEbJoQ|1Hx3NQ{xlm88X^Y41%}&O-WQm$1f3r?xnc_v;S3S');
define('SECURE_AUTH_SALT', 'U81(Z%h,pxBmF7f:g2o:@w cX?&0,!SA@bn/b/A@<A|##Y,S.:/50V`WAt0OI!/z');
define('LOGGED_IN_SALT',   'Wxhiuf|tvWVZedvq6$NYo{1y7z+:|S1>Eqpd~zB8,?M@62_):>dV*zv/u>>BM?OQ');
define('NONCE_SALT',       'a%ss5xZG`;!f)~K[,6$w=e=pMI~CsVKy0]HMgX=iL,Rs`}ePV_HXS*}&.Vi^h jt');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
