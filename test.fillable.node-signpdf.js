const fs = require('fs');
const signer = require('node-signpdf').default;
const { plainAddPlaceholder } = require ('node-signpdf/dist/helpers');

const pdfBuffer = fs.readFileSync(`./DD2875.fillable.pdf`)
const p12Buffer = fs.readFileSync('./client.pfx')

const pdfWithPlaceholder = plainAddPlaceholder({
  pdfBuffer,
  reason: 'LALALA I can.',
  contactInfo: 'boop@gmail.com',
});

const signedPdf = signer.sign(
  pdfWithPlaceholder,
  p12Buffer,
  {
    passphrase: 'password'
  }
);

fs.writeFileSync('./DD2875.node-signpdf.signed.fillable.pdf', signedPdf)