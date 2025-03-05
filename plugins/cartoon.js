//====CARTOON DL CMD====

const axios = require('axios');

// Define the command
const { cmd, commands } = require('../command')
cmd({
    pattern: "cn",
    react: "📥",
    alias: ["cartoonDownload", "cartoonSearch"],
    desc: "Search And Download Cartoons",
    category: "entertainment",
    use: '.cn <cartoon_name>',
    filename: __filename
}, async (message, match) => {
    const query = match[1] || 'ben10';  // Use provided query or fallback to 'ben10'
    const url = `https://dark-yasiya-api-new.vercel.app/search/ginisisila?text=${query}&page=1`;

    try {
        // Search for cartoons using the API
        const response = await axios.get(url);
        if (response.data && response.data.length > 0) {
            const cartoonData = response.data[0];  // Get the first result (adjust as needed)
            const cartoonTitle = cartoonData.title;
            const downloadUrl = cartoonData.url;  // Adjust based on API response structure

            // Provide a message or reaction indicating the cartoon was found
            message.reply(`Found Cartoon: ${cartoonTitle}. Starting Download...`);

            // Download cartoon (replace with actual download logic)
            await downloadCartoon(downloadUrl);

            // Send success reaction/message
            message.react("✅");
        } else {
            message.reply("No Cartoons Found For The Query.");
        }
    } catch (error) {
        console.error('Error Fetching Cartoons:', error);
        message.reply('An Error Occurred While Fetching Cartoons.');
    }
});

// Placeholder function for downloading cartoon
async function downloadCartoon(url) {
    try {
        console.log(`Downloading Cartoon From: ${url}`);
        // Add actual download logic here
        return "Download Complete!";
    } catch (error) {
        console.error('Error Downloading Cartoon:', error);
        throw new Error('Failed To Download Cartoon.');
    }
}
