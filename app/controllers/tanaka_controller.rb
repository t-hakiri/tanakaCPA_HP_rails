class TanakaController < ApplicationController
  def toppage
  end

  def contact
    @name = params[:name]
    @email = params[:email]
    @subject = params[:subject]
    @body = params[:body]

    ContactMailer.send_mail(@name, @email, @subject, @body).deliver
    flash[:success] = 'メールを送信しました'
  end
end
