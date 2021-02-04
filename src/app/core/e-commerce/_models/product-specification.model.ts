import { BaseModel } from '../../_base/crud';

export class ProductSpecificationModel  extends BaseModel {
  id: number | undefined;
  carId!: number;
  specId: number | undefined;
  value!: string;

  // Refs
  // tslint:disable-next-line
  _carName!: string;
  // tslint:disable-next-line
  _specificationName!: string;

  clear(carId: number) {
    this.id = undefined;
    this.carId = carId;
    this._specificationName = '';
    this.value = '';
    this.specId = undefined;
  }
}
