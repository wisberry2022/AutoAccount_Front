export interface Register {
  name: string;
}

export interface AccountRegister extends Register {
    owner: string;
    serial: string;
    balance: number;
}

export interface DebitRegister extends Register {
    withdrawal:string,
    deposit:string,
    amount:number,
    date: Date;
}