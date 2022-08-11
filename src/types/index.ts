export interface ITextWithlabel {
  label?: string,
  text?: string | number,
  isBadge?: boolean,
  badgeColor?: string,
}

export interface ITransaction{
  status?: string | undefined,
  txHash?: string | undefined,
  to?: string | undefined,
  from?: string | undefined,
  amount?: number | undefined,
}

