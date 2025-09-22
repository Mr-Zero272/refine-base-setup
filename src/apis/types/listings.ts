import { BaseModel } from "./base";

export enum ListingStatus {
  Active = "active",
  Rejected = "rejected",
  Expired = "expired",
  UnderReview = "under_review",
  Payed = "payed",
  Draft = "draft",
}

export interface Listing extends BaseModel {
  title: string;
  slug: string;
  description: string;
  type: string;
  price: number;
  area: number;
  status: ListingStatus;
  verified: boolean;
  address: string;
  images: string[];
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  publish_on: string;
  is_favorite?: boolean;
  html_content?: string;
  category: string;
  total_views: number;
  expire_on: string;
  is_published?: boolean;
}
