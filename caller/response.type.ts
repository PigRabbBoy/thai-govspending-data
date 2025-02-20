import type {
  RequestBBAgcType,
  RequestBBGFProvinceType,
  RequestBBGFSummaryType,
  RequestBBGroupByAspectType,
  RequestBBMinistryType,
  RequestBBTransactionType,
  RequestCGDContractType,
  RequestEGPDepartmentType,
  RequestEGPSubdepartmentType,
  RequestEGPWinnerType,
  RequestGFPerMonthType,
  RequestGFStgType,
  RequestGFTransactionType,
} from "./request.type";

type ResponseDefaultType<Req> = {
  code: 200 | 400 | 401 | 403 | 404 | 405 | 500;
  status: boolean;
  msg: string;
  time: string;
  param_obj: Req;
};

type ResponseDefaultListType<Req, Res> = ResponseDefaultType<Req> & {
  result: Res[];
};

type ResponseDefaultSummaryType<Req, Res> = ResponseDefaultType<Req> & {
  summary: Res;
};

export type CGDContractResult = {
  project_id: string;
  project_name: string;
  project_type_name: string;
  dept_name: string;
  dept_sub_name: string;
  purchase_method_name: string;
  purchase_method_group_name: string;
  announce_date: string;
  project_money: string;
  price_build: string;
  sum_price_agree: string;
  budget_year: string;
  transaction_date: string;
  province: string;
  district: string;
  subdistrict: string;
  project_status: string;
  project_location: ProjectLocation;
  geom: string;
  contract: Contract[];
};

type ProjectLocation = {
  lat: number;
  lon: number;
};

type Contract = {
  winner_tin: string;
  winner: string;
  contract_no: string;
  contract_date: string;
  contract_finish_date: string;
  price_agree: string;
  status: string;
};

export type ResponseCGDContractType = ResponseDefaultListType<
  RequestCGDContractType,
  CGDContractResult
>;

export type ResponseSummaryCGDContractType = ResponseDefaultSummaryType<
  RequestCGDContractType,
  {
    total_project: string;
    total_price: string;
  }
>;

export type ResponseEGPDepartmentType = ResponseDefaultListType<
  RequestEGPDepartmentType,
  {
    dept_code: string;
    dept_name: string;
  }
> &
  ResponseDefaultSummaryType<
    RequestEGPDepartmentType,
    {
      total: number;
    }
  >;

export type ResponseEGPSubdepartmentType = ResponseDefaultListType<
  RequestEGPSubdepartmentType,
  {
    sub_dept_code: string;
    sub_dept_name: string;
    sub_dept_address: string;
    dept_name: string;
    prov_name: string;
    moi: string;
  }
> &
  ResponseDefaultSummaryType<
    RequestEGPSubdepartmentType,
    {
      total: number;
    }
  >;

export type ResponseEGPWinnerType = ResponseDefaultListType<
  RequestEGPWinnerType,
  {
    winner_tin: string;
    winner: string;
  }
> &
  ResponseDefaultSummaryType<
    RequestEGPWinnerType,
    {
      total: number;
    }
  >;

export type ResponseBBMinistryType = ResponseDefaultListType<
  RequestBBMinistryType,
  {
    year: string;
    min_code: string;
    min_name: string;
  }
> &
  ResponseDefaultSummaryType<
    RequestBBMinistryType,
    {
      total: number;
    }
  >;

export type ResponseBBAgcType = ResponseDefaultListType<
  RequestBBAgcType,
  {
    year: string;
    agc_code: string;
    agc_name: string;
  }
> &
  ResponseDefaultSummaryType<
    RequestBBAgcType,
    {
      total: number;
    }
  >;

export type ResponseBBGFSummaryType = ResponseDefaultListType<
  RequestBBGFSummaryType,
  {
    dept_name: string;
    total_bb: number;
    total_gf: number;
    percent: number;
  }
>;

export type ResponseBBGroupByAspectType = ResponseDefaultListType<
  RequestBBGroupByAspectType,
  {
    name: string;
    name_en: string;
    amount: number;
  }
> &
  ResponseDefaultSummaryType<
    RequestBBGroupByAspectType,
    {
      total_aspect_group: number;
      total_amount: number;
    }
  >;

export type ResponseBBTransactionType = ResponseDefaultListType<
  RequestBBTransactionType,
  {
    transaction_type_name: string;
    amount: number;
  }
> &
  ResponseDefaultSummaryType<
    RequestBBTransactionType,
    {
      total_amount: number;
      dept_name: string;
    }
  >;

export type ResponseBBStgType = ResponseDefaultListType<
  RequestBBAgcType,
  {
    stg_name: string;
    amount: number;
    percent: number;
  }
> &
  ResponseDefaultSummaryType<
    RequestBBAgcType,
    {
      dept_name: string;
      total_stg: number;
      total_amount: number;
      total_percent: number;
    }
  >;

export type ResponseBBGFProvinceType = ResponseDefaultListType<
  RequestBBGFProvinceType,
  {
    prov_name: string;
    prov_code: string;
    prov_id: string;
    prov_gf_code: string;
  }
> &
  ResponseDefaultSummaryType<
    RequestBBGFProvinceType,
    {
      total: number;
    }
  >;

export type ResponseGFTransactionType = ResponseDefaultListType<
  RequestGFTransactionType,
  {
    transaction_type_name: string;
    amount: number;
  }
> &
  ResponseDefaultSummaryType<
    RequestGFTransactionType,
    {
      total_amount: number;
      dept_name: string;
    }
  >;

export type ResponseGFPerMonthType = ResponseDefaultListType<
  RequestGFPerMonthType,
  {
    month: string;
    amount: number;
    year: number;
  }
> &
  ResponseDefaultSummaryType<
    RequestGFPerMonthType,
    {
      total_amount: number;
      dept_name: string;
    }
  >;

export type ResponseGFStgType = ResponseDefaultListType<
  RequestGFStgType,
  {
    stg_name: string;
    amount: number;
    percent: number;
  }
> &
  ResponseDefaultSummaryType<
    RequestGFStgType,
    {
      total_stg: number;
      total_amount: number;
      total_percent: number;
      dept_name: string;
    }
  >;
