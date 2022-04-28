import { InstallationsRequestBuilder } from './InstallationsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Installations" of service "AssetsService".
 */
export declare class Installations extends EntityV4 implements InstallationsType {
    /**
     * Technical entity name for Installations.
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
     * Valid From.
     * @nullable
     */
    validFrom?: Moment;
    /**
     * Valid To.
     * @nullable
     */
    validTo?: Moment;
    /**
     * Type.
     * @nullable
     */
    type?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Division.
     * @nullable
     */
    division?: string;
    /**
     * Building Id.
     * @nullable
     */
    buildingId?: string;
    /**
     * Premise Id.
     * @nullable
     */
    premiseId?: string;
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
     * One-to-one navigation property to the [[Buildings]] entity.
     */
    building?: Buildings | null;
    /**
     * One-to-one navigation property to the [[Premises]] entity.
     */
    premise?: Premises | null;
    /**
     * One-to-one navigation property to the [[Installations]] entity.
     */
    siblingEntity?: Installations | null;
    /**
     * Returns an entity builder to construct instances of `Installations`.
     * @returns A builder that constructs instances of entity type `Installations`.
     */
    static builder(): EntityBuilderType<Installations, InstallationsType>;
    /**
     * Returns a request builder to construct requests for operations on the `Installations` entity type.
     * @returns A `Installations` request builder.
     */
    static requestBuilder(): InstallationsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Installations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Installations`.
     */
    static customField(fieldName: string): CustomFieldV4<Installations>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Buildings, BuildingsType } from './Buildings';
import { Premises, PremisesType } from './Premises';
export interface InstallationsType {
    id: string;
    createdAt?: Moment | null;
    createdBy?: string | null;
    modifiedAt?: Moment | null;
    modifiedBy?: string | null;
    validFrom?: Moment | null;
    validTo?: Moment | null;
    type?: string | null;
    description?: string | null;
    division?: string | null;
    buildingId?: string | null;
    premiseId?: string | null;
    isActiveEntity: boolean;
    hasActiveEntity: boolean;
    hasDraftEntity: boolean;
    building?: BuildingsType | null;
    premise?: PremisesType | null;
    siblingEntity?: InstallationsType | null;
}
export declare namespace Installations {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<Installations>;
    /**
     * Static representation of the [[createdAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_AT: DateField<Installations>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<Installations>;
    /**
     * Static representation of the [[modifiedAt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODIFIED_AT: DateField<Installations>;
    /**
     * Static representation of the [[modifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODIFIED_BY: StringField<Installations>;
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_FROM: DateField<Installations>;
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALID_TO: DateField<Installations>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<Installations>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Installations>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: StringField<Installations>;
    /**
     * Static representation of the [[buildingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUILDING_ID: StringField<Installations>;
    /**
     * Static representation of the [[premiseId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREMISE_ID: StringField<Installations>;
    /**
     * Static representation of the [[isActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_ACTIVE_ENTITY: BooleanField<Installations>;
    /**
     * Static representation of the [[hasActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_ACTIVE_ENTITY: BooleanField<Installations>;
    /**
     * Static representation of the [[hasDraftEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_DRAFT_ENTITY: BooleanField<Installations>;
    /**
     * Static representation of the one-to-one navigation property [[building]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUILDING: OneToOneLink<Installations, Buildings>;
    /**
     * Static representation of the one-to-one navigation property [[premise]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREMISE: OneToOneLink<Installations, Premises>;
    /**
     * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIBLING_ENTITY: OneToOneLink<Installations, Installations>;
    /**
     * All fields of the Installations entity.
     */
    const _allFields: Array<StringField<Installations> | DateField<Installations> | BooleanField<Installations> | OneToOneLink<Installations, Buildings> | OneToOneLink<Installations, Premises> | OneToOneLink<Installations, Installations>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Installations>;
    /**
     * All key fields of the Installations entity.
     */
    const _keyFields: Array<Field<Installations>>;
    /**
     * Mapping of all key field names to the respective static field property Installations.
     */
    const _keys: {
        [keys: string]: Field<Installations>;
    };
}
//# sourceMappingURL=Installations.d.ts.map