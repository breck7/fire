const jtree = require("jtree")

class FireProgram extends jtree.program {
  async execute() {
    let outputLines = []
    const _originalConsoleLog = console.log
    const tempConsoleLog = (...params) => outputLines.push(params)
    console.log = tempConsoleLog
    eval(this.compile("js"))
    console.log = _originalConsoleLog
    console.log(outputLines.join("\n"))
    return outputLines
  }
}

module.exports = FireProgram
