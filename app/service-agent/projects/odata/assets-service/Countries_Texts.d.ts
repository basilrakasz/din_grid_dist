import { Countries_TextsRequestBuilder } from './Countries_TextsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Countries_texts" of service "AssetsService".
 */
export declare class Countries_Texts extends EntityV4 implements Countries_TextsType {
    /**
     * Technical entity name for Countries_Texts.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Locale.
     * Maximum length: 14.
     */
    locale: string;
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
     * Returns an entity builder to construct instances of `Countries_Texts`.
     * @returns A builder that constructs instances of entity type `Countries_Texts`.
     */
    static builder(): EntityBuilderType<Countries_Texts, Countries_TextsType>;
    /**
     * Returns a request builder to construct requests for operations on the `Countries_Texts` entity type.
     * @returns A `Countries_Texts` request builder.
     */
    static requestBuilder(): Countries_TextsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Countries_Texts`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Countries_Texts`.
     */
    static customField(fieldName: string): CustomFieldV4<Countries_Texts>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Countries_TextsType {
    locale: string;
    name?: string | null;
    descr?: string | null;
    code: string;
}
export declare namespace Countries_Texts {
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: StringField<Countries_Texts>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<Countries_Texts>;
    /**
     * Static representation of the [[descr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCR: StringField<Countries_Texts>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<Countries_Texts>;
    /**
     * All fields of the Countries_Texts entity.
     */
    const _allFields: Array<StringField<Countries_Texts>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Countries_Texts>;
    /**
     * All key fields of the Countries_Texts entity.
     */
    const _keyFields: Array<Field<Countries_Texts>>;
    /**
     * Mapping of all key field names to the respective static field property Countries_Texts.
     */
    const _keys: {
        [keys: string]: Field<Countries_Texts>;
    };
}
//# sourceMappingURL=Countries_Texts.d.ts.map