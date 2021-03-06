namespace ch.inpeek.din.griddist;

using {
    cuid,
    managed,
    temporal,
    Country,
    Language,
    sap.common.CodeList
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
    premises      : Association to many Premises
                        on premises.building = $self;
    installations : Association to many Installations
                        on installations.building = $self;
    projects      : Association to many Buildings2Projects
                        on projects.building = $self;

    Partners      : Composition of many {
                        key partner : Association to Partners;
                            role    : String;
                    }
}

entity Premises : cuid, managed {
    description       : String                   @(title : '{i18n>Description}');
    floor             : String                   @(title : '{i18n>Floor}');
    roomNumber        : String                   @(title : '{i18n>RoomNumber}');
    roomExtension     : String                   @(title : '{i18n>RoomNumberExtension}');
    locationExtension : String                   @(title : '{i18n>LocationExtension}');
    ewid              : String                   @(title : '{i18n>EWID}');
    building          : Association to Buildings @(title : '{i18n>Building}');
    installations     : Association to many Installations
                            on installations.premise = $self;
}

entity Installations : cuid, managed, temporal {
    type        : String @(title : '{i18n>InstallationType}');
    description : String @(title : '{i18n>Description}');
    division    : String @(title : '{i18n>Divison}');
    building    : Association to Buildings;
    premise     : Association to Premises;
}

entity Partners : cuid, managed, address {
    firstName  : String;
    middleName : String;
    lastName   : String;
    language   : Language;
    company    : String;
    email      : String;
    phone      : String;
    birthday   : Date;
}

entity Projects : cuid, managed {
    name        : String @(title : '{i18n>Name}');
    description : String @(title : '{i18n>Description}');
    Partners    : Composition of many {
                      key partner : Association to Partners;
                          role    : String;
                  }
    buildings   : Association to many Buildings2Projects
                      on buildings.project = $self;

    IaHeads     : Association to many IaHeads
                      on IaHeads.project = $self;
/*    events        : Association to many Events
                        on events.project = $self;
    notifications : Association to many Notifications
                        on notifications.project = $self;*/
}

entity Buildings2Projects {
    key building : Association to Buildings;
    key project  : Association to Projects;
}

entity IaHeads : cuid, managed {
    installationDesc : String    @(title : '{i18n>InstallationDescription}');
    DesicionDesc     : String    @(title : '{i18n>DesicionDesc}');
    DecisionDate     : Timestamp @(title : '{i18n>DesicionDate}');
    project          : Association to Projects;
    building         : Association to Buildings;
    installationType : Association to InstallationTypes;
    Partners         : Composition of many {
                           key partner : Association to Partners;
                               role    : String;
                       }
    IaDevices        : Composition of many IaDevices on IaDevices.parent = $self;
}

entity IaDevices : cuid, managed {
    parent         : Association to IaHeads;
    customer       : Association to Partners;
    premise        : Association to Premises;
    deviceNumber   : String @(title : '{i18n>DeviceNumber}');
    DeviceActivity : Association to DeviceActivities;
    Partners       : Composition of many {
                         key partner : Association to Partners;
                             role    : String;
                     }
}

entity InstallationTypes : CodeList {
    key code : String(3) @(title : '{i18n>InstallationType}');
}

entity DeviceActivities : CodeList {
    key code : String(3) @(title : '{i18n>DeviceActivity}');
}

@cds.persistence.exists
entity ServiceAgents : cuid, managed {
    Name     : String @(title : '{i18n>ServiceAgentName}');
    IASGroup : String;
}
