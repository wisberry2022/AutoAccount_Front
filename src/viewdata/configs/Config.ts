import {ConfigType, valueMapper} from "../../types/DataTypes";

export const inputMapper:valueMapper = {
	withdrawal: {
		Debit: {
			type: "text",
			name: "withdrawal",
			id: "withdrawal",
			placeholder: "출금계좌",
		}
	},
	name: {
		Account: {
			type: "text",
			name: "name",
			id: "name",
			placeholder: "계좌이름"
		},
		Debit: {
			type: "text",
			name: "name",
			id: "name",
			placeholder: "계좌이름"
		}
	},
	serial: {
		Account: {
			type: "text",
			name: "serial",
			id: "serial",
			placeholder: "계좌번호"
		},
		Debit: {
			type: "text",
			name: "deposit",
			id: "deposit",
			placeholder: "계좌번호"
		}
	},
	amount: {
		Account: {
			type: "text",
			name: "balance",
			id: "balance",
			placeholder: "잔액"
		},
		Debit: {
			type: "text",
			name: "amount",
			id: "amount",
			placeholder: "이체금액"
		}
	},
	owner: {
		Account: {
			type: "text",
			name: "owner",
			id: "owner",
			placeholder:"계좌주",
		}
	},
	date: {
		Debit: {
			type: "date",
			name: "date",
			id:"date",
		}
	}
}

export const modifyInputMapper:valueMapper = {
	Account: {
		name: {
			type: "text",
			name: "name",
			id: "name",
			placeholder: "계좌이름"
		}
	},
	Debit: {
		name: {
			type: "text",
			name: "name",
			id: "name",
			placeholder: "계좌이름"
		},
		amount: {
			type: "text",
			name: "amount",
			id: "amount",
			placeholder: "이체금액"
		}
	}
}

export const btnMaps:ConfigType<ConfigType<string>> = {
	register: {
		left: "등록",
		right: "취소",
	},
	modify: {
		left: "수정",
		right: "취소"
	},
	remove: {
		left: "확인",
		right: "취소"
	}
}