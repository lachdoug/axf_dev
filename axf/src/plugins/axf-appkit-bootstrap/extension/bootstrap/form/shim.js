ax.extension.bootstrap.form.shim = function() {

  return {

    field: ( f, target ) => {
      // console.log( f.scope)
      // if (f.scope == 'view[1][form][components][1][fieldset][body][0]' ) debugger
      return ( options={} ) => {

      let layout = options.layout || f.params.layout || 'horizontal'

      let fieldTagClass,
          headerTagClass,
          bodyTagClass

      if (
          options.as == 'one' || options.control == 'one' ||
          options.as == 'many' || options.control == 'many' ||
          options.as == 'table' || options.control == 'table' ||
          options.as == 'nest' || options.control == 'nest'
          ) {
        fieldTagClass = 'mb-0'
      } else if (
          options.as == 'input/hidden' || options.type == 'hidden'
          ) {
        fieldTagClass = 'd-none'
      } else {
        fieldTagClass = 'mb-2'
      }

      if ( layout == 'vertical' ) {
        headerTagClass = ''
        bodyTagClass = ''
      } else {
        fieldTagClass = fieldTagClass + ' form-row'
        headerTagClass = 'd-inline-block align-top mt-2 col-sm-4'
        bodyTagClass = 'd-inline-block col-sm-8'
      }
// let scope = f.scope
      return target( {
        ...options,
        fieldTag: {
          class: fieldTagClass,
          ...options.fieldTag,
        },
        headerTag: {
          class: headerTagClass,
          ...options.headerTag,
        },
        labelTag: {
          class: 'mb-0',
        },
        bodyTag: {
          class: bodyTagClass,
          ...options.bodyTag,
        },
        hintTag: {
          class: 'form-text text-muted',
          ...options.hintTag,
        },

      } )

    } },

    fieldset: ( f, target ) => ( options={} ) => {

      let layout = options.layout || f.params.layout || 'horizontal'

      let fieldsetTagClass,
          headerTagClass,
          bodyTagClass

      if ( layout == 'vertical' ) {
        fieldsetTagClass = ''
        headerTagClass = ''
        bodyTagClass = ''
      } else {
        fieldsetTagClass = 'mb-0 form-row'
        headerTagClass = 'd-inline-block align-top mt-2 col-sm-4'
        bodyTagClass = 'd-inline-block col-sm-8'
      }

      return target( {
        ...options,
        fieldsetTag: {
          class: fieldsetTagClass,
          ...options.fieldTag,
        },
        headerTag: {
          class: headerTagClass,
          ...options.headerTag,
        },
        bodyTag: {
          class: bodyTagClass,
          ...options.bodyTag,
        },
        hintTag: {
          class: 'form-text text-muted',
          ...options.hintTag,
        },

      } )

    },

    button: ( f, target ) => ( options={} ) => target( {
      ...options,
      buttonTag: {
        class: 'btn btn-secondary',
        ...options.buttonTag,
      },
    } ),

    checkbox: ( f, target ) => ( options={} ) => target( {
      ...options,
      checkTag: {
        class: `custom-control custom-checkbox ml-1`,
        ...options.checkTag,
      },
      inputTag: {
        class: 'custom-control-input',
        ...options.inputTag,
      },
      labelTag: {
        class: 'custom-control-label',
        ...options.labelTag,
      },
      checkboxTag: {
        class: options.layout === 'vertical' ? 'd-block' : 'd-block p-2',
        ...options.checkboxTag,
      }
    } ),

    checkboxes: ( f, target ) => ( options={} ) => target( {
      ...options,
      checkTag: {
        class: 'custom-control custom-checkbox ml-1',
        ...options.checkTag,
      },
      inputTag: {
        class: 'custom-control-input',
        ...options.inputTag,
      },
      labelTag: {
        class: 'custom-control-label',
        ...options.labelTag,
      },
      checkboxesTag: {
        class: options.layout === 'vertical' ? 'd-block' : 'd-block p-2',
        ...options.checkboxesTag,
      }
    } ),

    radios: ( f, target ) => ( options={} ) => target( {
      ...options,
      checkTag: {
        class: 'custom-control custom-radio ml-1',
        ...options.checkTag,
      },
      inputTag: {
        class: 'custom-control-input',
        ...options.inputTag,
      },
      labelTag: {
        class: 'custom-control-label',
        ...options.labelTag,
      },
      radiosTag: {
        class: options.layout === 'vertical' ? 'd-block' : 'd-block p-2',
        ...options.radiosTag,
      }
    } ),

    input: ( f, target ) => ( options={} ) => target( {
      ...options,
      inputTag: {
        class: 'form-control',
        ...options.inputTag,
      },
    } ),

    select: ( f, target ) => ( options={} ) => target( {
      ...options,
      selectTag: {
        class: 'custom-select',
        ...options.selectTag,
      },
    } ),

    textarea: ( f, target ) => ( options={} ) => target( {
      ...options,
      textareaTag: {
        class: 'form-control',
        ...options.textareaTag,
      },
    } ),

    controls: {
      table: ( f, target ) => ( options={} ) => target( {
        ...options,
        tableTag: {
          class: 'table table-sm table-borderless mb-0',
          ...options.tableTag,
        },
        itemButtonsTag: {
          class: 'btn-group float-right',
          ...options.itemButtonsTag,
        },
        footerTag: {
          class: 'mb-1 d-block',
          ...options.footerTag
        },
        sortButtonsTag: {
          class: 'float-right',
          ...options.sortButtonsTag
        },
        sortOffButton: {
          ...options.sortOffButton,
          buttonTag: {
            class: 'btn btn-warning',
            ...( options.sortOffButton || {} ).buttonTag,
          },
        },
        sortOnButton: {
          ...options.sortOnButton,
          buttonTag: {
            class: 'btn btn-secondary',
            ...( options.sortOnButton || {} ).buttonTag,
          },
        },
        addButton: {
          ...options.addButton,
          buttonTag: {
            class: 'btn btn-secondary',
            ...( options.addButton || {} ).buttonTag,
          },
        },
        upButton: {
          ...options.upButton,
          buttonTag: {
            class: 'btn btn-secondary',
            ...( options.upButton || {} ).buttonTag,
          },
        },
        downButton: {
          ...options.downButton,
          buttonTag: {
            class: 'btn btn-secondary',
            ...( options.downButton || {} ).buttonTag,
          },
        },
        removeButton: {
          ...options.removeButton,
          buttonTag: {
            class: 'btn btn-secondary',
            ...( options.removeButton || {} ).buttonTag,
          },
        },

      } ),
      many: ( f, target ) => ( options={} ) => target( {
        ...options,
        itemHeaderTag: {
          class: 'clearfix',
          ...options.itemHeaderTag
        },
        itemButtonsTag: {
          class: 'btn-group float-right mb-2',
          ...options.itemButtonsTag
        },
        footerTag: {
          class: 'mb-1 d-block',
          ...options.footerTag
        },
        sortButtonsTag: {
          class: 'float-right',
          ...options.sortButtonsTag
        },
        sortOffButton: {
          ...options.sortOffButton,
          buttonTag: {
            class: 'btn btn-warning',
            ...( options.sortOffButton || {} ).buttonTag,
          },
        },
        sortOnButton: {
          ...options.sortOnButton,
          buttonTag: {
            class: 'btn btn-secondary',
            ...( options.sortOnButton || {} ).buttonTag,
          },
        },
        addButton: {
          ...options.addButton,
          buttonTag: {
            class: 'btn btn-secondary',
            ...( options.addButton || {} ).buttonTag,
          },
        },
        upButton: {
          ...options.upButton,
          buttonTag: {
            class: 'btn btn-secondary',
            ...( options.upButton || {} ).buttonTag,
          },
        },
        downButton: {
          ...options.downButton,
          buttonTag: {
            class: 'btn btn-secondary',
            ...( options.downButton || {} ).buttonTag,
          },
        },
        removeButton: {
          ...options.removeButton,
          buttonTag: {
            class: 'btn btn-secondary',
            ...( options.removeButton || {} ).buttonTag,
          },
        },

      } ),
      selectinput: ( f, target ) => ( options={} ) => target( {
        ...options,
        input: {
          ...options.input,
          inputTag: {
            class: 'form-control mt-1',
            ...( options.input || {} ) .inputTag,
          }
        }

      } ),
    },


    submit: ( f, target ) => ( options={} ) => target( {
      ...options,
      buttonTag: {
        class: 'btn btn-primary',
        ...options.buttonTag,
      },
    } ),

  }

}
