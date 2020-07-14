const Mock = require('mockjs')

const data = Mock.mock({
  'items|50': [{
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
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
