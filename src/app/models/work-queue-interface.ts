export enum WorkType {
  UnderwriterReferral = 'Underwriter Referral',
  LossControlRequest = 'Loss Control Request',
  Email = 'Email',
}

export enum WorkStatus {
  New = 'New',
  PendingReview = 'Pending Review',
  Completed = 'Completed',
}

export interface WorkQueueItem {
  originator: string;
  client: string;
  line: string;
  type: WorkType;
  status: WorkStatus;
  created: string;
  assignedToMe: boolean;
  referral: boolean;
  panding: boolean;
}
