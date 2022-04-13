using {ch.inpeek.din.griddist as my} from '../db/schema';

@path : 'service/assets'
service AssetsService {

    entity Buildings as projection on my.Buildings;
        annotate Buildings with @odata.draft.enabled;

    entity Premises as projection on my.Premises;
        annotate Premises with @odata.draft.enabled;

    entity Installations as projection on my.Installations;
        annotate Installations with @odata.draft.enabled;

}
