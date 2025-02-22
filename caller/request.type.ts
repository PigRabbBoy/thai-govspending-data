type RequestDefaultType = {
  "api-key": string;
};

type RequestListDefaultType = {
  offset?: number;
  limit?: number;
};

export type RequestCGDContractType = {
  year: number;
  keyword?: string;
  debt_code?: string;
  winner_tid?: string;
  budget_start?: number;
  budget_end?: number;
} & RequestListDefaultType &
  RequestDefaultType;

export type RequestSummaryCGDContractType = {
  year: number;
  keyword?: string;
  debt_code?: string;
  winner_tid?: string;
  budget_start?: number;
  budget_end?: number;
} & RequestDefaultType;

export type RequestEGPDepartmentType = {
  dept_name?: string;
} & RequestListDefaultType &
  RequestDefaultType;

export type RequestEGPSubdepartmentType = {
  sub_dept_name?: string;
} & RequestListDefaultType &
  RequestDefaultType;

export type RequestEGPWinnerType = {
  winner?: string;
} & RequestListDefaultType &
  RequestDefaultType;

export type RequestBBMinistryType = {
  year?: number;
  min_name?: string;
  min_code?: string;
} & RequestDefaultType;

export type RequestBBAgcType = {
  year?: number;
  agc_name?: string;
  agc_code?: string;
} & RequestDefaultType &
  RequestListDefaultType;

export type RequestBBGFSummaryType = {
  year: number;
  dept_id: string;
} & RequestDefaultType;

export type RequestBBGroupByAspectType = {
  year: number;
} & RequestDefaultType;

export type RequestBBTransactionType = {
  year: number;
  dept_id?: string;
} & RequestDefaultType;

export type RequestBBStgType = {
  year: number;
  dept_id?: string;
} & RequestDefaultType;

export type RequestBBGFProvinceType = {
  prov_name?: string;
  prov_code?: string;
  prov_id?: string;
  prov_gf_code?: string;
} & RequestDefaultType;

export type RequestGFTransactionType = {
  year: number;
  dept_id?: string;
} & RequestDefaultType;

export type RequestGFPerMonthType = {
  year: number;
  dept_id?: string;
} & RequestDefaultType;

export type RequestGFStgType = {
  year: number;
  dept_id?: string;
} & RequestDefaultType;
