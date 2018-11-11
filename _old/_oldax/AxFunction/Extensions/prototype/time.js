AxFunction.Extensions.prototype.time = function() {

  const a = this.a;

  return a.time( null, {
    $init: function() {
      setInterval( this.$update, 1000);
    },
    $update: function() {
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
      let now = new Date();
      this.$text = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${now.getDate()} ${months[now.getMonth()]}, ${now.getFullYear()}`;
    }

  } );

};
