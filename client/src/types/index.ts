export interface Survey {
  _id: string;
  dateSent: string;
  title: string;
  subject: string;
  body: string;
  recipients: string;
  yes: number;
  no: number;
}
