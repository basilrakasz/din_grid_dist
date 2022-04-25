using from '../premises/annotations';
using AssetsService as service from '../../../../srv/asset-structure';

@odata.draft.enabled
annotate AssetsService.Buildings with @(UI : {
    SelectionFields     : [
        street,
        postalCode,
        createdAt,
        createdBy
    ],
    LineItem            : [
        {Value : ID, },
        {Value : description, },
        {Value : street, },
        {Value : description},
        {Value : egid},
        {Value : number},
        {Value : numberExtension},
        {Value : street},
        {Value : postalCode},
        {Value : city},
        {Value : region},
        {Value : country.descr},
    ],
    HeaderInfo          : {
        TypeName       : '{i18n>Building}',
        TypeNamePlural : '{i18n>Buildings}',
        Title          : {
            Value : ID,
            Label : '{i18n>Building}',
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
            Label  : '{i18n>Premises}',
            Target : 'premises/@UI.LineItem',
        },
        {
            $Type  : 'UI.ReferenceFacet',
            Label  : '{i18n>Admin}',
            Target : '@UI.FieldGroup#Admin'
        },
    ],
    FieldGroup #General : {Data : [
        {Value : description},
        {Value : egid},
        {Value : number},
        {Value : numberExtension},
        {Value : street},
        {Value : postalCode},
        {Value : city},
        {Value : region},
        {Value : country_code},
    ]},
    FieldGroup #Admin   : {Data : [
        {Value : createdBy},
        {Value : createdAt},
        {Value : modifiedBy},
        {Value : modifiedAt}
    ]}
}, );

@odata.draft.enabled
annotate AssetsService.Premises with @(UI : {
    SelectionFields : [
        description,
        ewid,
        createdAt,
        createdBy
    ],
    LineItem        : [
        {
            $Type          : 'UI.DataFieldWithIntentBasedNavigation',
            Value          : ID,
            SemanticObject : 'Premise',
            Action         : 'manage'
        },
        {Value : description, },
        {Value : floor, },
        {Value : roomNumber},
        {Value : roomExtension},
        {Value : ewid},
        {Value : building_ID, },
        {Value : IsActiveEntity, },
    ],
    HeaderInfo      : {
        TypeName       : '{i18n>Premise}',
        TypeNamePlural : '{i18n>Premises}',
        Title          : {
            Value : ID,
            Label : '{i18n>Premise}',
        },
        Description    : {Value : createdAt}
    },
    Identification  : [ //Is the main field group
        {Value : createdBy, },
        {Value : createdAt, },
        {Value : ID},
    ],
}, );
