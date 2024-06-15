// Name: JavaScript
// ID: javascript
// Description: Can run JavaScript from Scratch

(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This must run unsandboxed');
  }

class JavaScript {
  getInfo() {
    return {
      id: 'javascript',
      name: 'JavaScript',
      blocks: [
        {
          opcode: 'javascript',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Run JavaScript [JAVASCRIPT_COMMAND]',
          arguments: {
            JAVASCRIPT_COMMAND: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'window.alert("hi");'
            }
          }
        },
        {
          opcode: 'null_',
          blockType: Scratch.BlockType.REPORTER,
          text: 'null'
        },
        {
          opcode: 'undefined_',
          blockType: Scratch.BlockType.REPORTER,
          text: 'undefined'
        }
      ]
    };
  }
    null_ () {
      return null;
    }

    undefined_ () {
      return undefined;
    }

    javascript (args) {
      return eval(args.JAVASCRIPT_COMMAND);
  }
}

document.querySelectorAll('iframe').forEach(e => {
  e.sandbox += ' allow-modals';
})

Scratch.extensions.register(new JavaScript());

console.log(Scratch.vm);

})(Scratch);

