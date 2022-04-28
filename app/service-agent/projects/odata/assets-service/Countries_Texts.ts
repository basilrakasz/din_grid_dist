/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Countries_TextsRequestBuilder } from './Countries_TextsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Countries_texts" of service "AssetsService".
 */
export class Countries_Texts extends EntityV4 implements Countries_TextsType {
  /**
   * Technical entity name for Countries_Texts.
   */
  static _entityName = 'Countries_texts';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/service/assets/';
  /**
   * Locale.
   * Maximum length: 14.
   */
  locale!: string;
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
   * Returns an entity builder to construct instances of `Countries_Texts`.
   * @returns A builder that constructs instances of entity type `Countries_Texts`.
   */
  static builder(): EntityBuilderType<Countries_Texts, Countries_TextsType> {
    return EntityV4.entityBuilder(Countries_Texts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Countries_Texts` entity type.
   * @returns A `Countries_Texts` request builder.
   */
  static requestBuilder(): Countries_TextsRequestBuilder {
    return new Countries_TextsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Countries_Texts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Countries_Texts`.
   */
  static customField(fieldName: string): CustomFieldV4<Countries_Texts> {
    return EntityV4.customFieldSelector(fieldName, Countries_Texts);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Countries_TextsType {
  locale: string;
  name?: string | null;
  descr?: string | null;
  code: string;
}

export namespace Countries_Texts {
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: StringField<Countries_Texts> = new StringField('locale', Countries_Texts, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<Countries_Texts> = new StringField('name', Countries_Texts, 'Edm.String');
  /**
   * Static representation of the [[descr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCR: StringField<Countries_Texts> = new StringField('descr', Countries_Texts, 'Edm.String');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<Countries_Texts> = new StringField('code', Countries_Texts, 'Edm.String');
  /**
   * All fields of the Countries_Texts entity.
   */
  export const _allFields: Array<StringField<Countries_Texts>> = [
    Countries_Texts.LOCALE,
    Countries_Texts.NAME,
    Countries_Texts.DESCR,
    Countries_Texts.CODE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Countries_Texts> = new AllFields('*', Countries_Texts);
  /**
   * All key fields of the Countries_Texts entity.
   */
  export const _keyFields: Array<Field<Countries_Texts>> = [Countries_Texts.LOCALE, Countries_Texts.CODE];
  /**
   * Mapping of all key field names to the respective static field property Countries_Texts.
   */
  export const _keys: { [keys: string]: Field<Countries_Texts> } = Countries_Texts._keyFields.reduce((acc: { [keys: string]: Field<Countries_Texts> }, field: Field<Countries_Texts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
