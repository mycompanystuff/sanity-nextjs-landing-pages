export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe266f954191c197b7c5c91',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y5r7b8rd',
                  apiId: '040a3dcc-33e6-4c4e-933c-ae527cc0cdb7'
                },
                {
                  buildHookId: '5fe266f954191c1d397c5c4e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-u98emh16',
                  apiId: 'e5ae3e05-7db1-460e-84a0-9ddf254b2f5b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mycompanystuff/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-u98emh16.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
