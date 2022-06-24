export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62b5b346cf2e630280373bfc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xrdvp3gc',
                  apiId: '1b7e7d8e-fed2-4898-98ff-f0bf76d8e5b8'
                },
                {
                  buildHookId: '62b5b3469eaf60006b591a0c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xgzaxare',
                  apiId: 'f6664f86-447f-4572-a87c-550de13ea967'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ruizhen88/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xgzaxare.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
