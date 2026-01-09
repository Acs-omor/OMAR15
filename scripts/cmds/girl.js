const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "girl",
  version: "1.0",
  author: "Alif",
  countDown: 5,
  role: 0,
  shortDescription: "Random girl image",
  longDescription: "Send random girl image",
  category: "image",
  guide: "{pn}"
};

module.exports.onStart = async function ({ api, event }) {

  const link = [
    "https://files.catbox.moe/ynk6f2.jpg",
    "https://files.catbox.moe/7iu0lr.jpg",
    "https://files.catbox.moe/eusifr.jpg",
    "https://files.catbox.moe/7bn6u2.jpg",
    "https://files.catbox.moe/613num.jpg",
    "https://files.catbox.moe/rudpxv.jpg",
    "https://files.catbox.moe/qmcysa.jpg",
    "https://files.catbox.moe/vlxio2.jpg",
    "https://files.catbox.moe/ds98he.jpg",
    "https://files.catbox.moe/9yg37r.jpg",
    "https://files.catbox.moe/vzi322.jpg",
    "https://files.catbox.moe/9l9djo.jpg",
    "https://files.catbox.moe/ekxnv3.jpg",
    "https://files.catbox.moe/71sxh7.jpg",
    "https://files.catbox.moe/smxapk.jpg",
    "https://files.catbox.moe/ez6yzc.jpg",
    "https://files.catbox.moe/li47jq.jpg",
    "https://files.catbox.moe/3n35ek.jpg",
    "https://files.catbox.moe/6psaaj.jpg",
    "https://files.catbox.moe/kdyghr.jpg",
    "https://files.catbox.moe/q6kdoa.jpg",
    "https://files.catbox.moe/c5mrm9.jpg",
    "https://files.catbox.moe/ae2w7r.jpg",
    "https://files.catbox.moe/4foj6q.jpg",
    "https://files.catbox.moe/zr5w6x.jpg",
    "https://files.catbox.moe/vqdfq5.jpg",
    "https://files.catbox.moe/irepvg.jpg",
    "https://files.catbox.moe/51j4hx.jpg",
    "https://files.catbox.moe/9530ak.jpg",
    "https://files.catbox.moe/h95n9g.jpg",
    "https://files.catbox.moe/7pamys.jpg",
    "https://files.catbox.moe/bopnzp.jpg",
    "https://files.catbox.moe/b6l1w8.jpg",
    "https://files.catbox.moe/gvyjy3.jpg",
    "https://files.catbox.moe/85ftqh.jpg",
    "https://files.catbox.moe/0vd966.jpg",
    "https://files.catbox.moe/c81xbc.jpg",
    "https://files.catbox.moe/x5dgzg.jpg"
  ];

  try {
    const img = link[Math.floor(Math.random() * link.length)];
    const imgPath = path.join(__dirname, "cache", "girl.jpg");

    const res = await axios.get(img, { responseType: "arraybuffer" });
    fs.writeFileSync(imgPath, Buffer.from(res.data, "utf-8"));

    return api.sendMessage({
      body: "Here is your girl 😘",
      attachment: fs.createReadStream(imgPath)
    }, event.threadID, () => fs.unlinkSync(imgPath), event.messageID);

  } catch (err) {
    return api.sendMessage("Error loading image 😢", event.threadID, event.messageID);
  }
};
