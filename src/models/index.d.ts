import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RentalCarMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class RentalCar {
  readonly id: string;
  readonly name: string;
  readonly price?: number | null;
  readonly description?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<RentalCar, RentalCarMetaData>);
  static copyOf(source: RentalCar, mutator: (draft: MutableModel<RentalCar, RentalCarMetaData>) => MutableModel<RentalCar, RentalCarMetaData> | void): RentalCar;
}