import type { RequestCGDContractType } from "./request";

type ResponseDefaultType<Req, Res> = {
  code: 200 | 400 | 401 | 403 | 404 | 405 | 500;
  status: boolean;
  msg: string;
  time: string;
  param_obj: Req;
  result: Res[];
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

export interface ProjectLocation {
  lat: number;
  lon: number;
}

export interface Contract {
  winner_tin: string;
  winner: string;
  contract_no: string;
  contract_date: string;
  contract_finish_date: string;
  price_agree: string;
  status: string;
}

export type ResponseCGDContractType = ResponseDefaultType<
  RequestCGDContractType,
  CGDContractResult
>;
