module.exports = {
  config: {
    name: "enemyvideo",
    aliases: ["enemyvid", "enemyv"],
    version: "1.0",
    author: "YourName",
    countDown: 5,
    role: 0,
    shortDescription: "Sends a random enemy video",
    longDescription: "This module sends a random enemy video from the provided links.",
    category: "media",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const links = [
      "https://files.catbox.moe/esccpc.mp4",
      "https://files.catbox.moe/vk8k7k.mp4",
      "https://files.catbox.moe/w854tj.mp4",
      "https://files.catbox.moe/hr3tgk.mp4",
      "https://files.catbox.moe/ka9mup.mp4",
      "https://files.catbox.moe/gwfxos.mp4",
      "https://files.catbox.moe/cgc1l5.mp4",
      "https://files.catbox.moe/hvmexf.mp4",
      "https://files.catbox.moe/omccfz.mp4",
      "https://files.catbox.moe/lgyoko.mp4",
      "https://files.catbox.moe/wdxg65.mp4",
      "https://files.catbox.moe/cysjdv.mp4",
      "https://files.catbox.moe/lko9z7.mp4",
      "https://files.catbox.moe/bwxfe3.mp4",
      "https://files.catbox.moe/mkyuxg.mp4",
      "https://files.catbox.moe/ek3jch.mp4",
      "https://files.catbox.moe/lbfwgh.mp4",
      "https://files.catbox.moe/849adm.mp4",
      "https://files.catbox.moe/gf9ijr.mp4",
      "https://files.catbox.moe/zqn9ue.mp4",
      "https://files.catbox.moe/q0gaou.mp4",
      "https://files.catbox.moe/uqpglb.mp4",
      "https://files.catbox.moe/taiqfu.mp4",
      "https://files.catbox.moe/a8i4dh.mp4"
    ];

    const randomIndex = Math.floor(Math.random() * links.length);
    const selectedVideo = links[randomIndex];

    try {
      return api.sendMessage(
        {
          body: `Here’s a random enemy video for you!`,
          attachment: await global.utils.getStreamFromURL(selectedVideo)
        },
        event.threadID,
        event.messageID
      );
    } catch (error) {
      return api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
    }
  }
};
