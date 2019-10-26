let formDesignerTestParams = [

  {
    components: [
      {
        type: 'form',
        form: {
          scope: {
            get: 'person'
          },
          components: [
            {
              type: 'field',
              field: {
                key: 'name'
              }
            },
            {
              type: 'field',
              field: {
                key: 'age',
                control: 'input',
                input: {
                  type: 'number',
                },

              }
            },
            {
              type: 'field',
              field: {
                key: 'contact',
                control: 'one',
                layout: 'vertical',
                components: [
                  {
                    type: 'field',
                    field: {
                      key: 'phone',
                      control: 'input',
                      input: {
                        type: 'tel',
                      },
                    }
                  },
                  {
                    type: 'field',
                    field: {
                      key: 'emails',
                      control: 'many',
                      components: [
                        {
                          type: 'field',
                          field: {
                            key: 'for',
                          }
                        },
                        {
                          type: 'field',
                          field: {
                            key: 'address',
                            control: 'input',
                            input: {
                              type: 'email',
                            },
                          }
                        },
                      ]
                    }
                  },
                ]
              }
            },

            {
              type: "field",
              field: {
                key: "zzz",
                control: "select",
                selections: {
                  type: "static",
                  static: {
                    0: {
                      value: "cat",
                      label: ""
                    },
                    1: {
                      value: "dog",
                      label: ""
                    }
                  }
                },
                validation: {
                  required: "on",
                },
              }
            },
            // {
            //   type: 'field',
            //   field: {
            //     key: 'roles',
            //     control: 'many',
            //     layout: 'vertical',
            //     many: {
            //       form: []
            //     },
            //   }
            // },
          ],
        },
      }
    ],
    tests: [
      {
        params: {
          person: {
            name: 'Lachlan',
            age: 47,
            contact: {
              phone: '0438 606 808',
              emails: [
                {
                  for: 'work',
                  address: 'lachlan@enignes.org',
                },
                {
                  for: 'home',
                  address: 'lach@doug.org',
                },
              ]
            },
            roles: [
              {
                region: 'Eastern',
                level: 'admin',
                locked: false,
              },
              {
                region: 'Western',
                level: 'admin',
                locked: true,
              },
            ]
          }
        }
      }
    ],
  },



  {
    components: [
      {
        type: 'template',
        template: `Pet types\n-----\n{{ #lists.pets }}\n- {{ 1 }}\n{{ /lists.pets }}`
      },
      {
        type: 'form',
        template: '# Ho',
        form: {
          scope: {
            get: 'person',
            set: 'person',
          },
          components: [
            {
              type: 'template',
              template: '# Hi',
              fieldset: {
                label: 'My fieldset',
                legend: 'Stuff',
                body: [
                  {
                    type: 'field',
                    field: {
                      key: 'age'
                    }
                  },
              // //
                ],
              }

            },
            {
              type: 'row',
              template: '# Hu',
              row: {
                columns: [
                  {
                    type: 'field',
                    template: '# Hy',
                    field: {
                      key: 'age'
                    }
                  }
                ]
              }
            },
            {
              type: 'template',
              template: '# He',
            },
            {
              type: 'template',
              template: '# Ha',

            },
            {
              type: 'field',
              field: { key: 'name' }
            },
            {
              type: 'field',
              field: {
                key: 'type',
                control: 'select',
                selections: { scope: 'lists[pets]' },
              }
            },
            {
              type: 'field',
              field: {
                key: 'last_type',
                control: 'select',
                selections: { type: 'dynamic', scope: 'lists[pets]' },
                // selections: {
                //   type: 'static',
                //   static: [
                //     { value: 'mouse', label: 'Mouse' },
                //     { value: 'moose', label: 'Moose' },
                //   ]
                // },
                // help: 'Cool\n=====',
              }
            },
          ]
        },
      }
    ],
    tests: [
      {
        params: {
          lists: {
            pets: [
              [ 'dog', 'Dog' ],
              [ 'fish', 'Fish' ],
              [ 'cat', 'Cat']
            ],
          },
          person: {
            pet: {
              name: 'Puss',
              type: 'cat',
            }
          },
        },
      }
    ],
  },

]
