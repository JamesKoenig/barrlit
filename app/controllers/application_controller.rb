class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    # if there is no session token we're not logged in anyway
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token!

    session[:session_token] = nil
  end
end
