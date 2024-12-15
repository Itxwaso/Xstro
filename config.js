import dotenv from 'dotenv';
dotenv.config();
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const config = {
	SESSION_ID: process.env.SESSION_ID || 'XSTRO_34_97_25',
	PREFIX: process.env.PREFIX || '.',
	SUDO: process.env.SUDO || '',
	BOT_INFO: process.env.BOT_INFO || 'Astro;Xstro_Bot',
	STICKER_PACK: process.env.STICKER_PACK || 'Xstro;Md',
	WARN_COUNT: process.env.WARN_COUNT || 3,
	CAPTION: 'ʙʏ xsᴛʀᴏ ᴍᴅ 𝟸𝟶𝟸𝟺',
	TIME_ZONE: process.env.TZ || process.env.TIME_ZONE || 'Africa/Lagos',
	VERSION: require('./package.json').version,
	XSTRO_API: 'https://xstro-api-ec3ad328e76f.herokuapp.com',
};

export default config;
