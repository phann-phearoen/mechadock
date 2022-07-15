export default {
  generate(freq) {
    let text = ''
    while (freq > 0) {
      text += 'テキスト'
      freq--
    }
    return text
  }
}