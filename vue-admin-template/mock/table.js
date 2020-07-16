const Mock = require('mockjs')

const noPageData = Mock.mock({
  'items|5': [{
    id: '@id',
    title: '@sentence(1, 5)',
    'status|1': ['published', 'draft', 'deleted'],
    author: '@sentence(1, 3)',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})


const pageData = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(1, 5)',
    'status|1': ['published', 'draft', 'deleted'],
    author: '@sentence(1, 3)',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/table/getListNoPage',
    type: 'get',
    response: config => {
      const items = noPageData.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/vue-admin-template/table/getListPage',
    type: 'get',
    response: config => {
      const items = pageData.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
]
