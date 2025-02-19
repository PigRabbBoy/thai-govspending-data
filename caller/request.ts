type RequestDefaultType = {
  'api-key': string;
}

type RequestListDefaultType = {
    offset: number;
    limit: number;
}

export type RequestCGDContractType = {
    year: number;
    keyword?: string;
    debt_code?: string;
    winner_tid?: string;
    budget_start?: number;
    budget_end?: number;
} & RequestListDefaultType & RequestDefau