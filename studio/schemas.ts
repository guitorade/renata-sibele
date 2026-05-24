export const categoria = {
  name: 'categoria',
  title: 'Categoria',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'nome', maxLength: 96 },
    },
  ],
};

export const imovel = {
  name: 'imovel',
  title: 'Imóvel',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'codigoRef',
      title: 'Código de Referência',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'preco',
      title: 'Preço',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tipoNegocio',
      title: 'Tipo de Negócio',
      type: 'string',
      options: {
        list: [
          { title: 'Venda', value: 'venda' },
          { title: 'Locação', value: 'locacao' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'categoria',
      title: 'Categoria',
      type: 'reference',
      to: [{ type: 'categoria' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'imagemCapa',
      title: 'Imagem de Capa',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'galeria',
      title: 'Galeria de Imagens',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'quartos',
      title: 'Quartos',
      type: 'number',
    },
    {
      name: 'suites',
      title: 'Suítes',
      type: 'number',
    },
    {
      name: 'banheiros',
      title: 'Banheiros',
      type: 'number',
    },
    {
      name: 'vagas',
      title: 'Vagas de Garagem',
      type: 'number',
    },
    {
      name: 'area',
      title: 'Área (m²)',
      type: 'number',
    },
    {
      name: 'cidade',
      title: 'Cidade',
      type: 'reference',
      to: [{ type: 'cidade' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bairro',
      title: 'Bairro',
      type: 'reference',
      to: [{ type: 'bairro' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Disponível', value: 'disponivel' },
          { title: 'Vendido', value: 'vendido' },
          { title: 'Alugado', value: 'alugado' },
        ],
      },
      initialValue: 'disponivel',
    },
    {
      name: 'isDestaque',
      title: 'Destaque?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'views',
      title: 'Visualizações',
      type: 'number',
      initialValue: 0,
      readOnly: true,
    },
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'preco',
      media: 'imagemCapa',
    },
    prepare(selection: any) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle ? `R$ ${subtitle.toLocaleString('pt-BR')}` : 'Preço não informado',
        media: media,
      };
    },
  },
};

export const cidade = {
  name: 'cidade',
  title: 'Cidade',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
};

export const bairro = {
  name: 'bairro',
  title: 'Bairro',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'Nome',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'cidade',
      title: 'Cidade',
      type: 'reference',
      to: [{ type: 'cidade' }],
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
