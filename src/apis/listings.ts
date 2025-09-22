import { BaseKey } from "@refinedev/core";
import { ApiClient } from "./client";

export interface ListingReviewInput {
  approved: boolean;
  reason?: string;
}

export class ListingsClient extends ApiClient {
  constructor() {
    super("listings");
  }

  reviewListing(id: BaseKey, input: ListingReviewInput) {
    return this.client.post(`/review/${id}`, input);
  }
}
