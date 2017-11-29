class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.string :date
      t.belongs_to :list, foreign_key: true

      t.timestamps
    end
  end
end
