app.formDesigner.field = (f) => [

  f.field( {
    key: 'key',
    required: true,
    placeholder: 'Required',
  } ),

  f.field( {
    key: 'control',
    as: 'select',
    selections: {
      '': '',
      input: 'Input',
      select: 'Select',
      textarea: 'Textarea',
      divider0: '—————',
      check: 'Check box',
      checks: 'Check boxes',
      radios: 'Radio buttons',
      divider1: '—————',
      code: 'Code',
      markdown: 'Markdown',
      divider2: '—————',
      multiselect: 'Multiple select',
      combobox: 'Combo box',
      divider3: '—————',
      one: 'One',
      many: 'Many',
      table: 'Table',
      divider4: '—————',
      language: 'Language',
      country: 'Country',
      timezone: 'Timezone',
      divider5: '—————',
      json: 'JSON',
    },
  } ),


  app.collapse( {
    label: 'Options',
    body: [

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
        key: 'type',
        as: 'select',
        selections: {
          '': '',
          text: 'Text',
          divider0: '—————',
          hidden: 'Hidden',
          password: 'Password',
          divider1: '—————',
          color: 'Color',
          date: 'Date',
          email: 'Email',
          number: 'Number',
          tel: 'Tel',
          time: 'Time',
          url: 'URL',
        },
        dependent: {
          target: 'control',
          pattern: '^(input|combobox)$',
        }
      } ),

      f.field( {
        key: 'value',
      } ),

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
            required: true,
            placeholder: 'Required',
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
            dependent: {
              target: '[..]control',
              pattern: '^(input|select|combobox)$',
            },
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
              target: '[..]type',
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
              target: '[..]type',
              pattern: '^(text|password)$',
            },
          } ),
          ff.field( {
            key: 'pattern',
            dependent: {
              target: '[..]control',
              pattern: '^input$',
            },
          } ),
          ff.field( {
            key: 'message',
          } ),
        ],
        dependent: {
          target: 'control',
          pattern: '^(input|select|combobox)$',
        },

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

      f.field( {
        key: 'placeholder',
        dependent: {
          target: 'control',
          pattern: '^(input|select|textarea|code|markdown|language|country|timezone|multiselect|combobox)$',
        }
      } ),

      f.field( {
        key: 'item',
        dependent: {
          target: 'control',
          pattern: '^(many|table)',
        },
      } ),

    ]
  } ),

  f.fieldset( {
    layout: 'vertical',
    label: false,
    body: app.collapse( {
      label: 'Nest',
      body: [
        f.field( {
          key: 'components',
          label: false,
          layout: 'vertical',
          as: 'many',
          item: 'form component',
          form: app.formDesigner.component,
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
