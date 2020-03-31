app.interface = controller => cc.dialogue.designer( controller, '/~/test', app.interface.data )

app.interface.data = {
    "name": "dsafsafda",
    "components": {
      "0": {
        "type": "report",
        "report": {
          "scope": "",
          "back": {
            "label": ""
          },
          "components": {
            "0": {
              "type": "field",
              "field": {
                "key": "company",
                "control": "one",
                "label": {
                  "display": ""
                },
                "help": "",
                "hint": "",
                "dependent": {
                  "target": "",
                  "pattern": ""
                },
                "components": {
                  "0": {
                    "type": "template",
                    "template": "Hi {{ name }}."
                  }
                }
              }
            }
          }
        }
      }
    },
    "tests": {
      "0": {
        "parameters": "{\"company\":{\"name\":\"Cool\"}}"
      }
    }
  }
