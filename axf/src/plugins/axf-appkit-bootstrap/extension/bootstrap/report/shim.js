ax.extension.bootstrap.report.shim = function() {

  return {

    field: ( f, target ) => ( options={} ) => {

      let layout = options.layout || f.params.layout || 'horizontal'

      let fieldTagClass,
          headerTagClass,
          bodyTagClass

      if ( layout == 'vertical' ) {
        fieldTagClass = 'form-group'
        headerTagClass = ''
        bodyTagClass = ''
      } else {
        fieldTagClass = 'mb-2 form-group form-row'
        headerTagClass = 'd-inline-block align-top mt-2 col-sm-4'
        bodyTagClass = 'd-inline-block col-sm-8'
      }

      // delete ( options.layout )

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
        bodyTag: {
          class: bodyTagClass,
          ...options.bodyTag,
        },
        hintTag: {
          class: 'form-text text-muted',
          ...options.hintTag,
        },
        // checkbox: {
        //   checkTag: {
        //     class: ''
        //   }
        // }
      } )

    },

    // controls: {
    //
    //   table: ( f, target ) => ( options={} ) => target( {
    //     ...options,
    //     itemTag: {
    //       class: 'p-n1', // For tables, negate margin on fields' form-group class.
    //       ...options.itemTag,
    //     },
    //   } ),
    //
    // },

    button: ( f, target ) => ( options={} ) => target( {
      ...options,
      buttonTag: {
        class: 'btn btn-secondary',
        ...options.buttonTag,
      },
    } ),

    check: ( f, target ) => ( options={} ) => {

      let checkTagClass

      if ( options.layout == 'vertical' ) {
        checkTagClass = 'custom-control custom-checkbox'
      } else {
        checkTagClass = 'custom-control custom-checkbox mt-2'
      }

      return target( {
        ...options,
        checkTag: {
          class: checkTagClass,
          ...options.buttonTag,
        },
        inputTag: {
          class: 'custom-control-input',
          ...options.buttonTag,
        },
        labelTag: {
          class: 'custom-control-label',
          ...options.buttonTag,
        },
        wrapperTag: {
          class: 'd-inline-block p-1',
          ...options.wrapperTag,
        }
      } )

    },

    // checkboxes: ( f, target ) => ( options={} ) => target( {
    //   ...options,
    //   checkTag: {
    //     class: 'custom-control custom-checkbox',
    //     ...options.buttonTag,
    //   },
    //   inputTag: {
    //     class: 'custom-control-input',
    //     ...options.buttonTag,
    //   },
    //   labelTag: {
    //     class: 'custom-control-label',
    //     ...options.buttonTag,
    //   },
    //   wrapperTag: {
    //     class: 'p-1',
    //     ...options.wrapperTag,
    //   }
    // } ),

    output: ( f, target ) => ( options={} ) => target( {
      ...options,
      outputTag: {
        class: 'form-control border-top-0 border-right-0 border-left-0',
        ...options.outputTag,
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
            class: 'btn btn-outline-primary',
            ...( options.sortOnButton || {} ).buttonTag,
          },
        },
        addButton: {
          ...options.addButton,
          buttonTag: {
            class: 'btn btn-outline-primary',
            ...( options.addButton || {} ).buttonTag,
          },
        },
        upButton: {
          ...options.upButton,
          buttonTag: {
            class: 'btn btn-outline-primary',
            ...( options.upButton || {} ).buttonTag,
          },
        },
        downButton: {
          ...options.downButton,
          buttonTag: {
            class: 'btn btn-outline-primary',
            ...( options.downButton || {} ).buttonTag,
          },
        },
        removeButton: {
          ...options.removeButton,
          buttonTag: {
            class: 'btn btn-outline-primary',
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
            class: 'btn btn-outline-primary',
            ...( options.sortOnButton || {} ).buttonTag,
          },
        },
        addButton: {
          ...options.addButton,
          buttonTag: {
            class: 'btn btn-outline-primary',
            ...( options.addButton || {} ).buttonTag,
          },
        },
        upButton: {
          ...options.upButton,
          buttonTag: {
            class: 'btn btn-outline-primary',
            ...( options.upButton || {} ).buttonTag,
          },
        },
        downButton: {
          ...options.downButton,
          buttonTag: {
            class: 'btn btn-outline-primary',
            ...( options.downButton || {} ).buttonTag,
          },
        },
        removeButton: {
          ...options.removeButton,
          buttonTag: {
            class: 'btn btn-outline-primary',
            ...( options.removeButton || {} ).buttonTag,
          },
        },

      } )
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
