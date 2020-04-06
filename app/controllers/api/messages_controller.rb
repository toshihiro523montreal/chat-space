class Api::MessagesController < ApplicationController
  def index
    return false if params[:id] == nil
    group = Group.find(params[:group_id])
    last_message_id = params[:id].to_i
    @messages = group.messages.includes(:user).where("id > ?", last_message_id)
  end
end