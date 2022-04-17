namespace ch.inpeek.din.griddist;

using {
    cuid,
    managed,
    temporal,
    Country,
    Language
} from '@sap/cds/common';

aspect address {
    street          : String @(title : '{i18n>Street}');
    number          : String @(title : '{i18n>HouseNumber}');
    numberExtension : String @(title : '{i18n>HouserNumberExtension}');
    postalCode      : String @(title : '{i18n>PostalCode}');
    city            : String @(title : '{i18n>City}');
    region          : String @(title : '{i18n>Region}');
    country         : Country;
}

entity Buildings : cuid, managed, address {
    description   : String @(title : '{i18n>Description}');
    egid          : String @(title : '{i18n>EGID}');

    // premises      : Association to many Premises
    //                     on premises.building = $self;
    premises : Association to many Premises on premises.building = $self;

    installations : Association to many Installations
                        on installations.building = $self;
}

entity Premises : cuid, managed {
    description       : String @(title : '{i18n>Description}');
    floor             : String @(title : '{i18n>Floor}');
    roomNumber        : String @(title : '{i18n>RoomNumber}');
    roomExtension     : String @(title : '{i18n>RoomNumberExtension}');
    locationExtension : String @(title : '{i18n>LocationExtension}');
    ewid              : String @(title : '{i18n>EWID}');
    building          : Association to Buildings@(title : '{i18n>Building}');

    installations     : Association to many Installations
                            on installations.premise = $self;
}

entity Installations : cuid, managed, temporal {
    type        : String @(title : '{i18n>InstallationType}');
    description : String @(title : '{i18n>description}');
    division    : String @(title : '{i18n>Divison}');
    building    : Association to Buildings;
    premise     : Association to Premises;
}
