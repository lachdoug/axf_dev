// app.session = ( body ) => (a,x) => a['app-session'](
//   [
//     a['app-session-timer']( {
//       $timeoutMilliseconds: $settings.sessionTimeoutMinutes * 60000,
//       $setLastActivity: function() {
//         this.$lastActivity = Date.now()
//       },
//       $init: function () {
//         // this.$setLastActivity()
//         this.$clock = setInterval(function(){ this.$check() }.bind( this ), 10000 )
//         // this.$start()
//       },
//       // $start: function() {
//       // },
//       $stop: function() {
//         clearInterval( this.$clock )
//       },
//       $check: function() {
//         if ( !this.$recentActivity() ) {
//           this.$resetApiTimeout()
//         } else {
//           this.$stop()
//           session.$( 'app' ).$send( 'app.server.session.timeout' )
//         }
//       },
//       $recentActivity: function() {
//         return Date.now() < ( this.$lastActivity + this.$timeoutMilliseconds )
//       },
//       // $resetApiTimeout: function() {
//       //   this.$nodes = app.http( '/~/session', () => null )
//       // },
//
//     } ),
//     body,
//   ],
//   {
//     id: 'session',
//     $activity: function() {
//       this.$('app-session-timer').$setLastActivity()
//     },
//     $start: function() {
//       this.$('app-session-timer').$start()
//     },
//     $stop: function() {
//       this.$('app-session-timer').$stop()
//     },
//
//   }
// )
