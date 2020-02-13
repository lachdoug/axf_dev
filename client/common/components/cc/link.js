cc.link = ( options={} ) => (a,x) => a.a( options.label, {
  href: options.href,
  target: options.target,
  title: options.title || options.label,
  class: options.class || 'btn btn-outline-primary app-btn',
  ...options.aTag
} )
