import { readFile, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";
import QRCode from "qrcode";

// Gera apenas a imagem do payload autorizado em data.ts; não altera seus dados.
const source = await readFile(
  new URL("../src/data.ts", import.meta.url),
  "utf8",
);
const key = source.match(/pixKey:\s*"([^"]+)"/)?.[1];
const payload = source.match(/pixPayload:\s*"([^"]+)"/)?.[1];
assert(
  key && payload,
  "Chave e payload precisam estar definidos em src/data.ts.",
);

function fields(value) {
  const result = new Map();
  for (let offset = 0; offset < value.length;) {
    const tag = value.slice(offset, offset + 2);
    const lengthText = value.slice(offset + 2, offset + 4);
    assert(/^\d{2}$/.test(lengthText), "Comprimento de campo inválido.");
    const size = Number(lengthText);
    const content = value.slice(offset + 4, offset + 4 + size);
    assert.equal(content.length, size, "Campo PIX incompleto.");
    result.set(tag, content);
    offset += size + 4;
  }
  return result;
}

const values = fields(payload);
const account = fields(values.get("26") ?? "");
assert.equal(account.get("00"), "br.gov.bcb.pix");
assert.equal(account.get("01"), key, "A chave exibida difere da chave do QR.");
assert.equal(payload.slice(-8, -4), "6304");
let crc = 0xffff;
for (const byte of new TextEncoder().encode(payload.slice(0, -4))) {
  crc ^= byte << 8;
  for (let bit = 0; bit < 8; bit++) {
    crc = ((crc << 1) ^ (crc & 0x8000 ? 0x1021 : 0)) & 0xffff;
  }
}
assert.equal(crc.toString(16).toUpperCase().padStart(4, "0"), values.get("63"));

const png = await QRCode.toBuffer(payload, {
  type: "png",
  width: 625,
  margin: 4,
  errorCorrectionLevel: "M",
  color: { dark: "#000000", light: "#ffffff" },
});
await writeFile(
  new URL("../public/assets/pix-email.png", import.meta.url),
  png,
);
process.stdout.write("QR gerado; chave e CRC conferidos.\n");
