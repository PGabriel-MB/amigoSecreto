export interface Grupo {
    nome: string;
    dataCriacao: string;
    dataEntrega: string;
    criadoPor: string;
    usuarios: Array<any>;
    aguardandoConfirm: Array<any>;
    foiSorteado: boolean;
    sorteados: Array<any>;
    _id: string;
}