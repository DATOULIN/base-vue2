const Mock = require('mockjs')

const data = Mock.mock({
  'items|10': [{
    id: '@id',
    "department|1": ['安保部', '指挥部', '开发部'],
    "status|1": ['good', 'bad'],
    light: '@boolean',
    source: '@cname',
    yearTask: '@date',
    cycle:"@date",
    yearTarget: '@ctitle(3-10)',
    'processStatus|1':["good","bad"] ,
    processDetail: '@ctitle(3-10)',
    accessory: '',
    returnReasons: "@ctitle(3-10)",
    contact: "@cname",
    phone: "@phone",
    resubmit:"@date"
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
