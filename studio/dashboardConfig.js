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
                  buildHookId: '5eafebd5e0d61495e73edd29',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-82i4d7du',
                  apiId: 'cdfc5490-e78c-417e-a85a-511f9d865a43'
                },
                {
                  buildHookId: '5eafebd50ecc6bccc3d0b699',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-w9o7xnj1',
                  apiId: 'ee450760-8aee-4b9f-98ba-e92157745129'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AdrienMaillet/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-w9o7xnj1.netlify.app', category: 'apps'}
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
