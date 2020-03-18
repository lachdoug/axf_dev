ax.extension.bootstrap.report.shim = function() {

  return {

    field: ( r, target ) => ( options={} ) => {

      let layout = options.layout || r.params.layout || 'horizontal'

      let fieldTagClass,
          headerTagClass,
          bodyTagClass

      if ( layout == 'vertical' ) {
        fieldTagClass = 'form-group'
        headerTagClass = ''
        bodyTagClass = ''
      } else {
        fieldTagClass = 'mb-1 form-group form-row'
        headerTagClass = 'd-inline-block align-top mt-2 col-sm-4'
        bodyTagClass = 'd-inline-block col-sm-8'
      }

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
      } )

    },

    button: ( r, target ) => ( options={} ) => target( {
      ...options,
      buttonTag: {
        class: 'btn btn-secondary',
        ...options.buttonTag,
      },
    } ),

    checkbox: ( r, target ) => ( options={} ) => target( {
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
        class: options.layout === 'vertical' ? '' : 'd-block p-2',
        ...options.checkboxTag,
      }
    } ),

    checkboxes: ( r, target ) => ( options={} ) => target( {
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
        class: options.layout === 'vertical' ? '' : 'd-block p-2',
        ...options.checkboxesTag,
      }
    } ),

    radios: ( r, target ) => ( options={} ) => target( {
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
        class: options.layout === 'vertical' ? '' : 'd-block p-2',
        ...options.radiosTag,
      }
    } ),

    string: ( r, target ) => ( options={} ) => target( {
      ...options,
      stringTag: {
        class: 'form-control text-dark bg-white p-2',
        ...options.stringTag,
      },
    } ),

    select: ( r, target ) => ( options={} ) => target( {
      ...options,
      selectTag: {
        class: 'form-control text-dark h-100',
        ...options.selectTag,
      },
    } ),

    text: ( r, target ) => ( options={} ) => target( {
      ...options,
      textTag: {
        class: 'form-control text-dark bg-white h-100',
        ...options.textTag,
      },
    } ),

    output: ( r, target ) => ( options={} ) => target( {
      ...options,
      outputTag: {
        class: 'form-control text-dark bg-white h-100',
        ...options.outputTag,
      },
    } ),

    controls: {

      boolean: ( r, target ) => ( options={} ) => target( {
        ...options,
        booleanTag: {
          class: 'p-2 d-block',
          ...options.booleanTag,
        },
      } ),

      json: ( r, target ) => ( options={} ) => target( {
        ...options,
        jsonTag: {
          class: 'form-control text-dark h-100',
          ...options.jsonTag,
        },
      } ),

      preformatted: ( r, target ) => ( options={} ) => target( {
        ...options,
        preformattedTag: {
          class: 'form-control text-dark bg-white h-100',
          ...options.preformattedTag,
        },
      } ),

      password: ( r, target ) => ( options={} ) => target( {
        ...options,
        passwordTag: {
          class: 'form-control text-dark bg-white',
          ...options.passwordTag,
        },
      } ),

      color: ( r, target ) => ( options={} ) => target( {
        ...options,
        colorTag: {
          class: 'form-control text-dark',
          ...options.colorTag,
        },
      } ),

      datetime: ( r, target ) => ( options={} ) => target( {
        ...options,
        datetimeTag: {
          class: 'form-control text-dark',
          ...options.datetimeTag,
        },
      } ),

      number: ( r, target ) => ( options={} ) => target( {
        ...options,
        numberTag: {
          class: 'form-control text-dark',
          ...options.numberTag,
        },
      } ),

      tel: ( r, target ) => ( options={} ) => target( {
        ...options,
        telTag: {
          class: 'form-control text-dark',
          ...options.telTag,
        },
      } ),

      email: ( r, target ) => ( options={} ) => target( {
        ...options,
        emailTag: {
          class: 'form-control text-dark',
          ...options.emailTag,
        },
      } ),

      country: ( r, target ) => ( options={} ) => target( {
        ...options,
        countryTag: {
          class: 'form-control text-dark',
          ...options.countryTag,
        },
      } ),

      language: ( r, target ) => ( options={} ) => target( {
        ...options,
        languageTag: {
          class: 'form-control text-dark',
          ...options.languageTag,
        },
      } ),

      timezone: ( r, target ) => ( options={} ) => target( {
        ...options,
        timezoneTag: {
          class: 'form-control text-dark',
          ...options.timezoneTag,
        },
      } ),

      url: ( r, target ) => ( options={} ) => target( {
        ...options,
        urlTag: {
          class: 'form-control text-dark',
          ...options.urlTag,
        },
      } ),



      table: ( r, target ) => ( options={} ) => target( {
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
      many: ( r, target ) => ( options={} ) => target( {
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

      } ),

    },

    submit: ( r, target ) => ( options={} ) => target( {
      ...options,
      buttonTag: {
        class: 'btn btn-primary',
        ...options.buttonTag,
      },
    } ),

  }

}
