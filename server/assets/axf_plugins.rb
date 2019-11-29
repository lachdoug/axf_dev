module Server
  class Assets
    module AxfPlugins

      require_relative 'packager'
      extend Packager

      def self.package
        concatenate( [
          './axf/src/plugins/axf-form/**/*.js',

          './axf/src/plugins/axf-appkit/**/*.js',
          './axf/src/plugins/axf-appkit-form-async/**/*.js',
          './axf/src/plugins/axf-appkit-form-field/**/*.js',
          './axf/src/plugins/axf-appkit-form-field-dependent/**/*.js',
          './axf/src/plugins/axf-appkit-form-field-nest/**/*.js',
          './axf/src/plugins/axf-appkit-form-field-nest-prefab/**/*.js',

          './axf/src/plugins/axf-appkit-report-field/**/*.js',
          './axf/src/plugins/axf-appkit-report-field-dependent/**/*.js',
          './axf/src/plugins/axf-appkit-report-field-nest/**/*.js',
          './axf/src/plugins/axf-appkit-report-field-nest-prefab/**/*.js',

          './axf/src/plugins/axf-appkit-bootstrap/**/*.js',

          './axf/src/plugins/axf-appkit-form-field-extras/**/*.js',

          './axf/src/plugins/axf-dropdown/**/*.js',
          './axf/src/plugins/axf-xtermjs/**/*.js',
          # './axf/src/plugins/axf-appkit-theme-base/**/*.js',
          './axf/src/plugins/axf-codemirror/**/*.js',
          './axf/src/plugins/axf-appkit-jsoneditor/**/*.js',
          './axf/src/plugins/axf-markedjs/**/*.js',
          './axf/src/plugins/axf-chartjs/**/*.js',
          './axf/src/plugins/axf-appkit-simplemde/**/*.js',
          # './axf/src/plugins/axf-appkit-quilljs/**/*.js',
          # './axf/src/plugins/axf-html5-sortable/**/*.js',
          './axf/src/plugins/axf-panes/**/*.js',
          # './axf/src/plugins/axf-timeago/**/*.js',
          # './axf/src/plugins/axf-dropzonejs/**/*.js',
          './axf/src/plugins/axf-filepond/**/*.js',
        ] )
      end

    end
  end
end
