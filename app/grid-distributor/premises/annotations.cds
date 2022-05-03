using AssetsService as service from '../../../srv/asset-structure';

@odata.draft.enabled
annotate AssetsService.Premises with @(
    Common.SemanticObject : 'Building',
    building.ID,
    
    UI : {
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
            Action         : 'manage'
        },
    ]},
    FieldGroup #Admin   : {Data : [
        {Value : createdBy},
        {Value : createdAt},
        {Value : modifiedBy},
        {Value : modifiedAt}
    ]}
}, );
