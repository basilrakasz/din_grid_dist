using {ch.inpeek.din.griddist as my} from '../db/schema';

@path : 'service/assets'
service AssetsService {

    entity Buildings @(restrict : [
        {
            grant : ['READ'],
            to    : ['AssetViewer']
        },
        {
            grant : ['*'],
            to    : ['AssetManager']
        }
    ]) as projection on my.Buildings;

    annotate Buildings with @odata.draft.enabled;

    entity Premises @(restrict : [
        {
            grant : ['READ'],
            to    : ['AssetViewer']
        },
        {
            grant : ['*'],
            to    : ['AssetManager']
        }
    ]) as projection on my.Premises;

    annotate Premises with @odata.draft.enabled;

    entity Installations @(restrict : [
        {
            grant : ['READ'],
            to    : ['AssetViewer']
        },
        {
            grant : ['*'],
            to    : ['AssetManager']
        }
    ]) as projection on my.Installations;

    annotate Installations with @odata.draft.enabled;

    // TODO correct permissions, draft needed?
    entity Projects @(restrict : [
        {
            grant : ['READ'],
            to    : ['AssetViewer']
        },
        {
            grant : ['*'],
            to    : ['AssetManager']
        }
    ]) as projection on my.Projects;

    annotate Projects with @odata.draft.enabled;

    // TODO correct permissions, draft needed?
    entity Partners @(restrict : [
        {
            grant : ['READ'],
            to    : ['AssetViewer']
        },
        {
            grant : ['*'],
            to    : ['AssetManager']
        }
    ]) as projection on my.Partners;
}

@path : 'service/ia'
service IaService {

    entity IaHeads @(restrict : [
        {
            grant : ['READ'],
            to    : ['AssetViewer']
        },
        {
            grant : ['*'],
            to    : ['AssetManager']
        }
    ]) as projection on my.IaHeads

    annotate IaHeads with @odata.draft.enabled;

    entity IaDevices @(restrict : [
        {
            grant : ['READ'],
            to    : ['AssetViewer']
        },
        {
            grant : ['*'],
            to    : ['AssetManager']
        }
    ]) as projection on my.IaDevices

    annotate IaDevices with @odata.draft.enabled;

    @(readonly, requires : 'authenticated-user' )
    entity InstallationTypes as projection on my.InstallationTypes;
    
    @(readonly, requires : 'authenticated-user' )
    entity DeviceActivities as projection on my.DeviceActivities;

}

@path : 'service/global'
service GlobalService{

entity ServiceAgents as projection on my.ServiceAgents;

}