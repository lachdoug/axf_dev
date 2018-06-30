// options - goes to f.select with collection added

AxFrameworkExtensionsFormBuilderCustomFields.prototype.timezone = function(
	name,
	options
) {

	var f = this.formBuilder;
  var a = f.axFramework.tags;
	var x = f.axFramework.extensions;

	var collection = {
		"Pacific/Pago_Pago": "(GMT-11:00) American Samoa",
		"Pacific/Midway": "(GMT-11:00) Midway Island",
		"Pacific/Honolulu": "(GMT-10:00) Hawaii",
		"America/Juneau": "(GMT-09:00) Alaska",
		"America/New_York": "(GMT-05:00) Eastern Time (US &amp;amp; Canada)",
		"America/Tijuana": "(GMT-08:00) Tijuana",
		"America/Phoenix": "(GMT-07:00) Arizona",
		"America/Chihuahua": "(GMT-07:00) Chihuahua",
		"America/Mazatlan": "(GMT-07:00) Mazatlan",
		"America/Guatemala": "(GMT-06:00) Central America",
		"America/Mexico_City": "(GMT-06:00) Mexico City",
		"America/Monterrey": "(GMT-06:00) Monterrey",
		"America/Regina": "(GMT-06:00) Saskatchewan",
		"America/Bogota": "(GMT-05:00) Bogota",
		"America/Indiana/Indianapolis": "(GMT-05:00) Indiana (East)",
		"America/Lima": "(GMT-05:00) Quito",
		"America/Halifax": "(GMT-04:00) Atlantic Time (Canada)",
		"America/Caracas": "(GMT-04:00) Caracas",
		"America/Guyana": "(GMT-04:00) Georgetown",
		"America/La_Paz": "(GMT-04:00) La Paz",
		"America/Santiago": "(GMT-04:00) Santiago",
		"America/St_Johns": "(GMT-03:30) Newfoundland",
		"America/Sao_Paulo": "(GMT-03:00) Brasilia",
		"America/Argentina/Buenos_Aires": "(GMT-03:00) Buenos Aires",
		"America/Godthab": "(GMT-03:00) Greenland",
		"America/Montevideo": "(GMT-03:00) Montevideo",
		"Atlantic/South_Georgia": "(GMT-02:00) Mid-Atlantic",
		"Atlantic/Azores": "(GMT-01:00) Azores",
		"Atlantic/Cape_Verde": "(GMT-01:00) Cape Verde Is.",
		"Africa/Casablanca": "(GMT+00:00) Casablanca",
		"Europe/Dublin": "(GMT+00:00) Dublin",
		"Europe/London": "(GMT+00:00) London",
		"Europe/Lisbon": "(GMT+00:00) Lisbon",
		"Africa/Monrovia": "(GMT+00:00) Monrovia",
		"Etc/UTC": "(GMT+00:00) UTC",
		"Europe/Amsterdam": "(GMT+01:00) Amsterdam",
		"Europe/Belgrade": "(GMT+01:00) Belgrade",
		"Europe/Berlin": "(GMT+01:00) Berlin",
		"Europe/Zurich": "(GMT+01:00) Zurich",
		"Europe/Bratislava": "(GMT+01:00) Bratislava",
		"Europe/Brussels": "(GMT+01:00) Brussels",
		"Europe/Budapest": "(GMT+01:00) Budapest",
		"Europe/Copenhagen": "(GMT+01:00) Copenhagen",
		"Europe/Ljubljana": "(GMT+01:00) Ljubljana",
		"Europe/Madrid": "(GMT+01:00) Madrid",
		"Europe/Paris": "(GMT+01:00) Paris",
		"Europe/Prague": "(GMT+01:00) Prague",
		"Europe/Rome": "(GMT+01:00) Rome",
		"Europe/Sarajevo": "(GMT+01:00) Sarajevo",
		"Europe/Skopje": "(GMT+01:00) Skopje",
		"Europe/Stockholm": "(GMT+01:00) Stockholm",
		"Europe/Vienna": "(GMT+01:00) Vienna",
		"Europe/Warsaw": "(GMT+01:00) Warsaw",
		"Africa/Algiers": "(GMT+01:00) West Central Africa",
		"Europe/Zagreb": "(GMT+01:00) Zagreb",
		"Europe/Athens": "(GMT+02:00) Athens",
		"Europe/Bucharest": "(GMT+02:00) Bucharest",
		"Africa/Cairo": "(GMT+02:00) Cairo",
		"Africa/Harare": "(GMT+02:00) Harare",
		"Europe/Helsinki": "(GMT+02:00) Helsinki",
		"Asia/Jerusalem": "(GMT+02:00) Jerusalem",
		"Europe/Kaliningrad": "(GMT+02:00) Kaliningrad",
		"Europe/Kiev": "(GMT+02:00) Kyiv",
		"Africa/Johannesburg": "(GMT+02:00) Pretoria",
		"Europe/Riga": "(GMT+02:00) Riga",
		"Europe/Sofia": "(GMT+02:00) Sofia",
		"Europe/Tallinn": "(GMT+02:00) Tallinn",
		"Europe/Vilnius": "(GMT+02:00) Vilnius",
		"Asia/Baghdad": "(GMT+03:00) Baghdad",
		"Europe/Istanbul": "(GMT+03:00) Istanbul",
		"Asia/Kuwait": "(GMT+03:00) Kuwait",
		"Europe/Minsk": "(GMT+03:00) Minsk",
		"Europe/Moscow": "(GMT+03:00) St. Petersburg",
		"Africa/Nairobi": "(GMT+03:00) Nairobi",
		"Asia/Riyadh": "(GMT+03:00) Riyadh",
		"Europe/Volgograd": "(GMT+03:00) Volgograd",
		"Asia/Tehran": "(GMT+03:30) Tehran",
		"Asia/Muscat": "(GMT+04:00) Muscat",
		"Asia/Baku": "(GMT+04:00) Baku",
		"Europe/Samara": "(GMT+04:00) Samara",
		"Asia/Tbilisi": "(GMT+04:00) Tbilisi",
		"Asia/Yerevan": "(GMT+04:00) Yerevan",
		"Asia/Kabul": "(GMT+04:30) Kabul",
		"Asia/Yekaterinburg": "(GMT+05:00) Ekaterinburg",
		"Asia/Karachi": "(GMT+05:00) Karachi",
		"Asia/Tashkent": "(GMT+05:00) Tashkent",
		"Asia/Kolkata": "(GMT+05:30) New Delhi",
		"Asia/Colombo": "(GMT+05:30) Sri Jayawardenepura",
		"Asia/Kathmandu": "(GMT+05:45) Kathmandu",
		"Asia/Almaty": "(GMT+06:00) Almaty",
		"Asia/Dhaka": "(GMT+06:00) Dhaka",
		"Asia/Urumqi": "(GMT+06:00) Urumqi",
		"Asia/Rangoon": "(GMT+06:30) Rangoon",
		"Asia/Bangkok": "(GMT+07:00) Hanoi",
		"Asia/Jakarta": "(GMT+07:00) Jakarta",
		"Asia/Krasnoyarsk": "(GMT+07:00) Krasnoyarsk",
		"Asia/Novosibirsk": "(GMT+07:00) Novosibirsk",
		"Asia/Shanghai": "(GMT+08:00) Beijing",
		"Asia/Chongqing": "(GMT+08:00) Chongqing",
		"Asia/Hong_Kong": "(GMT+08:00) Hong Kong",
		"Asia/Irkutsk": "(GMT+08:00) Irkutsk",
		"Asia/Kuala_Lumpur": "(GMT+08:00) Kuala Lumpur",
		"Australia/Perth": "(GMT+08:00) Perth",
		"Asia/Singapore": "(GMT+08:00) Singapore",
		"Asia/Taipei": "(GMT+08:00) Taipei",
		"Asia/Ulaanbaatar": "(GMT+08:00) Ulaanbaatar",
		"Asia/Tokyo": "(GMT+09:00) Tokyo",
		"Asia/Seoul": "(GMT+09:00) Seoul",
		"Asia/Yakutsk": "(GMT+09:00) Yakutsk",
		"Australia/Adelaide": "(GMT+09:30) Adelaide",
		"Australia/Darwin": "(GMT+09:30) Darwin",
		"Australia/Brisbane": "(GMT+10:00) Brisbane",
		"Australia/Melbourne": "(GMT+10:00) Melbourne",
		"Pacific/Guam": "(GMT+10:00) Guam",
		"Australia/Hobart": "(GMT+10:00) Hobart",
		"Pacific/Port_Moresby": "(GMT+10:00) Port Moresby",
		"Australia/Sydney": "(GMT+10:00) Sydney",
		"Asia/Vladivostok": "(GMT+10:00) Vladivostok",
		"Asia/Magadan": "(GMT+11:00) Magadan",
		"Pacific/Noumea": "(GMT+11:00) New Caledonia",
		"Pacific/Guadalcanal": "(GMT+11:00) Solomon Is.",
		"Asia/Srednekolymsk": "(GMT+11:00) Srednekolymsk",
		"Pacific/Auckland": "(GMT+12:00) Wellington",
		"Pacific/Fiji": "(GMT+12:00) Fiji",
		"Asia/Kamchatka": "(GMT+12:00) Kamchatka",
		"Pacific/Majuro": "(GMT+12:00) Marshall Is.",
		"Pacific/Chatham": "(GMT+12:45) Chatham Is.",
		"Pacific/Tongatapu": "(GMT+13:00) Nuku'alofa",
		"Pacific/Apia": "(GMT+13:00) Samoa",
		"Pacific/Fakaofo": "(GMT+13:00) Tokelau Is.",
	};

  var selectOptions = Object.assign(
    {
			value: options.value,
			collection: collection,
			placeholder: options.placeholder,
			required: options.required,
			disabled: options.disabled,
    },
    options.input || {}
  )

  return f.select( name , selectOptions );

};
