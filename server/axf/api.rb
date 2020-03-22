module Server

  def self.warmup( rack )

    # rack.warmup do |app|
    # end

  end

  class Api < Sinatra::Base

    post '/test' do
      content_type :'application/json'
      params.to_json
    end

  end

end
