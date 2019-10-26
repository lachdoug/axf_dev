let app2 = (a,x) => x.form( {
  shims: [
    x.form.field.shim(),
    // x.form.field.dependent.shim(),
    x.form.field.nest.shim(),
    x.form.field.nest.prefab.shim(),
    // x.bootstrap.form.shim(),
    // x.form.async.shim(),
    app.form.shim
  ],
  object: {
    view: [
      {
        form: {
          components: [
            {
              template: '# Hu',
              row: {
                columns: [
                  {
                    template: '# Hy',
                  }
                ]
              }
            },
          ]
        },
      }
    ],
  },

  form: (f) => [

    f.field( {
      key: 'view',
      label: false,
      as: 'many',
      item: 'view component',
      form: (ff) => [

        ff.field( {
          key: 'form',
          as: 'nest',
          form: (fff) => [

            fff.field( {
              key: 'components',
              as: 'nest',
              item: 'form component',
              form: (ffff) => [

                ffff.items( {
                  form: (fffff) => [


                    fffff.field( {
                      key: 'row',
                      as: 'nest',
                      form: (ffffff) => (a,x) => [

                        ffffff.field( {
                          key: 'columns',
                          as: 'nest',
                          item: 'column',
                          form: (ffffff) => [
                            // ( function() { let zzz = ffffff; debugger; return null } )(),
                            ffffff.scope,
                            ffffff.items( {
                              form: (fffffff) => fffffff.field( {
                                key: 'template',
                                as: 'markdown',
                              } ),
                            } ),

                          ]
    ,
                        } ),

                      ]
                    } ),

                    fffff.field( {
                      key: 'template',
                      as: 'markdown',
                    } ),




                  ]
                } ),





              ]
,
            } ),


          ]

        } ),

      ],

    } ),


  ]
} )
