using AssetsService as service from '../../../srv/asset-structure';

@data.draft.enabled
annotate AssetsService.Projects with @(UI : {
    SelectionFields  : [
        name ,
        description
    ],
    LineItem  : [
         {Value : ID, },
         {Value : name, },
        {Value : description, },
    ],
    HeaderInfo          : {
        TypeName       : '{i18n>Project}',
        TypeNamePlural : '{i18n>Projects}',
        Title          : {
            Value : ID,
            Label : '{i18n>Project}',
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
        {Value : name},
        {Value : description},
    ]},
    FieldGroup #Admin   : {Data : [
        {Value : createdBy},
        {Value : createdAt},
        {Value : modifiedBy},
        {Value : modifiedAt}
    ]}
},) ;
