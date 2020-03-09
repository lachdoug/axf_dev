module Server
  class Api
    module App
      module Models
        class Service
          class Definition

            def initialize( service )
              @service = service
            end

            attr_reader :service

            def to_h
              {
                workspace: workspace_definition.object,
                blueprint: from_blueprint
              }
            end

            def to_json
              to_h.to_json
            end

            def workspace_definition
              @workspace_definition ||= service.workspace.definitions.find( service.blueprint.type )
            end

            def blueprint( *keys )
              service.blueprint.object.dig *keys
            end

            def save
              workspace_definition.save( from_blueprint )
            end

            def from_blueprint
              {
                publisher_namespace: ( blueprint( :software, :base, :publisher_namespace ) || '' ),
                type_path: ( blueprint( :software, :base, :type_path ) || '' ),
                title: ( blueprint( :metadata, :software, :display, :title ) || '' ),
                description: ( blueprint( :metadata, :software, :display, :description ) || '' ),
                # major: metadata.blueprint_version_major,
                # minor: metadata.blueprint_version_minor,
                # release_level: metadata.blueprint_version_level,
                # patch: metadata.blueprint_version_patch,
                service_container: ( blueprint( :software, :base, :name ) || '' ),
                service_handle_field: ( blueprint( :software, :base, :service_handle_field ) || '' ),
                dedicated: ( blueprint( :software, :disposition, :dedicated ) || false ),
                persistent: ( blueprint( :software, :disposition, :persistent ) || false ),
                immutable: ( blueprint( :software, :disposition, :immutable ) || false ),
                attach_post_build: ( blueprint( :software, :disposition, :attach_post_build ) || false ),
                attach_requires_restart: ( blueprint( :software, :disposition, :attach_requires_restart ) || false ),
                soft_service: ( blueprint( :software, :disposition, :soft_service ) || false ),
                shareable: ( blueprint( :software, :disposition, :shareable ) || false ),
                consumer_exportable: ( blueprint( :software, :disposition, :consumer_exportable ) || false ),
                consumerless: ( blueprint( :software, :disposition, :consumerless ) || false ),
                target_environment_variables: ( blueprint( :software, :target_environment_variables ) || [] ).map do |ev|
                  { ev[:variable_name].to_sym => ev }
                end.inject( :merge ),
                accepts: ( blueprint( :software, :consumers, :accepts ) || [] ),
                consumer_params: ( blueprint( :software, :consumer_params ) || [] ).map do |cp|
                  { cp[:name].to_sym => cp }
                end.inject( :merge ),
                configurators: ( blueprint( :software, :configurators ) || [] ).map do |c|
                  { c[:name].to_sym => c }
                end.inject( :merge ),
                service_actionators: ( blueprint( :software, :actionators ) || [] ).map do |a|
                  { a[:name].to_sym => a }
                end.inject( :merge ),
                constants: ( blueprint( :software, :constants ) || [] ).map do |c|
                  { c[:name].to_sym => c }
                end.inject( :merge ),
                configurators: ( blueprint( :software, :configurators ) || [] ).map do |c|
                  { c[:name] => c }
                end.inject( :merge ),
                service_dependencies: ( blueprint( :software, :service_dependencies ) || [] ),
                build_dependencies: ( blueprint( :software, :build_dependencies ) || [] ),
                guises: ( blueprint( :software, :guises ) || [] ),
              }
            end

          end
        end
      end
    end
  end
end
