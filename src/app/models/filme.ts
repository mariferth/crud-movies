export class Filme {
    private _titulo : string;
    private _ano_lancamento : number;
    private _genero : string;
    private _sinopse : string;
    private _classificacao : string;
    private _critica : string;
    private _avaliacao : string;

    constructor(titulo : string, ano_lancamento : number, genero : string, sinopse : string, classificacao : string, critica : string, avaliacao : string) {
        this._titulo = titulo;
        this._ano_lancamento = ano_lancamento;
        this._genero = genero;
        this._sinopse = sinopse;
        this._classificacao = classificacao;
        this._critica = critica;
        this._avaliacao = avaliacao;
    }

    public getTitulo() : string {
        return this._titulo;
    }

    public getAnoLancamento() : number {
        return this._ano_lancamento;
    }

    public getGenero() : string {
        return this._genero;
    }

    public getSinopse() : string {
        return this._sinopse;
    }

    public getClassificacao() : string {
        return this._classificacao;
    }

    public getCritica() : string {
        return this._critica;
    }

    public getAvaliacao() : string {
        return this._avaliacao;
    }

    public setTitulo(titulo : string) {
        this._titulo = titulo;
    }

    public setAnoLancamento(ano_lancamento : number) {
        this._ano_lancamento = ano_lancamento;
    }

    public setGenero(genero : string) {
        this._genero = genero;
    }

    public setSinopse(sinopse : string) {
        this._sinopse = sinopse;
    }

    public setClassificacao(classificacao : string) {
        this._classificacao = classificacao;
    }

    public setCritica(critica : string) {
        this._critica = critica;
    }

    public setAvaliacao(avaliacao : string) {
        this._avaliacao = avaliacao;
    }
}
