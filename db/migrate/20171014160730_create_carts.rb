class CreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts do |t|
      t.string :name
      t.string :category
      t.float :price
      t.integer :quantity
      t.text :description

      t.timestamps
    end
  end
end
