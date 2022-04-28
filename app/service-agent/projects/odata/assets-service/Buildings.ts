/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BuildingsRequestBuilder } from './BuildingsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Buildings" of service "AssetsService".
 */
export class Buildings extends EntityV4 implements BuildingsType {
  /**
   * Technical entity name for Buildings.
   */
  static _entityName = 'Buildings';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/service/assets/';
  /**
   * Id.
   */
  id!: string;
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
  isActiveEntity!: boolean;
  /**
   * Has Active Entity.
   */
  hasActiveEntity!: boolean;
  /**
   * Has Draft Entity.
   */
  hasDraftEntity!: boolean;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country?: Countries | null;
  /**
   * One-to-many navigation property to the [[Premises]] entity.
   */
  premises!: Premises[];
  /**
   * One-to-many navigation property to the [[Installations]] entity.
   */
  installations!: Installations[];
  /**
   * One-to-one navigation property to the [[Buildings]] entity.
   */
  siblingEntity?: Buildings | null;

  /**
   * Returns an entity builder to construct instances of `Buildings`.
   * @returns A builder that constructs instances of entity type `Buildings`.
   */
  static builder(): EntityBuilderType<Buildings, BuildingsType> {
    return EntityV4.entityBuilder(Buildings);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Buildings` entity type.
   * @returns A `Buildings` request builder.
   */
  static requestBuilder(): BuildingsRequestBuilder {
    return new BuildingsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Buildings`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Buildings`.
   */
  static customField(fieldName: string): CustomFieldV4<Buildings> {
    return EntityV4.customFieldSelector(fieldName, Buildings);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace Buildings {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<Buildings> = new StringField('ID', Buildings, 'Edm.Guid');
  /**
   * Static representation of the [[createdAt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_AT: DateField<Buildings> = new DateField('createdAt', Buildings, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<Buildings> = new StringField('createdBy', Buildings, 'Edm.String');
  /**
   * Static representation of the [[modifiedAt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODIFIED_AT: DateField<Buildings> = new DateField('modifiedAt', Buildings, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[modifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODIFIED_BY: StringField<Buildings> = new StringField('modifiedBy', Buildings, 'Edm.String');
  /**
   * Static representation of the [[street]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET: StringField<Buildings> = new StringField('street', Buildings, 'Edm.String');
  /**
   * Static representation of the [[number]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER: StringField<Buildings> = new StringField('number', Buildings, 'Edm.String');
  /**
   * Static representation of the [[numberExtension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_EXTENSION: StringField<Buildings> = new StringField('numberExtension', Buildings, 'Edm.String');
  /**
   * Static representation of the [[postalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTAL_CODE: StringField<Buildings> = new StringField('postalCode', Buildings, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<Buildings> = new StringField('city', Buildings, 'Edm.String');
  /**
   * Static representation of the [[region]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REGION: StringField<Buildings> = new StringField('region', Buildings, 'Edm.String');
  /**
   * Static representation of the [[countryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_CODE: StringField<Buildings> = new StringField('country_code', Buildings, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Buildings> = new StringField('description', Buildings, 'Edm.String');
  /**
   * Static representation of the [[egid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EGID: StringField<Buildings> = new StringField('egid', Buildings, 'Edm.String');
  /**
   * Static representation of the [[isActiveEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ACTIVE_ENTITY: BooleanField<Buildings> = new BooleanField('IsActiveEntity', Buildings, 'Edm.Boolean');
  /**
   * Static representation of the [[hasActiveEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_ACTIVE_ENTITY: BooleanField<Buildings> = new BooleanField('HasActiveEntity', Buildings, 'Edm.Boolean');
  /**
   * Static representation of the [[hasDraftEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_DRAFT_ENTITY: BooleanField<Buildings> = new BooleanField('HasDraftEntity', Buildings, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<Buildings, Countries> = new OneToOneLink('country', Buildings, Countries);
  /**
   * Static representation of the one-to-many navigation property [[premises]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREMISES: OneToManyLink<Buildings, Premises> = new OneToManyLink('premises', Buildings, Premises);
  /**
   * Static representation of the one-to-many navigation property [[installations]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTALLATIONS: OneToManyLink<Buildings, Installations> = new OneToManyLink('installations', Buildings, Installations);
  /**
   * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIBLING_ENTITY: OneToOneLink<Buildings, Buildings> = new OneToOneLink('SiblingEntity', Buildings, Buildings);
  /**
   * All fields of the Buildings entity.
   */
  export const _allFields: Array<StringField<Buildings> | DateField<Buildings> | BooleanField<Buildings> | OneToOneLink<Buildings, Countries> | OneToManyLink<Buildings, Premises> | OneToManyLink<Buildings, Installations> | OneToOneLink<Buildings, Buildings>> = [
    Buildings.ID,
    Buildings.CREATED_AT,
    Buildings.CREATED_BY,
    Buildings.MODIFIED_AT,
    Buildings.MODIFIED_BY,
    Buildings.STREET,
    Buildings.NUMBER,
    Buildings.NUMBER_EXTENSION,
    Buildings.POSTAL_CODE,
    Buildings.CITY,
    Buildings.REGION,
    Buildings.COUNTRY_CODE,
    Buildings.DESCRIPTION,
    Buildings.EGID,
    Buildings.IS_ACTIVE_ENTITY,
    Buildings.HAS_ACTIVE_ENTITY,
    Buildings.HAS_DRAFT_ENTITY,
    Buildings.COUNTRY,
    Buildings.PREMISES,
    Buildings.INSTALLATIONS,
    Buildings.SIBLING_ENTITY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Buildings> = new AllFields('*', Buildings);
  /**
   * All key fields of the Buildings entity.
   */
  export const _keyFields: Array<Field<Buildings>> = [Buildings.ID, Buildings.IS_ACTIVE_ENTITY];
  /**
   * Mapping of all key field names to the respective static field property Buildings.
   */
  export const _keys: { [keys: string]: Field<Buildings> } = Buildings._keyFields.reduce((acc: { [keys: string]: Field<Buildings> }, field: Field<Buildings>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
