cc.link = ( options={} ) => (a,x) => a.a( options.label, {
  href: options.href,
  target: options.target,
  title: options.title,
  class: options.class || 'btn btn-outline-primary app-btn',
  ...options.aTag
} )
