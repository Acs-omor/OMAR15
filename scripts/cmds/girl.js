module.exports = {
  name: "girl",
  description: "Random girl image",
  cooldown: 5,

  async execute(api, event) {
    const images = [
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

    const link = images[Math.floor(Math.random() * images.length)];

    return api.sendMessage(
      {
        body: "Here is your girl 😍",
        attachment: await global.utils.getStreamFromURL(link)
      },
      event.threadID,
      event.messageID
    );
  }
};
