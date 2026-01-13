const axios = require("axios");
const fs = require("fs");

module.exports = {
  config: {
    name: "emojiVoice",
    version: "1.0",
    author: "Alif-AI",
    eventType: ["message"],
    description: "100 Emoji auto voice reaction",
  },

  onStart: async function () {},

  onChat: async function ({ api, event }) {
    if (!event.body) return;

    const msg = event.body;

    const emojiGroups = {
      laugh: ["😂","🤣","😆","😹","😄","😁","😝","🤪","😜","😛"],
      cry: ["😭","😢","😥","😿","😓","🥺","😔","☹️","🙁","😞"],
      love: ["😍","😘","😚","😙","❤️","💕","💖","💘","💝","💞"],
      angry: ["😡","🤬","😠","😤","👿","💢","😾","😒","😑","🙄"],
      sexy: ["😈","🔥","🥵","🍑","🍆","👅","💋","👄","💦","😏"],
      funny: ["🤡","💀","🤣","😹","🗿","🤓","🤠","😜","🤪","🙃"],
      sad: ["💔","🥀","😖","😩","😫","😟","😕","😢","😞","😔"],
      wow: ["😲","😳","🤯","😱","😮","😯","🙀","😧","😦","🤭"],
      cool: ["😎","🕶️","🤙","👌","🖤","🔥","💯","🥶","😤","🗿"],
      food: ["🍔","🍟","🍕","🍗","🍩","🍫","🍭","🍰","🍪","🥤"]
    };

    let detected = null;

    for (const type in emojiGroups) {
      for (const emo of emojiGroups[type]) {
        if (msg.includes(emo)) {
          detected = type;
          break;
        }
      }
      if (detected) break;
    }

    if (!detected) return;

    const voices = {
      laugh: [
        "এই এত হাসো কেন, আমারও হাসি পাচ্ছে 😂",
        "ওই থামো থামো এত হাসলে পেট ব্যথা করবে 😆",
        "তুমি তো পুরো কমেডি শো 🤣"
      ],
      cry: [
        "এই কাঁদো না, আমি আছি তো 😢",
        "ওই বাবু কাঁদলে আমার মন খারাপ হয় 😭",
        "চুপ চুপ সব ঠিক হয়ে যাবে 🥺"
      ],
      love: [
        "ওহ এত ভালোবাসা কেন, লজ্জা লাগতেছে 😘",
        "তুমি তো রোমান্টিক মানুষ 😍",
        "এই ভালোবাসা আমার জন্য? ❤️"
      ],
      angry: [
        "এই এত রাগ করো কেন 😡",
        "শান্ত হও বস 😤",
        "রাগ করলে তোমাকে কিউট লাগে না 🤬"
      ],
      sexy: [
        "ওই ওই এত হট কেন তুমি 🔥",
        "তুমি তো ডেঞ্জারাস লাগতেছ 😈",
        "এই এসব করলে আমি লজ্জা পাব 😏"
      ],
      funny: [
        "তুমি তো একদম সার্কাসের ক্লাউন 🤡",
        "হাহা তুমি সিরিয়াসলি ফানি 🤣",
        "এই তোমারে দেখে হাসি থামতেছে না 💀"
      ],
      sad: [
        "মন খারাপ কেন বলো 😔",
        "এই দুঃখ কোরো না 💔",
        "আমি আছি তোমার পাশে 🥺"
      ],
      wow: [
        "ওহ মাই গড 😱",
        "এইটা তো সিরিয়াস 😲",
        "কি ব্যাপার এটা 😳"
      ],
      cool: [
        "ওই তুমি তো কুল বস 😎",
        "স্টাইল মারতেছো দেখি 🖤",
        "তুমি তো একদম কিং 💯"
      ],
      food: [
        "এই এত খাবারের ইমোজি কেন 🍔",
        "ক্ষুধা লাগছে নাকি 🍕",
        "আমাকেও একটু দাও 🍩"
      ]
    };

    const reply = voices[detected][Math.floor(Math.random() * voices[detected].length)];

    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(reply)}&tl=bn&client=tw-ob`;

    const path = __dirname + "/emojiVoice.mp3";

    try {
      const res = await axios.get(url, { responseType: "arraybuffer" });
      fs.writeFileSync(path, res.data);

      api.sendMessage({
        body: "",
        attachment: fs.createReadStream(path)
      }, event.threadID, () => fs.unlinkSync(path), event.messageID);

    } catch (e) {
      console.log(e);
    }
  }
};
