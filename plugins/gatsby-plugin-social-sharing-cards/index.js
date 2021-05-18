const { createCanvas, loadImage, registerFont } = require("canvas");
const { writeFileSync } = require("fs");

console.log('plugin');
module.exports = async ({ markdownNode }) => {
  const {
    frontmatter: { title = "私信電信" },
    fields: { slug },
  } = markdownNode;

  const siteNameFontSize = 36;
  const fontSize = 48;
  const maxLength = 24;

  let outputTitle = title;
  if (!outputTitle.startsWith("「")) {
    outputTitle = `「${outputTitle}」`;
  }
  if (outputTitle.length > maxLength) {
    outputTitle = `${outputTitle.substring(0, maxLength)}...`
  }
  registerFont(`${__dirname}/assets/SourceHanSans-VF.otf`, { family: 'SourceHanSans' });
  const location = `./public${slug.replace("/", "_")}card.png`  
  const canvas = createCanvas(1200, 600);
  const ctx = canvas.getContext('2d');
  const image = await loadImage(`${__dirname}/assets/icon.png`);
  ctx.drawImage(image, 70, 480, 80, 80);
  ctx.font = `${fontSize}px SourceHanSans`;
  ctx.fillText(outputTitle, 50, 180); 
  ctx.font = `${siteNameFontSize}px SourceHanSans`;
  ctx.fillText("私信電信", 160, 535); 

  const buffer = canvas.toBuffer('image/png');
  writeFileSync(location, buffer);
}
