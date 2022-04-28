import { BuildingsRequestBuilder } from './BuildingsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Buildings" of service "AssetsService".
 */
export declare class Buildings extends EntityV4 implements BuildingsType {
    /**
     * Technical entity name for Buildings.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Id.
     */
    id: string;
    /**
     * Created At.
     * @nullable
     */
    createdAt?: Moment;
    /**
     * Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Modified At.
     * @nullable
     */
    modifiedAt?: Moment;
    /**
     * Modified By.
     * Maximum length: 255.
     * @nullable
     */
    modifiedBy?: string;
    /**
     * Street.
     * @nullable
     */
    street?: string;
    /**
     * Number.
     * @nullable
     */
    number?: string;
    /**
     * Number Extension.
     * @nullable
     */
    numberExtension?: string;
    /**
     * Postal Code.
     * @nullable
     */
    postalCode?: string;
    /**
     * City.
     * @nullable
     */
    city?: string;
    /**
     * Region.
     * @nullable
     */
    region?: string;
    /**
     * Country Code.
     * Maximum length: 3.
     * @nullable
     */
    countryCode?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Egid.
     * @nullable
     */
    egid?: string;
    /**
     * Is Active Entity.
     */
    isActiveEntity: boolean;
    /**
     * Has Active Entity.
     */
    hasActiveEntity: boolean;
    /**
     * Has Draft Entity.
     */
    hasDraftEntity: boolean;
    /**
     * One-to-one navigation property to the [[Countries]] entity.
     */
    country?: Countries | null;
    /**
     * One-to-many navigation property to the [[Premises]] entity.
     */
    premises: Premises[];
    /**
     * One-to-many navigation property to the [[Installations]] entity.
     */
    installations: Installations[];
    /**
     * One-to-one navigation property to the [[Buildings]] entity.
     */
    siblingEntity?: Buildings | null;
    /**
     * Returns an entity builder to construct instances of `Buildings`.
     * @returns A builder that constructs instances of entity type `Buildings`.
     */
    static builder(): EntityBuilderType<Buildings, BuildingsType>;
    /**
     * Returns a request builder to construct requests for operations on the `Buildings` entity type.
     * @returns A `Buildings` request builder.
     */
    static requestBuilder(): BuildingsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Buildings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Buildings`.
     */
    static customField(fieldName: string): CustomFieldV4<Buildings>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Countries, CountriesType } from './Countries';
import { Premises, PremisesType } from './Premises';
import { Installations, InstallationsType } from './Installations';
export interface BuildingsType {
    id: string;
    createdAt?: Moment | null;
    createdBy?: string | null;
    modifiedAt?: Moment | null;
    modifiedBy?: string | null;
    street?: string | null;
    number?: string | null;
    numberExtension?: string | null;
    postalCode?: string | null;
    city?: string | null;
    region?: string | null;
    countryCode?: string | null;
    description?: string | null;
    egid?: string | null;
    isActiveEntity: boolean;
    hasActiveEntity: boolean;
    hasDraftEntity: boolean;
    country?: CountriesType | null;
    premises: PremisesType[];
    installations: InstallationsType[];
    siblingEntity?: BuildingsType | null;
}
export declare namespace Buildings {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<Buildings>;
    /**
     * Static representation of the [[createdAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_AT: DateField<Buildings>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<Buildings>;
    /**
     * Static representation of the [[modifiedAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODIFIED_AT: DateField<Buildings>;
    /**
     * Static representation of the [[modifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODIFIED_BY: StringField<Buildings>;
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET: StringField<Buildings>;
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER: StringField<Buildings>;
    /**
     * Static representation of the [[numberExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_EXTENSION: StringField<Buildings>;
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTAL_CODE: StringField<Buildings>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<Buildings>;
    /**
     * Static representation of the [[region]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REGION: StringField<Buildings>;
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_CODE: StringField<Buildings>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Buildings>;
    /**
     * Static representation of the [[egid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EGID: StringField<Buildings>;
    /**
     * Static representation of the [[isActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ACTIVE_ENTITY: BooleanField<Buildings>;
    /**
     * Static representation of the [[hasActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_ACTIVE_ENTITY: BooleanField<Buildings>;
    /**
     * Static representation of the [[hasDraftEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_DRAFT_ENTITY: BooleanField<Buildings>;
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: OneToOneLink<Buildings, Countries>;
    /**
     * Static representation of the one-to-many navigation property [[premises]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREMISES: OneToManyLink<Buildings, Premises>;
    /**
     * Static representation of the one-to-many navigation property [[installations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTALLATIONS: OneToManyLink<Buildings, Installations>;
    /**
     * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIBLING_ENTITY: OneToOneLink<Buildings, Buildings>;
    /**
     * All fields of the Buildings entity.
     */
    const _allFields: Array<StringField<Buildings> | DateField<Buildings> | BooleanField<Buildings> | OneToOneLink<Buildings, Countries> | OneToManyLink<Buildings, Premises> | OneToManyLink<Buildings, Installations> | OneToOneLink<Buildings, Buildings>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Buildings>;
    /**
     * All key fields of the Buildings entity.
     */
    const _keyFields: Array<Field<Buildings>>;
    /**
     * Mapping of all key field names to the respective static field property Buildings.
     */
    const _keys: {
        [keys: string]: Field<Buildings>;
    };
}
//# sourceMappingURL=Buildings.d.ts.map