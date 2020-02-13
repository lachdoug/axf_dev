module Server

  def self.warmup( rack )

    # rack.warmup do |app|
    # end

  end

  class Api < Sinatra::Base

    post '/dev' do
      content_type 'text/terminal'
      params.to_yaml
    end

  end

end
