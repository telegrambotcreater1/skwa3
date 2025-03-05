const { cmd } = require('../command');
const fetch = require("node-fetch");
const axios = require("axios");

cmd(
  {
    pattern: "arraybuffer",
    react: "📥",
    dontAddCommandList: true,
    filename: __filename,
  },
  async (_0x3fee39, _0x21f422, _0x4eda27, { from: _0x4ff15f, q: _0x2a6065, isMe: _0x3c87dc, reply: _0x1d9c40 }) => {
    if (!_0x2a6065) return await _0x1d9c40("Please Provide a Direct URL!");

    try {
      const url = _0x2a6065.split("&")[0];  // Extract the first part (URL)
      const fileName = _0x2a6065.split("&")[1] || "DownloadedFile";  // Extract second part (optional filename)
      
      const trimmedUrl = url.trim();
      const response = await axios.get(trimmedUrl, { responseType: "arraybuffer" });

      const buffer = Buffer.from(response.data, "binary");
      const documentData = {
        document: buffer,
        caption: fileName + " ✦ POWERED BY FILMPUBLISHER.LK ✦",
        mimetype: "video/mp4",
        fileName: "FILMPUBLISHERLK.mp4",
      };

      await _0x3fee39.sendMessage(_0x4ff15f, documentData);
      await _0x3fee39.sendMessage(_0x4ff15f, { react: { text: "✔️", key: _0x21f422.key } });

    } catch (error) {
      console.error("Error fetching or sending", error);
      await _0x3fee39.sendMessage(_0x4ff15f, "*Error Fetching Or Sending*", { quoted: _0x21f422 });
    }
  }
);
