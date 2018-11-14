ax.extensions.time = function( options={} ) {

  const a = ax.a;

  let timeTag = Object.assign(
    {
      $init: function() {
        this.$tock();
        setInterval( this.$tock, 1000);
      },
      $tock: function() {
        this.$text = ( new Date ).toLocaleTimeString();
      }
    },
    options.timeTag
  )

  return a.time( null, timeTag );

};
