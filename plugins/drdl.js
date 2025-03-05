const axios = require('axios');
const { cmd } = require('../command');
const config = require('../config');

// Registering a command with a specific pattern
cmd({
    pattern: 'mkv',
    react: '📥',
    dontAddCommandList: true,
    filename: __filename
}, async (client, message, text, { from, q, isMe, reply }) => {
    // Check if the user provided a URL
    if (!q) return await reply('*Please Provide A Direct URL!*');
    
    try {
        // Split the input text to get the URL and caption
        const url = q.split('&')[0]; // The first part is the URL
        const caption = q.split('&')[1]; // The second part is the caption
        
        // Fetching the video data from the URL
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        
        // Creating a buffer from the response data
        const videoBuffer = Buffer.from(response.data);
        
        // Preparing the message object to send the video
        const messageObject = {
            document: videoBuffer,
            caption: caption ? caption.trim() : '',
            mimetype: 'video/mp4',
            fileName: 'FILMPUBLISHERLK.mp4'
        };
        
        // Sending the video to the user
        await client.sendMessage(from, messageObject);
        await client.sendMessage(from, { react: { text: '✔️', key: message.key } });
    } catch (error) {
        // Handling errors during fetching or sending
        console.error('Error Fetching Or Sending', error);
        await client.sendMessage(from, '*Error Fetching Or Sending*', { quoted: message });
    }
});
