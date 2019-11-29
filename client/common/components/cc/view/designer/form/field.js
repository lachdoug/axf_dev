cc.view.designer.form.field = (f) => [

  f.field( {
    key: 'key',
  } ),

  f.field( {
    key: 'control',
    as: 'select',
    selections: [
      { value: '', label: '' },
      { value: 'string', label: 'String' },
      { value: 'select', label: 'Select' },
      { value: 'text', label: 'Text' },
      { disabled: 'hr' },
      { value: 'check', label: 'Checkbox' },
      { value: 'checks', label: 'Checkboxes' },
      { value: 'radios', label: 'Radio buttons' },
      { disabled: 'hr' },
      { value: 'hidden', label: 'Hidden' },
      { value: 'password', label: 'Password' },
      { disabled: 'hr' },
      { value: 'combobox', label: 'Combo box' },
      { value: 'multiselect', label: 'Multi-select' },
      { disabled: 'hr' },
      { value: 'color', label: 'Color' },
      { value: 'date', label: 'Date' },
      { value: 'email', label: 'Email' },
      { value: 'number', label: 'Number' },
      { value: 'tel', label: 'Telephone' },
      { value: 'time', label: 'Time' },
      { value: 'url', label: 'URL' },
      { disabled: 'hr' },
      { value: 'code', label: 'Code' },
      { value: 'markdown', label: 'Markdown' },
      { disabled: 'hr' },
      { value: 'country', label: 'Country' },
      { value: 'language', label: 'Language' },
      { value: 'timezone', label: 'Timezone' },
      // { value: 'uri', label: 'URI' },
      { disabled: 'hr' },
      { value: 'json', label: 'JSON' },
      { disabled: 'hr' },
      { value: 'one', label: 'One' },
      { value: 'many', label: 'Many' },
      { value: 'table', label: 'Table' },
    ],
  } ),

  cc.collapse( {
    label: 'Options',
    body: [

      f.fieldset( {
        layout: 'vertical',
        label: false,
        body: [

          f.field( {
            key: 'label',
            as: 'one',
            form: (ff) => [
              ff.field( {
                key: 'display',
                layout: 'vertical',
                label: false,
                as: 'select',
                selections: {
                  '': 'Default',
                  custom: 'Custom',
                  none: 'None',
                }
              } ),
              ff.field( {
                key: 'custom',
                layout: 'vertical',
                label: false,
                // required: true,
                // placeholder: 'Required',
                dependent: {
                  target: 'display',
                  value: 'custom'
                }
              } ),
            ],
          } ),

          f.field( {
            key: 'layout',
            as: 'check',
            checked: 'vertical',
            check: { label: 'Vertical' },
          } ),

          f.field( {
            key: 'help',
            as: 'markdown',
          } ),

          f.field( {
            key: 'hint',
          } ),

        ],
        dependent: {
          target: 'control',
          pattern: '^(?!hidden).*$',
        },
      } ),

      f.field( {
        key: 'placeholder',
        dependent: {
          target: 'control',
          pattern: '^(?!(hidden|check|checks|radios|one|many|table|json)$)(\w*)',
        }
      } ),

      f.field( {
        key: 'dependent',
        as: 'one',
        form: (ff) => ff.row( { columns: [
          ff.field( {
            key: 'target',
          } ),
          ff.field( {
            key: 'pattern',
          } ),
        ] } ),
      } ),

      f.field( {
        key: 'validation',
        as: 'one',
        form: (ff) => [
          ff.field( {
            key: 'required',
            as: 'check',
            // checked: 'required',
            // dependent: {
            //   target: '[..]control',
            //   pattern: '^(string|password|select|combobox|check)$',
            // },
          } ),
          ff.fieldset( {
            layout: 'vertical',
            label: false,
            body: ff.row( { columns: [
              ff.field( {
                key: 'min',
                as: 'input/number',
              } ),
              ff.field( {
                key: 'max',
                as: 'input/number',
              } ),
              ff.field( {
                key: 'step',
                as: 'input/number',
              } ),
            ] } ),
            dependent: {
              target: '[..]control',
              pattern: '^number$',
            },
          } ),
          ff.fieldset( {
            layout: 'vertical',
            label: false,
            body: ff.row( { columns: [
              ff.field( {
                key: 'minlength',
                label: 'Min length',
                as: 'input/number',
              } ),
              ff.field( {
                key: 'maxlength',
                label: 'Max length',
                as: 'input/number',
              } ),
            ] } ),
            dependent: {
              target: '[..]control',
              pattern: '^(string|password|combobox)$',
            },
          } ),
          ff.field( {
            key: 'pattern',
            dependent: {
              target: '[..]control',
              pattern: '^(string|password|combobox)$',
            },
          } ),
          ff.field( {
            key: 'message',
          } ),
        ],
        dependent: {
          target: 'control',
          pattern: '^(string|select|text|check|radios|password|combobox|color|date|email|number|tel|time|url|code|markdown|country|language|timezone)$',
        },

      } ),

      f.field( {
        key: 'item',
        dependent: {
          target: 'control',
          pattern: '^(many|table)',
        },
      } ),

      f.field( {
        key: 'value',
        label: 'Default value',
        dependent: {
          target: 'control',
          pattern: '^(?!(one|many|table)$).*$',
        }
      } ),

      f.field( {
        key: 'selections',
        as: 'one',
        form: (ff) => [
          ff.field( {
            key: 'type',
            as: 'select',
            selections: { '':'', static: 'Static', dynamic: 'Dynamic' },
          } ),
          ff.field( {
            key: 'static',
            label: false,
            layout: 'vertical',
            as: 'table',
            item: 'selection',
            form: (fff) => [
              fff.field( { key: 'value' } ),
              fff.field( { key: 'label' } ),
            ],
            dependent: {
              target: 'type',
              value: 'static',
            }
          } ),
          ff.field( {
            key: 'scope',
            // placeholder: 'Required',
            dependent: {
              target: 'type',
              pattern: '^dynamic$',
            }
          } ),
        ],
        dependent: {
          target: 'control',
          pattern: '^(select|radios|checks|multiselect|combobox)$',
        }
      } ),

      f.field( {
        key: 'check',
        as: 'one',
        form: (ff) => [
          ff.row( { columns: [
            ff.field( {
              key: 'label',
              layout: 'vertical',
            } ),
            ff.field( {
              key: 'checked',
              layout: 'vertical',
            } ),
            ff.field( {
              key: 'unchecked',
              layout: 'vertical',
            } ),
          ] } ),
        ],
        dependent: {
          target: 'control',
          value: 'check',
        },
      } ),

      f.fieldset( {
        layout: 'vertical',
        label: false,
        body: [

          f.field( {
            key: 'confirm',
            as: 'check',
            check: {
              label: 'Show confirmation',
            },
          } ),

          f.field( {
            key: 'confirmation',
            as: 'one',
            label: false,
            form: (ff) => [
              ff.field( {
                key: 'placeholder',
              } ),
            ],
            dependent: {
              target: 'confirm',
              value: 'on',
            },
          } ),

        ],
        dependent: {
          target: 'control',
          value: 'password',
        },
      } ),

      f.field( {
        key: 'code',
        as: 'one',
        form: (ff) => [
          ff.field( {
            key: 'mode',
            as: 'select',
            selections: {
              '': '',
              shell: 'Shell',
              javascript: 'JavaScript',
              ruby: 'Ruby',
              python: 'Python',
              xml: 'XML',
              yaml: 'YAML',
            },
          } ),
        ],
        dependent: {
          target: 'control',
          value: 'code',
        },
      } ),

    ]
  } ),

  f.fieldset( {
    layout: 'vertical',
    label: false,
    body: cc.collapse( {
      label: 'Nest',
      body: [
        f.field( {
          key: 'components',
          label: false,
          layout: 'vertical',
          as: 'many',
          item: 'form component',
          form: cc.view.designer.form.component,
          // dependent: {
          //   target: 'control',
          //   pattern: '^(one|many|table)$',
          // }
        } ),
      ]
    } ),
    dependent: {
      target: 'control',
      pattern: '^(one|many|table)$',
    }
  } ),



]
