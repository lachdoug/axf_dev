app.reportEnginesV1Input = r => r.field( {
  key: 'input',
  as: 'one',
  layout: 'vertical',
  report: (rr) => [
    rr.field( {
      key: 'type',
    } ),
    rr.field( {
      key: 'label',
    } ),
    rr.field( {
      key: 'title',
    } ),
    rr.field( {
      key: 'comment',
    } ),
    rr.field( {
      key: 'hint',
    } ),
    rr.field( {
      key: 'placeholder',
    } ),
    rr.field( {
      key: 'validation',
      as: 'one',
      report: (rrr) => [
        rrr.field( {
          key: 'pattern',
        } ),
        rrr.field( {
          key: 'message',
        } ),
      ]
    } ),
    rr.field( {
      key: 'collection',
      as: 'one',
      report: (rrr) => [
        rrr.field( {
          key: 'items',
          as: 'table',
          label: false,
          layout: 'vertical',
          report: (rrrr) => [
            rrrr.field( {
              key: 'value',
            } ),
            rrrr.field( {
              key: 'label',
            } ),
          ]
        } ),
        rrr.field( {
          key: 'include_blank',
          as: 'boolean',
        } ),
      ]
    } ),
  ]
} )
