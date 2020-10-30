import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      name: 'pageData',
      title: 'Dados da Página',
      type: 'document',
      fields: [
        {
          name: 'document',
          title: 'Documento',
          type: 'string'
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug'
        },
        /**
         * Metadata
         */
        {
          name: 'metadata',
          title: 'Metadados',
          type: 'document',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string'
            },
            {
              name: 'organization',
              title: 'Organização',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Descrição',
              type: 'text',
              rows: 2
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Imagem',
              type: 'image'
            },
            {
              name: 'locale',
              title: 'Localidade',
              type: 'string'
            },
            {
              name: 'email',
              title: 'Email',
              type: 'string'
            },
            {
              name: 'phone',
              title: 'Telefone',
              type: 'string'
            }
          ]
        },
        /**
         * Header content
         */
        {
          name: 'header',
          title: 'Cabeçalho',
          type: 'document',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string'
            },
            {
              name: 'slogan',
              title: 'Slogan',
              type: 'string'
            },
            {
              name: 'credits',
              title: 'Créditos',
              type: 'string'
            }
          ]
        },
        /**
         * Presentation content
         */
        {
          name: 'presentation',
          title: 'Apresentação',
          type: 'document',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string'
            },
            {
              name: 'subtitle',
              title: 'Subtítulo',
              type: 'string'
            },
            {
              name: 'text',
              title: 'Texto',
              type: 'array',
              of: [
                { type: 'block' }
              ]
            }
          ]
        },
        /**
         * Article content
         */
        {
          name: 'article',
          title: 'Artigo',
          type: 'document',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string'
            },
            {
              name: 'subtitle',
              title: 'Subtítulo',
              type: 'string'
            },
            {
              name: 'text',
              title: 'Texto',
              type: 'array',
              of: [
                { type: 'block' }
              ]
            }
          ]
        },
        /**
         * Place content
         */
        {
          name: 'place',
          title: 'Local',
          type: 'document',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string'
            },
            {
              name: 'subtitle',
              title: 'Subtítulo',
              type: 'string'
            },
            {
              name: 'photos',
              title: 'Fotos',
              type: 'array',
              of: [
                { type: 'image' }
              ]
            }
          ]
        },
        /**
         * Statistics content
         */
        {
          name: 'statistics',
          title: 'Estatísticas',
          type: 'document',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string'
            },
            {
              name: 'subtitle',
              title: 'Subtítulo',
              type: 'string'
            },
            {
              name: 'chart',
              title: 'Gráfico',
              type: 'image'
            }
          ]
        },
        /**
         * Testimonials content
         */
        {
          name: 'testimonials',
          title: 'Depoimentos',
          type: 'document',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string'
            },
            {
              name: 'subtitle',
              title: 'Subtítulo',
              type: 'string'
            },
            {
              name: 'statements',
              title: 'Declarações',
              type: 'array',
              of: [
                {
                  name: 'statement',
                  title: 'Declaração',
                  type: 'object',
                  fields: [
                    { name: 'text', title: 'Texto', type: 'text' },
                    { name: 'author', title: 'Autor', type: 'string' }
                  ]
                }
              ]
            },
          ]
        }
      ]
    }
  ])
})
