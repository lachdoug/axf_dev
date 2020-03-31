module Server

  def self.warmup( rack )

    rack.warmup do |app|

      # Sessions directory stores session files named by session id.
      # Modification time for a file is used as the activity timestamp for session timeout.
      FileUtils.mkdir_p 'sessions'

      # Delete stale session files
      session_timeout_seconds = $SESSION_TIMEOUT_MINUTES.to_f * 60
      seconds_to_stale = session_timeout_seconds + 3600
      now = Time.now
      Dir.glob( 'sessions/*' ) do |filepath|
        stale = File.mtime( filepath ) + seconds_to_stale < now
        File.delete( filepath ) if stale
      end

    end

  end

end
