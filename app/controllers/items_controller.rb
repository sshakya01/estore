class ItemsController < ApplicationController
  before_action :find_item, only: [:show, :edit, :update, :destroy]
  def index
    @items = Item.all
    render :json => @items
  end

  def show

  end

  def new
    @item = Item.new
  end

  def create

    @item.to_json
     puts "this is puts: #{Item}"
    @item = Item.new(item_params)
 puts "this is prarmas: #{item_params}"
    if @item.save
      puts 'hello'
      redirect_to root_path

    else
    puts 'nope--------------'

      render 'new'
    end
  end

  def edit
  end

  def update
    if @item.update(item_params)
      redirect_to item_path(@item)
    else
      render 'edit'
    end
  end

  def destroy
    @item.destroy
    redirect_to root_path
  end

  private
  def item_params
    params.require(:item).permit(:name, :category, :price, :quantity, :description)
  end

  def find_item
    @item = Item.find(params[:id])
  end
end
