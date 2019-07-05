class ApplicationController < ActionController::Base

  # 以下、deviseのストロングパラメーター
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname, :family_name, :first_name, :family_name_kana, :first_name_kana])
      devise_parameter_sanitizer.permit(:account_update, keys: [:nickname, :family_name, :first_name, :family_name_kana, :first_name_kana])
    end
end
