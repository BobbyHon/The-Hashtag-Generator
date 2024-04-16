function generateHashtag (str) {
    if (str.replaceAll(' ', '').length == 0 || str.replaceAll(' ', '').length > 139) return false
    
    console.log(str)
    
    str = str.split(' ').map((letter) => letter[0] != undefined ? letter[0].toUpperCase() + letter.slice(1) : ' ')
    
    str.unshift('#')
    
    return str.join('').replaceAll(' ', '')
  }