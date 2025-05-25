export enum AppetiteLevel {
  High = 'HIGH',
  Medium = 'MEDIUM',
  Low = 'LOW',
}

export enum AccountStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending',
}

export enum Winnability {
  VeryStrong = 'Very Strong',
  Strong = 'Strong',
  Moderate = 'Moderate',
  Weak = 'Weak',
}

export interface Account {
  accountName: string;
  type: string;
  line: string;
  broker: string;
  renewalDate: string;
  premium: string;
  ratedPremium: string;
  lossRatio: string;
  appetite: AppetiteLevel | string;
  status: AccountStatus | string;
  triage: number;
  winnability: Winnability | string;
}
