import { CardTypesEnum } from './enums.utils';

type CardDetail = {
  type: CardTypesEnum;
  cardNumber: number;
  cardHolderName: string;
  cvv: number;
  expireDate: Date;
  valid: boolean;
};
export type { CardDetail };
