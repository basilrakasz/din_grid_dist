using AssetsService as service from '../../srv/asset-structure';

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
            Target : '/@UI.LineItem'
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
    ]}
}, );
