import { CountriesRequestBuilder } from './CountriesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Countries" of service "AssetsService".
 */
export declare class Countries extends EntityV4 implements CountriesType {
    /**
     * Technical entity name for Countries.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Name.
     * Maximum length: 255.
     * @nullable
     */
    name?: string;
    /**
     * Descr.
     * Maximum length: 1000.
     * @nullable
     */
    descr?: string;
    /**
     * Code.
     * Maximum length: 3.
     */
    code: string;
    /**
     * One-to-many navigation property to the [[Countries_Texts]] entity.
     */
    texts: Countries_Texts[];
    /**
     * One-to-one navigation property to the [[Countries_Texts]] entity.
     */
    localized?: Countries_Texts | null;
    /**
     * Returns an entity builder to construct instances of `Countries`.
     * @returns A builder that constructs instances of entity type `Countries`.
     */
    static builder(): EntityBuilderType<Countries, CountriesType>;
    /**
     * Returns a request builder to construct requests for operations on the `Countries` entity type.
     * @returns A `Countries` request builder.
     */
    static requestBuilder(): CountriesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Countries`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Countries`.
     */
    static customField(fieldName: string): CustomFieldV4<Countries>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Countries_Texts, Countries_TextsType } from './Countries_Texts';
export interface CountriesType {
    name?: string | null;
    descr?: string | null;
    code: string;
    texts: Countries_TextsType[];
    localized?: Countries_TextsType | null;
}
export declare namespace Countries {
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<Countries>;
    /**
     * Static representation of the [[descr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCR: StringField<Countries>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<Countries>;
    /**
     * Static representation of the one-to-many navigation property [[texts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEXTS: OneToManyLink<Countries, Countries_Texts>;
    /**
     * Static representation of the one-to-one navigation property [[localized]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALIZED: OneToOneLink<Countries, Countries_Texts>;
    /**
     * All fields of the Countries entity.
     */
    const _allFields: Array<StringField<Countries> | OneToManyLink<Countries, Countries_Texts> | OneToOneLink<Countries, Countries_Texts>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Countries>;
    /**
     * All key fields of the Countries entity.
     */
    const _keyFields: Array<Field<Countries>>;
    /**
     * Mapping of all key field names to the respective static field property Countries.
     */
    const _keys: {
        [keys: string]: Field<Countries>;
    };
}
//# sourceMappingURL=Countries.d.ts.map