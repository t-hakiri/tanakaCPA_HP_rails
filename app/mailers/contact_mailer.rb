class ContactMailer < ApplicationMailer
  def send_mail(name, email, subject, body)
    @name = name
    @email = email
    @subject = subject
    @body = body

    mail(
      from: @email,
      to:   'test@aa.jp',
      subject: @subject
    )
  end
end


# to:   'info@tanaka-accounting.jp',