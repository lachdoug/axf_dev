app.system.install.new.form = ( controller, install ) => (a,x) => {

  return app.form( {
    // url: '/~/dev',
    url: '/~/~/containers/engines/build',
    success: () => controller.open( '../monitor' ),
    object: install,
    scope: 'api_vars',
    form: (f) => [

      f.field( { key: 'repository_url', as: 'input/hidden' } ),
      f.field( { key: 'icon_url', as: 'input/hidden' } ),

      f.field( { key: 'engine_name', label: 'Name', required: 'required' } ),
      f.field( { key: 'memory', label: 'Memory (MB)', as: 'input/number', min: f.object.minimum_memory, required: 'required' } ),

      a.p( a.small( 'Locale' ), { class: 'border-bottom' } ),
      f.field( { key: 'country_code', label: 'Country', as: 'country' } ),
      f.field( { key: 'lang_code', label: 'Language', as: 'language' } ),

      a.p( a.small( 'Network' ), { class: 'border-bottom' } ),
      f.field( { key: 'http_protocol', label: 'HTTP protocol', as: 'select', selections: {
        "https_and_http": "HTTPS and HTTP",
        "http_and_https": "HTTP and HTTPS",
        "https_only": "HTTPS only",
        "http_only": "HTTP only"
      } } ),
      f.field( { key: 'host_name' } ),
      f.field( { key: 'domain_name', as: 'select', selections: f.object.domains } ),

      a.p( a.small( 'Services' ), { class: 'border-bottom' } ),

      a['div.form-row']( [

        a['div.col-sm-4']( 'Bind' ),
        a['div.col-sm-8'](
          f.object.attached_services.map( service => [
            // service,
            a['.app-install-form-service']( [
              `${
                service.publisher_namespace
              }/${
                service.type_path
              }`,
              f.field( {
                name: 'api_vars[attached_services][][publisher_namespace]',
                value: service.publisher_namespace,
                as: 'input/hidden'
              } ),
              f.field( {
                name: 'api_vars[attached_services][][type_path]',
                value: service.type_path,
                as: 'input/hidden'
              } ),
              f.field( {
                name: 'api_vars[attached_services][][create_type]',
                label: false,
                layout: 'vertical',
                as: 'select',
                selections: service.create_types,
              } ),
              f.field( {
                name: 'api_vars[attached_services][][share]',
                label: false,
                layout: 'vertical',
                as: 'select',
                placeholder: 'Share...',
                required: true,
                selections: service.shareable,
                dependent: {
                  search: '^.app-install-form-service',
                  selector: '[name="api_vars[attached_services][][create_type]"]',
                  value: 'share_existing'
                },
              } ),
              f.field( {
                name: 'api_vars[attached_services][][adopt]',
                label: false,
                layout: 'vertical',
                as: 'select',
                placeholder: 'Adopt...',
                required: true,
                selections: service.adoptable,
                dependent: {
                  search: '^.app-install-form-service',
                  selector: '[name="api_vars[attached_services][][create_type]"]',
                  value: 'adopt_orphan'
                },
              } ),

            ] )
          ] ),

        ),

      ] ),

      f.field( {
        key: 'permission',
        label: false,
        as: 'check',
        check: {
          label: 'Permission'
        }
        // placeholder: 'Permission as...',
        // selections: f.object.application_names,
      } ),

      f.field( {
        key: 'permission_as',
        label: false,
        as: 'select',
        placeholder: 'as...',
        required: true,
        selections: f.object.application_names,
        dependent: {
          key: 'permission',

        }
      } ),




      // f.field( {
      //   key: 'attached_services',
      //   label: 'Mount',
      //   as: 'many',
      //   removable: false,
      //   sortable: false,
      //   form: (ff) => [
      //     `${
      //       ff.object.publisher_namespace
      //     }/${
      //       ff.object.type_path
      //     }`,
      //     ff.field( { key: 'publisher_namespace', as: 'input/hidden' } ),
      //     ff.field( { key: 'type_path', as: 'input/hidden' } ),
      //     ff.field( {
      //       key: 'create_type',
      //       label: false,
      //       layout: 'vertical',
      //       as: 'select',
      //       selections: ff.object.create_types,
      //     } ),
      //     ff.field( {
      //       key: 'share',
      //       label: false,
      //       layout: 'vertical',
      //       as: 'select',
      //       placeholder: 'Share...',
      //       required: true,
      //       selections: ff.object.shareable,
      //       dependent: { target: 'create_type', value: 'share_existing' },
      //     } ),
      //     ff.field( {
      //       key: 'adopt',
      //       label: false,
      //       layout: 'vertical',
      //       as: 'select',
      //       placeholder: 'Adopt...',
      //       required: true,
      //       selections: ff.object.adoptable,
      //       dependent: { target: 'create_type', value: 'adopt_orphan' },
      //     } ),
      //   ],
      // } ),

      f.object.variables.length > 0 ?
        a.p( a.small( 'Environment' ), { class: 'border-bottom' } ) :
        null,

      f.field( {
        key: 'variables',
        as: 'one',
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.object.map( variable => ff.field( variable ) )
        ]
      } ),

      f.buttons( {
        cancel: {
          onclick: () => controller.open( '..' ),
        }
      } ),

    ]
  } )

}

/*
				installedPackagesRequiringAuthentication.length ? legend ( { text: "Package authentication" } ) : {},
				{ $components: installedPackagesRequiringAuthentication.map(
					function (obj, i) {
						return installNewApp._formInstalledPackagesAuthenticationFields (obj, i);
					}
				) },
				legend ( { text: "License" } ),
				licenseUrl ?
					{
						$components: [
							{
								$components: [
									{
										$type: "a",
										$text: ( licenseLabel || "Read the license" ),
										title: "Read the license",
										onclick: () => {
											openUrl( licenseUrl );
										}
									},
									formField( {
										type: "checkbox",
										label: "I have read and accept the license.",
										title: "Accept the license",
										name: "data[license_accepted]",
										required: true
									}	)
								]
							},
						]
					}
				: { $type: "p", $text: "No license." },
				formCancel ( { onclick: installNewApp._cancelFunc } ),
				formSubmit( { onclick: installNewApp._checkFqdnReserved }),
			],
			action: "/system/install",
			callbacks: {
				200: function() {
					system._live();
				},
			}
		});

	},


	_availableEngineNameFor: function (base_name) {

		var reserved_names = this._data.reserved.container_names;
		var name = base_name.substring ( 0, 16 )
		var index = 2
		while ($.inArray ( name, reserved_names ) > -1) {
			max_name_length = 16 - index.toString().length;
			name = base_name.substring ( 0, max_name_length ) + index.toString();
			index ++
		};
		return name;

	},

	_checkFqdnReserved: function () {
		var fqdn = $("#installNewAppFormField_host_name").val() + '.' + $("#installNewAppFormField_domain_name").val();
		if( $.inArray( fqdn, installNewApp._data.reserved.fqdns ) > -1 ) {
			if ( !$("#installNewAppFormField_host_name").is(':visible') ) {
				$(".installNewAppFormCustomCollapse").toggle();
			};
			$("#installNewAppFormField_host_name")[0].setCustomValidity(
				fqdn + " is already in use."
			);
			return true;
		} else {
			$("#installNewAppFormField_host_name")[0].setCustomValidity('')
			return true;
		};
	},


	_checkContainerNameReserved: function () {
		var name = $("#installNewAppFormField_container_name").val();
		if( $.inArray( name, installNewApp._data.reserved.container_names ) > -1 ) {

			if ( !$("#installNewAppFormField_container_name").is(':visible') ) {
				$(".installNewAppFormCustomCollapse").toggle();
			};

			$("#installNewAppFormField_container_name")[0].setCustomValidity(
				name + " is already in use."
			);
		} else {
			$("#installNewAppFormField_container_name")[0].setCustomValidity('')
		};
	},


	_formEnvironmentVariableField: function (field, i) {
		if ( field.ask_at_build_time != true ) {
			return {};
		} else {
			field.id = "installNewAppFormFieldEnvironmentVariable_" + i;
			field.name_prefix = "data[environment_variables]";
			return {
				class: ( field.mandatory == true ? "" : "collapse installNewAppFormCustomCollapse" ),
				$components: [
					enginesField(field)
				]
			};
		};

	},


	_formServiceConfigurationFields: function (obj, i) {

		var consumableService = this._data.consumable_services.find(
			function (consumable_service) {
				return ( consumable_service.service_definition.publisher_namespace == obj.publisher_namespace &&
				consumable_service.service_definition.type_path == obj.type_path );
			}
		);

		var selectOptions = serviceConsumerCreateType( consumableService );

		return {
			id: "installNewAppFormFieldServiceConfiguration_" + i,
			$components: [
				formField({ type: "hidden", name: "data[services][][publisher_namespace]", value: consumableService.service_definition.publisher_namespace }),
				formField({ type: "hidden", name: "data[services][][type_path]", value: consumableService.service_definition.type_path }),
				formField( {
					type: "select",
					label: consumableService.service_definition.title || ( consumableService.service_definition.publisher_namespace + '/' + consumableService.service_definition.type_path ),
					collection: selectOptions,
					id: "installNewAppFormFieldServiceConfiguration_" + i + "_createType",
					name: "data[services][][create_type]"
				} ),
				( consumableService.shareable.length == 0 ? {} :
					formField( {
						type: "select",
						label: false,
						name: "data[services][][share]",
						collection: installNewApp._formServiceConfigurationShareableServiceOptions(consumableService),
						dependOn: {
							input: "installNewAppFormFieldServiceConfiguration_" + i + "_createType",
							value: "share"
						}
					})
				 ),
				( consumableService.adoptable.length == 0 ? {} :
					formField( {
						type: "select",
						label: false,
						name: "data[services][][adopt]",
						collection: installNewApp._formServiceConfigurationAdoptableServiceOptions(consumableService),
						dependOn: {
							input: "installNewAppFormFieldServiceConfiguration_" + i + "_createType",
							value: "adopt"
						}
					})
				 ),
			],
		};

	},

	_formInstalledPackagesAuthenticationFields: function (obj, i) {

		var result = {
			$components: [
				formField({ type: "hidden", name: "data[installed_packages][][name]", value: obj.name }),
			]
		}

		if ( obj.authentication == 'credentials' ) {
			result.$components.push(
				formField({ type: "hidden", name: "data[installed_packages][][type]", value: "credentials" }),
				formField({ type: "string", label: obj.name, placeholder: "Username", required: true, name: "data[installed_packages][][credentials][username]" }),
				formField({ type: "password", label: false, placeholder: "Password", required: true, name: "data[installed_packages][][credentials][password]" })
			)
		} else if ( obj.authentication == 'key' ) {
			result.$components.push(
				formField({ type: "hidden", name: "data[installed_packages][][type]", value: "key" })
			)
			if ( installNewApp._data.repo_keys.length ) {
				result.$components.push(
					formField({
						id: "installNewAppFormInstalledPackagesAuthentication_" + i + "_keyType",
						type: "select",
						label: obj.name,
						name: "data[installed_packages][][key][type]",
						collection: [ [ "private_key", "Enter private key" ], [ "repo_key", "Select repo key" ] ] }),
					formField({
						type: "text",
						label: false,
						placeholder: "Key",
						required: true,
						name: "data[installed_packages][][key][private_key]",
						dependOn: {
							input: "installNewAppFormInstalledPackagesAuthentication_" + i + "_keyType",
							value: "private_key"
						}
					}),
					formField({
						type: "select",
						label: false,
						name: "data[installed_packages][][key][repo_key_name]",
						collection: installNewApp._data.repo_keys,
						dependOn: {
							input: "installNewAppFormInstalledPackagesAuthentication_" + i + "_keyType",
							value: "repo_key"
						}
					})
				)
			} else {
				result.$components.push(
					formField({ type: "hidden", name: "data[installed_packages][][key][type]", value: "private_key" }),
					formField({ type: "text", label: obj.name, placeholder: "Key", required: true, name: "data[installed_packages][][key][private_key]" }),
				)
			}
		}

		return result

	},

	_formServiceConfigurationShareableServiceOptions: function( consumableService ) {

		return consumableService.shareable.map(
			function( availableService ) {
				return this._formAvailableServiceOption( availableService );
			}.bind(this)
		);

	},


	_formServiceConfigurationAdoptableServiceOptions: function (consumableService) {

		return consumableService.adoptable.map(
			function(availableService) {
				return this._formAvailableServiceOption (availableService)
			}.bind(this)
		);

	},


	_formAvailableServiceOption: function( availableService ) {
		var parent = availableService.parent;
		var serviceHandle = availableService.service_handle;
		var optionValue = parent + "#" + serviceHandle;
		var optionLabel = ( parent + ( parent == serviceHandle ? "" : " - " + serviceHandle ) );
		return [ optionValue, optionLabel ];
	}

};

*/
