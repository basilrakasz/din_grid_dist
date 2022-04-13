namespace ch.inpeek.din.griddist;

using {
    cuid,
    managed,
    temporal,
    Country,
    Language
} from '@sap/cds/common';

aspect address {
    street          : String;
    number          : String;
    numberExtension : String;
    postalCode      : String;
    city            : String;
    region          : String;
    country         : Country;
}

entity Buildings : cuid, managed, address {
    description   : String;
    egid          : String;

    premises      : Association to many Premises
                        on premises.building = $self;
    installations : Association to many Installations
                        on installations.building = $self;
}

entity Premises : cuid, managed {
    description       : String;
    floor             : String;
    room              : String;
    roomExtension     : String;
    locationExtension : String;
    ewid              : String;
    building          : Association to Buildings;

    installations     : Association to many Installations
                            on installations.premise = $self;
}

entity Installations : cuid, managed, temporal {
    type        : String;
    description : String;
    division    : String;
    building    : Association to Buildings;
    premise     : Association to Premises;
}
