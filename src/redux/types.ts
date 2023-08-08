export interface Category {
  id: any;
  name: string;
  fields: Field[];
}

export type FieldType = {
  type: String | Number | Date | boolean;
};

export interface Field {
  name: string;
  type: FieldType;
}
