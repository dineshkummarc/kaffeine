var Token = require("../token");

exports.async0 = function(stream) {
  return stream
  stream.each(function(token) {

    if(token.text != "!") return    
    var lbracket = token.next
    //if(!lbracket.lbracket || !lbracket.round) return
    if(!token.prev.word) return
    
    token.prev.async = true
    var ret = token.next
  
    token.spitRight()
    token.remove()
    return ret
  })
}