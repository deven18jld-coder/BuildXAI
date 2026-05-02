export type InquiryItem = {
  id?: string;
  name: string;
  phone: string;
  email?: string | null;
  service_type: string;
  message: string;
  created_at?: string;
};

export type InquiryFormData = {
  name: string;
  phone: string;
  email: string;
  service_type: string;
  message: string;
  bot_field?: string;
};
