import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      name: 'pageMetadata',
      title: 'Metadados da Página',
      type: 'document',
      fields: [
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          validation: Rule => Rule.required().error('O slug é obrigatório')
        },
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: Rule => [
            Rule.required().error('O título é obrigatório'),
            Rule.max(60).warning('O título ideal deve conter no máximo 60 caracteres')
          ]
        },
        {
          name: 'name',
          title: 'Nome',
          type: 'string',
          validation: Rule => Rule.required().error('O nome é obrigatório')
        },
        {
          name: 'description',
          title: 'Descrição',
          type: 'string',
          validation: Rule => [
            Rule.required().error('A descrição é obrigatória'),
            Rule.min(50).warning('A descrição ideal deve conter no mínimo 50 caracteres'),
            Rule.max(160).warning('A descrição ideal deve conter no máximo 160 caracteres')
          ]
        },
        {
          name: 'url',
          title: 'URL',
          type: 'string',
          validation: Rule => Rule.required().error('A URL é obrigatória')
        },
        {
          name: 'image',
          title: 'Imagem',
          type: 'image',
          validation: Rule => Rule.required().error('A imagem é obrigatória')
        },
        {
          name: 'locale',
          title: 'Localidade',
          type: 'string',
          validation: Rule => Rule.required().error('A localidade é obrigatória')
        },
        {
          name: 'phone',
          title: 'Telefone',
          type: 'string',
          validation: Rule => Rule.required().error('O telefone é obrigatório')
        }
      ]
    }
  ])
})
