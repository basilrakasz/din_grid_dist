using {AssetsService} from '../srv/asset-structure';

/* @odata.draft.enabled

annotate AssetsService.Buildings with @(UI : {
    SelectionFields : [
        createdAt,
        createdBy
    ],
    LineItem        : [
        {
            Value : ID,
            Label : 'BuildingId'
        },
        {
            Value : description,
            Label : 'Description'
        },
        {
            Value : street,
            Label : 'Street'
        }
    ],
    HeaderInfo      : {
        TypeName       : 'Building',
        TypeNamePlural : 'Buildings',
        Title          : {
            Label : 'BuildingId',
            Value : ID
        },
        Description    : {Value : createdBy}
    },
    Identification  : [ //Is the main field group
        {
            Value : createdBy,
            Label : 'Creator'
        },
        {
            Value : createdAt,
            Label : 'Date'
        },
        {Value : ID},
    ],
}, );
 */