cc.view.designer.report.field = (f) => [

  f.field( {
    key: 'key',
  } ),

  f.field( {
    key: 'control',
    as: 'select',
    placeholder: ' ',
    selections: [
      { value: 'string', label: 'String' },
      { value: 'text', label: 'Text' },
      { value: 'preformatted', label: 'Preformatted text' },
      { value: 'select', label: 'Selection' },
      { disabled: 'hr' },
      { value: 'boolean', label: 'Boolean' },
      { value: 'checkbox', label: 'Checkbox' },
      { value: 'checkboxes', label: 'Checkboxes' },
      { value: 'radios', label: 'Radio buttons' },
      { disabled: 'hr' },
      { value: 'password', label: 'Password' },
      { disabled: 'hr' },
      { value: 'number', label: 'Number' },
      { value: 'datetime', label: 'Datetime' },
      { value: 'url', label: 'URL' },
      { value: 'email', label: 'Email' },
      { value: 'tel', label: 'Telephone' },
      { value: 'color', label: 'Color' },
      { disabled: 'hr' },
      { value: 'country', label: 'Country' },
      { value: 'language', label: 'Language' },
      { value: 'timezone', label: 'Timezone' },
      { disabled: 'hr' },
      { value: 'markdown', label: 'Markdown' },
      { value: 'code', label: 'Code' },
      { disabled: 'hr' },
      { value: 'json', label: 'JSON' },
      { value: 'output', label: 'Output' },
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
        // dependent: {
        //   key: 'control',
        //   pattern: '^(?!hidden).*$',
        // },
      } ),

      f.field( {
        key: 'parse',
        as: 'checkbox',
        dependent: {
          key: 'control',
          pattern: '^(output|json)$',
        }
      } ),

      f.field( {
        key: 'datetime',
        as: 'one',
        form: (ff) => [
          ff.field( {
            key: 'only',
            as: 'radios',
            selections: {
              '': 'Both',
              'time': 'Time',
              'date': 'Date',
            }
          } ),
        ],
        dependent: {
          key: 'control',
          pattern: '^datetime$',
        }
      } ),

      f.field( {
        key: 'placeholder',
        dependent: {
          key: 'control',
          pattern: '^(?!boolean|checkbox|checkboxes|radios|one|many|table)$',
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

      // f.field( {
      //   key: 'value',
      //   label: 'Default value',
      //   dependent: {
      //     key: 'control',
      //     pattern: '^(?!(one|many|table)$).*$',
      //   }
      // } ),

      f.field( {
        key: 'select',
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
          pattern: '^select$',
        }
      } ),

      f.field( {
        key: 'boolean',
        as: 'one',
        form: (ff) => [
          ff.row( { columns: [
            ff.field( {
              key: 'true',
              layout: 'vertical',
            } ),
            ff.field( {
              key: 'false',
              layout: 'vertical',
            } ),
          ] } ),
        ],
        dependent: {
          key: 'control',
          value: 'boolean',
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
          item: 'report component',
          form: cc.view.designer.report.component,
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
