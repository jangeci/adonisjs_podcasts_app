'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EpisodeSchema extends Schema {
  up () {
    this.create('episodes', (table) => {
      table.increments()
      table.integer('podcast_id').unsigned().notNullable().references('id').inTable('podcasts').onDelete('cascade')
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.string('title').notNullable().unique()
      table.string('slug')
      table.text('audio')
      table.text('summary')
      table.timestamps()
    })
  }

  down () {
    this.drop('episodes')
  }
}

module.exports = EpisodeSchema
