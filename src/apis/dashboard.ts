import dayjs from "dayjs";
import { ApiClient } from "./client";

export class DashboardClient extends ApiClient {
  constructor() {
    super("dashboard");
  }

  async listingsByTime(
    from: dayjs.Dayjs,
    to: dayjs.Dayjs
  ): Promise<{ data: any[] }> {
    const res = (await this.client.get("/listings", {
      params: { from: from.toISOString(), to: to.toISOString() },
    })) as any;
    return {
      data: res.data.map((entity: any) => ({
        count: entity.count,
        date: dayjs(entity.date).format("DD/MM/YYYY"),
      })),
    };
  }
}
