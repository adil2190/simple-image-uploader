export const randString = (len: number) =>
  window
    .btoa(
      Array.from(window.crypto.getRandomValues(new Uint8Array(len * 2)))
        .map((b) => String.fromCharCode(b))
        .join("")
    )
    .replace(/[+/]/g, "")
    .substring(0, len);
