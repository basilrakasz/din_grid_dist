using AssetsService as service from '../../../srv/asset-structure';

@odata.draft.enabled
annotate AssetsService.Premises with @(
    Common.SemanticObject : 'Building',
    building_ID,

    UI                    : {
        SelectionFields     : [
            description,
            ewid,
            createdAt,
            createdBy
        ],
        LineItem            : [
            {Value : ID, },
            {Value : description, },
            {Value : floor, },
            {Value : roomNumber},
            {Value : roomExtension},
            {Value : ewid},
            {Value : building_ID, },
            {Value : IsActiveEntity, },
        ],
        HeaderInfo          : {
            TypeName       : '{i18n>Premise}',
            TypeNamePlural : '{i18n>Premises}',
            Title          : {
                Value : ID,
                Label : '{i18n>Premise}',
            },
            Description    : {Value : createdAt}
        },
        Identification      : [ //Is the main field group
            {Value : createdBy, },
            {Value : createdAt, },
            {Value : ID},
        ],
        Facets              : [
            {
                $Type  : 'UI.ReferenceFacet',
                Label  : '{i18n>General}',
                Target : '@UI.FieldGroup#General'
            },
            {
                $Type  : 'UI.ReferenceFacet',
                Label  : '{i18n>Admin}',
                Target : '@UI.FieldGroup#Admin'
            },
        ],
        FieldGroup #General : {Data : [
            {Value : ID, },
            {Value : description, },
            {Value : floor, },
            {Value : roomNumber},
            {Value : roomExtension},
            {Value : ewid},
            {Value : IsActiveEntity, },
        // {Value : building_ID},
            {
                //not working due to the fact that Navigation is writing corresponding fields from this faced to filter
                //Probable workarounds: https://ui5.sap.com/#/topic/2c65f07f44094012a511d6bd83f50f2d
                // or https://ui5.sap.com/#/topic/c337d8bde8c544598969c8e4edaab262
                // or Semantic Annotation of UI/Srv ??
                //https://help.sap.com/docs/ABAP_PLATFORM_BW4HANA/468a97775123488ab3345a0c48cadd8f/307ced1bc98c4e3d93ecbe9658dc9176.html?locale=en-US
                //or se CAP_CLOUD_SAMPLES ->Fiori Bookshop
            $Type          : 'UI.DataFieldWithIntentBasedNavigation',
            Value          : building_ID,
            SemanticObject : 'Building',
            Action         : 'manage',
            Mapping : [
                // problem that fiori elements adds all fields from the premise to the target url (intent)
                // this means that the ID from premise is sent instead of the building and thus
                // navigating to the BuildingsList instead of BuildingsObjectPage
                // this workaround removes the ID from the url at first (from the premise)
                // and then adds the building_id as ID for the navigation
                // due to this workaround, it correctly navigates to the BuildingsObjectPage
                // TODO same should be done with the IsActiveEntity
                {
                    $Type : 'Common.SemanticObjectMappingType',
                    LocalProperty : 'ID',
                    SemanticObjectProperty : 'test' // removes from the URL because not known
                },
                {
                    $Type : 'Common.SemanticObjectMappingType',
                    LocalProperty : 'building_ID', // adds building_ID as ID to the intent-url
                    SemanticObjectProperty : 'ID'
                }
            ]
            },
        ]},
        FieldGroup #Admin   : {Data : [
            {Value : createdBy},
            {Value : createdAt},
            {Value : modifiedBy},
            {Value : modifiedAt}
        ]}
    },
) {
    building @(Common : {ValueList : {
        CollectionPath : 'Buildings',
        Parameters     : [
            {
                $Type             : 'Common.ValueListParameterInOut',
                LocalDataProperty : building_ID,
                ValueListProperty : 'ID'
            },
            {
                $Type             : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'street'
            },
            {
                $Type             : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'number'
            },
            {
                $Type             : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'egid'
            }
        ]
    }})
};
