using AssetsService as service from '../../srv/asset-structure';

@odata.draft.enabled
annotate AssetsService.Premises with @(UI : {
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
    Facets              : [{
        $Type  : 'UI.ReferenceFacet',
        Label  : '{i18n>General}',
        Target : '@UI.FieldGroup#General'
    }, ],
    FieldGroup #General : {Data : [
        {Value : ID, },
        {Value : description, },
        {Value : floor, },
        {Value : roomNumber},
        {Value : roomExtension},
        {Value : ewid},
        {
            $Type          : 'UI.DataFieldWithIntentBasedNavigation',
            Value          : building_ID,
            SemanticObject : 'Building',
            Action         : 'manage'
        },
    ]}
}, );
