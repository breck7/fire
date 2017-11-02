const TreeProgram = require("treeprogram")
const fs = require("fs")
const FireGrammar = fs.readFileSync(__dirname + "/fire.grammar", "utf8")

class FireProgram extends TreeProgram {
  getGrammarString() {
    return FireGrammar
  }

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
