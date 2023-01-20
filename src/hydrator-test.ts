import Hydrator from "./hydrator";

const dto = {
  cnpjOrigemDados: "cnpjOrigemDados",
  id: "id",
  dataCadastro: "dataCadastro",
  dataAtualizacao: "dataAtualizacao",
  cepCliente: "cepCliente",
  cpfCliente: "",
  cpfVendedor: "",
  serie: "serie",
  dataEmissao: "dataEmissao",
  tipo: "tipo",
  idCliente: "idCliente",
  idNotaFiscalOrigem: "idNotaFiscalOrigem",
  notaFiscalOrigem: "notaFiscalOrigem",
  idItem: "produto.id",
  descricaoItem: "produto.descricao",
  brandingItem: "brandingItem",
  skuItem: "skuItem",
  unidadeMedidaItem: "produto.um",
  valorPadraoUnidadeMedida: "valorPadraoUnidadeMedida",
  quantidadeItem: "quantidadeItem",
  cfopItem: "cfopItem",
  idVendedores: "idVendedores",
  test: "produto.produto_item.item",
};

const row = {
  cnpjorigemdados: 61156501009960,
  id: 61156501009960,
  datacadastro: "23-11-2022 10:15:27",
  dataatualizacao: "20-01-2023 06:06:56",
  cepcliente: "18960-000",
  serie: 13,
  dataemissao: "23-11-2022 10:15:27",
  tipo: "1 ",
  idcliente: "0004029706",
  produto: {
    cnpjOrigemDados: 61156501009960,
    id: "000000000000118150",
    dataCadastro: "23-11-2022 10:15:27",
    dataAtualizacao: "20-01-2023 06:06:56",
    sku: "000000000000118150",
    descricao: "EXCLN 33 00 00 UR",
    branding: "PERFORMA",
    um: "TO",
    grupo: "GNURE",
    produto_item: {
      item: "itemTest",
      item2: "itemTest2",
    },
    produto_item_grupo: {
      item3: "itemTest3",
      item4: "itemTest4",
    },
  },
  descricaoitem: "EXCLN 33 00 00 UR",
  brandingitem: "PERFORMA",
  skuitem: "000000000000118150",
  unidademedidaitem: "TO",
  valorpadraounidademedida: "TO",
  quantidadeitem: "6500.000000 ",
  cfopitem: 5101,
  idvendedores: 713,
};

/*
const row = {
  cnpjOrigemDados: 61156501009960,
  id: "0933916463",
  dataCadastro: "23-11-2022 10:15:27",
  dataAtualizacao: "20-01-2023 06:21:24",
  cliente: {
    cnpjOrigemDados: 61156501009960,
    dataCadastro: "23-11-2022 10:15:27",
    dataAtualizacao: "20-01-2023 06:21:24",
    id: "0004029706",
    razaoSocial: "OCTAVIANO RAYMUNDO CAMARGO SILVA",
    nomeFantasia: "OCTAVIANO RAYMUNDO CAMARGO SILVA",
    documento: "07960427000180",
    pais: "BR",
    vendedor: {
      cnpjOrigemDados: 61156501009960,
      id: 713,
      dataCadastro: "23-11-2022 10:15:27",
      dataAtualizacao: "20-01-2023 06:21:24",
      razaoSocial: "Pedro Paiva",
      nomeFantasia: "Pedro Paiva",
      regiaoAtendimeto: "SP",
    },
    regiao: "SP",
  },
  numeroNotaFiscalFaturamento: "000208327",
  serieNotaFiscalFaturamento: 13,
  cfopFaturamento: 5101,
  dataEmissaoFaturamento: "23-11-2022",
  dataSaidaFaturamento: "23-11-2022",
  statusNotaFiscalFaturamento: 102,
  municipioEntregaFaturamento: "BERNARDINO DE CAMPOS",
  ufEntregaFaturamento: "SP",
  tipoFaturamento: "S",
  faturamentos_itens: {
    item: [
      {
        cnpjOrigemDados: 61156501009960,
        id: 61156501009960,
        dataCadastro: "23-11-2022 10:15:27",
        dataAtualizacao: "20-01-2023 06:21:24",
        cepCliente: "18960-000",
        serie: 13,
        dataEmissao: "23-11-2022 10:15:27",
        tipo: "1 ",
        idCliente: "0004029706",
        produto: {
          cnpjOrigemDados: 61156501009960,
          id: "000000000000118150",
          dataCadastro: "23-11-2022 10:15:27",
          dataAtualizacao: "20-01-2023 06:21:24",
          sku: "000000000000118150",
          descricao: "EXCLN 33 00 00 UR",
          branding: "PERFORMA",
          um: "TO",
          grupo: "GNURE",
          produto_item: {
            cnpjOrigemDados: 61156501009960,
            dataCriacao: "23-11-2022 10:15:27",
            dataAtualizacao: "20-01-2023 06:21:24",
            id: "000000000000118150",
            descricao: "EXCLN 33 00 00 UR",
          },
          produto_item_grupo: {
            cnpjOrigemDados: 61156501009960,
            dataCriacao: "23-11-2022 10:15:27",
            dataAtualizacao: "20-01-2023 06:21:24",
            id: "000000000000118150",
            descricao: "FERTILIZANTES",
          },
        },
        descricaoItem: "EXCLN 33 00 00 UR",
        brandingItem: "PERFORMA",
        skuItem: "000000000000118150",
        unidadeMedidaItem: "TO",
        valorPadraoUnidadeMedida: "TO",
        quantidadeItem: "6500.000000 ",
        cfopItem: 5101,
        idVendedores: 713,
      },
    ],
  },
};
*/


console.log(Hydrator(dto, row));