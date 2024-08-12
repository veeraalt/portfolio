/* Helper function to determine whether a HEX color is light or dark,
can be used, for example, to determine whether white or black text should be 
used based on the brightness of the background.
It takes a hex string value and compares it to a predetermined 
"perceived brightness" value

The function utilizes code from:
https://gist.github.com/krabs-github/ec56e4f1c12cddf86ae9c551aa9d9e04
and
https://stackoverflow.com/a/5624139
*/
export const isDarkColor = (color: string) => {
  // Store the red, green and blue values in separate variables
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  if (!result) {
    return null;
  } else {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    // HSP equation from http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Using the HSP value, determine whether the color is light or dark
    return hsp < 127.5;
  }
};
