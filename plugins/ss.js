import { bot } from '#lib';
import axios from 'axios';

bot(
	{
		pattern: 'webss ?(.*)',
		public: true,
		type: 'utility',
		desc: 'Capture a screenshot of a website',
	},
	async message => {
		// Extract the URL from the user's command
		const url = message.match[1];
		if (!url) {
			return message.send('_Please provide a valid URL. Example: webss https://example.com_');
		}

		// Validate the URL
		if (!url.startsWith('http://') && !url.startsWith('https://')) {
			return message.send('_Please provide a valid URL starting with http:// or https://._');
		}

		try {
			// Call the API to get the screenshot
			const apiUrl = `https://api.davidcyriltech.my.id/ssweb?url=${encodeURIComponent(url)}`;
			const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });

			// Send the screenshot as an image
			await message.send(
				{ image: Buffer.from(response.data) },
				{ caption: `_Here is the screenshot of the website: ${url}_` }
			);
		} catch (error) {
			console.error('Error capturing website screenshot:', error);
			return message.send('_Failed to capture the screenshot. Please try again later._');
		}
	}
);
