export interface UserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    created_at: string
}

// tipagem para criação (POST) sem created_at
export interface UserDBPost {
    id: string,
    name: string,
    email: string,
    password: string
}

export interface AccountDB {
    id: string,
    balance: number,
    owner_id: string,
    created_at: string
}

// tipagem para criação (POST) sem balance e created_at
export interface AccountDBPost {
    id: string,
    owner_id: string
}

// Entra nenhum parametro e sai number

abstract class Produto {
    constructor(
        public id: string,
        protected preco: number
    ) {}

    public getPreco(): number {
        return this.preco
    }
}

class ProdutoFisico extends Produto {
    constructor(id: string, preco: number) {
        super(id, preco)
    }

    public getPreco(): number {
        return this.preco * 1.05 // custo de estoque
    }
}

class ProdutoVirtual extends Produto {
    constructor(id: string, preco: number) {
        super(id, preco)
    }

    public getPreco(): number {
        return this.preco * 0.95 // desconto pela facilidade do online
    }

}

const cafe = new ProdutoFisico('cafe', 10)
cafe.getPreco()