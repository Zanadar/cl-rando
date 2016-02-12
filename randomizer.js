var randomBytes = require('crypto').randomBytes

module.exports = function randomSort() {
  if (randomBytes(1).readInt8(0) < 0) {
    return -1
  } else {
    return 1
  }
}
