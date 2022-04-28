/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CountriesRequestBuilder } from './CountriesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Countries" of service "AssetsService".
 */
export class Countries extends EntityV4 implements CountriesType {
  /**
   * Technical entity name for Countries.
   */
  static _entityName = 'Countries';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/service/assets/';
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
  code!: string;
  /**
   * One-to-many navigation property to the [[Countries_Texts]] entity.
   */
  texts!: Countries_Texts[];
  /**
   * One-to-one navigation property to the [[Countries_Texts]] entity.
   */
  localized?: Countries_Texts | null;

  /**
   * Returns an entity builder to construct instances of `Countries`.
   * @returns A builder that constructs instances of entity type `Countries`.
   */
  static builder(): EntityBuilderType<Countries, CountriesType> {
    return EntityV4.entityBuilder(Countries);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Countries` entity type.
   * @returns A `Countries` request builder.
   */
  static requestBuilder(): CountriesRequestBuilder {
    return new CountriesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Countries`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Countries`.
   */
  static customField(fieldName: string): CustomFieldV4<Countries> {
    return EntityV4.customFieldSelector(fieldName, Countries);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Countries_Texts, Countries_TextsType } from './Countries_Texts';

export interface CountriesType {
  name?: string | null;
  descr?: string | null;
  code: string;
  texts: Countries_TextsType[];
  localized?: Countries_TextsType | null;
}

export namespace Countries {
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<Countries> = new StringField('name', Countries, 'Edm.String');
  /**
   * Static representation of the [[descr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCR: StringField<Countries> = new StringField('descr', Countries, 'Edm.String');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<Countries> = new StringField('code', Countries, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[texts]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXTS: OneToManyLink<Countries, Countries_Texts> = new OneToManyLink('texts', Countries, Countries_Texts);
  /**
   * Static representation of the one-to-one navigation property [[localized]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALIZED: OneToOneLink<Countries, Countries_Texts> = new OneToOneLink('localized', Countries, Countries_Texts);
  /**
   * All fields of the Countries entity.
   */
  export const _allFields: Array<StringField<Countries> | OneToManyLink<Countries, Countries_Texts> | OneToOneLink<Countries, Countries_Texts>> = [
    Countries.NAME,
    Countries.DESCR,
    Countries.CODE,
    Countries.TEXTS,
    Countries.LOCALIZED
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Countries> = new AllFields('*', Countries);
  /**
   * All key fields of the Countries entity.
   */
  export const _keyFields: Array<Field<Countries>> = [Countries.CODE];
  /**
   * Mapping of all key field names to the respective static field property Countries.
   */
  export const _keys: { [keys: string]: Field<Countries> } = Countries._keyFields.reduce((acc: { [keys: string]: Field<Countries> }, field: Field<Countries>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
