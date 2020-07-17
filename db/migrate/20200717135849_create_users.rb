class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :cpf_cnpj
      t.string :email
      t.string :phone_prefix
      t.string :phone
      t.integer :balance

      t.timestamps
    end
  end
end
