<% Dir.glob( [ './v0/client/lib/ax_framework/**/*.js' ] ).each do |file| %>
 	<%= File.read file %>
<% end %>
