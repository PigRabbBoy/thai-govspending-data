import qs from 'qs';
import type { RequestCGDContractType } from './request';
import type { ResponseCGDContractType } from './response.type';
export class Caller {
  url = "https://opend.data.go.th/govspending";
  apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async get<T>(subPath: string, params: any) {
    const url = `${this.url}${subPath}`;
    const data = { ...params, "api-key": this.apiKey };
    const queryString = qs.stringify(data);
    const response = await fetch(`${url}?${queryString}`);
    const json = await response.json();
    return json as T;
  }

  callCGDContract(params: RequestCGDContractType) {
    return this.get<ResponseCGDContractType>("/cgdcontract", params);
  }
}
