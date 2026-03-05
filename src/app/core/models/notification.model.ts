export interface Notification {
  id: number;
  message: string;
  role: string;
  isRead: boolean;
  createdAt: Date;
}