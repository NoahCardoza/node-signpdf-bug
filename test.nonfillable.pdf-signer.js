const { sign } = require('pdf-signer');
const fs = require('fs');
 
const pdfBuffer = fs.readFileSync(`./DD2875.nonfillable.pdf`)
const p12Buffer = fs.readFileSync('./client.pfx')


sign(pdfBuffer, p12Buffer, 'password', {
  reason: '1',
  email: 'test@email.com',
  location: 'Location, LO',
  signerName: 'Test User',
  annotationAppearanceOptions: {
    signatureCoordinates: { left: 0, bottom: 700, right: 190, top: 860 },
    signatureDetails: [
      {
        value: 'Signed by: Kiss Béla',
        fontSize: 7,
        transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 20 },
      },
      {
        value: 'Date: 2019-10-11',
        fontSize: 7,
        transformOptions: { rotate: 0, space: 1, tilt: 0, xPos: 20, yPos: 30 },
      },
    ],
  },
}).then(pdf => {
  fs.writeFileSync('./DD2875.pdf-signer.signed.nonfillable.pdf', pdf)
})