cc.view.designer.form.field = (f) => [

  f.field( {
    key: 'key',
  } ),

  f.field( {
    key: 'control',
    as: 'select',
    placeholder: ' ',
    selections: [
      { value: 'string', label: 'String' },
      { value: 'select', label: 'Select' },
      { value: 'text', label: 'Text' },
      { disabled: 'hr' },
      { value: 'checkbox', label: 'Checkbox' },
      { value: 'checkboxes', label: 'Checkboxes' },
      { value: 'radios', label: 'Radio buttons' },
      { disabled: 'hr' },
      { value: 'hidden', label: 'Hidden' },
      { value: 'password', label: 'Password' },
      { disabled: 'hr' },
      { value: 'combobox', label: 'Combo box' },
      { value: 'multiselect', label: 'Multi select' },
      { disabled: 'hr' },
      { value: 'number', label: 'Number' },
      { value: 'url', label: 'URL' },
      { value: 'email', label: 'Email' },
      { value: 'color', label: 'Color' },
      { value: 'date', label: 'Date' },
      { value: 'tel', label: 'Telephone' },
      { value: 'time', label: 'Time' },
      { disabled: 'hr' },
      { value: 'markdown', label: 'Markdown' },
      { value: 'code', label: 'Code' },
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
                  key: 'display',
                  value: 'custom'
                }
              } ),
            ],
          } ),

          f.field( {
            key: 'layout',
            as: 'checkbox',
            checked: 'vertical',
            checkbox: { label: 'Vertical' },
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
          key: 'control',
          pattern: '^(?!hidden).*$',
        },
      } ),

      f.field( {
        key: 'placeholder',
        dependent: {
          key: 'control',
          pattern: '^(?!(hidden|checkbox|checkboxes|radios|one|many|table|json)$)(\w*)',
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
            as: 'checkbox',
            // checked: 'required',
            // dependent: {
            //   key: '[..]control',
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
              key: '[..]control',
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
              key: '[..]control',
              pattern: '^(string|password|combobox)$',
            },
          } ),
          ff.field( {
            key: 'pattern',
            dependent: {
              key: '[..]control',
              pattern: '^(string|password|combobox)$',
            },
          } ),
          ff.field( {
            key: 'message',
          } ),
        ],
        dependent: {
          key: 'control',
          pattern: '^(string|select|text|checkbox|checkboxes|radios|password|combobox|color|date|email|number|tel|time|url|code|markdown|country|language|timezone)$',
        },

      } ),

      f.field( {
        key: 'value',
        label: 'Default value',
        dependent: {
          key: 'control',
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
            addable: true,
            removable: true,
            sortable: true,
            dependent: {
              key: 'type',
              value: 'static',
            }
          } ),
          ff.field( {
            key: 'scope',
            // placeholder: 'Required',
            dependent: {
              key: 'type',
              pattern: '^dynamic$',
            }
          } ),
        ],
        dependent: {
          key: 'control',
          pattern: '^(select|radios|checkboxes|multiselect|combobox)$',
        }
      } ),

      f.fieldset( {
        // key: 'nest',
        // as: 'one',
        // label: false,
        layout: 'vertical',
        body: [
          f.field( {
            key: 'item',
          } ),
          f.field( {
            key: 'addable',
            as: 'checkbox',
            value: 'on',
            label: false,
            checkbox: { label: 'Addable' },
          } ),
          f.field( {
            key: 'removable',
            as: 'checkbox',
            value: 'on',
            label: false,
            checkbox: { label: 'Removable' },
          } ),
          f.field( {
            key: 'sortable',
            as: 'checkbox',
            label: false,
            checkbox: { label: 'Sortable' },
          } ),

        ],
        dependent: {
          key: 'control',
          pattern: '^(many|table)$',
        }
      } ),

      f.field( {
        key: 'checkbox',
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
            // ff.field( {
            //   key: 'unchecked',
            //   layout: 'vertical',
            // } ),
          ] } ),
        ],
        dependent: {
          key: 'control',
          value: 'checkbox',
        },
      } ),

      f.fieldset( {
        layout: 'vertical',
        label: false,
        body: [

          f.field( {
            key: 'confirm',
            as: 'checkbox',
            checkbox: {
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
              key: 'confirm',
              value: 'on',
            },
          } ),

        ],
        dependent: {
          key: 'control',
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
          key: 'control',
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
          addable: true,
          removable: true,
          sortable: true,
        } ),
      ]
    } ),
    dependent: {
      key: 'control',
      pattern: '^(one|many|table)$',
    }
  } ),



]
