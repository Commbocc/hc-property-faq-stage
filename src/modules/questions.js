export const questions = {
	state: {
		index: [
			{
				value: 'hauler',
				text: 'What are my trash pickup days?',
				// endpoint: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/SW_HAULER_DATA2/MapServer/1',
				// attr_field: 'FOLIO',
				within: false
			},
			{
				value: 'wind-debris',
				text: 'Am I in the 140 MPH wind borne debris area?',
				endpoint: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/infoLayers/MapServer/1',
				attr_field: 'OBJECTID',
				within: true
			},
			{
				value: 'evacuation',
				text: 'What is my evacuation zone?',
				endpoint: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Heat/Evaczones/MapServer/0',
				// attr_field: 'OBJECTID',
				within: true
			},
			{
				value: 'flood-zone',
				text: 'What is my flood zone?',
				endpoint: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/DSD_Viewer_Services/DSD_Viewer_Nature/MapServer/0',
				// attr_field: 'OBJECTID',
				within: true
			},
			{
				value: 'commissioner',
				text: 'Who is my commissioner?',
				endpoint: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/FMEO/CommissionDist/MapServer/0',
				attr_field: 'NAME',
				within: true
			}
		]
	}
}
