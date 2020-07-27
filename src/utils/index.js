export default {
  transformSpecifiedChar(str) {
    if (!str) return str
    return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  },
}
