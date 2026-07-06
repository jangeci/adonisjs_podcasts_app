'use strict'

const { description } = require('@adonisjs/ace/lib/commander')

/*
|--------------------------------------------------------------------------
| CategoryJSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Category = use('App/Models/Category')

class CategoryJSeeder {
  async run() {
    const categories = [
      {
        name: 'Development',   
        slug: 'development',
        description: 'Everything software development'
      },
      {
        name: 'Marketing',   
        slug: 'marketing',
        description: 'Everything marketing related'
      },
      {
        name: 'DevOps',
        slug: 'devops',
        description: 'Everything DevOps related'
      }
    ]

    await Category.createMany(categories)
  }
}

module.exports = CategoryJSeeder
