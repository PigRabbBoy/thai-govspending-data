import qs from "qs";
import type {
  RequestBBAgcType,
  RequestBBGFProvinceType,
  RequestBBGFSummaryType,
  RequestBBGroupByAspectType,
  RequestBBMinistryType,
  RequestBBStgType,
  RequestBBTransactionType,
  RequestCGDContractType,
  RequestEGPDepartmentType,
  RequestEGPWinnerType,
  RequestGFPerMonthType,
  RequestGFStgType,
  RequestGFTransactionType,
  RequestSummaryCGDContractType,
} from "./request.type";
import type {
  ResponseBBAgcType,
  ResponseBBGFProvinceType,
  ResponseBBGFSummaryType,
  ResponseBBGroupByAspectType,
  ResponseBBMinistryType,
  ResponseBBStgType,
  ResponseBBTransactionType,
  ResponseCGDContractType,
  ResponseEGPDepartmentType,
  ResponseEGPWinnerType,
  ResponseGFPerMonthType,
  ResponseGFStgType,
  ResponseGFTransactionType,
  ResponseSummaryCGDContractType,
} from "./response.type";
export class Caller {
  private url = "https://opend.data.go.th/govspending";
  private apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async get<T>(subPath: string, params: any) {
    const url = `${this.url}${subPath}`;
    const data = { ...params, "api-key": this.apiKey };
    const queryString = qs.stringify(data);
    const response = await fetch(`${url}?${queryString}`);
    const json = await response.json();
    return json as T;
  }

  async callCGDContract(params: RequestCGDContractType) {
    return this.get<ResponseCGDContractType>("/cgdcontract", params);
  }

  async callSummaryCGDContract(params: RequestSummaryCGDContractType) {
    return this.get<ResponseSummaryCGDContractType>(
      "/summary_cgdcontract",
      params
    );
  }

  async callEGPDepartment(params: RequestEGPDepartmentType) {
    return this.get<ResponseEGPDepartmentType>("/egpdepartment", params);
  }

  async callEGPSubdepartment(params: RequestEGPDepartmentType) {
    return this.get<ResponseEGPDepartmentType>("/egpsubdepartment", params);
  }

  async callEGPWinner(params: RequestEGPWinnerType) {
    return this.get<ResponseEGPWinnerType>("/egpwinner", params);
  }

  async callBBMinistry(params: RequestBBMinistryType) {
    return this.get<ResponseBBMinistryType>("/bbministry", params);
  }

  async callBBAgc(params: RequestBBAgcType) {
    return this.get<ResponseBBAgcType>("/bbagc", params);
  }

  async callBBGFSummary(params: RequestBBGFSummaryType) {
    return this.get<ResponseBBGFSummaryType>("/bbgf_summary", params);
  }

  async callBBGroupByAspect(params: RequestBBGroupByAspectType) {
    return this.get<ResponseBBGroupByAspectType>("/bb_group_by_aspect", params);
  }

  async callBBTransactionType(params: RequestBBTransactionType) {
    return this.get<ResponseBBTransactionType>("/bb_transaction_type", params);
  }

  async callBBStg(params: RequestBBStgType) {
    return this.get<ResponseBBStgType>("/bb_stg", params);
  }

  async callBBGFProvince(params: RequestBBGFProvinceType) {
    return this.get<ResponseBBGFProvinceType>("/bbgfmisprovince", params);
  }

  async callGFTransactionType(params: RequestGFTransactionType) {
    return this.get<ResponseGFTransactionType>("/gf_transaction_type", params);
  }

  async callGFPerMonth(params: RequestGFPerMonthType) {
    return this.get<ResponseGFPerMonthType>("/gf_per_month", params);
  }

  async callGFStg(params: RequestGFStgType) {
    return this.get<ResponseGFStgType>("/gf_stg", params);
  }
}
